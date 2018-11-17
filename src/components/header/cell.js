import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Table
} from 'semantic-ui-react'
import { withRouter } from 'react-router'

const sortMap = {
    'asc': 'ascending',
    'desc': 'descending'
};

@withRouter
export default class HeaderCell extends Component {
    handleSort = () => {
        const { provider, item, sort } = this.props;
        if (item.sortable) {
            provider.setSortField(item.field, (sort === 'asc') ? 'desc' : 'asc');
        }
    };

    render() {
        const { item, sort } = this.props;
        let sorted;

        if (sort) {
            sorted = sortMap[sort];
        }

        return (
            <Table.HeaderCell
                sorted={sorted}
                onClick={this.handleSort}
            >{item.title || ''}</Table.HeaderCell>
        )
    }
}

HeaderCell.propTypes = {
    item: PropTypes.object,
    provider: PropTypes.func,
    sort: PropTypes.string,
    history: PropTypes.object
};