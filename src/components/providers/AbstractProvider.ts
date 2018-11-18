import qs from 'qs'

import {
    SORT_ASC,
    SORT_MAP,
    sortToString
} from '../utils/utils'

export const DEFAULT_SORT_DIR = SORT_ASC;

import { history } from '../../index'

export type ProviderSettings = {
    activePage?: number,
    perPage?: number,
    pageParamName?: string,
    limitParamName?: string,
    pageLimits?: number[]
};

export default abstract class AbstractProvider {
    private pageParam = 'page';

    private defaultPage = 1;

    private limitParam = 'limit';

    private defaultLimit = 10;

    private _pageLimits: number[] = [ 10, 30, 50, 100 ];

    protected constructor(params: ProviderSettings) {
        if (params.activePage) {
            this.setActivePage(params.activePage);
        }

        if (params.perPage) {
            this.setPerPage(params.perPage);
        }

        if (params.pageParamName) {
            this.pageParam = params.pageParamName;
        }

        if (params.limitParamName) {
            this.limitParam = params.limitParamName;
        }

        if (params.pageLimits) {
            this.pageLimits = params.pageLimits;
        }
    }

    get pageLimits(): number[] {
        return this._pageLimits;
    }

    set pageLimits(value: number[]) {
        this._pageLimits = value;
    }

    /**
     * @return {number}
     */
    abstract getTotalCount(): number;

    /**
     * Возвращает сквозной номер строки
     * @return {number}
     */
    getStartIndex() {
        return (this.getActivePage() - 1) * this.getPerPage();
    }

    /**
     * Возвращает всего количество страниц
     * @return {number}
     */
    getTotalPages() {
        return Math.ceil(this.getTotalCount() / this.getPerPage());
    }

    /**
     * Возвращает массив данных для вывода на странице
     * @return {array}
     */
    abstract getItems();

    /**
     * Обновить данные
     * @param params
     * @private
     */
    abstract fetch(params?: any): void;

    /**
     * Возвращает номер активной страницы
     * @return {number}
     */
    getActivePage() {
        let page = this.getSearchParam(this.pageParam, this.defaultPage);
        if (page > this.getTotalPages()) {
            page = this.getTotalPages();
        }

        return page;
    }

    /**
     * Установить номер активной страницы
     * @param page
     * @return {AbstractProvider}
     */
    setActivePage(page) {
        this._navigate({ [this.pageParam]: page });
        return this;
    }

    /**
     * Количество строк, которые выводятся на странице
     * @return {number}
     */
    getPerPage() {
        let value = +this.getSearchParam(this.limitParam, this.defaultLimit);
        if (!value) {
            return Math.min(...this.pageLimits);
        }
        let maxVal = Math.max(...this.pageLimits);
        if (value > maxVal) {
            value = maxVal;
        }

        return value;
    }

    /**
     *
     * @param perPage
     * @return {AbstractProvider}
     */
    setPerPage(perPage) {
        this._navigate({ limit: perPage });
        return this;
    }

    getUniqKey() {
        return (this.getActivePage() * this.getItems().length) + history.location.search;
    }

    /**
     * Возвращает search параметры в виде объекта
     * @returns {Object}
     */
    getSearchParams() {
        let { search } = history.location;
        if (!search.length) {
            return {};
        }
        search = search.substr(1);

        return qs.parse(search);
    }

    /**
     * Возвращает параметр из строки поиска браузера
     * @param paramName
     * @param defaultValue
     * @returns {boolean|*}
     */
    getSearchParam(paramName, defaultValue = null) {
        let params = this.getSearchParams();

        return typeof params[paramName] !== 'undefined' && params[paramName] || defaultValue;
    }

    /**
     * Возвращает объект с параметрами сортировки
     * @return {Object}
     */
    getSort() {
        let queryParams = this.getSearchParams();
        if (typeof queryParams['sort'] === 'undefined') {
            return {};
        }

        let sort = {},
            parsed = queryParams['sort'].split(',');

        for (let value of parsed) {
            let field, direction;
            if ([ '+', '-' ].includes(value.substr(0, 1))) {
                direction = SORT_MAP[value.substr(0, 1)];
                field = value.substr(1);
            } else {
                field = value;
                direction = DEFAULT_SORT_DIR;
            }

            sort[field] = direction;
        }

        return sort;
    }

    /**
     * Установить сортировку по полю
     * @param {String} field
     * @param {String} direction
     */
    setSortField(field, direction) {
        let sort = this.getSort();
        if (!direction) {
            delete sort[field]
        } else {
            sort[field] = direction;
        }
        this.fetch({ sort });
        this._navigate({
            sort: sortToString(sort)
        });
    }

    /**
     * Изменение строки поиска
     * @param {Object} params список параметров, который будет добавлен в search строку браузера
     * @param {Function} callback функция обработки текущих search параметров, можно использовать для фильтрации
     * @private
     */
    _navigate(params, callback = null) {
        let queryParams = this.getSearchParams();

        if (callback) {
            queryParams = callback(queryParams);
        }

        let search = qs.stringify({ ... queryParams, ...params });

        history.push(
            `${history.location.pathname}?${search}`
        );
    }
}
