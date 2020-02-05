import * as React from 'react';
import AbstractProvider from "./providers/AbstractProvider";
import { Column } from './types';
export interface ExtTableProps {
    filter: {
        name: string;
        items: [];
    };
    provider: AbstractProvider;
    onPageChange: ((activePage: number) => void);
    columns: Column[];
    header?: string;
    sortable?: boolean;
    isFetching: boolean;
    filterNamePrefix: string;
    rowOptions: {
        [prop: string]: any;
    };
    emptyMessage: any;
    extra: {
        [prop: string]: any;
    };
}
export default class ExtTable extends React.Component<ExtTableProps, {}> {
    static defaultProps: {
        columns: any[];
        sortable: boolean;
        isFetching: boolean;
        filterNamePrefix: string;
    };
    state: {
        activePage: number;
        filter: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<ExtTableProps>, prevState: any, snapshot?: any): void;
    createFilter: () => void;
    /**
     * Pagination handler
     * @param {Event} e
     * @param {Number} activePage
     */
    handlePaginationChange: (e: any, { activePage }: {
        activePage: any;
    }) => void;
    /**
     * Data filter handler
     * @param {Object} values
     * @param {Array} fieldNames list of possible filter field names
     */
    handleFilter: (values: any, fieldNames: any) => void;
    render(): JSX.Element;
}
//# sourceMappingURL=index.d.ts.map