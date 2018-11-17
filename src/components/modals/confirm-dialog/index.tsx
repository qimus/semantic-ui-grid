import * as React from 'react'
import {
    Confirm
} from 'semantic-ui-react'

interface ConfirmDialogProps {
    open: boolean;
    closeCallback: () => void;
    confirmCallback: () => void;
    header: string;
    content: string;
    cancelButtonTitle: string;
    confirmButtonTitle: string;
}

class ConfirmDialog extends React.Component<ConfirmDialogProps, {}> {
    static defaultProps = {
        header: 'Подтверждение',
        content: 'Вы уверены что хотите совершить данное действие?',
        cancelButtonTitle: 'Нет',
        confirmButtonTitle: 'Да'
    };

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
                header={header}
                content={content}
                onCancel={this.handleClose}
                onConfirm={this.handleConfirm}
                cancelButton={cancelButtonTitle}
                confirmButton={confirmButtonTitle}
            />
        )
    }
}

export default ConfirmDialog;