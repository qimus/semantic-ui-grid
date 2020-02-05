import * as React from 'react';
interface ConfirmDialogProps {
    open: boolean;
    closeCallback: () => void;
    confirmCallback: () => void;
    header: string;
    content: string;
    cancelButtonTitle?: string;
    confirmButtonTitle?: string;
}
declare class ConfirmDialog extends React.Component<ConfirmDialogProps, {}> {
    state: {
        open: boolean;
    };
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    handleClose: () => void;
    handleConfirm: (e: any, item: any) => void;
    render(): JSX.Element;
}
export default ConfirmDialog;
//# sourceMappingURL=index.d.ts.map