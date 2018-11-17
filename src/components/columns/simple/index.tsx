import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'

const SimpleColumn = (props: { value: any }) => {
    return (
        <Table.Cell>{props.value}</Table.Cell>
    )
};

export default SimpleColumn;
