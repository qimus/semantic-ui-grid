import * as React from 'react';
import { ReactNode } from 'react';
import { InjectedFormProps } from 'redux-form';
import { ColumnOptions } from '../types';
interface FilterProps {
    handleFilter: ((values: any, names: any) => void);
    items: any[];
    itemsNames: any[];
    filterNamePrefix: string;
    options: ColumnOptions;
    filterContainer: any;
    filterContainerItem: any;
    filterButtonComponent: any;
    filterButton?: {
        icon: string;
        visible: boolean;
    };
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
declare class FilterContainer extends React.Component<FilterContainerProps> {
    render(): JSX.Element;
}
declare class FilterContainerItem extends React.Component<FilterContainerItemProps> {
    render(): JSX.Element;
}
declare class FilterButtonComponent extends React.Component<FilterButtonComponentProps> {
    static defaultProps: {
        icon: string;
    };
    render(): JSX.Element;
}
declare class Filter extends React.Component<FilterProps & InjectedFormProps<{}, FilterProps>> {
    static defaultProps: {
        filterNamePrefix: string;
        filterContainer: typeof FilterContainer;
        filterContainerItem: typeof FilterContainerItem;
        filterButtonComponent: typeof FilterButtonComponent;
        filterButton: {
            icon: string;
            visible: boolean;
        };
    };
    handleSearch: (values: any) => void;
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export declare function createFilterForm({ name, initialValues, items, component, ...props }: {
    [x: string]: any;
    name: any;
    initialValues: any;
    items?: any[];
    component?: typeof Filter;
}): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map