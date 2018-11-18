import AbstractProvider, { ProviderSettings } from './AbstractProvider'

export default class ArrayDataProvider extends AbstractProvider {
    private data: any;

    constructor(params: ProviderSettings & { data?: any[] }) {
        super(params);
        this.data = params.data;
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
    setData(data: any[]) {
        this.data = data;
        return this;
    }

    fetch(params?: any): void {
        if (params && params.sort && Object.keys(params.sort).length) {
            this.data.sort((i1, i2) => {
                for (let sortField of Object.keys(params.sort)) {
                    const sortDir = params.sort[sortField];
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
    }
}