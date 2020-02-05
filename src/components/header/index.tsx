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
    extra: { [prop: string]: any };
}

export default class TableHeader extends React.Component<TableHeaderProps, {}> {
    render() {
        const { columns, provider, header, extra } = this.props;
        const sort = provider.getSort();

        let headerComponent;

        if (header && typeof header === 'object') {
            headerComponent = header;
        } else if (header && typeof header === 'string') {
            headerComponent = <Header as={'h3'}>{header}</Header>;
        }

        return (
            <Table.Header>
                {headerComponent && (
                    <Table.Row>
                        <Table.HeaderCell colSpan={columns.length}>
                            {headerComponent}
                        </Table.HeaderCell>
                    </Table.Row>
                )}
                <Table.Row>
                    {columns.map((item, i) => {
                        let fieldSort;
                        if (item.field && sort[item.field]) {
                            fieldSort = sort[item.field];
                        }
                        
                        let HeaderComponent;
                        if (item.header) {
                            HeaderComponent = item.header;
                        } else {
                            HeaderComponent = HeaderCell;
                        }

                        return <HeaderComponent item={item} key={i} provider={provider} sort={fieldSort} extra={extra}/>
                    })}
                </Table.Row>
            </Table.Header>
        )
    }
}
