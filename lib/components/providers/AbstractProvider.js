"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHistory = exports.DEFAULT_SORT_DIR = void 0;

var _qs = _interopRequireDefault(require("qs"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_SORT_DIR = _utils.SORT_ASC;
exports.DEFAULT_SORT_DIR = DEFAULT_SORT_DIR;
var history = {
  location: window.location,
  push: function push(route) {}
};

var setHistory = function setHistory(hist) {
  history = hist;
};

exports.setHistory = setHistory;

var AbstractProvider =
/*#__PURE__*/
function () {
  function AbstractProvider(params) {
    _classCallCheck(this, AbstractProvider);

    _defineProperty(this, "pageParam", 'page');

    _defineProperty(this, "defaultPage", 1);

    _defineProperty(this, "limitParam", 'limit');

    _defineProperty(this, "defaultLimit", 10);

    _defineProperty(this, "_pageLimits", [10, 30, 50, 100]);

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

  _createClass(AbstractProvider, [{
    key: "getStartIndex",

    /**
     * Возвращает сквозной номер строки
     * @return {number}
     */
    value: function getStartIndex() {
      return (this.getActivePage() - 1) * this.getPerPage();
    }
    /**
     * Возвращает всего количество страниц
     * @return {number}
     */

  }, {
    key: "getTotalPages",
    value: function getTotalPages() {
      return Math.ceil(this.getTotalCount() / this.getPerPage());
    }
    /**
     * Возвращает массив данных для вывода на странице
     * @return {array}
     */

  }, {
    key: "getActivePage",

    /**
     * Возвращает номер активной страницы
     * @return {number}
     */
    value: function getActivePage() {
      var page = this.getSearchParam(this.pageParam, this.defaultPage);

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

  }, {
    key: "setActivePage",
    value: function setActivePage(page) {
      this._navigate(_defineProperty({}, this.pageParam, page));

      return this;
    }
    /**
     * Количество строк, которые выводятся на странице
     * @return {number}
     */

  }, {
    key: "getPerPage",
    value: function getPerPage() {
      var value = +this.getSearchParam(this.limitParam, this.defaultLimit);

      if (!value) {
        return Math.min.apply(Math, _toConsumableArray(this.pageLimits));
      }

      var maxVal = Math.max.apply(Math, _toConsumableArray(this.pageLimits));

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

  }, {
    key: "setPerPage",
    value: function setPerPage(perPage) {
      this._navigate({
        limit: perPage
      });

      return this;
    }
  }, {
    key: "getUniqKey",
    value: function getUniqKey() {
      return this.getActivePage() * this.getItems().length + history.location.search;
    }
    /**
     * Возвращает search параметры в виде объекта
     * @returns {Object}
     */

  }, {
    key: "getSearchParams",
    value: function getSearchParams() {
      var search = history.location.search;

      if (!search.length) {
        return {};
      }

      search = search.substr(1);
      return _qs.default.parse(search);
    }
    /**
     * Возвращает параметр из строки поиска браузера
     * @param paramName
     * @param defaultValue
     * @returns {boolean|*}
     */

  }, {
    key: "getSearchParam",
    value: function getSearchParam(paramName) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var params = this.getSearchParams();
      return typeof params[paramName] !== 'undefined' && params[paramName] || defaultValue;
    }
    /**
     * Возвращает объект с параметрами сортировки
     * @return {Object}
     */

  }, {
    key: "getSort",
    value: function getSort() {
      var queryParams = this.getSearchParams();

      if (typeof queryParams['sort'] === 'undefined') {
        return {};
      }

      var sort = {},
          parsed = queryParams['sort'].split(',');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = parsed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          var field = void 0,
              direction = void 0;

          if (['+', '-'].includes(value.substr(0, 1))) {
            direction = _utils.SORT_MAP[value.substr(0, 1)];
            field = value.substr(1);
          } else {
            field = value;
            direction = DEFAULT_SORT_DIR;
          }

          sort[field] = direction;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return sort;
    }
    /**
     * Установить сортировку по полю
     * @param {String} field
     * @param {String} direction
     */

  }, {
    key: "setSortField",
    value: function setSortField(field, direction) {
      var sort = this.getSort();
      sort[field] = direction;
      this.fetch({
        sort: sort
      });

      this._navigate({
        sort: (0, _utils.sortToString)(sort)
      });
    }
    /**
     * Изменение строки поиска
     * @param {Object} params список параметров, который будет добавлен в search строку браузера
     * @param {Function} callback функция обработки текущих search параметров, можно использовать для фильтрации
     * @private
     */

  }, {
    key: "_navigate",
    value: function _navigate(params) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var queryParams = this.getSearchParams();

      if (callback) {
        queryParams = callback(queryParams);
      }

      var search = _qs.default.stringify(_objectSpread({}, queryParams, params));

      history.push("".concat(history.location.pathname, "?").concat(search));
    }
  }, {
    key: "pageLimits",
    get: function get() {
      return this._pageLimits;
    },
    set: function set(value) {
      this._pageLimits = value;
    }
    /**
     * @return {number}
     */

  }]);

  return AbstractProvider;
}();

exports.default = AbstractProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU09SVF9ESVIiLCJTT1JUX0FTQyIsImhpc3RvcnkiLCJsb2NhdGlvbiIsIndpbmRvdyIsInB1c2giLCJyb3V0ZSIsInNldEhpc3RvcnkiLCJoaXN0IiwiQWJzdHJhY3RQcm92aWRlciIsInBhcmFtcyIsImFjdGl2ZVBhZ2UiLCJzZXRBY3RpdmVQYWdlIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJwYWdlUGFyYW1OYW1lIiwicGFnZVBhcmFtIiwibGltaXRQYXJhbU5hbWUiLCJsaW1pdFBhcmFtIiwicGFnZUxpbWl0cyIsImdldEFjdGl2ZVBhZ2UiLCJnZXRQZXJQYWdlIiwiTWF0aCIsImNlaWwiLCJnZXRUb3RhbENvdW50IiwicGFnZSIsImdldFNlYXJjaFBhcmFtIiwiZGVmYXVsdFBhZ2UiLCJnZXRUb3RhbFBhZ2VzIiwiX25hdmlnYXRlIiwidmFsdWUiLCJkZWZhdWx0TGltaXQiLCJtaW4iLCJtYXhWYWwiLCJtYXgiLCJsaW1pdCIsImdldEl0ZW1zIiwibGVuZ3RoIiwic2VhcmNoIiwic3Vic3RyIiwicXMiLCJwYXJzZSIsInBhcmFtTmFtZSIsImRlZmF1bHRWYWx1ZSIsImdldFNlYXJjaFBhcmFtcyIsInF1ZXJ5UGFyYW1zIiwic29ydCIsInBhcnNlZCIsInNwbGl0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJpbmNsdWRlcyIsIlNPUlRfTUFQIiwiZ2V0U29ydCIsImZldGNoIiwiY2FsbGJhY2siLCJzdHJpbmdpZnkiLCJwYXRobmFtZSIsIl9wYWdlTGltaXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNTyxJQUFNQSxnQkFBZ0IsR0FBR0MsZUFBekI7O0FBT1AsSUFBSUMsT0FBeUIsR0FBRztBQUM1QkMsRUFBQUEsUUFBUSxFQUFFQyxNQUFNLENBQUNELFFBRFc7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WjtBQUNILEs7c0JBRWM1QixLLEVBQWlCO0FBQzVCLFdBQUs0QixXQUFMLEdBQW1CNUIsS0FBbkI7QUFDSDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG5pbXBvcnQge1xuICAgIFNPUlRfQVNDLFxuICAgIFNPUlRfTUFQLFxuICAgIHNvcnRUb1N0cmluZ1xufSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU09SVF9ESVIgPSBTT1JUX0FTQztcblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5SW50ZXJmYWNlIHtcbiAgICBsb2NhdGlvbjogYW55O1xuICAgIHB1c2gocm91dGU6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmxldCBoaXN0b3J5OiBIaXN0b3J5SW50ZXJmYWNlID0ge1xuICAgIGxvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24sXG4gICAgcHVzaChyb3V0ZTogc3RyaW5nKSB7fVxufTtcblxuZXhwb3J0IGNvbnN0IHNldEhpc3RvcnkgPSAoaGlzdDogSGlzdG9yeUludGVyZmFjZSkgPT4ge1xuICAgIGhpc3RvcnkgPSBoaXN0O1xufTtcblxuZXhwb3J0IHR5cGUgUHJvdmlkZXJTZXR0aW5ncyA9IHtcbiAgICBhY3RpdmVQYWdlPzogbnVtYmVyLFxuICAgIHBlclBhZ2U/OiBudW1iZXIsXG4gICAgcGFnZVBhcmFtTmFtZT86IHN0cmluZyxcbiAgICBsaW1pdFBhcmFtTmFtZT86IHN0cmluZyxcbiAgICBwYWdlTGltaXRzPzogbnVtYmVyW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UHJvdmlkZXIge1xuICAgIHByaXZhdGUgcGFnZVBhcmFtID0gJ3BhZ2UnO1xuXG4gICAgcHJpdmF0ZSBkZWZhdWx0UGFnZSA9IDE7XG5cbiAgICBwcml2YXRlIGxpbWl0UGFyYW0gPSAnbGltaXQnO1xuXG4gICAgcHJpdmF0ZSBkZWZhdWx0TGltaXQgPSAxMDtcblxuICAgIHByaXZhdGUgX3BhZ2VMaW1pdHM6IG51bWJlcltdID0gWyAxMCwgMzAsIDUwLCAxMDAgXTtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihwYXJhbXM6IFByb3ZpZGVyU2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5hY3RpdmVQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2UocGFyYW1zLmFjdGl2ZVBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wZXJQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBlclBhZ2UocGFyYW1zLnBlclBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wYWdlUGFyYW1OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VQYXJhbSA9IHBhcmFtcy5wYWdlUGFyYW1OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5saW1pdFBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5saW1pdFBhcmFtID0gcGFyYW1zLmxpbWl0UGFyYW1OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wYWdlTGltaXRzKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VMaW1pdHMgPSBwYXJhbXMucGFnZUxpbWl0cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwYWdlTGltaXRzKCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW1pdHM7XG4gICAgfVxuXG4gICAgc2V0IHBhZ2VMaW1pdHModmFsdWU6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW1pdHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0VG90YWxDb3VudCgpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgdC60LLQvtC30L3QvtC5INC90L7QvNC10YAg0YHRgtGA0L7QutC4XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFN0YXJ0SW5kZXgoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRBY3RpdmVQYWdlKCkgLSAxKSAqIHRoaXMuZ2V0UGVyUGFnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINCy0YHQtdCz0L4g0LrQvtC70LjRh9C10YHRgtCy0L4g0YHRgtGA0LDQvdC40YZcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VG90YWxQYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmdldFRvdGFsQ291bnQoKSAvIHRoaXMuZ2V0UGVyUGFnZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvNCw0YHRgdC40LIg0LTQsNC90L3Ri9GFINC00LvRjyDQstGL0LLQvtC00LAg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0SXRlbXMoKTtcblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNGC0Ywg0LTQsNC90L3Ri9C1XG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgZmV0Y2gocGFyYW1zPzogYW55KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90L7QvNC10YAg0LDQutGC0LjQstC90L7QuSDRgdGC0YDQsNC90LjRhtGLXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEFjdGl2ZVBhZ2UoKSB7XG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5nZXRTZWFyY2hQYXJhbSh0aGlzLnBhZ2VQYXJhbSwgdGhpcy5kZWZhdWx0UGFnZSk7XG4gICAgICAgIGlmIChwYWdlID4gdGhpcy5nZXRUb3RhbFBhZ2VzKCkpIHtcbiAgICAgICAgICAgIHBhZ2UgPSB0aGlzLmdldFRvdGFsUGFnZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINC90L7QvNC10YAg0LDQutGC0LjQstC90L7QuSDRgdGC0YDQsNC90LjRhtGLXG4gICAgICogQHBhcmFtIHBhZ2VcbiAgICAgKiBAcmV0dXJuIHtBYnN0cmFjdFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHNldEFjdGl2ZVBhZ2UocGFnZSkge1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh7IFt0aGlzLnBhZ2VQYXJhbV06IHBhZ2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCa0L7Qu9C40YfQtdGB0YLQstC+INGB0YLRgNC+0LosINC60L7RgtC+0YDRi9C1INCy0YvQstC+0LTRj9GC0YHRjyDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0UGVyUGFnZSgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gK3RoaXMuZ2V0U2VhcmNoUGFyYW0odGhpcy5saW1pdFBhcmFtLCB0aGlzLmRlZmF1bHRMaW1pdCk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbiguLi50aGlzLnBhZ2VMaW1pdHMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtYXhWYWwgPSBNYXRoLm1heCguLi50aGlzLnBhZ2VMaW1pdHMpO1xuICAgICAgICBpZiAodmFsdWUgPiBtYXhWYWwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWF4VmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBlclBhZ2VcbiAgICAgKiBAcmV0dXJuIHtBYnN0cmFjdFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHNldFBlclBhZ2UocGVyUGFnZSkge1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh7IGxpbWl0OiBwZXJQYWdlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRVbmlxS2V5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aXZlUGFnZSgpICogdGhpcy5nZXRJdGVtcygpLmxlbmd0aCkgKyBoaXN0b3J5LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiBzZWFyY2gg0L/QsNGA0LDQvNC10YLRgNGLINCyINCy0LjQtNC1INC+0LHRitC10LrRgtCwXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRTZWFyY2hQYXJhbXMoKSB7XG4gICAgICAgIGxldCB7IHNlYXJjaCB9ID0gaGlzdG9yeS5sb2NhdGlvbjtcbiAgICAgICAgaWYgKCFzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoID0gc2VhcmNoLnN1YnN0cigxKTtcblxuICAgICAgICByZXR1cm4gcXMucGFyc2Uoc2VhcmNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQv9Cw0YDQsNC80LXRgtGAINC40Lcg0YHRgtGA0L7QutC4INC/0L7QuNGB0LrQsCDQsdGA0LDRg9C30LXRgNCwXG4gICAgICogQHBhcmFtIHBhcmFtTmFtZVxuICAgICAqIEBwYXJhbSBkZWZhdWx0VmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxuICAgICAqL1xuICAgIGdldFNlYXJjaFBhcmFtKHBhcmFtTmFtZSwgZGVmYXVsdFZhbHVlID0gbnVsbCkge1xuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRTZWFyY2hQYXJhbXMoKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHBhcmFtc1twYXJhbU5hbWVdICE9PSAndW5kZWZpbmVkJyAmJiBwYXJhbXNbcGFyYW1OYW1lXSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCINGBINC/0LDRgNCw0LzQtdGC0YDQsNC80Lgg0YHQvtGA0YLQuNGA0L7QstC60LhcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0U29ydCgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5nZXRTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVBhcmFtc1snc29ydCddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvcnQgPSB7fSxcbiAgICAgICAgICAgIHBhcnNlZCA9IHF1ZXJ5UGFyYW1zWydzb3J0J10uc3BsaXQoJywnKTtcblxuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBwYXJzZWQpIHtcbiAgICAgICAgICAgIGxldCBmaWVsZCwgZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKFsgJysnLCAnLScgXS5pbmNsdWRlcyh2YWx1ZS5zdWJzdHIoMCwgMSkpKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gU09SVF9NQVBbdmFsdWUuc3Vic3RyKDAsIDEpXTtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBERUZBVUxUX1NPUlRfRElSO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3J0W2ZpZWxkXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3J0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINGB0L7RgNGC0LjRgNC+0LLQutGDINC/0L4g0L/QvtC70Y5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICovXG4gICAgc2V0U29ydEZpZWxkKGZpZWxkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IHNvcnQgPSB0aGlzLmdldFNvcnQoKTtcbiAgICAgICAgc29ydFtmaWVsZF0gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZmV0Y2goeyBzb3J0IH0pO1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBzb3J0OiBzb3J0VG9TdHJpbmcoc29ydClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JjQt9C80LXQvdC10L3QuNC1INGB0YLRgNC+0LrQuCDQv9C+0LjRgdC60LBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zINGB0L/QuNGB0L7QuiDQv9Cw0YDQsNC80LXRgtGA0L7Qsiwg0LrQvtGC0L7RgNGL0Lkg0LHRg9C00LXRgiDQtNC+0LHQsNCy0LvQtdC9INCyIHNlYXJjaCDRgdGC0YDQvtC60YMg0LHRgNCw0YPQt9C10YDQsFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrINGE0YPQvdC60YbQuNGPINC+0LHRgNCw0LHQvtGC0LrQuCDRgtC10LrRg9GJ0LjRhSBzZWFyY2gg0L/QsNGA0LDQvNC10YLRgNC+0LIsINC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX25hdmlnYXRlKHBhcmFtcywgY2FsbGJhY2sgPSBudWxsKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IHRoaXMuZ2V0U2VhcmNoUGFyYW1zKCk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtcyA9IGNhbGxiYWNrKHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWFyY2ggPSBxcy5zdHJpbmdpZnkoeyAuLi4gcXVlcnlQYXJhbXMsIC4uLnBhcmFtcyB9KTtcblxuICAgICAgICBoaXN0b3J5LnB1c2goXG4gICAgICAgICAgICBgJHtoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lfT8ke3NlYXJjaH1gXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19