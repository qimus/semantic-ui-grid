import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'

import AbstractProvider from '../../providers/AbstractProvider'

const SerialColumn = (props: { numRow: number, provider: AbstractProvider }) => {
    return (
        <Table.Cell>{props.provider.getStartIndex() + props.numRow + 1}</Table.Cell>
    )
};

export default SerialColumn;