import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'

import { ColumnAction } from '../../types'

interface ActionColumnProps {
    actions: ColumnAction[],
    row: any;
}

export default class ActionColumn extends React.Component<ActionColumnProps, {}> {
    render() {
        const { actions = [], ...props } = this.props;

        return (
            <Table.Cell textAlign={'center'}>
                {actions.map((item, i) => {
                    const { component: Component, ...rest } = item;
                    return <Component key={i} {...props} {...rest}/>
                })}
            </Table.Cell>
        )
    }
}
