import * as React from 'react';
interface DeleteActionProps {
    row: any;
    action(row: any): {};
    dispatch(): {};
    header?: string;
    content: string;
    icon: string;
    options: {
        [prop: string]: any;
    };
}
export default class DeleteAction extends React.Component<DeleteActionProps, {}> {
    static defaultProps: {
        icon: string;
    };
    state: {
        open: boolean;
    };
    handleShowModal: (e: any) => void;
    handleCloseModal: () => void;
    handleConfirm: () => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map