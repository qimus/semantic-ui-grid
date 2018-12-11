import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'

import AbstractProvider from '../../providers/AbstractProvider'
import { ColumnOptions } from '../../types'

const SerialColumn = (props: { numRow: number, provider: AbstractProvider, columnOptions: ColumnOptions }) => {
    return (
        <Table.Cell {...(props.columnOptions || {})}>{props.provider.getStartIndex() + props.numRow + 1}</Table.Cell>
    )
};

export default SerialColumn;