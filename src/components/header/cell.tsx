import * as React from 'react'
import {
    Table,
    Label
} from 'semantic-ui-react'
import AbstractProvider from "../providers/AbstractProvider";

const sortMap = {
    'asc': 'ascending',
    'desc': 'descending'
};

interface HeaderCellProps {
    provider: AbstractProvider,
    item: any,
    sort: string;
}

export default class HeaderCell extends React.Component<HeaderCellProps, {}> {
    handleSort = () => {
        const { provider, item, sort } = this.props;
        if (item.sortable) {
            let dir;
            if (sort === 'desc') {
                dir = null;
            } else {
                dir = (sort === 'asc') ? 'desc' : 'asc';
            }
            provider.setSortField(item.field, dir);
        }
    };

    getSortPositionNumber(name) {
        const { provider } = this.props;
        const sortParams = (provider.getSearchParam('sort') || '')
            .split(',')
            .map(item => {
                if (/^[+-]/.test(item)) {
                    return item.substr(1);
                }
            });

        let positionSort = sortParams.indexOf(name);

        return positionSort > -1 && (
            <Label circular size={'mini'}>{positionSort + 1}</Label>
        )
    }

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
            >{item.title || ''}{item.field && this.getSortPositionNumber(item.field)}</Table.HeaderCell>
        )
    }
}
