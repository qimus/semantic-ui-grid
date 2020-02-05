import AbstractDataProvider from './AbstractProvider';
export default class ApiDataProvider extends AbstractDataProvider {
    private apiCallback;
    private total;
    private items;
    private _r;
    private defaultParams;
    getApiCallback(): any;
    setApiCallback(value: any): void;
    setDefaultParams(defaultParams: any): void;
    getDefaultParams(): {};
    setItems(items: any): void;
    getItems(): any[];
    getTotalCount(): number;
    getUniqKey(): number;
    setMetadata({ total }: {
        total: any;
    }): this;
    setActivePage(page: any, limit?: any): this;
    fetch(params: any): void;
}
//# sourceMappingURL=ApiDataProvider.d.ts.map