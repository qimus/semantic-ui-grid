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
        const { actions = [], row, ...props } = this.props;

        return (
            <Table.Cell textAlign={'center'}>
                {actions.map((item, i) => {
                    const { component: Component, visible, ...rest } = item;

                    if (typeof visible !== 'undefined') {
                        let isVisible = (typeof visible === 'function') ? visible(row) : visible;
                        if (!isVisible) {
                            return null;
                        }
                    }

                    return <Component key={i} {...props} {...rest}/>
                })}
            </Table.Cell>
        )
    }
}
