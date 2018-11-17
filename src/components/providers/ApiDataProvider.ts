import AbstractDataProvider from './AbstractProvider'

export default class ApiDataProvider extends AbstractDataProvider {
    _apiCallback = null;

    total = 0;

    items = [];

    _r = 0;

    get apiCallback() {
        return this._apiCallback;
    }

    set apiCallback(value) {
        this._apiCallback = value;
    }

    setItems(items) {
        this._r = Math.random();
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    getTotalCount() {
        return this.total;
    }

    getUniqKey() {
        return this._r;
    }

    setMetadata({ total }) {
        this.total = total;
        return this;
    }

    setActivePage(page) {
        super.setActivePage(page);
        this.fetch({ page });

        return this;
    }

    fetch(params) {
        let defaults = {
            limit: this.getPerPage(),
            page: this.getActivePage()
        };

        this._apiCallback({
            ...defaults,
            ...this.getSearchParams(),
            ...params
        });
    }
}
