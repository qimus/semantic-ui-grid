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

const history = createBrowserHistory({ basename: process.env.BASE_URL });
setHistory(history);

const provider = new DataProvider.ArrayDataProvider({ data: store.getItems() });

const columns = [
    {
        title: '#',
        type: Column.SERIAL_COLUMN,
        sortable: true
    },
    {
        title: 'First Name',
        field: 'first_name',
        sortable: true
    },
    {
        title: 'Last Name',
        field: 'last_name',
        sortable: true
    },
    {
        title: 'E-mail',
        field: 'email',
        sortable: true,
    },
    {
        title: 'Country',
        field: 'country',
        sortable: true
    },
    {
        title: 'Actions',
        type: Column.ACTION_COLUMN,
        actions: [
            {
                component: Action.LinkAction,
                link: (row) => `/users/${row.id}`,
                options: {
                    color: 'green'
                }
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
            name: 'first_name',
            type: 'text',
            label: 'First Name'
        },
        {
            name: 'last_name',
            type: 'text',
            label: 'Last Name'
        },
        {
            name: 'email',
            type: 'text',
            label: 'Email'
        },
        {
            name: 'country',
            type: 'text',
            label: 'Country'
        }
    ]
};


let updateCallback;

class DemoGrid extends Component {
    componentDidMount() {
        updateCallback = () => {
            this.setState({ r: Math.random() })
        };
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={15} textAlign={'center'}>
                        <Header as={'h2'}>Semantic ui grid example</Header>
                        <Button floated={'right'} primary onClick={() => this.props.history.push('/users/new')}>Create</Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={14}>
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
        first_name: '',
        last_name: '',
        email: '',
        country: ''
    };

    componentDidMount() {
        const { user } = this.props;
        if (user) {
            this.setState({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                country: user.country
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
                            <Form.Field label='First Name' control={Input} placeholder='First Name' value={this.state.first_name} onChange={this.handleChange.bind(this, 'first_name')}/>
                            <Form.Field label='Last Name' control={Input} placeholder='Last Name' value={this.state.last_name} onChange={this.handleChange.bind(this, 'last_name')}/>
                            <Form.Field label='Email' control={Input} placeholder='Email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                            <Form.Field label='Country' control={Input} placeholder='Country' value={this.state.country} onChange={this.handleChange.bind(this, 'country')}/>
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