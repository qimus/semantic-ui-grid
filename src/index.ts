import { registerTypes as registerFilterTypes } from './components/filters/factory'

import ExtTable from './components'

import AbstractProvider from './components/providers/AbstractProvider'
import ApiDataProvider from './components/providers/ApiDataProvider'
import ArrayDataProvider from './components/providers/ArrayDataProvider'

import {
    DeleteAction,
    EditAction
} from './components/actions'

import {
    ACTION_COLUMN,
    SERIAL_COLUMN,
    SIMPLE_COLUMN
} from './components/columns'

const Action = {
    DeleteAction,
    EditAction
};

const Provider = {
    AbstractProvider,
    ApiDataProvider,
    ArrayDataProvider
};

const Column = {
    ACTION_COLUMN,
    SIMPLE_COLUMN,
    SERIAL_COLUMN
};

export {
    registerFilterTypes,
    ExtTable,
    Provider,
    Action,
    Column
}