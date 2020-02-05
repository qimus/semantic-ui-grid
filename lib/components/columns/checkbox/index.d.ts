import * as React from 'react';
import { ColumnOptions } from '../../types';
interface CheckboxColumnProps {
    value: boolean;
    handleChange: (isChecked: boolean, item: any) => void;
    row: object;
    columnOptions: ColumnOptions;
}
export default class CheckboxColumn extends React.Component<CheckboxColumnProps, {}> {
    state: {
        value: boolean;
    };
    handleChange: (e: any) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map