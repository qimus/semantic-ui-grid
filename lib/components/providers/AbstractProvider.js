"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_SORT_DIR = void 0;

var _qs = _interopRequireDefault(require("qs"));

var _utils = require("../utils/utils");

var _index = require("../../index");

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

var AbstractProvider =
/*#__PURE__*/
function () {
  function AbstractProvider() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
      return this.getActivePage() * this.getItems().length + _index.history.location.search;
    }
    /**
     * Возвращает search параметры в виде объекта
     * @returns {Object}
     */

  }, {
    key: "getSearchParams",
    value: function getSearchParams() {
      var search = _index.history.location.search;

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

      if (!direction) {
        delete sort[field];
      } else {
        sort[field] = direction;
      }

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
        queryParams = callback(_objectSpread({}, queryParams));
      }

      var search = _qs.default.stringify(_objectSpread({}, queryParams, params));

      _index.history.push("".concat(_index.history.location.pathname, "?").concat(search));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU09SVF9ESVIiLCJTT1JUX0FTQyIsIkFic3RyYWN0UHJvdmlkZXIiLCJwYXJhbXMiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsInBlclBhZ2UiLCJzZXRQZXJQYWdlIiwicGFnZVBhcmFtTmFtZSIsInBhZ2VQYXJhbSIsImxpbWl0UGFyYW1OYW1lIiwibGltaXRQYXJhbSIsInBhZ2VMaW1pdHMiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsIk1hdGgiLCJjZWlsIiwiZ2V0VG90YWxDb3VudCIsInBhZ2UiLCJnZXRTZWFyY2hQYXJhbSIsImRlZmF1bHRQYWdlIiwiZ2V0VG90YWxQYWdlcyIsIl9uYXZpZ2F0ZSIsInZhbHVlIiwiZGVmYXVsdExpbWl0IiwibWluIiwibWF4VmFsIiwibWF4IiwibGltaXQiLCJnZXRJdGVtcyIsImxlbmd0aCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0ciIsInFzIiwicGFyc2UiLCJwYXJhbU5hbWUiLCJkZWZhdWx0VmFsdWUiLCJnZXRTZWFyY2hQYXJhbXMiLCJxdWVyeVBhcmFtcyIsInNvcnQiLCJwYXJzZWQiLCJzcGxpdCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiaW5jbHVkZXMiLCJTT1JUX01BUCIsImdldFNvcnQiLCJmZXRjaCIsImNhbGxiYWNrIiwic3RyaW5naWZ5IiwicHVzaCIsInBhdGhuYW1lIiwiX3BhZ2VMaW1pdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZPLElBQU1BLGdCQUFnQixHQUFHQyxlQUF6Qjs7O0lBWXVCQyxnQjs7O0FBVzFCLDhCQUFxRDtBQUFBLFFBQS9CQyxNQUErQix1RUFBSixFQUFJOztBQUFBOztBQUFBLHVDQVZqQyxNQVVpQzs7QUFBQSx5Q0FSL0Is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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCTixhQUFPSixJQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7aUNBS2FHLEssRUFBT0MsUyxFQUFXO0FBQzNCLFVBQUlKLElBQUksR0FBRyxLQUFLTyxPQUFMLEVBQVg7O0FBQ0EsVUFBSSxDQUFDSCxTQUFMLEVBQWdCO0FBQ1osZUFBT0osSUFBSSxDQUFDRyxLQUFELENBQVg7QUFDSCxPQUZELE1BRU87QUFDSEgsUUFBQUEsSUFBSSxDQUFDRyxLQUFELENBQUosR0FBY0MsU0FBZDtBQUNIOztBQUNELFdBQUtJLEtBQUwsQ0FBVztBQUFFUixRQUFBQSxJQUFJLEVBQUpBO0FBQUYsT0FBWDs7QUFDQSxXQUFLbkIsU0FBTCxDQUFlO0FBQ1htQixRQUFBQSxJQUFJLEVBQUUseUJBQWFBLElBQWI7QUFESyxPQUFmO0FBR0g7QUFFRDs7Ozs7Ozs7OzhCQU1VdEMsTSxFQUF5QjtBQUFBLFVBQWpCK0MsUUFBaUIsdUVBQU4sSUFBTTtBQUMvQixVQUFJVixXQUFXLEdBQUcsS0FBS0QsZUFBTCxFQUFsQjs7QUFFQSxVQUFJVyxRQUFKLEVBQWM7QUFDVlYsUUFBQUEsV0FBVyxHQUFHVSxRQUFRLG1CQUFNVixXQUFOLEVBQXRCO0FBQ0g7O0FBRUQsVUFBSVAsTUFBTSxHQUFHRSxZQUFHZ0IsU0FBSCxtQkFBbUJYLFdBQW5CLEVBQW1DckMsTUFBbkMsRUFBYjs7QUFFQTRCLHFCQUFRcUIsSUFBUixXQUNPckIsZUFBUUMsUUFBUixDQUFpQnFCLFFBRHhCLGNBQ29DcEIsTUFEcEM7QUFHSDs7O3dCQTNMMEI7QUFDdkIsYUFBTyxLQUFLcUIsV0FBWjtBQUNILEs7c0JBRWMvQixLLEVBQWlCO0FBQzVCLFdBQUsrQixXQUFMLEdBQW1CL0IsS0FBbkI7QUFDSDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG5pbXBvcnQge1xuICAgIFNPUlRfQVNDLFxuICAgIFNPUlRfTUFQLFxuICAgIHNvcnRUb1N0cmluZ1xufSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU09SVF9ESVIgPSBTT1JUX0FTQztcblxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgdHlwZSBQcm92aWRlclNldHRpbmdzID0ge1xuICAgIGFjdGl2ZVBhZ2U/OiBudW1iZXIsXG4gICAgcGVyUGFnZT86IG51bWJlcixcbiAgICBwYWdlUGFyYW1OYW1lPzogc3RyaW5nLFxuICAgIGxpbWl0UGFyYW1OYW1lPzogc3RyaW5nLFxuICAgIHBhZ2VMaW1pdHM/OiBudW1iZXJbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQcm92aWRlciB7XG4gICAgcHJpdmF0ZSBwYWdlUGFyYW0gPSAncGFnZSc7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRQYWdlID0gMTtcblxuICAgIHByaXZhdGUgbGltaXRQYXJhbSA9ICdsaW1pdCc7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRMaW1pdCA9IDEwO1xuXG4gICAgcHJpdmF0ZSBfcGFnZUxpbWl0czogbnVtYmVyW10gPSBbIDEwLCAzMCwgNTAsIDEwMCBdO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHBhcmFtczogUHJvdmlkZXJTZXR0aW5ncyA9IHt9KSB7XG4gICAgICAgIGlmIChwYXJhbXMuYWN0aXZlUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlKHBhcmFtcy5hY3RpdmVQYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucGVyUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQZXJQYWdlKHBhcmFtcy5wZXJQYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucGFnZVBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlUGFyYW0gPSBwYXJhbXMucGFnZVBhcmFtTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubGltaXRQYXJhbU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubGltaXRQYXJhbSA9IHBhcmFtcy5saW1pdFBhcmFtTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucGFnZUxpbWl0cykge1xuICAgICAgICAgICAgdGhpcy5wYWdlTGltaXRzID0gcGFyYW1zLnBhZ2VMaW1pdHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgcGFnZUxpbWl0cygpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlTGltaXRzO1xuICAgIH1cblxuICAgIHNldCBwYWdlTGltaXRzKHZhbHVlOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9wYWdlTGltaXRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldFRvdGFsQ291bnQoKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YHQutCy0L7Qt9C90L7QuSDQvdC+0LzQtdGAINGB0YLRgNC+0LrQuFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTdGFydEluZGV4KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aXZlUGFnZSgpIC0gMSkgKiB0aGlzLmdldFBlclBhZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQstGB0LXQs9C+INC60L7Qu9C40YfQtdGB0YLQstC+INGB0YLRgNCw0L3QuNGGXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRvdGFsUGFnZXMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5nZXRUb3RhbENvdW50KCkgLyB0aGlzLmdldFBlclBhZ2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LzQsNGB0YHQuNCyINC00LDQvdC90YvRhSDQtNC70Y8g0LLRi9Cy0L7QtNCwINC90LAg0YHRgtGA0LDQvdC40YbQtVxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldEl0ZW1zKCk7XG5cbiAgICAvKipcbiAgICAgKiDQntCx0L3QvtCy0LjRgtGMINC00LDQvdC90YvQtVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGZldGNoKHBhcmFtcz86IGFueSk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvdC+0LzQtdGAINCw0LrRgtC40LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbRi1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRBY3RpdmVQYWdlKCkge1xuICAgICAgICBsZXQgcGFnZSA9IHRoaXMuZ2V0U2VhcmNoUGFyYW0odGhpcy5wYWdlUGFyYW0sIHRoaXMuZGVmYXVsdFBhZ2UpO1xuICAgICAgICBpZiAocGFnZSA+IHRoaXMuZ2V0VG90YWxQYWdlcygpKSB7XG4gICAgICAgICAgICBwYWdlID0gdGhpcy5nZXRUb3RhbFBhZ2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQo9GB0YLQsNC90L7QstC40YLRjCDQvdC+0LzQtdGAINCw0LrRgtC40LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbRi1xuICAgICAqIEBwYXJhbSBwYWdlXG4gICAgICogQHJldHVybiB7QWJzdHJhY3RQcm92aWRlcn1cbiAgICAgKi9cbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5fbmF2aWdhdGUoeyBbdGhpcy5wYWdlUGFyYW1dOiBwYWdlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQmtC+0LvQuNGH0LXRgdGC0LLQviDRgdGC0YDQvtC6LCDQutC+0YLQvtGA0YvQtSDQstGL0LLQvtC00Y/RgtGB0Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFBlclBhZ2UoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9ICt0aGlzLmdldFNlYXJjaFBhcmFtKHRoaXMubGltaXRQYXJhbSwgdGhpcy5kZWZhdWx0TGltaXQpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oLi4udGhpcy5wYWdlTGltaXRzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWF4VmFsID0gTWF0aC5tYXgoLi4udGhpcy5wYWdlTGltaXRzKTtcbiAgICAgICAgaWYgKHZhbHVlID4gbWF4VmFsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1heFZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwZXJQYWdlXG4gICAgICogQHJldHVybiB7QWJzdHJhY3RQcm92aWRlcn1cbiAgICAgKi9cbiAgICBzZXRQZXJQYWdlKHBlclBhZ2UpIHtcbiAgICAgICAgdGhpcy5fbmF2aWdhdGUoeyBsaW1pdDogcGVyUGFnZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0VW5pcUtleSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldEFjdGl2ZVBhZ2UoKSAqIHRoaXMuZ2V0SXRlbXMoKS5sZW5ndGgpICsgaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIgc2VhcmNoINC/0LDRgNCw0LzQtdGC0YDRiyDQsiDQstC40LTQtSDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0U2VhcmNoUGFyYW1zKCkge1xuICAgICAgICBsZXQgeyBzZWFyY2ggfSA9IGhpc3RvcnkubG9jYXRpb247XG4gICAgICAgIGlmICghc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaCA9IHNlYXJjaC5zdWJzdHIoMSk7XG5cbiAgICAgICAgcmV0dXJuIHFzLnBhcnNlKHNlYXJjaCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L/QsNGA0LDQvNC10YLRgCDQuNC3INGB0YLRgNC+0LrQuCDQv9C+0LjRgdC60LAg0LHRgNCw0YPQt9C10YDQsFxuICAgICAqIEBwYXJhbSBwYXJhbU5hbWVcbiAgICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58Kn1cbiAgICAgKi9cbiAgICBnZXRTZWFyY2hQYXJhbShwYXJhbU5hbWUsIGRlZmF1bHRWYWx1ZSA9IG51bGwpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0U2VhcmNoUGFyYW1zKCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXJhbXNbcGFyYW1OYW1lXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zW3BhcmFtTmFtZV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LHRitC10LrRgiDRgSDQv9Cw0YDQsNC80LXRgtGA0LDQvNC4INGB0L7RgNGC0LjRgNC+0LLQutC4XG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IHRoaXMuZ2V0U2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnlQYXJhbXNbJ3NvcnQnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzb3J0ID0ge30sXG4gICAgICAgICAgICBwYXJzZWQgPSBxdWVyeVBhcmFtc1snc29ydCddLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgcGFyc2VkKSB7XG4gICAgICAgICAgICBsZXQgZmllbGQsIGRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmIChbICcrJywgJy0nIF0uaW5jbHVkZXModmFsdWUuc3Vic3RyKDAsIDEpKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IFNPUlRfTUFQW3ZhbHVlLnN1YnN0cigwLCAxKV07XG4gICAgICAgICAgICAgICAgZmllbGQgPSB2YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gREVGQVVMVF9TT1JUX0RJUjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc29ydFtmaWVsZF0gPSBkaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc29ydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQo9GB0YLQsNC90L7QstC40YLRjCDRgdC+0YDRgtC40YDQvtCy0LrRgyDQv9C+INC/0L7Qu9GOXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvblxuICAgICAqL1xuICAgIHNldFNvcnRGaWVsZChmaWVsZCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBzb3J0ID0gdGhpcy5nZXRTb3J0KCk7XG4gICAgICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBkZWxldGUgc29ydFtmaWVsZF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvcnRbZmllbGRdID0gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmV0Y2goeyBzb3J0IH0pO1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBzb3J0OiBzb3J0VG9TdHJpbmcoc29ydClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JjQt9C80LXQvdC10L3QuNC1INGB0YLRgNC+0LrQuCDQv9C+0LjRgdC60LBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zINGB0L/QuNGB0L7QuiDQv9Cw0YDQsNC80LXRgtGA0L7Qsiwg0LrQvtGC0L7RgNGL0Lkg0LHRg9C00LXRgiDQtNC+0LHQsNCy0LvQtdC9INCyIHNlYXJjaCDRgdGC0YDQvtC60YMg0LHRgNCw0YPQt9C10YDQsFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrINGE0YPQvdC60YbQuNGPINC+0LHRgNCw0LHQvtGC0LrQuCDRgtC10LrRg9GJ0LjRhSBzZWFyY2gg0L/QsNGA0LDQvNC10YLRgNC+0LIsINC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX25hdmlnYXRlKHBhcmFtcywgY2FsbGJhY2sgPSBudWxsKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IHRoaXMuZ2V0U2VhcmNoUGFyYW1zKCk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtcyA9IGNhbGxiYWNrKHsgLi4ucXVlcnlQYXJhbXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VhcmNoID0gcXMuc3RyaW5naWZ5KHsgLi4uIHF1ZXJ5UGFyYW1zLCAuLi5wYXJhbXMgfSk7XG5cbiAgICAgICAgaGlzdG9yeS5wdXNoKFxuICAgICAgICAgICAgYCR7aGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZX0/JHtzZWFyY2h9YFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==