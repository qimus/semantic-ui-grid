import * as React from 'react';
import AbstractProvider from '../providers/AbstractProvider';
interface TableFooterProps {
    provider: AbstractProvider;
    colSpan: number;
    handlePaginate: (event: any, data: any) => void;
}
export default class TableFooter extends React.Component<TableFooterProps, {}> {
    handleChangePerPage: (e: any, { value }: {
        value: any;
    }) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map