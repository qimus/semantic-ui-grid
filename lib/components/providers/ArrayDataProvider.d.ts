import AbstractProvider, { ProviderSettings } from './AbstractProvider';
import { SearchParams } from '../types';
export default class ArrayDataProvider extends AbstractProvider {
    private data;
    private allData;
    private filterParamName;
    constructor(params: ProviderSettings & {
        data?: any[];
        filterParamName?: string;
    });
    /**
     * @inheritDoc
     */
    getTotalCount(): any;
    /**
     * @inheritDoc
     */
    getItems(): any;
    /**
     * @param {array} data
     * @return {ArrayDataProvider}
     */
    setItems(data: any[]): this;
    /**
     * @param sort Object sort params
     */
    private sortItems;
    /**
     * @param filter Object filter params
     */
    private filterItems;
    fetch(params?: SearchParams): void;
}
//# sourceMappingURL=ArrayDataProvider.d.ts.map