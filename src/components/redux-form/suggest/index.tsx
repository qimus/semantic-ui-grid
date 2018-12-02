import * as React from 'react'
import { WrappedFieldProps, Field } from 'redux-form'
import {
    Dropdown,
    Form,
    Icon
} from 'semantic-ui-react'
import i18n from '../../i18n'

import { RequestInterface } from '../../types'

type TitleMap = { value: any, name: string | number } & { [prop: string]: any };

interface SuggestProps {
    label?: string;
    titleMap?: TitleMap[];
    request: RequestInterface,
    fluid: boolean;
    minLength: number;
    prompt: string;
    multi: boolean;
    ajaxSource: string;
    ajaxCallback(params: { term: string, [prop: string]: any });
    readonly: boolean;
    canDelete: boolean;
    noResultsMessage: string;
}

export default class Suggest extends React.Component<SuggestProps & WrappedFieldProps & Field, {}> {
    static defaultProps = {
        minLength: 2,
        noResultsMessage: i18n.getMessage('suggest.noResultMessage', 'По вашему запросу ничего не найдено'),
        prompt: i18n.getMessage('suggest.prompt', 'Выберите значение...')
    };

    state = {
        titleMap: null,
        isFetching: false
    };

    _mapOptions(options: TitleMap[] = []) {
        return options.map(item => {
            return {
                ...item,
                key: item.value,
                text: item.name,
                ...(item.extra || {})
            }
        });
    }

    render() {

        let {
            label,
            titleMap,
            request,
            fluid = true,
            meta: { touched = false, error = false } = {},
            input,
            prompt,
            multi = false,
            ajaxSource,
            ajaxCallback,
            readonly,
            canDelete = false,
            noResultsMessage
        } = this.props;

        let { isFetching } = this.state;

        let title = <span>{label}</span>;

        if (this.state.titleMap) {
            titleMap = this.state.titleMap;
        }

        const handleChange = (e, { value }) => {
            input.onChange(value);
        };

        const handleRemove = () => {
            input.onChange(null);
        };

        const handleBlur = (e, { value }) => {
            input.onBlur(value);
        };

        const handleFocus = async () => {
            if (ajaxSource && (!titleMap || titleMap.length === 0)) {
                await makeRequest();
            }
        };

        const makeRequest = async (searchQuery?) => {
            this.setState({ isFetching: true });
            if (ajaxSource || ajaxCallback) {
                let result = [];
                if (ajaxCallback) {
                    result = await ajaxCallback({ term: searchQuery });
                } else {
                    result = await request.get(ajaxSource, { term: searchQuery })
                        .then(json => {
                                return json.data.result;
                            }
                        )
                }

                this.setState({
                    titleMap: this._mapOptions(result),
                    isFetching: false
                });
            }
        };

        const handleSearchChange = async (value, { searchQuery }) => {
            if (searchQuery.length >= this.props.minLength) {
                await makeRequest(searchQuery);
            }
        };

        return (
            <Form.Field error={touched && error}>
                {title && (
                    <div style={{ display: 'inline-block', marginBottom: 0 }} className={'field'}>
                        <label>{title}</label>
                    </div>
                )}
                <div style={{ position: 'relative' }}>
                    <Dropdown placeholder={prompt}
                              fluid={fluid}
                              search
                              selection
                              disabled={readonly || isFetching}
                              loading={isFetching}
                              {...input}
                              onChange={handleChange}
                              onSearchChange={handleSearchChange}
                              onBlur={handleBlur}
                              onFocus={handleFocus}
                              multiple={multi}
                              style={{ borderColor: '#999' }}
                              noResultsMessage={noResultsMessage}
                              options={this._mapOptions(titleMap)}
                    />
                    {input.value && canDelete && (
                        <Icon
                            style={{
                                float: 'right',
                                top: 9,
                                right: 20,
                                display: 'inline',
                                position: 'absolute',
                                cursor: 'pointer'
                            }}
                            onClick={handleRemove}
                            name='delete' color='red'
                        />
                    )}
                </div>
            </Form.Field>
        )
    }
}
