export interface ColumnAction {
    [prop: string]: any;
}

export interface Column {
    title?: string;
    type?: string;
    field?: string;
    sortable?: boolean;
    actions: ColumnAction[],
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
    get(url: string, params: any);
    post(url: string, params: any);
}

export interface EventOrValueHandler {
    (value: any): void
}

export interface SearchParams {
    filter?: object,
    sort?: object,
    [prop: string]: any
}