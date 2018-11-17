import * as React from 'react'
import {
    Button
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

interface EditActionProps {
    link(row: any): void;
    row: any;
}

export default class EditAction extends React.Component<EditActionProps, {}> {
    render() {
        const { link, row } = this.props;
        let href;

        if (typeof link === 'function') {
            href = link(row);
        } else {
            href = link;
        }

        return (
            <Button
                as={Link}
                icon={'edit'}
                positive
                size={'small'}
                to={href}/>
        )
    }
}