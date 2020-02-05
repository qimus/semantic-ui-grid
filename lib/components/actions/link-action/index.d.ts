import * as React from 'react';
interface LinkActionProps {
    link(row: any): void;
    row: any;
    icon?: string;
    options: {
        [prop: string]: any;
    };
}
export default class LinkAction extends React.Component<LinkActionProps, {}> {
    static defaultProps: {
        icon: string;
    };
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map