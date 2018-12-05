import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'

import columnFactory from '../columns'
import AbstractProvider from '../providers/AbstractProvider'
import { Column } from '../types'

interface TableBodyProps {
    provider: AbstractProvider;
    columns: Column[],
    activePage: number;
    rowOptions: { [prop: string]: any };
}

export default class TableBody extends React.Component<TableBodyProps, {}> {
    render() {
        const { provider, columns, rowOptions = {} } = this.props;

        return (
            <Table.Body>
                {provider.getItems().map((item, i) => {
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
                    for (let key in rowOptions) {
                        let optionValue = rowOptions[key];
                        if (typeof optionValue === 'function') {
                            optionValue = optionValue(item);
                        }
                        currentRowOptions[key] = optionValue;
                    }

                    return <Table.Row key={i} { ...currentRowOptions }>{items}</Table.Row>
                })}
            </Table.Body>
        )
    }
}
