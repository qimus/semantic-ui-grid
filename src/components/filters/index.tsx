import * as React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {
    Grid,
    Form,
    Button
} from 'semantic-ui-react'

import { factory } from './factory'

const styles = {
    form: {
        paddingLeft: 20
    },
    item: {
        marginRight: 10
    },
    button: {
        marginBottom: 1
    }
};

interface FilterProps {
    handleFilter: ((values: any,  names: any) => void);
    items: any[];
    handleSubmit: (values) => any;
    itemsNames: any[];
    filterNamePrefix: string;
}

class Filter extends React.Component<FilterProps, {}> {
    static defaultProps = {
        filterNamePrefix: 'filter'
    };

    handleSearch = (values) => {
        this.props.handleFilter(values, this.props.itemsNames);
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { items, handleSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.handleSearch)} style={styles.form}>
                <Grid>
                    <Grid.Row>
                        {items.map((item, i) => {
                            const { type, component, filterOptions = {}, updateAfterChange = false, ...props } = item;
                            let Component;

                            if (component) {
                                Component = component;
                            } else {
                                Component = factory(type);
                            }

                            if (updateAfterChange) {
                                props.handleChange = handleSubmit(this.handleSearch);
                            }

                            return (
                                <Grid.Column key={i} width={3} {...filterOptions}>
                                    <Field
                                        key={i}
                                        {...props}
                                        component={Component} />
                                </Grid.Column>
                            )
                        })}
                        <Grid.Column verticalAlign={'bottom'} style={styles.button}>
                            <Button primary icon={'filter'}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        )
    }
}

export function createFilterForm({ name, initialValues, items = [], component = Filter, ...props }) {
    let Component = reduxForm({
        form: name
    })(component);

    let itemsNames = items.map(item => item.name);
    const filterInitialValues = (values) => {
        Object.keys(values).forEach(key => {
            if (!itemsNames.includes(key)) {
                delete values[key];
            }
        });

        return values;
    };

    const mapStateToProps = (state, props) => {
        return {
            initialValues: filterInitialValues(initialValues),
            itemsNames
        }
    };

    Component = connect(mapStateToProps)(Component);

    return <Component {...props} items={items}/>
}
