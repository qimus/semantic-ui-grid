import * as React from 'react'
import {
    Button
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

interface LinkActionProps {
    link(row: any): void;
    row: any;
    icon?: string
}

export default class LinkAction extends React.Component<LinkActionProps, {}> {
    static defaultProps = {
        icon: 'edit'
    };

    render() {
        const { link, row, ...rest } = this.props;
        let href;

        if (typeof link === 'function') {
            href = link(row);
        } else {
            href = link;
        }

        return (
            <Button
                as={Link}
                to={href}
                {...rest}/>
        )
    }
}