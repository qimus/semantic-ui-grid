import {
    TextInput,
    Suggest
} from 'components/redux-form'

export const TYPE_TEXT = 'text';
export const TYPE_SUGGEST = 'suggest';

const map = {
    [TYPE_TEXT]: TextInput,
    [TYPE_SUGGEST]: Suggest
};

const factory = (type) => {
    if (typeof map[type] === 'undefined') {
        throw new Error(`Unknown filter type - "${type}"`);
    }

    return map[type]
};

export {
    factory
}