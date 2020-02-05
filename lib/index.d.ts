import { registerTypes as registerFilterTypes } from './components/filters/factory';
import { registerColumnTypes } from './components/columns';
import ExtTable from './components';
import AbstractProvider from './components/providers/AbstractProvider';
import ApiDataProvider from './components/providers/ApiDataProvider';
import ArrayDataProvider from './components/providers/ArrayDataProvider';
export interface HistoryInterface {
    location: any;
    push(route: string): void;
}
declare let history: HistoryInterface;
declare const setHistory: (newHistory: any) => any;
import { DeleteAction, LinkAction } from './components/actions';
declare const Action: {
    DeleteAction: typeof DeleteAction;
    LinkAction: typeof LinkAction;
};
declare const Provider: {
    AbstractProvider: typeof AbstractProvider;
    ApiDataProvider: typeof ApiDataProvider;
    ArrayDataProvider: typeof ArrayDataProvider;
};
declare const Column: {
    ACTION_COLUMN: string;
    SIMPLE_COLUMN: string;
    SERIAL_COLUMN: string;
    CHECKBOX_COLUMN: string;
};
export { registerFilterTypes, registerColumnTypes, ExtTable, Provider, Action, Column, history, setHistory };
//# sourceMappingURL=index.d.ts.map