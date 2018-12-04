import * as React from 'react'
import {
    Checkbox,
    Table
} from 'semantic-ui-react'

interface CheckboxColumnProps {
    value: boolean,
    handleChange: (isChecked: boolean, item: any) => void,
    row: object
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

        return (
            <Table.Cell textAlign={'center'}>
                <Checkbox
                    checked={this.state.value}
                    onChange={this.handleChange}/>
            </Table.Cell>
        )
    }
}