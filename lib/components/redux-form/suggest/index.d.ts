import * as React from 'react';
import { WrappedFieldProps, Field } from 'redux-form';
import { RequestInterface } from '../../types';
declare type TitleMap = {
    value: any;
    name: string | number;
} & {
    [prop: string]: any;
};
interface SuggestProps {
    label?: string;
    titleMap?: TitleMap[];
    request: RequestInterface;
    fluid: boolean;
    minLength: number;
    prompt: string;
    multi: boolean;
    ajaxSource: string;
    ajaxCallback(params: {
        term: string;
        [prop: string]: any;
    }): any;
    readonly: boolean;
    canDelete: boolean;
    noResultsMessage: string;
}
export default class Suggest extends React.Component<SuggestProps & WrappedFieldProps & Field, {}> {
    static defaultProps: {
        minLength: number;
        noResultsMessage: any;
        prompt: any;
    };
    state: {
        titleMap: any;
        isFetching: boolean;
    };
    _mapOptions(options?: TitleMap[]): any[];
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map