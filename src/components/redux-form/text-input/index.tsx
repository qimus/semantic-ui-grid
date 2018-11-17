import * as React from 'react'
import {
    Form,
} from 'semantic-ui-react'

const TextInput = ({
                       label,
                       formatter,
                       required = false,
                       help,
                       meta,
                       input,
                       handleChange = null,
                       ...rest
                   }) => {
    const { touched = false, error = '' } = meta;
    const hasError = !!(touched && error);

    const handleOnChange = (e, { value }) => {
        if (formatter) {
            value = formatter(value);
        }

        if (handleChange) {
            handleChange(value)
        }

        input.onChange(value);
    };

    return (
        <Form.Input
            placeholder={label}
            {...rest}
            {...input}
            error={hasError}
            label={<label>{label}</label>}
            onChange={handleOnChange}/>
    )
};

export default TextInput;