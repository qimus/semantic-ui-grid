import * as React from 'react'
import {
    Table,
    Message
} from 'semantic-ui-react'

import columnFactory from '../columns'
import AbstractProvider from '../providers/AbstractProvider'
import { Column } from '../types'

interface TableBodyProps {
    provider: AbstractProvider;
    columns: Column[],
    activePage: number;
    rowOptions: any;
    emptyMessage: any;
}

export default class TableBody extends React.Component<TableBodyProps, {}> {
    render() {
        const { provider, columns, emptyMessage, rowOptions = {} } = this.props;
        const items = provider.getItems();

        if (items.length === 0) {
            return (
                <Table.Body>
                    <Table.Row>
                        <Table.Cell colSpan={columns.length} textAlign={'center'}>
                            {emptyMessage}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            )
        }

        return (
            <Table.Body>
                {items.map((item, i) => {
                    let items = columns.map((column, j) => {
                        const { type, field, value } = column;
                        let columnValue;

                        if (value) {
                            if (typeof value === 'function') {
                                columnValue = value(item, i);
                            } else {
                                columnValue = value;
                            }
                        } else if (field) {
                            columnValue = item[field] || '';
                        }

                        let Column;
                        if (column.component) {
                            Column = column.component;
                        } else {
                            Column = columnFactory(type);
                        }

                        return <Column 
                                    { ...column }
                                    value={columnValue}
                                    row={item}
                                    provider={provider}
                                    numRow={i}
                                    key={`${provider.getActivePage()}.${i}.${j}`}/>
                    });

                    let currentRowOptions = {};
                    if (typeof rowOptions === 'function') {
                        currentRowOptions = rowOptions(item);
                    } else {
                        for (let key in rowOptions) {
                            let optionValue = rowOptions[key];
                            if (typeof optionValue === 'function') {
                                optionValue = optionValue(item);
                            }
                            currentRowOptions[key] = optionValue;
                        }
                    }

                    return <Table.Row key={i} { ...currentRowOptions }>{items}</Table.Row>
                })}
            </Table.Body>
        )
    }
}
