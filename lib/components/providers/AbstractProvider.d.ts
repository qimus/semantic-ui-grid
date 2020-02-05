export declare const DEFAULT_SORT_DIR = "asc";
export declare type ProviderSettings = {
    activePage?: number;
    perPage?: number;
    pageParamName?: string;
    limitParamName?: string;
    pageLimits?: number[];
    defaultLimit?: number;
};
/**
 * Class AbstractProvider
 */
export default abstract class AbstractProvider {
    private pageParam;
    private defaultPage;
    private limitParam;
    private defaultLimit;
    private _pageLimits;
    protected constructor(params?: ProviderSettings);
    pageLimits: number[];
    /**
     * @return {number}
     */
    abstract getTotalCount(): number;
    /**
     * Return serial number
     * @return {number}
     */
    getStartIndex(): number;
    /**
     * Return total count of pages
     * @return {number}
     */
    getTotalPages(): number;
    /**
     * Return items to show on page
     * @return {array}
     */
    abstract getItems(): any;
    /**
     * Update items on the page
     * @param params
     * @private
     */
    abstract fetch(params?: any): void;
    /**
     * Return number active page
     * @return {number}
     */
    getActivePage(): any;
    /**
     * Set active page number
     * @param {Number} page
     * @param {Number} limit
     * @return {AbstractProvider}
     */
    setActivePage(page: any, limit?: any): this;
    /**
     * Count rows to be showed on the page
     * @return {number}
     */
    getPerPage(): number;
    /**
     * Change rows count on the page
     * @param perPage
     * @return {AbstractProvider}
     */
    setPerPage(perPage: any): this;
    getUniqKey(): any;
    /**
     * Return search params as Object
     * @returns {Object}
     */
    getSearchParams(): any;
    /**
     * Return search param by name
     * @param paramName
     * @param defaultValue
     * @returns {boolean|*}
     */
    getSearchParam(paramName: any, defaultValue?: any): any;
    /**
     * Return sort object
     * @return {Object}
     */
    getSort(): {};
    /**
     * Set sorting by field
     * @param {String} field
     * @param {String} direction
     */
    setSortField(field: any, direction: any): void;
    /**
     * To store searching params in browser search
     * @param {Object} params список параметров, который будет добавлен в search строку браузера
     * @param {Function} callback функция обработки текущих search параметров, можно использовать для фильтрации
     * @private
     */
    _navigate(params: any, callback?: any): void;
}
//# sourceMappingURL=AbstractProvider.d.ts.map