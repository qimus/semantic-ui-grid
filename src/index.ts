import { registerTypes as registerFilterTypes } from 'components/filters/factory'
import ExtTable from './components'
import AbstractProvider from './components/providers/AbstractProvider'
import ApiDataProvider from './components/providers/ApiDataProvider'
import ArrayDataProvider from './components/providers/ArrayDataProvider'

const Provider = {
    AbstractProvider,
    ApiDataProvider,
    ArrayDataProvider
};

export {
    registerFilterTypes,
    ExtTable,
    Provider
}