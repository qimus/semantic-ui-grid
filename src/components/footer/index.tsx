import * as React from 'react'
import {
    Pagination,
    Table,
    Grid,
    Dropdown
} from 'semantic-ui-react'

import AbstractProvider from '../providers/AbstractProvider'

const styles = {
    perPageContainer: {
        float: 'right'
    },
    perPage: {
        display: 'inline-block',
        width: 80,
        marginLeft: 10,
        marginRight: 20
    }
};

interface TableFooterProps {
    provider: AbstractProvider;
    colSpan: number;
    handlePaginate: (event, data) => void;
}

export default class TableFooter extends React.Component<TableFooterProps, {}> {
    state = {
        perPage: null
    };

    componentDidMount() {
        const { provider } = this.props;
        this.setState({
            perPage: provider.getPerPage()
        });
    }

    handleChangePerPage = (e, { value }) => {
        e.preventDefault();
        const { provider } = this.props;
        provider.setPerPage(+value);
        provider.setActivePage(1);
        this.setState({ perPage: provider.getPerPage() });
        provider.fetch();
    };

    render() {
        const { provider, colSpan, handlePaginate } = this.props;

        let limitOptions = [];
        provider.pageLimits.forEach(value => {
            limitOptions.push({ key: value, text: value, value });
        });

        if (!provider.pageLimits.includes(this.state.perPage)) {
            limitOptions.push({ key: this.state.perPage, text: this.state.perPage, value: this.state.perPage });
        }

        let toRecord = provider.getStartIndex() + provider.getPerPage();
        if (toRecord > provider.getTotalCount()) {
            toRecord = provider.getTotalCount();
        }

        return (
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan={colSpan} verticalAlign={'middle'}>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column verticalAlign={'middle'}>
                                    {provider.getTotalCount() > 0 && (
                                        <React.Fragment>
                                            <span>Показаны записи </span>
                                            <span style={{ fontWeight: 'bold' }}>{`${provider.getStartIndex() + 1} - ${toRecord}`}</span>
                                            <span> из </span>
                                            <span style={{ fontWeight: 'bold' }}>{provider.getTotalCount()}</span>
                                        </React.Fragment>
                                    )}
                                </Grid.Column>
                                <Grid.Column>
                                    {provider.getTotalCount() > provider.getPerPage() && (
                                        <Pagination floated={'right'}
                                                    totalPages={provider.getTotalPages()}
                                                    activePage={provider.getActivePage()}
                                                    onPageChange={handlePaginate}/>
                                    )}
                                    <div style={styles.perPageContainer}>
                                        Записей на странице
                                        <div style={styles.perPage}>
                                            <Dropdown
                                                fluid
                                                selection
                                                options={limitOptions}
                                                value={this.state.perPage}
                                                onChange={this.handleChangePerPage}/>
                                        </div>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        )
    }
}
