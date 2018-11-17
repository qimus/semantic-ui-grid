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

    fetch(params?: any): void {}
}