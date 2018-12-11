import * as React from 'react'
import {
    Checkbox,
    Table
} from 'semantic-ui-react'
import { ColumnOptions } from '../../types'

interface CheckboxColumnProps {
    value: boolean;
    handleChange: (isChecked: boolean, item: any) => void;
    row: object;
    columnOptions: ColumnOptions;
}

export default class CheckboxColumn extends React.Component<CheckboxColumnProps, {}> {
    state = {
        value: this.props.value
    };

    handleChange = (e) => {
        e.preventDefault();
        let isChecked = !this.state.value;
        this.setState({
            value: isChecked
        });
        if (this.props.handleChange) {
            this.props.handleChange(isChecked, this.props.row);
        }
    };
    
    render() {
        const { columnOptions } = this.props;

        return (
            <Table.Cell textAlign={'center'} { ...columnOptions }>
                <Checkbox
                    checked={this.state.value}
                    onChange={this.handleChange}/>
            </Table.Cell>
        )
    }
}