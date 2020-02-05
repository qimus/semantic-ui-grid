export interface ColumnAction {
    [prop: string]: any;
}
export interface Column {
    title?: string;
    type?: string;
    field?: string;
    sortable?: boolean;
    component: object;
    header: object;
    actions: ColumnAction[];
    value?: any;
}
export interface FilterItem {
    name: string;
    type: string;
    label: string;
}
export interface Filter {
    name: string;
    items: FilterItem[];
}
export interface RequestInterface {
    get(url: string, params: any): any;
    post(url: string, params: any): any;
}
export interface EventOrValueHandler {
    (value: any): void;
}
export interface SearchParams {
    filter?: object;
    sort?: object;
    [prop: string]: any;
}
export interface ColumnOptions {
    [prop: string]: any;
}
//# sourceMappingURL=types.d.ts.map