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
        queryParams = callback(queryParams);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU09SVF9ESVIiLCJTT1JUX0FTQyIsIkFic3RyYWN0UHJvdmlkZXIiLCJwYXJhbXMiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsInBlclBhZ2UiLCJzZXRQZXJQYWdlIiwicGFnZVBhcmFtTmFtZSIsInBhZ2VQYXJhbSIsImxpbWl0UGFyYW1OYW1lIiwibGltaXRQYXJhbSIsInBhZ2VMaW1pdHMiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsIk1hdGgiLCJjZWlsIiwiZ2V0VG90YWxDb3VudCIsInBhZ2UiLCJnZXRTZWFyY2hQYXJhbSIsImRlZmF1bHRQYWdlIiwiZ2V0VG90YWxQYWdlcyIsIl9uYXZpZ2F0ZSIsInZhbHVlIiwiZGVmYXVsdExpbWl0IiwibWluIiwibWF4VmFsIiwibWF4IiwibGltaXQiLCJnZXRJdGVtcyIsImxlbmd0aCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0ciIsInFzIiwicGFyc2UiLCJwYXJhbU5hbWUiLCJkZWZhdWx0VmFsdWUiLCJnZXRTZWFyY2hQYXJhbXMiLCJxdWVyeVBhcmFtcyIsInNvcnQiLCJwYXJzZWQiLCJzcGxpdCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiaW5jbHVkZXMiLCJTT1JUX01BUCIsImdldFNvcnQiLCJmZXRjaCIsImNhbGxiYWNrIiwic3RyaW5naWZ5IiwicHVzaCIsInBhdGhuYW1lIiwiX3BhZ2VMaW1pdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZPLElBQU1BLGdCQUFnQixHQUFHQyxlQUF6Qjs7O0lBWXVCQyxnQjs7O0FBVzFCLDhCQUFxRDtBQUFBLFFBQS9CQyxNQUErQix1RUFBSixFQUFJOztBQUFBOztBQUFBLHVDQVZqQyxNQVVpQzs7QUFBQSx5Q0FSL0Is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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCTixhQUFPSixJQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7aUNBS2FHLEssRUFBT0MsUyxFQUFXO0FBQzNCLFVBQUlKLElBQUksR0FBRyxLQUFLTyxPQUFMLEVBQVg7O0FBQ0EsVUFBSSxDQUFDSCxTQUFMLEVBQWdCO0FBQ1osZUFBT0osSUFBSSxDQUFDRyxLQUFELENBQVg7QUFDSCxPQUZELE1BRU87QUFDSEgsUUFBQUEsSUFBSSxDQUFDRyxLQUFELENBQUosR0FBY0MsU0FBZDtBQUNIOztBQUNELFdBQUtJLEtBQUwsQ0FBVztBQUFFUixRQUFBQSxJQUFJLEVBQUpBO0FBQUYsT0FBWDs7QUFDQSxXQUFLbkIsU0FBTCxDQUFlO0FBQ1htQixRQUFBQSxJQUFJLEVBQUUseUJBQWFBLElBQWI7QUFESyxPQUFmO0FBR0g7QUFFRDs7Ozs7Ozs7OzhCQU1VdEMsTSxFQUF5QjtBQUFBLFVBQWpCK0MsUUFBaUIsdUVBQU4sSUFBTTtBQUMvQixVQUFJVixXQUFXLEdBQUcsS0FBS0QsZUFBTCxFQUFsQjs7QUFFQSxVQUFJVyxRQUFKLEVBQWM7QUFDVlYsUUFBQUEsV0FBVyxHQUFHVSxRQUFRLENBQUNWLFdBQUQsQ0FBdEI7QUFDSDs7QUFFRCxVQUFJUCxNQUFNLEdBQUdFLFlBQUdnQixTQUFILG1CQUFtQlgsV0FBbkIsRUFBbUNyQyxNQUFuQyxFQUFiOztBQUVBNEIscUJBQVFxQixJQUFSLFdBQ09yQixlQUFRQyxRQUFSLENBQWlCcUIsUUFEeEIsY0FDb0NwQixNQURwQztBQUdIOzs7d0JBM0wwQjtBQUN2QixhQUFPLEtBQUtxQixXQUFaO0FBQ0gsSztzQkFFYy9CLEssRUFBaUI7QUFDNUIsV0FBSytCLFdBQUwsR0FBbUIvQixLQUFuQjtBQUNIO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgZnJvbSAncXMnXG5cbmltcG9ydCB7XG4gICAgU09SVF9BU0MsXG4gICAgU09SVF9NQVAsXG4gICAgc29ydFRvU3RyaW5nXG59IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TT1JUX0RJUiA9IFNPUlRfQVNDO1xuXG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAnLi4vLi4vaW5kZXgnXG5cbmV4cG9ydCB0eXBlIFByb3ZpZGVyU2V0dGluZ3MgPSB7XG4gICAgYWN0aXZlUGFnZT86IG51bWJlcixcbiAgICBwZXJQYWdlPzogbnVtYmVyLFxuICAgIHBhZ2VQYXJhbU5hbWU/OiBzdHJpbmcsXG4gICAgbGltaXRQYXJhbU5hbWU/OiBzdHJpbmcsXG4gICAgcGFnZUxpbWl0cz86IG51bWJlcltdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFByb3ZpZGVyIHtcbiAgICBwcml2YXRlIHBhZ2VQYXJhbSA9ICdwYWdlJztcblxuICAgIHByaXZhdGUgZGVmYXVsdFBhZ2UgPSAxO1xuXG4gICAgcHJpdmF0ZSBsaW1pdFBhcmFtID0gJ2xpbWl0JztcblxuICAgIHByaXZhdGUgZGVmYXVsdExpbWl0ID0gMTA7XG5cbiAgICBwcml2YXRlIF9wYWdlTGltaXRzOiBudW1iZXJbXSA9IFsgMTAsIDMwLCA1MCwgMTAwIF07XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocGFyYW1zOiBQcm92aWRlclNldHRpbmdzID0ge30pIHtcbiAgICAgICAgaWYgKHBhcmFtcy5hY3RpdmVQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2UocGFyYW1zLmFjdGl2ZVBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wZXJQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBlclBhZ2UocGFyYW1zLnBlclBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wYWdlUGFyYW1OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VQYXJhbSA9IHBhcmFtcy5wYWdlUGFyYW1OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5saW1pdFBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5saW1pdFBhcmFtID0gcGFyYW1zLmxpbWl0UGFyYW1OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wYWdlTGltaXRzKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VMaW1pdHMgPSBwYXJhbXMucGFnZUxpbWl0cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwYWdlTGltaXRzKCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW1pdHM7XG4gICAgfVxuXG4gICAgc2V0IHBhZ2VMaW1pdHModmFsdWU6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW1pdHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0VG90YWxDb3VudCgpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgdC60LLQvtC30L3QvtC5INC90L7QvNC10YAg0YHRgtGA0L7QutC4XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFN0YXJ0SW5kZXgoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRBY3RpdmVQYWdlKCkgLSAxKSAqIHRoaXMuZ2V0UGVyUGFnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINCy0YHQtdCz0L4g0LrQvtC70LjRh9C10YHRgtCy0L4g0YHRgtGA0LDQvdC40YZcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VG90YWxQYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmdldFRvdGFsQ291bnQoKSAvIHRoaXMuZ2V0UGVyUGFnZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvNCw0YHRgdC40LIg0LTQsNC90L3Ri9GFINC00LvRjyDQstGL0LLQvtC00LAg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0SXRlbXMoKTtcblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNGC0Ywg0LTQsNC90L3Ri9C1XG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgZmV0Y2gocGFyYW1zPzogYW55KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90L7QvNC10YAg0LDQutGC0LjQstC90L7QuSDRgdGC0YDQsNC90LjRhtGLXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEFjdGl2ZVBhZ2UoKSB7XG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5nZXRTZWFyY2hQYXJhbSh0aGlzLnBhZ2VQYXJhbSwgdGhpcy5kZWZhdWx0UGFnZSk7XG4gICAgICAgIGlmIChwYWdlID4gdGhpcy5nZXRUb3RhbFBhZ2VzKCkpIHtcbiAgICAgICAgICAgIHBhZ2UgPSB0aGlzLmdldFRvdGFsUGFnZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINC90L7QvNC10YAg0LDQutGC0LjQstC90L7QuSDRgdGC0YDQsNC90LjRhtGLXG4gICAgICogQHBhcmFtIHBhZ2VcbiAgICAgKiBAcmV0dXJuIHtBYnN0cmFjdFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHNldEFjdGl2ZVBhZ2UocGFnZSkge1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh7IFt0aGlzLnBhZ2VQYXJhbV06IHBhZ2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCa0L7Qu9C40YfQtdGB0YLQstC+INGB0YLRgNC+0LosINC60L7RgtC+0YDRi9C1INCy0YvQstC+0LTRj9GC0YHRjyDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0UGVyUGFnZSgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gK3RoaXMuZ2V0U2VhcmNoUGFyYW0odGhpcy5saW1pdFBhcmFtLCB0aGlzLmRlZmF1bHRMaW1pdCk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbiguLi50aGlzLnBhZ2VMaW1pdHMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtYXhWYWwgPSBNYXRoLm1heCguLi50aGlzLnBhZ2VMaW1pdHMpO1xuICAgICAgICBpZiAodmFsdWUgPiBtYXhWYWwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWF4VmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBlclBhZ2VcbiAgICAgKiBAcmV0dXJuIHtBYnN0cmFjdFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHNldFBlclBhZ2UocGVyUGFnZSkge1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh7IGxpbWl0OiBwZXJQYWdlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRVbmlxS2V5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aXZlUGFnZSgpICogdGhpcy5nZXRJdGVtcygpLmxlbmd0aCkgKyBoaXN0b3J5LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiBzZWFyY2gg0L/QsNGA0LDQvNC10YLRgNGLINCyINCy0LjQtNC1INC+0LHRitC10LrRgtCwXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRTZWFyY2hQYXJhbXMoKSB7XG4gICAgICAgIGxldCB7IHNlYXJjaCB9ID0gaGlzdG9yeS5sb2NhdGlvbjtcbiAgICAgICAgaWYgKCFzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoID0gc2VhcmNoLnN1YnN0cigxKTtcblxuICAgICAgICByZXR1cm4gcXMucGFyc2Uoc2VhcmNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQv9Cw0YDQsNC80LXRgtGAINC40Lcg0YHRgtGA0L7QutC4INC/0L7QuNGB0LrQsCDQsdGA0LDRg9C30LXRgNCwXG4gICAgICogQHBhcmFtIHBhcmFtTmFtZVxuICAgICAqIEBwYXJhbSBkZWZhdWx0VmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxuICAgICAqL1xuICAgIGdldFNlYXJjaFBhcmFtKHBhcmFtTmFtZSwgZGVmYXVsdFZhbHVlID0gbnVsbCkge1xuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRTZWFyY2hQYXJhbXMoKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHBhcmFtc1twYXJhbU5hbWVdICE9PSAndW5kZWZpbmVkJyAmJiBwYXJhbXNbcGFyYW1OYW1lXSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCINGBINC/0LDRgNCw0LzQtdGC0YDQsNC80Lgg0YHQvtGA0YLQuNGA0L7QstC60LhcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0U29ydCgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5nZXRTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVBhcmFtc1snc29ydCddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvcnQgPSB7fSxcbiAgICAgICAgICAgIHBhcnNlZCA9IHF1ZXJ5UGFyYW1zWydzb3J0J10uc3BsaXQoJywnKTtcblxuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBwYXJzZWQpIHtcbiAgICAgICAgICAgIGxldCBmaWVsZCwgZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKFsgJysnLCAnLScgXS5pbmNsdWRlcyh2YWx1ZS5zdWJzdHIoMCwgMSkpKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gU09SVF9NQVBbdmFsdWUuc3Vic3RyKDAsIDEpXTtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBERUZBVUxUX1NPUlRfRElSO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3J0W2ZpZWxkXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3J0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINGB0L7RgNGC0LjRgNC+0LLQutGDINC/0L4g0L/QvtC70Y5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICovXG4gICAgc2V0U29ydEZpZWxkKGZpZWxkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IHNvcnQgPSB0aGlzLmdldFNvcnQoKTtcbiAgICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzb3J0W2ZpZWxkXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc29ydFtmaWVsZF0gPSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZXRjaCh7IHNvcnQgfSk7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlKHtcbiAgICAgICAgICAgIHNvcnQ6IHNvcnRUb1N0cmluZyhzb3J0KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQmNC30LzQtdC90LXQvdC40LUg0YHRgtGA0L7QutC4INC/0L7QuNGB0LrQsFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMg0YHQv9C40YHQvtC6INC/0LDRgNCw0LzQtdGC0YDQvtCyLCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINC00L7QsdCw0LLQu9C10L0g0LIgc2VhcmNoINGB0YLRgNC+0LrRgyDQsdGA0LDRg9C30LXRgNCwXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0L7QsdGA0LDQsdC+0YLQutC4INGC0LXQutGD0YnQuNGFIHNlYXJjaCDQv9Cw0YDQsNC80LXRgtGA0L7Qsiwg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQu9GPINGE0LjQu9GM0YLRgNCw0YbQuNC4XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbmF2aWdhdGUocGFyYW1zLCBjYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5nZXRTZWFyY2hQYXJhbXMoKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gY2FsbGJhY2socXVlcnlQYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXJjaCA9IHFzLnN0cmluZ2lmeSh7IC4uLiBxdWVyeVBhcmFtcywgLi4ucGFyYW1zIH0pO1xuXG4gICAgICAgIGhpc3RvcnkucHVzaChcbiAgICAgICAgICAgIGAke2hpc3RvcnkubG9jYXRpb24ucGF0aG5hbWV9PyR7c2VhcmNofWBcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=