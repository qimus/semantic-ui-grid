import {
    TextInput,
    Suggest
} from 'components/redux-form'

export const TYPE_TEXT = 'text';
export const TYPE_SUGGEST = 'suggest';

let typeMapping: object = {
    [TYPE_TEXT]: TextInput,
    [TYPE_SUGGEST]: Suggest
};

function registerTypes(types: object) {
    typeMapping = { ...typeMapping, ...types };
}

const factory = (type) => {
    if (typeof typeMapping[type] === 'undefined') {
        throw new Error(`Unknown filter type - "${type}"`);
    }

    return typeMapping[type]
};

export {
    factory,
    registerTypes
};