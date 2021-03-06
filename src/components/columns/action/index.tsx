import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'

import {
    ColumnAction,
    ColumnOptions
} from '../../types'

interface ActionColumnProps {
    actions: ColumnAction[],
    row: any;
    columnOptions: ColumnOptions;
}

export default class ActionColumn extends React.Component<ActionColumnProps, {}> {
    render() {
        const { actions = [], columnOptions = {}, ...props } = this.props;

        return (
            <Table.Cell textAlign={'center'} {...columnOptions}>
                {actions.map((item, i) => {
                    const { component: Component, visible, ...rest } = item;

                    if (typeof visible !== 'undefined') {
                        let isVisible = (typeof visible === 'function') ? visible(props.row) : visible;
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
