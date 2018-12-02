import AbstractProvider, { ProviderSettings } from './AbstractProvider'
import { SearchParams } from '../types'
import { isNumeric } from '../utils/utils'

export default class ArrayDataProvider extends AbstractProvider {
    private data: any;
    private allData: any;
    private filterParamName: string = 'filter';

    constructor(params: ProviderSettings & { data?: any[], filterParamName?: string; }) {
        super(params);
        this.data = params.data;
        this.allData = params.data;
        if (params.filterParamName) {
            this.filterParamName = params.filterParamName;
        }
        this.fetch();
    }

    /**
     * @inheritDoc
     */
    getTotalCount() {
        return this.data.length;
    }

    /**
     * @inheritDoc
     */
    getItems() {
        return this.data.slice(this.getStartIndex(), this.getActivePage() * this.getPerPage());
    }

    /**
     * @param {array} data
     * @return {ArrayDataProvider}
     */
    setItems(data: any[]) {
        this.data = data;
        this.allData = data;
        return this;
    }

    /**
     * @param sort Object sort params
     */
    private sortItems(sort: Object) {
        this.data.sort((i1, i2) => {
            for (let sortField of Object.keys(sort)) {
                const sortDir = sort[sortField];
                if (i1[sortField] === i2[sortField]) {
                    continue;
                }

                if (sortDir === 'asc') {
                    if (i1[sortField] > i2[sortField]) {
                        return 1
                    } else {
                        return -1
                    }
                } else {
                    if (i1[sortField] < i2[sortField]) {
                        return 1
                    } else {
                        return -1
                    }
                }
            }

            return 0;
        });
    }

    /**
     * @param filter Object filter params
     */
    private filterItems(filter) {
        for (const field in filter) {
            if (!filter.hasOwnProperty(field) || filter[field] === '') {
                continue;
            }

            let value = filter[field],
                compareFunc: (item: Object) => void;

            if (isNumeric(value)) {
                compareFunc = (item) => item[field] == value;
            } else {
                compareFunc = (item) => item[field].search(new RegExp(value, 'i')) > -1;
            }

            this.data = this.data.filter(compareFunc);
        }
    }

    fetch(params?: SearchParams): void {
        this.data = [ ...this.allData ];
        if (params && params.sort && Object.keys(params.sort).length) {
            this.sortItems(params.sort);
        }
        const filter = this.getSearchParam(this.filterParamName);
        if (Object.keys(filter).length > 0) {
            this.filterItems(filter);
        }
    }
}