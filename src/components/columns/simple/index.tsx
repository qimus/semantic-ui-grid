import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'

const SimpleColumn = (props: { value: any, columnOptions: { [prop: string]: any } }) => {
    return (
        <Table.Cell {...(props.columnOptions || {})}>{props.value}</Table.Cell>
    )
};

export default SimpleColumn;
