import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, withRouter } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import {
    Grid,
    Header,
    Form,
    Input,
    Button
} from 'semantic-ui-react'

import {
    Column,
    Provider as DataProvider,
    Action,
    ExtTable,
    setHistory
} from 'semantic-grid'

import 'semantic-ui-css/semantic.min.css'

import store from './store'

const history = createBrowserHistory({ basename: '' });
setHistory(history);

const provider = new DataProvider.ArrayDataProvider({ data: store.getItems() });

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
                component: Action.EditAction,
                link: (row) => `/users/${row.id}`
            },
            {
                component: Action.DeleteAction,
                action: ({ id }) => {
                    store.deleteItem(id);
                    provider.setItems(store.getItems());
                    provider.fetch();
                    updateCallback();
                }
            }
        ]
    }
];
const filter = {
    name: 'users_filter',
    items: [
        {
            name: 'name',
            type: 'text',
            label: 'Name'
        },
        {
            name: 'city',
            type: 'text',
            label: 'City'
        }
    ]
};


let updateCallback;

class DemoGrid extends Component {
    componentDidMount() {
        updateCallback = () => {
            this.setState({r: Math.random()})
        }
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as={'h2'}>Semantic ui grid example</Header>
                        <Button floated='right' primary onClick={() => this.props.history.push('/users/new')}>Create</Button>
                        <ExtTable
                            filter={filter}
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

const connectUser = (WrappedComponent) => {
    let component = class extends Component {
        render() {
            const { id } = this.props.match.params;
            const user = store.getItems().find(item => item.id == id);

            return <WrappedComponent user={user} history={this.props.history}/>
        }
    };

    return withRouter(component);
};

@connectUser
class EditItem extends Component {
    state = {
        name: '',
        age: '',
        city: ''
    };

    componentDidMount() {
        const { user } = this.props;
        if (user) {
            this.setState({
                name: user.name,
                age: user.age,
                city: user.city
            });
        }
    }

    saveRecord = () => {
        const { user } = this.props;

        if (user) {
            store.updateItem(user.id, this.state);
        } else {
            store.createItem(this.state);
        }

        this.props.history.goBack();
    };

    handleChange(field, e) {
        this.setState({ [field]: e.target.value });
    };

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <Form>
                            <Form.Field label='Name' control={Input} placeholder='Name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
                            <Form.Field label='Age' control={Input} placeholder='Age' value={this.state.age} onChange={this.handleChange.bind(this, 'age')}/>
                            <Form.Field label='City' control={Input} placeholder='City' value={this.state.city} onChange={this.handleChange.bind(this, 'city')}/>
                            <Button primary onClick={this.saveRecord}>Save</Button>
                            <Button secondary onClick={() => {this.props.history.goBack()}}>Back</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const storeRedux = createStore(
    combineReducers({ form: formReducer }),
    {}
);

class App extends Component {
    render() {
        return (
            <Provider store={storeRedux}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={DemoGrid} />
                        <Route exact path={'/users/:id'} component={EditItem} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app-container')
);