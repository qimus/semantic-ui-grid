import * as React from 'react'
import {
    Confirm
} from 'semantic-ui-react'
import i18n from '../../i18n'

interface ConfirmDialogProps {
    open: boolean;
    closeCallback: () => void;
    confirmCallback: () => void;
    header: string;
    content: string;
    cancelButtonTitle?: string;
    confirmButtonTitle?: string;
}

class ConfirmDialog extends React.Component<ConfirmDialogProps, {}> {
    state = {
        open: this.props.open || false
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.open != this.props.open) {
            this.setState({
                open: nextProps.open
            })
        }
    }

    handleClose = () => {
        this.setState({ open: false })

        if (this.props.closeCallback) {
            this.props.closeCallback()
        }
    };

    handleConfirm = (e, item) => {
        if (this.props.confirmCallback) {
            this.props.confirmCallback()
        }

        this.handleClose()
    };

    render() {
        const { open } = this.state;
        const { header, content, cancelButtonTitle, confirmButtonTitle } = this.props;

        return (
            <Confirm
                open={open}
                header={header || i18n.getMessage('confirm_dialog.confirm_header', 'Confirm')}
                content={content || i18n.getMessage('confirm_dialog.message', 'Are you sure?')}
                onCancel={this.handleClose}
                onConfirm={this.handleConfirm}
                cancelButton={cancelButtonTitle || i18n.getMessage('confirm_dialog.no', 'Yes')}
                confirmButton={confirmButtonTitle || i18n.getMessage('confirm_dialog.yes', 'No')}
            />
        )
    }
}

export default ConfirmDialog;