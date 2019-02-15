import AbstractDataProvider from './AbstractProvider'

export default class ApiDataProvider extends AbstractDataProvider {
    private apiCallback = null;
    private total = 0;
    private items = [];
    private _r = 0;
    private defaultParams = {};

    getApiCallback() {
        return this.apiCallback;
    }

    setApiCallback(value) {
        this.apiCallback = value;
    }

    setDefaultParams(defaultParams) {
        this.defaultParams = defaultParams;
    }

    getDefaultParams() {
        return this.defaultParams;
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

    setActivePage(page, limit = null) {
        super.setActivePage(page, limit);
        let params = { page };
        if (limit) {
            params['limit'] = limit;
        }
        this.fetch(params);

        return this;
    }

    fetch(params) {
        let defaults = {
            limit: this.getPerPage(),
            page: this.getActivePage(),
            ...this.defaultParams
        };

        this.apiCallback({
            ...defaults,
            ...this.getSearchParams(),
            ...params
        });
    }
}
