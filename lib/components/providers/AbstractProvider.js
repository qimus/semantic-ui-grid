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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU09SVF9ESVIiLCJTT1JUX0FTQyIsIkFic3RyYWN0UHJvdmlkZXIiLCJwYXJhbXMiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsInBlclBhZ2UiLCJzZXRQZXJQYWdlIiwicGFnZVBhcmFtTmFtZSIsInBhZ2VQYXJhbSIsImxpbWl0UGFyYW1OYW1lIiwibGltaXRQYXJhbSIsInBhZ2VMaW1pdHMiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsIk1hdGgiLCJjZWlsIiwiZ2V0VG90YWxDb3VudCIsInBhZ2UiLCJnZXRTZWFyY2hQYXJhbSIsImRlZmF1bHRQYWdlIiwiZ2V0VG90YWxQYWdlcyIsIl9uYXZpZ2F0ZSIsInZhbHVlIiwiZGVmYXVsdExpbWl0IiwibWluIiwibWF4VmFsIiwibWF4IiwibGltaXQiLCJnZXRJdGVtcyIsImxlbmd0aCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0ciIsInFzIiwicGFyc2UiLCJwYXJhbU5hbWUiLCJkZWZhdWx0VmFsdWUiLCJnZXRTZWFyY2hQYXJhbXMiLCJxdWVyeVBhcmFtcyIsInNvcnQiLCJwYXJzZWQiLCJzcGxpdCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiaW5jbHVkZXMiLCJTT1JUX01BUCIsImdldFNvcnQiLCJmZXRjaCIsImNhbGxiYWNrIiwic3RyaW5naWZ5IiwicHVzaCIsInBhdGhuYW1lIiwiX3BhZ2VMaW1pdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZPLElBQU1BLGdCQUFnQixHQUFHQyxlQUF6Qjs7O0lBWXVCQyxnQjs7O0FBVzFCLDRCQUFzQkMsTUFBdEIsRUFBZ0Q7QUFBQTs7QUFBQSx1Q0FWNUIsTUFVNEI7O0FBQUEseUNBUjFCLENBUTBCOztBQUFBLHdDQU4z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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzQk4sYUFBT0osSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7O2lDQUthRyxLLEVBQU9DLFMsRUFBVztBQUMzQixVQUFJSixJQUFJLEdBQUcsS0FBS08sT0FBTCxFQUFYO0FBQ0FQLE1BQUFBLElBQUksQ0FBQ0csS0FBRCxDQUFKLEdBQWNDLFNBQWQ7QUFDQSxXQUFLSSxLQUFMLENBQVc7QUFBRVIsUUFBQUEsSUFBSSxFQUFKQTtBQUFGLE9BQVg7O0FBQ0EsV0FBS25CLFNBQUwsQ0FBZTtBQUNYbUIsUUFBQUEsSUFBSSxFQUFFLHlCQUFhQSxJQUFiO0FBREssT0FBZjtBQUdIO0FBRUQ7Ozs7Ozs7Ozs4QkFNVXRDLE0sRUFBeUI7QUFBQSxVQUFqQitDLFFBQWlCLHVFQUFOLElBQU07QUFDL0IsVUFBSVYsV0FBVyxHQUFHLEtBQUtELGVBQUwsRUFBbEI7O0FBRUEsVUFBSVcsUUFBSixFQUFjO0FBQ1ZWLFFBQUFBLFdBQVcsR0FBR1UsUUFBUSxDQUFDVixXQUFELENBQXRCO0FBQ0g7O0FBRUQsVUFBSVAsTUFBTSxHQUFHRSxZQUFHZ0IsU0FBSCxtQkFBbUJYLFdBQW5CLEVBQW1DckMsTUFBbkMsRUFBYjs7QUFFQTRCLHFCQUFRcUIsSUFBUixXQUNPckIsZUFBUUMsUUFBUixDQUFpQnFCLFFBRHhCLGNBQ29DcEIsTUFEcEM7QUFHSDs7O3dCQXZMMEI7QUFDdkIsYUFBTyxLQUFLcUIsV0FBWjtBQUNILEs7c0JBRWMvQixLLEVBQWlCO0FBQzVCLFdBQUsrQixXQUFMLEdBQW1CL0IsS0FBbkI7QUFDSDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG5pbXBvcnQge1xuICAgIFNPUlRfQVNDLFxuICAgIFNPUlRfTUFQLFxuICAgIHNvcnRUb1N0cmluZ1xufSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU09SVF9ESVIgPSBTT1JUX0FTQztcblxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgdHlwZSBQcm92aWRlclNldHRpbmdzID0ge1xuICAgIGFjdGl2ZVBhZ2U/OiBudW1iZXIsXG4gICAgcGVyUGFnZT86IG51bWJlcixcbiAgICBwYWdlUGFyYW1OYW1lPzogc3RyaW5nLFxuICAgIGxpbWl0UGFyYW1OYW1lPzogc3RyaW5nLFxuICAgIHBhZ2VMaW1pdHM/OiBudW1iZXJbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQcm92aWRlciB7XG4gICAgcHJpdmF0ZSBwYWdlUGFyYW0gPSAncGFnZSc7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRQYWdlID0gMTtcblxuICAgIHByaXZhdGUgbGltaXRQYXJhbSA9ICdsaW1pdCc7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRMaW1pdCA9IDEwO1xuXG4gICAgcHJpdmF0ZSBfcGFnZUxpbWl0czogbnVtYmVyW10gPSBbIDEwLCAzMCwgNTAsIDEwMCBdO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHBhcmFtczogUHJvdmlkZXJTZXR0aW5ncykge1xuICAgICAgICBpZiAocGFyYW1zLmFjdGl2ZVBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGFnZShwYXJhbXMuYWN0aXZlUGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnBlclBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UGVyUGFnZShwYXJhbXMucGVyUGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnBhZ2VQYXJhbU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZVBhcmFtID0gcGFyYW1zLnBhZ2VQYXJhbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmxpbWl0UGFyYW1OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmxpbWl0UGFyYW0gPSBwYXJhbXMubGltaXRQYXJhbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnBhZ2VMaW1pdHMpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUxpbWl0cyA9IHBhcmFtcy5wYWdlTGltaXRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHBhZ2VMaW1pdHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZUxpbWl0cztcbiAgICB9XG5cbiAgICBzZXQgcGFnZUxpbWl0cyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbWl0cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRUb3RhbENvdW50KCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0LrQstC+0LfQvdC+0Lkg0L3QvtC80LXRgCDRgdGC0YDQvtC60LhcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U3RhcnRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldEFjdGl2ZVBhZ2UoKSAtIDEpICogdGhpcy5nZXRQZXJQYWdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LLRgdC10LPQviDQutC+0LvQuNGH0LXRgdGC0LLQviDRgdGC0YDQsNC90LjRhlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRUb3RhbFBhZ2VzKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuZ2V0VG90YWxDb3VudCgpIC8gdGhpcy5nZXRQZXJQYWdlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC80LDRgdGB0LjQsiDQtNCw0L3QvdGL0YUg0LTQu9GPINCy0YvQstC+0LTQsCDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRJdGVtcygpO1xuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40YLRjCDQtNCw0L3QvdGL0LVcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBmZXRjaChwYXJhbXM/OiBhbnkpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QvtC80LXRgCDQsNC60YLQuNCy0L3QvtC5INGB0YLRgNCw0L3QuNGG0YtcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0QWN0aXZlUGFnZSgpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLmdldFNlYXJjaFBhcmFtKHRoaXMucGFnZVBhcmFtLCB0aGlzLmRlZmF1bHRQYWdlKTtcbiAgICAgICAgaWYgKHBhZ2UgPiB0aGlzLmdldFRvdGFsUGFnZXMoKSkge1xuICAgICAgICAgICAgcGFnZSA9IHRoaXMuZ2V0VG90YWxQYWdlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0L3QvtC80LXRgCDQsNC60YLQuNCy0L3QvtC5INGB0YLRgNCw0L3QuNGG0YtcbiAgICAgKiBAcGFyYW0gcGFnZVxuICAgICAqIEByZXR1cm4ge0Fic3RyYWN0UHJvdmlkZXJ9XG4gICAgICovXG4gICAgc2V0QWN0aXZlUGFnZShwYWdlKSB7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlKHsgW3RoaXMucGFnZVBhcmFtXTogcGFnZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JrQvtC70LjRh9C10YHRgtCy0L4g0YHRgtGA0L7Quiwg0LrQvtGC0L7RgNGL0LUg0LLRi9Cy0L7QtNGP0YLRgdGPINC90LAg0YHRgtGA0LDQvdC40YbQtVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRQZXJQYWdlKCkge1xuICAgICAgICBsZXQgdmFsdWUgPSArdGhpcy5nZXRTZWFyY2hQYXJhbSh0aGlzLmxpbWl0UGFyYW0sIHRoaXMuZGVmYXVsdExpbWl0KTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKC4uLnRoaXMucGFnZUxpbWl0cyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1heFZhbCA9IE1hdGgubWF4KC4uLnRoaXMucGFnZUxpbWl0cyk7XG4gICAgICAgIGlmICh2YWx1ZSA+IG1heFZhbCkge1xuICAgICAgICAgICAgdmFsdWUgPSBtYXhWYWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGVyUGFnZVxuICAgICAqIEByZXR1cm4ge0Fic3RyYWN0UHJvdmlkZXJ9XG4gICAgICovXG4gICAgc2V0UGVyUGFnZShwZXJQYWdlKSB7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlKHsgbGltaXQ6IHBlclBhZ2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFVuaXFLZXkoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRBY3RpdmVQYWdlKCkgKiB0aGlzLmdldEl0ZW1zKCkubGVuZ3RoKSArIGhpc3RvcnkubG9jYXRpb24uc2VhcmNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCIHNlYXJjaCDQv9Cw0YDQsNC80LXRgtGA0Ysg0LIg0LLQuNC00LUg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFNlYXJjaFBhcmFtcygpIHtcbiAgICAgICAgbGV0IHsgc2VhcmNoIH0gPSBoaXN0b3J5LmxvY2F0aW9uO1xuICAgICAgICBpZiAoIXNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBzZWFyY2ggPSBzZWFyY2guc3Vic3RyKDEpO1xuXG4gICAgICAgIHJldHVybiBxcy5wYXJzZShzZWFyY2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0LDRgNCw0LzQtdGC0YAg0LjQtyDRgdGC0YDQvtC60Lgg0L/QvtC40YHQutCwINCx0YDQsNGD0LfQtdGA0LBcbiAgICAgKiBAcGFyYW0gcGFyYW1OYW1lXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufCp9XG4gICAgICovXG4gICAgZ2V0U2VhcmNoUGFyYW0ocGFyYW1OYW1lLCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFNlYXJjaFBhcmFtcygpO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgcGFyYW1zW3BhcmFtTmFtZV0gIT09ICd1bmRlZmluZWQnICYmIHBhcmFtc1twYXJhbU5hbWVdIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvtCx0YrQtdC60YIg0YEg0L/QsNGA0LDQvNC10YLRgNCw0LzQuCDRgdC+0YDRgtC40YDQvtCy0LrQuFxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRTb3J0KCkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSB0aGlzLmdldFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAodHlwZW9mIHF1ZXJ5UGFyYW1zWydzb3J0J10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc29ydCA9IHt9LFxuICAgICAgICAgICAgcGFyc2VkID0gcXVlcnlQYXJhbXNbJ3NvcnQnXS5zcGxpdCgnLCcpO1xuXG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHBhcnNlZCkge1xuICAgICAgICAgICAgbGV0IGZpZWxkLCBkaXJlY3Rpb247XG4gICAgICAgICAgICBpZiAoWyAnKycsICctJyBdLmluY2x1ZGVzKHZhbHVlLnN1YnN0cigwLCAxKSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBTT1JUX01BUFt2YWx1ZS5zdWJzdHIoMCwgMSldO1xuICAgICAgICAgICAgICAgIGZpZWxkID0gdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IERFRkFVTFRfU09SVF9ESVI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNvcnRbZmllbGRdID0gZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0YHQvtGA0YLQuNGA0L7QstC60YMg0L/QviDQv9C+0LvRjlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb25cbiAgICAgKi9cbiAgICBzZXRTb3J0RmllbGQoZmllbGQsIGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgc29ydCA9IHRoaXMuZ2V0U29ydCgpO1xuICAgICAgICBzb3J0W2ZpZWxkXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5mZXRjaCh7IHNvcnQgfSk7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlKHtcbiAgICAgICAgICAgIHNvcnQ6IHNvcnRUb1N0cmluZyhzb3J0KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQmNC30LzQtdC90LXQvdC40LUg0YHRgtGA0L7QutC4INC/0L7QuNGB0LrQsFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMg0YHQv9C40YHQvtC6INC/0LDRgNCw0LzQtdGC0YDQvtCyLCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINC00L7QsdCw0LLQu9C10L0g0LIgc2VhcmNoINGB0YLRgNC+0LrRgyDQsdGA0LDRg9C30LXRgNCwXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0L7QsdGA0LDQsdC+0YLQutC4INGC0LXQutGD0YnQuNGFIHNlYXJjaCDQv9Cw0YDQsNC80LXRgtGA0L7Qsiwg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQu9GPINGE0LjQu9GM0YLRgNCw0YbQuNC4XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbmF2aWdhdGUocGFyYW1zLCBjYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5nZXRTZWFyY2hQYXJhbXMoKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gY2FsbGJhY2socXVlcnlQYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXJjaCA9IHFzLnN0cmluZ2lmeSh7IC4uLiBxdWVyeVBhcmFtcywgLi4ucGFyYW1zIH0pO1xuXG4gICAgICAgIGhpc3RvcnkucHVzaChcbiAgICAgICAgICAgIGAke2hpc3RvcnkubG9jYXRpb24ucGF0aG5hbWV9PyR7c2VhcmNofWBcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=