import React, { Component } from 'react'
import ReactDom from 'react-dom'

import {
    Grid,
    Header
} from 'semantic-ui-react'

import {
    Column,
    Provider,
    Action,
    ExtTable,
} from 'semantic-grid'

import 'semantic-ui-css/semantic.min.css'

const dataStub = [
    {
        name: 'John',
        age: 36,
        city: 'New York'
    },
    {
        name: 'Denis',
        age: 18,
        city: 'Moscow'
    },
    {
        name: 'Artur',
        age: 30,
        city: 'Astana'
    },
];

const provider = new Provider.ArrayDataProvider({ data: dataStub });

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

ReactDom.render(
    <DemoGrid />,
    document.getElementById('app-container')
);