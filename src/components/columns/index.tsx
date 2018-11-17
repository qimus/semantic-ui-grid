import SimpleColumn from './simple'
import SerialColumn from './serial'
import ActionColumn from './action'

export const SIMPLE_COLUMN = 'simple';
export const SERIAL_COLUMN = 'serial';
export const ACTION_COLUMN = 'action';

export default function factory(type) {
    switch (type) {
        case SERIAL_COLUMN:
            return SerialColumn;
        case ACTION_COLUMN:
            return ActionColumn;
        default:
            return SimpleColumn
    }
}
