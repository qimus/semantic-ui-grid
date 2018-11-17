import * as React from 'react'
import { connect } from 'react-redux'
import {
    Button
} from 'semantic-ui-react'

import ConfirmDialog from '../../modals/confirm-dialog'

interface DeleteActionProps {
    row: any;
    action(row: any, dispatch: any): {};
    dispatch(): {};
    header?: string;
    content: string;
}

export class DeleteAction extends React.Component<DeleteActionProps, {}> {
    static defaultProps = {
        header: 'Удаление записи',
        message: 'Вы уверены что хотите совершить данное действие?'
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
        const { row, action, dispatch } = this.props;
        action(row, dispatch);
    };

    render() {
        const { header, content } = this.props;

        return (
            <span>
                <ConfirmDialog
                    open={this.state.open}
                    confirmCallback={this.handleConfirm}
                    header={header}
                    content={content}
                    closeCallback={this.handleCloseModal}/>
                <Button
                    icon={'delete'}
                    color={'red'}
                    size={'small'}
                    onClick={this.handleShowModal} />
            </span>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(null, mapDispatchToProps)(DeleteAction);