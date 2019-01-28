import * as React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { get } from 'lodash'
import {
    Grid,
    Form,
    Button
} from 'semantic-ui-react'

import { factory } from './factory'
import { ColumnOptions } from '../types'
import {ReactNode} from "react";

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
    options: ColumnOptions;
    filterContainer: any;
    filterContainerItem: any;
    filterButtonComponent: any;
    filterButton?: {
        icon: string;
        visible: boolean;
    }
}

interface FilterContainerProps {
    children: ReactNode;
}

interface FilterContainerItemProps {
    children: ReactNode;
    [prop: string]: any;
}

interface FilterButtonComponentProps {
    icon?: string;
}

class FilterContainer extends React.Component<FilterContainerProps> {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    {this.props.children}
                </Grid.Row>
            </Grid>
        )
    }
}

class FilterContainerItem extends React.Component<FilterContainerItemProps> {
    render() {
        const { children, ...options } = this.props;

        return (
            <Grid.Column {...options}>
                {children}
            </Grid.Column>
        )
    }
}

class FilterButtonComponent extends React.Component<FilterButtonComponentProps> {
    static defaultProps = {
        icon: 'filter'
    };

    render() {
        const { icon } = this.props;

        return (
            <Grid.Column verticalAlign={'bottom'} style={styles.button}>
                <Button primary icon={icon}/>
            </Grid.Column>
        )
    }
}

class Filter extends React.Component<FilterProps, {}> {
    static defaultProps = {
        filterNamePrefix: 'filter',
        filterContainer: FilterContainer,
        filterContainerItem: FilterContainerItem,
        filterButtonComponent: FilterButtonComponent,
        filterButton: {
            icon: 'filter',
            visible: true
        }
    };

    handleSearch = (values) => {
        this.props.handleFilter(values, this.props.itemsNames);
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {
            items,
            handleSubmit,
            filterButton,
            filterContainer: FilterContainer,
            filterContainerItem: FilterContainerItem,
            filterButtonComponent: FilterButtonComponent
        } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.handleSearch)} style={styles.form}>
                <FilterContainer>
                    {items.map((item, i) => {
                        const { type, component, options = {}, updateAfterChange = false, ...props } = item;
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
                            <FilterContainerItem key={i} width={3} {...options}>
                                <Field
                                    key={i}
                                    {...props}
                                    component={Component} />
                            </FilterContainerItem>
                        )
                    })}

                    {filterButton.visible && (
                        <FilterButtonComponent icon={get(filterButton, 'icon', 'filter')}/>
                    )}
                </FilterContainer>
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
