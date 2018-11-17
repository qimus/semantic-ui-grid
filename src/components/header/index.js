import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Table,
    Header
} from 'semantic-ui-react'

import HeaderCell from './cell'

export default class TableHeader extends Component {
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

TableHeader.propTypes = {
    provider: PropTypes.func,
    columns: PropTypes.array,
    header: PropTypes.any,
    headerIcon: PropTypes.string
};