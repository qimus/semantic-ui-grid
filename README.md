Installation
-----------

npm i --save semantic-grid

Example: cd example/ && npm i && npm start. Enjoy!

Hot it use
----------

```javascript
import {
    Column,
    Provider as DataProvider,
    Action,
    ExtTable,
    setHistory
} from 'semantic-grid'

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
                component: Action.EditAction,
                link: (row) => `/users/${row.id}`
            },
            {
                component: Action.DeleteAction,
                action: ({ id }) => {
                    store.deleteItem(id);
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

class DemoGrid extends Component {
    componentDidMount() {
        updateCallback = () => {
            this.setState({r: Math.random()})
        };
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={14}>
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
```


Screenshots
----------
![Grid overview](public/1.png)

![Sort](public/2.png)

![Filter](public/3.png)