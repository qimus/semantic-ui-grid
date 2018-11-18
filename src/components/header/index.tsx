import * as React from 'react'
import {
    Table,
    Header
} from 'semantic-ui-react'

import { Column } from 'components/types'

import HeaderCell from './cell'
import AbstractProvider from '../providers/AbstractProvider'

interface TableHeaderProps {
    columns: Column[],
    provider: AbstractProvider,
    header: string;
}

export default class TableHeader extends React.Component<TableHeaderProps, {}> {
    render() {
        const { columns, provider, header } = this.props;
        const sort = provider.getSort();

        let headerComponent;

        if (header && typeof header === 'object') {
            headerComponent = header;
        } else if (header && typeof header === 'string') {
            headerComponent = <Header as={'h3'}>{header}</Header>;
        }

        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan={columns.length}>
                        {headerComponent}
                    </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    {columns.map((item, i) => {
                        let fieldSort;
                        if (item.field && sort[item.field]) {
                            fieldSort = sort[item.field];
                        }

                        return <HeaderCell item={item} key={i} provider={provider} sort={fieldSort}/>
                    })}
                </Table.Row>
            </Table.Header>
        )
    }
}
