import SimpleColumn from './simple'
import SerialColumn from './serial'
import ActionColumn from './action'
import CheckboxColumn from './checkbox'

export const SIMPLE_COLUMN = 'simple';
export const SERIAL_COLUMN = 'serial';
export const ACTION_COLUMN = 'action';
export const CHECKBOX_COLUMN = 'checkbox';

let columnTypes = {
    [SIMPLE_COLUMN]: SimpleColumn,
    [ACTION_COLUMN]: ActionColumn,
    [SERIAL_COLUMN]: SerialColumn,
    [CHECKBOX_COLUMN]: CheckboxColumn,
};

export const registerColumnTypes = (map) => {
    columnTypes = { ...columnTypes, ... map};
};

export default function factory(type) {
    if (typeof columnTypes[type] !== 'undefined') {
        return columnTypes[type]
    }

    return SimpleColumn
}
