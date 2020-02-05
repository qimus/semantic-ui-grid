import * as React from 'react';
import AbstractProvider from "../providers/AbstractProvider";
interface HeaderCellProps {
    provider: AbstractProvider;
    item: any;
    sort: string;
}
export default class HeaderCell extends React.Component<HeaderCellProps, {}> {
    handleSort: () => void;
    getSortPositionNumber(name: any): JSX.Element;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=cell.d.ts.map