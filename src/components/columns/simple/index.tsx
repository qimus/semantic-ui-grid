import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'
import { ColumnOptions } from '../../types'

const SimpleColumn = (props: { value: any, columnOptions: ColumnOptions }) => {
    return (
        <Table.Cell {...(props.columnOptions || {})}>{props.value}</Table.Cell>
    )
};

export default SimpleColumn;
