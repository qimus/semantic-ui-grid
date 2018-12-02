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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU09SVF9ESVIiLCJTT1JUX0FTQyIsIkFic3RyYWN0UHJvdmlkZXIiLCJwYXJhbXMiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsInBlclBhZ2UiLCJzZXRQZXJQYWdlIiwicGFnZVBhcmFtTmFtZSIsInBhZ2VQYXJhbSIsImxpbWl0UGFyYW1OYW1lIiwibGltaXRQYXJhbSIsInBhZ2VMaW1pdHMiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsIk1hdGgiLCJjZWlsIiwiZ2V0VG90YWxDb3VudCIsInBhZ2UiLCJnZXRTZWFyY2hQYXJhbSIsImRlZmF1bHRQYWdlIiwiZ2V0VG90YWxQYWdlcyIsIl9uYXZpZ2F0ZSIsInZhbHVlIiwiZGVmYXVsdExpbWl0IiwibWluIiwibWF4VmFsIiwibWF4IiwibGltaXQiLCJnZXRJdGVtcyIsImxlbmd0aCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0ciIsInFzIiwicGFyc2UiLCJwYXJhbU5hbWUiLCJkZWZhdWx0VmFsdWUiLCJnZXRTZWFyY2hQYXJhbXMiLCJxdWVyeVBhcmFtcyIsInNvcnQiLCJwYXJzZWQiLCJzcGxpdCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiaW5jbHVkZXMiLCJTT1JUX01BUCIsImdldFNvcnQiLCJmZXRjaCIsImNhbGxiYWNrIiwic3RyaW5naWZ5IiwicHVzaCIsInBhdGhuYW1lIiwiX3BhZ2VMaW1pdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZPLElBQU1BLGdCQUFnQixHQUFHQyxlQUF6Qjs7O0FBWVA7OztJQUc4QkMsZ0I7OztBQVcxQiw4QkFBcUQ7QUFBQSxRQUEvQkMsTUFBK0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSx1Q0FWakMsTUFVaUM7O0FBQUEseUNBUi9CLENBUStCOztBQUFBLHdDQU5oQyxPQU1nQzs7QUFBQSwwQ0FKOUIsRUFJOEI7O0FBQUEseUNBRnJCLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVSxFQUFWLEVBQWMsR0FBZCxDQUVxQjs7QUFDakQsUUFBSUEsTUFBTSxDQUFDQyxVQUFYLEVBQXVCO0FBQ25CLFdBQUtDLGFBQUwsQ0FBbUJGLE1BQU0sQ0FBQ0MsVUFBMUI7QUFDSDs7QUFFRCxRQUFJRCxNQUFNLENBQUNHLE9BQVgsRUFBb0I7QUFDaEIsV0FBS0MsVUFBTCxDQUFnQkosTUFBTSxDQUFDRyxPQUF2QjtBQUNIOztBQUVELFFBQUlILE1BQU0sQ0FBQ0ssYUFBWCxFQUEwQjtBQUN0QixXQUFLQyxTQUFMLEdBQWlCTixNQUFNLENBQUNLLGFBQXhCO0FBQ0g7O0FBRUQsUUFBSUwsTUFBTSxDQUFDTyxjQUFYLEVBQTJCO0FBQ3ZCLFdBQUtDLFVBQUwsR0FBa0JSLE1BQU0sQ0FBQ08sY0FBekI7QUFDSDs7QUFFRCxRQUFJUCxNQUFNLENBQUNTLFVBQVgsRUFBdUI7QUFDbkIsV0FBS0EsVUFBTCxHQUFrQlQsTUFBTSxDQUFDUyxVQUF6QjtBQUNIO0FBQ0o7Ozs7O0FBZUQ7Ozs7b0NBSWdCO0FBQ1osYUFBTyxDQUFDLEtBQUtDLGFBQUwsS0FBdUIsQ0FBeEIsSUFBNkIsS0FBS0MsVUFBTCxFQUFwQztBQUNIO0FBRUQ7Ozs7Ozs7b0NBSWdCO0FBQ1osYUFBT0MsSUFBSSxDQUFDQyxJQUFMLENBQVUsS0FBS0MsYUFBTCxLQUF1QixLQUFLSCxVQUFMLEVBQWpDLENBQVA7QUFDSDtBQUVEOzs7Ozs7OztBQWFBOzs7O29DQUlnQjtBQUNaLFVBQUlJLElBQUksR0FBRyxLQUFLQyxjQUFMLENBQW9CLEtBQUtWLFNBQXpCLEVBQW9DLEtBQUtXLFdBQXpDLENBQVg7O0FBQ0EsVUFBSUYsSUFBSSxHQUFHLEtBQUtHLGFBQUwsRUFBWCxFQUFpQztBQUM3QkgsUUFBQUEsSUFBSSxHQUFHLEtBQUtHLGFBQUwsRUFBUDtBQUNIOztBQUVELGFBQU9ILElBQVA7QUFDSDtBQUVEOzs7Ozs7OztrQ0FLY0EsSSxFQUFNO0FBQ2hCLFdBQUtJLFNBQUwscUJBQWtCLEtBQUtiLFNBQXZCLEVBQW1DUyxJQUFuQzs7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7O2lDQUlhO0FBQ1QsVUFBSUssS0FBSyxHQUFHLENBQUMsS0FBS0osY0FBTCxDQUFvQixLQUFLUixVQUF6QixFQUFxQyxLQUFLYSxZQUExQyxDQUFiOztBQUNBLFVBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1IsZUFBT1IsSUFBSSxDQUFDVSxHQUFMLE9BQUFWLElBQUkscUJBQVEsS0FBS0gsVUFBYixFQUFYO0FBQ0g7O0FBQ0QsVUFBSWMsTUFBTSxHQUFHWCxJQUFJLENBQUNZLEdBQUwsT0FBQVosSUFBSSxxQkFBUSxLQUFLSCxVQUFiLEVBQWpCOztBQUNBLFVBQUlXLEtBQUssR0FBR0csTUFBWixFQUFvQjtBQUNoQkgsUUFBQUEsS0FBSyxHQUFHRyxNQUFSO0FBQ0g7O0FBRUQsYUFBT0gsS0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OytCQUtXakIsTyxFQUFTO0FBQ2hCLFdBQUtnQixTQUFMLENBQWU7QUFBRU0sUUFBQUEsS0FBSyxFQUFFdEI7QUFBVCxPQUFmOztBQUNBLGFBQU8sSUFBUDtBQUNIOzs7aUNBRVk7QUFDVCxhQUFRLEtBQUtPLGFBQUwsS0FBdUIsS0FBS2dCLFFBQUwsR0FBZ0JDLE1BQXhDLEdBQWtEQyxlQUFRQyxRQUFSLENBQWlCQyxNQUExRTtBQUNIO0FBRUQ7Ozs7Ozs7c0NBSWtCO0FBQUEsVUFDUkEsTUFEUSxHQUNHRixlQUFRQyxRQURYLENBQ1JDLE1BRFE7O0FBRWQsVUFBSSxDQUFDQSxNQUFNLENBQUNILE1BQVosRUFBb0I7QUFDaEIsZUFBTyxFQUFQO0FBQ0g7O0FBQ0RHLE1BQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxDQUFUO0FBRUEsYUFBT0MsWUFBR0MsS0FBSCxDQUFTSCxNQUFULENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7bUNBTWVJLFMsRUFBZ0M7QUFBQSxVQUFyQkMsWUFBcUIsdUVBQU4sSUFBTTtBQUMzQyxVQUFJbkMsTUFBTSxHQUFHLEtBQUtvQyxlQUFMLEVBQWI7QUFFQSxhQUFPLE9BQU9wQyxNQUFNLENBQUNrQyxTQUFELENBQWIsS0FBNkIsV0FBN0IsSUFBNENsQyxNQUFNLENBQUNrQyxTQUFELENBQWxELElBQWlFQyxZQUF4RTtBQUNIO0FBRUQ7Ozs7Ozs7OEJBSVU7QUFDTixVQUFJRSxXQUFXLEdBQUcsS0FBS0QsZUFBTCxFQUFsQjs7QUFDQSxVQUFJLE9BQU9DLFdBQVcsQ0FBQyxNQUFELENBQWxCLEtBQStCLFdBQW5DLEVBQWdEO0FBQzVDLGVBQU8sRUFBUDtBQUNIOztBQUVELFVBQUlDLElBQUksR0FBRyxFQUFYO0FBQUEsVUFDSUMsTUFBTSxHQUFHRixXQUFXLENBQUMsTUFBRCxDQUFYLENBQW9CRyxLQUFwQixDQUEwQixHQUExQixDQURiO0FBTk07QUFBQTtBQUFBOztBQUFBO0FBU04sNkJBQWtCRCxNQUFsQiw4SEFBMEI7QUFBQSxjQUFqQm5CLEtBQWlCO0FBQ3RCLGNBQUlxQixLQUFLLFNBQVQ7QUFBQSxjQUFXQyxTQUFTLFNBQXBCOztBQUNBLGNBQUksQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFhQyxRQUFiLENBQXNCdkIsS0FBSyxDQUFDVyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUF0QixDQUFKLEVBQStDO0FBQzNDVyxZQUFBQSxTQUFTLEdBQUdFLGdCQUFTeEIsS0FBSyxDQUFDVyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFULENBQVo7QUFDQVUsWUFBQUEsS0FBSyxHQUFHckIsS0FBSyxDQUFDVyxNQUFOLENBQWEsQ0FBYixDQUFSO0FBQ0gsV0FIRCxNQUdPO0FBQ0hVLFlBQUFBLEtBQUssR0FBR3JCLEtBQVI7QUFDQXNCLFlBQUFBLFNBQVMsR0FBRzdDLGdCQUFaO0FBQ0g7O0FBRUR5QyxVQUFBQSxJQUFJLENBQUNHLEtBQUQsQ0FBSixHQUFjQyxTQUFkO0FBQ0g7QUFwQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzQk4sYUFBT0osSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7O2lDQUthRyxLLEVBQU9DLFMsRUFBVztBQUMzQixVQUFJSixJQUFJLEdBQUcsS0FBS08sT0FBTCxFQUFYOztBQUNBLFVBQUksQ0FBQ0gsU0FBTCxFQUFnQjtBQUNaLGVBQU9KLElBQUksQ0FBQ0csS0FBRCxDQUFYO0FBQ0gsT0FGRCxNQUVPO0FBQ0hILFFBQUFBLElBQUksQ0FBQ0csS0FBRCxDQUFKLEdBQWNDLFNBQWQ7QUFDSDs7QUFDRCxXQUFLSSxLQUFMLENBQVc7QUFBRVIsUUFBQUEsSUFBSSxFQUFKQTtBQUFGLE9BQVg7O0FBQ0EsV0FBS25CLFNBQUwsQ0FBZTtBQUNYbUIsUUFBQUEsSUFBSSxFQUFFLHlCQUFhQSxJQUFiO0FBREssT0FBZjtBQUdIO0FBRUQ7Ozs7Ozs7Ozs4QkFNVXRDLE0sRUFBeUI7QUFBQSxVQUFqQitDLFFBQWlCLHVFQUFOLElBQU07QUFDL0IsVUFBSVYsV0FBVyxHQUFHLEtBQUtELGVBQUwsRUFBbEI7O0FBRUEsVUFBSVcsUUFBSixFQUFjO0FBQ1ZWLFFBQUFBLFdBQVcsR0FBR1UsUUFBUSxtQkFBTVYsV0FBTixFQUF0QjtBQUNIOztBQUVELFVBQUlQLE1BQU0sR0FBR0UsWUFBR2dCLFNBQUgsbUJBQW1CWCxXQUFuQixFQUFtQ3JDLE1BQW5DLEVBQWI7O0FBRUE0QixxQkFBUXFCLElBQVIsV0FDT3JCLGVBQVFDLFFBQVIsQ0FBaUJxQixRQUR4QixjQUNvQ3BCLE1BRHBDO0FBR0g7Ozt3QkEzTDBCO0FBQ3ZCLGFBQU8sS0FBS3FCLFdBQVo7QUFDSCxLO3NCQUVjL0IsSyxFQUFpQjtBQUM1QixXQUFLK0IsV0FBTCxHQUFtQi9CLEtBQW5CO0FBQ0g7QUFFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tICdxcydcblxuaW1wb3J0IHtcbiAgICBTT1JUX0FTQyxcbiAgICBTT1JUX01BUCxcbiAgICBzb3J0VG9TdHJpbmdcbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NPUlRfRElSID0gU09SVF9BU0M7XG5cbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IHR5cGUgUHJvdmlkZXJTZXR0aW5ncyA9IHtcbiAgICBhY3RpdmVQYWdlPzogbnVtYmVyLFxuICAgIHBlclBhZ2U/OiBudW1iZXIsXG4gICAgcGFnZVBhcmFtTmFtZT86IHN0cmluZyxcbiAgICBsaW1pdFBhcmFtTmFtZT86IHN0cmluZyxcbiAgICBwYWdlTGltaXRzPzogbnVtYmVyW11cbn07XG5cbi8qKlxuICogQ2xhc3MgQWJzdHJhY3RQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFByb3ZpZGVyIHtcbiAgICBwcml2YXRlIHBhZ2VQYXJhbSA9ICdwYWdlJztcblxuICAgIHByaXZhdGUgZGVmYXVsdFBhZ2UgPSAxO1xuXG4gICAgcHJpdmF0ZSBsaW1pdFBhcmFtID0gJ2xpbWl0JztcblxuICAgIHByaXZhdGUgZGVmYXVsdExpbWl0ID0gMTA7XG5cbiAgICBwcml2YXRlIF9wYWdlTGltaXRzOiBudW1iZXJbXSA9IFsgMTAsIDMwLCA1MCwgMTAwIF07XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocGFyYW1zOiBQcm92aWRlclNldHRpbmdzID0ge30pIHtcbiAgICAgICAgaWYgKHBhcmFtcy5hY3RpdmVQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2UocGFyYW1zLmFjdGl2ZVBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wZXJQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBlclBhZ2UocGFyYW1zLnBlclBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wYWdlUGFyYW1OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VQYXJhbSA9IHBhcmFtcy5wYWdlUGFyYW1OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5saW1pdFBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5saW1pdFBhcmFtID0gcGFyYW1zLmxpbWl0UGFyYW1OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wYWdlTGltaXRzKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VMaW1pdHMgPSBwYXJhbXMucGFnZUxpbWl0cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwYWdlTGltaXRzKCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW1pdHM7XG4gICAgfVxuXG4gICAgc2V0IHBhZ2VMaW1pdHModmFsdWU6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW1pdHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0VG90YWxDb3VudCgpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gc2VyaWFsIG51bWJlclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTdGFydEluZGV4KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aXZlUGFnZSgpIC0gMSkgKiB0aGlzLmdldFBlclBhZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdG90YWwgY291bnQgb2YgcGFnZXNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VG90YWxQYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmdldFRvdGFsQ291bnQoKSAvIHRoaXMuZ2V0UGVyUGFnZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gaXRlbXMgdG8gc2hvdyBvbiBwYWdlXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0SXRlbXMoKTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBpdGVtcyBvbiB0aGUgcGFnZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGZldGNoKHBhcmFtcz86IGFueSk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbnVtYmVyIGFjdGl2ZSBwYWdlXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEFjdGl2ZVBhZ2UoKSB7XG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5nZXRTZWFyY2hQYXJhbSh0aGlzLnBhZ2VQYXJhbSwgdGhpcy5kZWZhdWx0UGFnZSk7XG4gICAgICAgIGlmIChwYWdlID4gdGhpcy5nZXRUb3RhbFBhZ2VzKCkpIHtcbiAgICAgICAgICAgIHBhZ2UgPSB0aGlzLmdldFRvdGFsUGFnZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhY3RpdmUgcGFnZSBudW1iZXJcbiAgICAgKiBAcGFyYW0gcGFnZVxuICAgICAqIEByZXR1cm4ge0Fic3RyYWN0UHJvdmlkZXJ9XG4gICAgICovXG4gICAgc2V0QWN0aXZlUGFnZShwYWdlKSB7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlKHsgW3RoaXMucGFnZVBhcmFtXTogcGFnZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ291bnQgcm93cyB0byBiZSBzaG93ZWQgb24gdGhlIHBhZ2VcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0UGVyUGFnZSgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gK3RoaXMuZ2V0U2VhcmNoUGFyYW0odGhpcy5saW1pdFBhcmFtLCB0aGlzLmRlZmF1bHRMaW1pdCk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbiguLi50aGlzLnBhZ2VMaW1pdHMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtYXhWYWwgPSBNYXRoLm1heCguLi50aGlzLnBhZ2VMaW1pdHMpO1xuICAgICAgICBpZiAodmFsdWUgPiBtYXhWYWwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWF4VmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSByb3dzIGNvdW50IG9uIHRoZSBwYWdlXG4gICAgICogQHBhcmFtIHBlclBhZ2VcbiAgICAgKiBAcmV0dXJuIHtBYnN0cmFjdFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHNldFBlclBhZ2UocGVyUGFnZSkge1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh7IGxpbWl0OiBwZXJQYWdlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRVbmlxS2V5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aXZlUGFnZSgpICogdGhpcy5nZXRJdGVtcygpLmxlbmd0aCkgKyBoaXN0b3J5LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gc2VhcmNoIHBhcmFtcyBhcyBPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFNlYXJjaFBhcmFtcygpIHtcbiAgICAgICAgbGV0IHsgc2VhcmNoIH0gPSBoaXN0b3J5LmxvY2F0aW9uO1xuICAgICAgICBpZiAoIXNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBzZWFyY2ggPSBzZWFyY2guc3Vic3RyKDEpO1xuXG4gICAgICAgIHJldHVybiBxcy5wYXJzZShzZWFyY2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBzZWFyY2ggcGFyYW0gYnkgbmFtZVxuICAgICAqIEBwYXJhbSBwYXJhbU5hbWVcbiAgICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58Kn1cbiAgICAgKi9cbiAgICBnZXRTZWFyY2hQYXJhbShwYXJhbU5hbWUsIGRlZmF1bHRWYWx1ZSA9IG51bGwpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0U2VhcmNoUGFyYW1zKCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXJhbXNbcGFyYW1OYW1lXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zW3BhcmFtTmFtZV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBzb3J0IG9iamVjdFxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRTb3J0KCkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSB0aGlzLmdldFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAodHlwZW9mIHF1ZXJ5UGFyYW1zWydzb3J0J10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc29ydCA9IHt9LFxuICAgICAgICAgICAgcGFyc2VkID0gcXVlcnlQYXJhbXNbJ3NvcnQnXS5zcGxpdCgnLCcpO1xuXG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHBhcnNlZCkge1xuICAgICAgICAgICAgbGV0IGZpZWxkLCBkaXJlY3Rpb247XG4gICAgICAgICAgICBpZiAoWyAnKycsICctJyBdLmluY2x1ZGVzKHZhbHVlLnN1YnN0cigwLCAxKSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBTT1JUX01BUFt2YWx1ZS5zdWJzdHIoMCwgMSldO1xuICAgICAgICAgICAgICAgIGZpZWxkID0gdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IERFRkFVTFRfU09SVF9ESVI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNvcnRbZmllbGRdID0gZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHNvcnRpbmcgYnkgZmllbGRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICovXG4gICAgc2V0U29ydEZpZWxkKGZpZWxkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IHNvcnQgPSB0aGlzLmdldFNvcnQoKTtcbiAgICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzb3J0W2ZpZWxkXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc29ydFtmaWVsZF0gPSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZXRjaCh7IHNvcnQgfSk7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlKHtcbiAgICAgICAgICAgIHNvcnQ6IHNvcnRUb1N0cmluZyhzb3J0KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUbyBzdG9yZSBzZWFyY2hpbmcgcGFyYW1zIGluIGJyb3dzZXIgc2VhcmNoXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyDRgdC/0LjRgdC+0Log0L/QsNGA0LDQvNC10YLRgNC+0LIsINC60L7RgtC+0YDRi9C5INCx0YPQtNC10YIg0LTQvtCx0LDQstC70LXQvSDQsiBzZWFyY2gg0YHRgtGA0L7QutGDINCx0YDQsNGD0LfQtdGA0LBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDRhNGD0L3QutGG0LjRjyDQvtCx0YDQsNCx0L7RgtC60Lgg0YLQtdC60YPRidC40YUgc2VhcmNoINC/0LDRgNCw0LzQtdGC0YDQvtCyLCDQvNC+0LbQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0YTQuNC70YzRgtGA0LDRhtC40LhcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9uYXZpZ2F0ZShwYXJhbXMsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSB0aGlzLmdldFNlYXJjaFBhcmFtcygpO1xuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBjYWxsYmFjayh7IC4uLnF1ZXJ5UGFyYW1zIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXJjaCA9IHFzLnN0cmluZ2lmeSh7IC4uLiBxdWVyeVBhcmFtcywgLi4ucGFyYW1zIH0pO1xuXG4gICAgICAgIGhpc3RvcnkucHVzaChcbiAgICAgICAgICAgIGAke2hpc3RvcnkubG9jYXRpb24ucGF0aG5hbWV9PyR7c2VhcmNofWBcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=