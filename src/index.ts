import { registerTypes as registerFilterTypes } from './components/filters/factory'
import { registerColumnTypes } from './components/columns'

import ExtTable from './components'

import AbstractProvider from './components/providers/AbstractProvider'
import ApiDataProvider from './components/providers/ApiDataProvider'
import ArrayDataProvider from './components/providers/ArrayDataProvider'

export interface HistoryInterface {
    location: any;
    push(route: string): void;
}

let history: HistoryInterface = {
    location: window.location,
    push(route: string) {}
};

const setHistory = (newHistory) => history = newHistory;

import {
    DeleteAction,
    EditAction
} from './components/actions'

import {
    ACTION_COLUMN,
    SERIAL_COLUMN,
    SIMPLE_COLUMN,
    CHECKBOX_COLUMN
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
    SERIAL_COLUMN,
    CHECKBOX_COLUMN
};

export {
    registerFilterTypes,
    registerColumnTypes,
    ExtTable,
    Provider,
    Action,
    Column,
    history,
    setHistory
}