import * as React from 'react'
import { connect } from 'react-redux'
import {
    Button
} from 'semantic-ui-react'

import ConfirmDialog from '../../modals/confirm-dialog'

interface DeleteActionProps {
    row: any;
    action(row: any): {};
    dispatch(): {};
    header?: string;
    content: string;
    icon: string;
    options: { [prop: string]: any }
}

export default class DeleteAction extends React.Component<DeleteActionProps, {}> {
    static defaultProps = {
        icon: 'delete'
    };

    state = {
        open: false
    };

    handleShowModal = (e) => {
        e.preventDefault();
        this.setState({ open: true });
    };

    handleCloseModal = () => {
        this.setState({ open: false });
    };

    handleConfirm = () => {
        const { row, action } = this.props;
        action(row);
    };

    render() {
        const { header, content, icon, options = {} } = this.props;

        return (
            <span>
                <ConfirmDialog
                    open={this.state.open}
                    confirmCallback={this.handleConfirm}
                    header={header}
                    content={content}
                    closeCallback={this.handleCloseModal}/>
                <Button
                    icon={icon}
                    color={'red'}
                    size={'small'}
                    { ...options }
                    onClick={this.handleShowModal} />
            </span>
        )
    }
}
