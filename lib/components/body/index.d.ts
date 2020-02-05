import * as React from 'react';
import AbstractProvider from '../providers/AbstractProvider';
import { Column } from '../types';
interface TableBodyProps {
    provider: AbstractProvider;
    columns: Column[];
    activePage: number;
    rowOptions: any;
    emptyMessage: any;
    extra: {
        [prop: string]: any;
    };
}
export default class TableBody extends React.Component<TableBodyProps, {}> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map