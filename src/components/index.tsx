import * as React from 'react'
import {
    Table,
    Dimmer,
    Loader
} from 'semantic-ui-react'

import TableBody from './body'
import TableHeader from './header'
import TableFooter from './footer'
import { createFilterForm } from './filters'
import AbstractProvider from "./providers/AbstractProvider";

//types
import {
    Column
} from './types'

export interface ExtTableProps {
    filter: { name: string, items: [] };
    provider: AbstractProvider;
    onPageChange: ((activePage: number) => void);
    columns: Column[];
    header?: string;
    sortable?: boolean;
    isFetching: boolean;
    filterNamePrefix: string;
}

export default class ExtTable extends React.Component<ExtTableProps, {}> {
    static defaultProps = {
        columns: [],
        sortable: false,
        isFetching: false,
        filterNamePrefix: 'filter'
    };

    filter = null;

    state = { activePage: 1 };

    UNSAFE_componentWillMount() {
        if (this.props.filter && !this.filter) {
            const { filter, provider } = this.props;
            this.filter = createFilterForm({
                name: filter.name,
                items: filter.items,
                handleFilter: this.handleFilter,
                initialValues: provider.getSearchParam(this.props.filterNamePrefix, {}),
                filterNamePrefix: this.props.filterNamePrefix
            });
        }
    }

    /**
     * Обработчик пагинации
     * @param {Event} e
     * @param {Number} activePage
     */
    handlePaginationChange = (e, { activePage }) => {
        if (this.props.onPageChange) {
            this.props.onPageChange(activePage);
        }
        this.props.provider.setActivePage(activePage);
        this.setState({ activePage });
    };

    /**
     * Обработчик фильтрации списка таблицы
     * @param {Object} values
     * @param {Array} fieldNames список возможных имен полей фильтра,
     * нужен для удаления из строки состояния лишнего
     */
    handleFilter = (values, fieldNames) => {
        //добавляем в search строки браузера значения фильтра для сохранения состояния
        this.props.provider._navigate({ [this.props.filterNamePrefix]: values }, (search) => {
            fieldNames.forEach(fieldName => {
                if (search[this.props.filterNamePrefix]) {
                    delete search[this.props.filterNamePrefix][fieldName];
                }
            });

            return search;
        });

        this.props.provider.fetch(); //делаем запрос
    };

    render() {
        const { columns, header, provider, sortable, isFetching } = this.props;

        return (
            <React.Fragment>
                {this.filter}

                {isFetching && (
                    <Dimmer active inverted>
                        <Loader/>
                    </Dimmer>
                )}

                <Table celled color='teal' striped sortable={sortable}>
                    <TableHeader
                        columns={columns}
                        provider={provider}
                        header={header}/>
                    <TableBody
                        provider={provider}
                        columns={columns}
                        activePage={this.state.activePage}
                        key={provider.getUniqKey()}/>
                    <TableFooter
                        colSpan={columns.length}
                        provider={provider}
                        handlePaginate={this.handlePaginationChange}/>
                </Table>
            </React.Fragment>
        )
    }
}
