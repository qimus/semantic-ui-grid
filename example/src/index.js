import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router'
import {
    Grid,
    Header
} from 'semantic-ui-react'

import {
    Column,
    Provider,
    Action,
    ExtTable,
    setHistory
} from 'semantic-grid'

import 'semantic-ui-css/semantic.min.css'

import store from './store'

const history = createBrowserHistory({ basename: '' });
setHistory(history);

const provider = new Provider.ArrayDataProvider({ data: store.getItems() });

const columns = [
    {
        title: '#',
        type: Column.SERIAL_COLUMN,
        sortable: true
    },
    {
        title: 'Name',
        field: 'name',
        sortable: true
    },
    {
        title: 'City',
        field: 'city',
        sortable: true,
    },
    {
        title: 'Age',
        field: 'age',
        sortable: true
    },
    {
        title: 'Actions',
        type: Column.ACTION_COLUMN,
        actions: [
            {
                component: Action.DeleteAction,
                action: ({ id }, dispatch) => alert('record delete')
            }
        ]
    }
];

class DemoGrid extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as={'h2'}>Semantic ui grid example</Header>
                        <ExtTable
                            _r={Math.random()}
                            sortable={true}
                            header={'Sortable grid'}
                            provider={provider}
                            columns={columns}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Route path={''} component={DemoGrid} />
            </Router>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app-container')
);