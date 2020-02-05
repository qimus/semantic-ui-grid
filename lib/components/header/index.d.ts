import * as React from 'react';
import { Column } from 'components/types';
import AbstractProvider from '../providers/AbstractProvider';
interface TableHeaderProps {
    columns: Column[];
    provider: AbstractProvider;
    header: string;
    extra: {
        [prop: string]: any;
    };
}
export default class TableHeader extends React.Component<TableHeaderProps, {}> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map