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

/**
 * Class AbstractProvider
 */
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

    if (params.defaultLimit) {
      this.defaultLimit = params.defaultLimit;
    }
  }

  _createClass(AbstractProvider, [{
    key: "getStartIndex",

    /**
     * Return serial number
     * @return {number}
     */
    value: function getStartIndex() {
      return (this.getActivePage() - 1) * this.getPerPage();
    }
    /**
     * Return total count of pages
     * @return {number}
     */

  }, {
    key: "getTotalPages",
    value: function getTotalPages() {
      return Math.ceil(this.getTotalCount() / this.getPerPage());
    }
    /**
     * Return items to show on page
     * @return {array}
     */

  }, {
    key: "getActivePage",

    /**
     * Return number active page
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
     * Set active page number
     * @param {Number} page
     * @param {Number} limit
     * @return {AbstractProvider}
     */

  }, {
    key: "setActivePage",
    value: function setActivePage(page) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var params = {};

      if (page) {
        params[this.pageParam] = page;
      }

      if (limit) {
        params[this.limitParam] = limit;
      }

      this._navigate(params);

      return this;
    }
    /**
     * Count rows to be showed on the page
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
     * Change rows count on the page
     * @param perPage
     * @return {AbstractProvider}
     */

  }, {
    key: "setPerPage",
    value: function setPerPage(perPage) {
      this._navigate(_defineProperty({}, this.limitParam, perPage));

      return this;
    }
  }, {
    key: "getUniqKey",
    value: function getUniqKey() {
      return this.getActivePage() * this.getItems().length + _index.history.location.search;
    }
    /**
     * Return search params as Object
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
     * Return search param by name
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
     * Return sort object
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
     * Set sorting by field
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
     * To store searching params in browser search
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU09SVF9ESVIiLCJTT1JUX0FTQyIsIkFic3RyYWN0UHJvdmlkZXIiLCJwYXJhbXMiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsInBlclBhZ2UiLCJzZXRQZXJQYWdlIiwicGFnZVBhcmFtTmFtZSIsInBhZ2VQYXJhbSIsImxpbWl0UGFyYW1OYW1lIiwibGltaXRQYXJhbSIsInBhZ2VMaW1pdHMiLCJkZWZhdWx0TGltaXQiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsIk1hdGgiLCJjZWlsIiwiZ2V0VG90YWxDb3VudCIsInBhZ2UiLCJnZXRTZWFyY2hQYXJhbSIsImRlZmF1bHRQYWdlIiwiZ2V0VG90YWxQYWdlcyIsImxpbWl0IiwiX25hdmlnYXRlIiwidmFsdWUiLCJtaW4iLCJtYXhWYWwiLCJtYXgiLCJnZXRJdGVtcyIsImxlbmd0aCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0ciIsInFzIiwicGFyc2UiLCJwYXJhbU5hbWUiLCJkZWZhdWx0VmFsdWUiLCJnZXRTZWFyY2hQYXJhbXMiLCJxdWVyeVBhcmFtcyIsInNvcnQiLCJwYXJzZWQiLCJzcGxpdCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiaW5jbHVkZXMiLCJTT1JUX01BUCIsImdldFNvcnQiLCJmZXRjaCIsImNhbGxiYWNrIiwic3RyaW5naWZ5IiwicHVzaCIsInBhdGhuYW1lIiwiX3BhZ2VMaW1pdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZPLElBQU1BLGdCQUFnQixHQUFHQyxlQUF6Qjs7O0FBYVA7OztJQUc4QkMsZ0I7OztBQVcxQiw4QkFBcUQ7QUFBQSxRQUEvQkMsTUFBK0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSx1Q0FWakMsTUFVaUM7O0FBQUEs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bkMsRUFBYjs7QUFFQTRCLHFCQUFRcUIsSUFBUixXQUNPckIsZUFBUUMsUUFBUixDQUFpQnFCLFFBRHhCLGNBQ29DcEIsTUFEcEM7QUFHSDs7O3dCQXJNMEI7QUFDdkIsYUFBTyxLQUFLcUIsV0FBWjtBQUNILEs7c0JBRWM3QixLLEVBQWlCO0FBQzVCLFdBQUs2QixXQUFMLEdBQW1CN0IsS0FBbkI7QUFDSDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG5pbXBvcnQge1xuICAgIFNPUlRfQVNDLFxuICAgIFNPUlRfTUFQLFxuICAgIHNvcnRUb1N0cmluZ1xufSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU09SVF9ESVIgPSBTT1JUX0FTQztcblxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgdHlwZSBQcm92aWRlclNldHRpbmdzID0ge1xuICAgIGFjdGl2ZVBhZ2U/OiBudW1iZXIsXG4gICAgcGVyUGFnZT86IG51bWJlcixcbiAgICBwYWdlUGFyYW1OYW1lPzogc3RyaW5nLFxuICAgIGxpbWl0UGFyYW1OYW1lPzogc3RyaW5nLFxuICAgIHBhZ2VMaW1pdHM/OiBudW1iZXJbXSxcbiAgICBkZWZhdWx0TGltaXQ/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIENsYXNzIEFic3RyYWN0UHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQcm92aWRlciB7XG4gICAgcHJpdmF0ZSBwYWdlUGFyYW0gPSAncGFnZSc7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRQYWdlID0gMTtcblxuICAgIHByaXZhdGUgbGltaXRQYXJhbSA9ICdsaW1pdCc7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRMaW1pdCA9IDEwO1xuXG4gICAgcHJpdmF0ZSBfcGFnZUxpbWl0czogbnVtYmVyW10gPSBbIDEwLCAzMCwgNTAsIDEwMCBdO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHBhcmFtczogUHJvdmlkZXJTZXR0aW5ncyA9IHt9KSB7XG4gICAgICAgIGlmIChwYXJhbXMuYWN0aXZlUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlKHBhcmFtcy5hY3RpdmVQYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucGVyUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQZXJQYWdlKHBhcmFtcy5wZXJQYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucGFnZVBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlUGFyYW0gPSBwYXJhbXMucGFnZVBhcmFtTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubGltaXRQYXJhbU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubGltaXRQYXJhbSA9IHBhcmFtcy5saW1pdFBhcmFtTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucGFnZUxpbWl0cykge1xuICAgICAgICAgICAgdGhpcy5wYWdlTGltaXRzID0gcGFyYW1zLnBhZ2VMaW1pdHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmRlZmF1bHRMaW1pdCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TGltaXQgPSBwYXJhbXMuZGVmYXVsdExpbWl0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHBhZ2VMaW1pdHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZUxpbWl0cztcbiAgICB9XG5cbiAgICBzZXQgcGFnZUxpbWl0cyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbWl0cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRUb3RhbENvdW50KCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBzZXJpYWwgbnVtYmVyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFN0YXJ0SW5kZXgoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRBY3RpdmVQYWdlKCkgLSAxKSAqIHRoaXMuZ2V0UGVyUGFnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0b3RhbCBjb3VudCBvZiBwYWdlc1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRUb3RhbFBhZ2VzKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuZ2V0VG90YWxDb3VudCgpIC8gdGhpcy5nZXRQZXJQYWdlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBpdGVtcyB0byBzaG93IG9uIHBhZ2VcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRJdGVtcygpO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGl0ZW1zIG9uIHRoZSBwYWdlXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgZmV0Y2gocGFyYW1zPzogYW55KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBudW1iZXIgYWN0aXZlIHBhZ2VcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0QWN0aXZlUGFnZSgpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLmdldFNlYXJjaFBhcmFtKHRoaXMucGFnZVBhcmFtLCB0aGlzLmRlZmF1bHRQYWdlKTtcbiAgICAgICAgaWYgKHBhZ2UgPiB0aGlzLmdldFRvdGFsUGFnZXMoKSkge1xuICAgICAgICAgICAgcGFnZSA9IHRoaXMuZ2V0VG90YWxQYWdlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFjdGl2ZSBwYWdlIG51bWJlclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbWl0XG4gICAgICogQHJldHVybiB7QWJzdHJhY3RQcm92aWRlcn1cbiAgICAgKi9cbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2UsIGxpbWl0ID0gbnVsbCkge1xuICAgICAgICBsZXQgcGFyYW1zID0ge307XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgICBwYXJhbXNbdGhpcy5wYWdlUGFyYW1dID0gcGFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaW1pdCkge1xuICAgICAgICAgICAgcGFyYW1zW3RoaXMubGltaXRQYXJhbV0gPSBsaW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX25hdmlnYXRlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvdW50IHJvd3MgdG8gYmUgc2hvd2VkIG9uIHRoZSBwYWdlXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFBlclBhZ2UoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9ICt0aGlzLmdldFNlYXJjaFBhcmFtKHRoaXMubGltaXRQYXJhbSwgdGhpcy5kZWZhdWx0TGltaXQpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oLi4udGhpcy5wYWdlTGltaXRzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWF4VmFsID0gTWF0aC5tYXgoLi4udGhpcy5wYWdlTGltaXRzKTtcbiAgICAgICAgaWYgKHZhbHVlID4gbWF4VmFsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1heFZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2Ugcm93cyBjb3VudCBvbiB0aGUgcGFnZVxuICAgICAqIEBwYXJhbSBwZXJQYWdlXG4gICAgICogQHJldHVybiB7QWJzdHJhY3RQcm92aWRlcn1cbiAgICAgKi9cbiAgICBzZXRQZXJQYWdlKHBlclBhZ2UpIHtcbiAgICAgICAgdGhpcy5fbmF2aWdhdGUoeyBbdGhpcy5saW1pdFBhcmFtXTogcGVyUGFnZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0VW5pcUtleSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldEFjdGl2ZVBhZ2UoKSAqIHRoaXMuZ2V0SXRlbXMoKS5sZW5ndGgpICsgaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHNlYXJjaCBwYXJhbXMgYXMgT2JqZWN0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRTZWFyY2hQYXJhbXMoKSB7XG4gICAgICAgIGxldCB7IHNlYXJjaCB9ID0gaGlzdG9yeS5sb2NhdGlvbjtcbiAgICAgICAgaWYgKCFzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoID0gc2VhcmNoLnN1YnN0cigxKTtcblxuICAgICAgICByZXR1cm4gcXMucGFyc2Uoc2VhcmNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gc2VhcmNoIHBhcmFtIGJ5IG5hbWVcbiAgICAgKiBAcGFyYW0gcGFyYW1OYW1lXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufCp9XG4gICAgICovXG4gICAgZ2V0U2VhcmNoUGFyYW0ocGFyYW1OYW1lLCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFNlYXJjaFBhcmFtcygpO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgcGFyYW1zW3BhcmFtTmFtZV0gIT09ICd1bmRlZmluZWQnICYmIHBhcmFtc1twYXJhbU5hbWVdIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gc29ydCBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0U29ydCgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5nZXRTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVBhcmFtc1snc29ydCddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvcnQgPSB7fSxcbiAgICAgICAgICAgIHBhcnNlZCA9IHF1ZXJ5UGFyYW1zWydzb3J0J10uc3BsaXQoJywnKTtcblxuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBwYXJzZWQpIHtcbiAgICAgICAgICAgIGxldCBmaWVsZCwgZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKFsgJysnLCAnLScgXS5pbmNsdWRlcyh2YWx1ZS5zdWJzdHIoMCwgMSkpKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gU09SVF9NQVBbdmFsdWUuc3Vic3RyKDAsIDEpXTtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBERUZBVUxUX1NPUlRfRElSO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3J0W2ZpZWxkXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3J0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzb3J0aW5nIGJ5IGZpZWxkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvblxuICAgICAqL1xuICAgIHNldFNvcnRGaWVsZChmaWVsZCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBzb3J0ID0gdGhpcy5nZXRTb3J0KCk7XG4gICAgICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBkZWxldGUgc29ydFtmaWVsZF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvcnRbZmllbGRdID0gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmV0Y2goeyBzb3J0IH0pO1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBzb3J0OiBzb3J0VG9TdHJpbmcoc29ydClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG8gc3RvcmUgc2VhcmNoaW5nIHBhcmFtcyBpbiBicm93c2VyIHNlYXJjaFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMg0YHQv9C40YHQvtC6INC/0LDRgNCw0LzQtdGC0YDQvtCyLCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINC00L7QsdCw0LLQu9C10L0g0LIgc2VhcmNoINGB0YLRgNC+0LrRgyDQsdGA0LDRg9C30LXRgNCwXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0L7QsdGA0LDQsdC+0YLQutC4INGC0LXQutGD0YnQuNGFIHNlYXJjaCDQv9Cw0YDQsNC80LXRgtGA0L7Qsiwg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQu9GPINGE0LjQu9GM0YLRgNCw0YbQuNC4XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbmF2aWdhdGUocGFyYW1zLCBjYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5nZXRTZWFyY2hQYXJhbXMoKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gY2FsbGJhY2soeyAuLi5xdWVyeVBhcmFtcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWFyY2ggPSBxcy5zdHJpbmdpZnkoeyAuLi4gcXVlcnlQYXJhbXMsIC4uLnBhcmFtcyB9KTtcblxuICAgICAgICBoaXN0b3J5LnB1c2goXG4gICAgICAgICAgICBgJHtoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lfT8ke3NlYXJjaH1gXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19