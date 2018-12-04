"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractProvider2 = _interopRequireDefault(require("./AbstractProvider"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ArrayDataProvider =
/*#__PURE__*/
function (_AbstractProvider) {
  _inherits(ArrayDataProvider, _AbstractProvider);

  function ArrayDataProvider(params) {
    var _this;

    _classCallCheck(this, ArrayDataProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayDataProvider).call(this, params));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "data", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "allData", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterParamName", 'filter');

    _this.data = params.data;
    _this.allData = params.data;

    if (params.filterParamName) {
      _this.filterParamName = params.filterParamName;
    }

    _this.fetch();

    return _this;
  }
  /**
   * @inheritDoc
   */


  _createClass(ArrayDataProvider, [{
    key: "getTotalCount",
    value: function getTotalCount() {
      return this.data.length;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "getItems",
    value: function getItems() {
      return this.data.slice(this.getStartIndex(), this.getActivePage() * this.getPerPage());
    }
    /**
     * @param {array} data
     * @return {ArrayDataProvider}
     */

  }, {
    key: "setItems",
    value: function setItems(data) {
      this.data = data;
      this.allData = data;
      return this;
    }
    /**
     * @param sort Object sort params
     */

  }, {
    key: "sortItems",
    value: function sortItems(sort) {
      this.data.sort(function (i1, i2) {
        var _arr = Object.keys(sort);

        for (var _i = 0; _i < _arr.length; _i++) {
          var sortField = _arr[_i];
          var sortDir = sort[sortField];

          if (i1[sortField] === i2[sortField]) {
            continue;
          }

          if (sortDir === 'asc') {
            if (i1[sortField] > i2[sortField]) {
              return 1;
            } else {
              return -1;
            }
          } else {
            if (i1[sortField] < i2[sortField]) {
              return 1;
            } else {
              return -1;
            }
          }
        }

        return 0;
      });
    }
    /**
     * @param filter Object filter params
     */

  }, {
    key: "filterItems",
    value: function filterItems(filter) {
      var _this2 = this;

      var _loop = function _loop(field) {
        if (!filter.hasOwnProperty(field) || filter[field] === '') {
          return "continue";
        }

        var value = filter[field],
            compareFunc = void 0;

        if ((0, _utils.isNumeric)(value)) {
          compareFunc = function compareFunc(item) {
            return item[field] == value;
          };
        } else {
          compareFunc = function compareFunc(item) {
            return item[field].search(new RegExp(value, 'i')) > -1;
          };
        }

        _this2.data = _this2.data.filter(compareFunc);
      };

      for (var field in filter) {
        var _ret = _loop(field);

        if (_ret === "continue") continue;
      }
    }
  }, {
    key: "fetch",
    value: function fetch(params) {
      this.data = _toConsumableArray(this.allData);

      if (params && params.sort && Object.keys(params.sort).length) {
        this.sortItems(params.sort);
      }

      var filter = this.getSearchParam(this.filterParamName);

      if (filter && Object.keys(filter).length > 0) {
        this.filterItems(filter);
      }
    }
  }]);

  return ArrayDataProvider;
}(_AbstractProvider2.default);

exports.default = ArrayDataProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BcnJheURhdGFQcm92aWRlci50cyJdLCJuYW1lcyI6WyJBcnJheURhdGFQcm92aWRlciIsInBhcmFtcyIsImRhdGEiLCJhbGxEYXRhIiwiZmlsdGVyUGFyYW1OYW1lIiwiZmV0Y2giLCJsZW5ndGgiLCJzbGljZSIsImdldFN0YXJ0SW5kZXgiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsInNvcnQiLCJpMSIsImkyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRGaWVsZCIsInNvcnREaXIiLCJmaWx0ZXIiLCJmaWVsZCIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJjb21wYXJlRnVuYyIsIml0ZW0iLCJzZWFyY2giLCJSZWdFeHAiLCJzb3J0SXRlbXMiLCJnZXRTZWFyY2hQYXJhbSIsImZpbHRlckl0ZW1zIiwiQWJzdHJhY3RQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7O0FBS2pCLDZCQUFZQyxNQUFaLEVBQW9GO0FBQUE7O0FBQUE7O0FBQ2hGLDJGQUFNQSxNQUFOOztBQURnRjs7QUFBQTs7QUFBQSw4RkFGbEQsUUFFa0Q7O0FBRWhGLFVBQUtDLElBQUwsR0FBWUQsTUFBTSxDQUFDQyxJQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZUYsTUFBTSxDQUFDQyxJQUF0Qjs7QUFDQSxRQUFJRCxNQUFNLENBQUNHLGVBQVgsRUFBNEI7QUFDeEIsWUFBS0EsZUFBTCxHQUF1QkgsTUFBTSxDQUFDRyxlQUE5QjtBQUNIOztBQUNELFVBQUtDLEtBQUw7O0FBUGdGO0FBUW5GO0FBRUQ7Ozs7Ozs7b0NBR2dCO0FBQ1osYUFBTyxLQUFLSCxJQUFMLENBQVVJLE1BQWpCO0FBQ0g7QUFFRDs7Ozs7OytCQUdXO0FBQ1AsYUFBTyxLQUFLSixJQUFMLENBQVVLLEtBQVYsQ0FBZ0IsS0FBS0MsYUFBTCxFQUFo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QUE2QixDQUEzQyxFQUE4QztBQUMxQyxhQUFLc0IsV0FBTCxDQUFpQlYsTUFBakI7QUFDSDtBQUNKOzs7O0VBcEcwQ1csMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RQcm92aWRlciwgeyBQcm92aWRlclNldHRpbmdzIH0gZnJvbSAnLi9BYnN0cmFjdFByb3ZpZGVyJ1xuaW1wb3J0IHsgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXlEYXRhUHJvdmlkZXIgZXh0ZW5kcyBBYnN0cmFjdFByb3ZpZGVyIHtcbiAgICBwcml2YXRlIGRhdGE6IGFueTtcbiAgICBwcml2YXRlIGFsbERhdGE6IGFueTtcbiAgICBwcml2YXRlIGZpbHRlclBhcmFtTmFtZTogc3RyaW5nID0gJ2ZpbHRlcic7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IFByb3ZpZGVyU2V0dGluZ3MgJiB7IGRhdGE/OiBhbnlbXSwgZmlsdGVyUGFyYW1OYW1lPzogc3RyaW5nOyB9KSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHBhcmFtcy5kYXRhO1xuICAgICAgICB0aGlzLmFsbERhdGEgPSBwYXJhbXMuZGF0YTtcbiAgICAgICAgaWYgKHBhcmFtcy5maWx0ZXJQYXJhbU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyUGFyYW1OYW1lID0gcGFyYW1zLmZpbHRlclBhcmFtTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBnZXRUb3RhbENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIGdldEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnNsaWNlKHRoaXMuZ2V0U3RhcnRJbmRleCgpLCB0aGlzLmdldEFjdGl2ZVBhZ2UoKSAqIHRoaXMuZ2V0UGVyUGFnZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBkYXRhXG4gICAgICogQHJldHVybiB7QXJyYXlEYXRhUHJvdmlkZXJ9XG4gICAgICovXG4gICAgc2V0SXRlbXMoZGF0YTogYW55W10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5hbGxEYXRhID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNvcnQgT2JqZWN0IHNvcnQgcGFyYW1zXG4gICAgICovXG4gICAgcHJpdmF0ZSBzb3J0SXRlbXMoc29ydDogT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZGF0YS5zb3J0KChpMSwgaTIpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHNvcnRGaWVsZCBvZiBPYmplY3Qua2V5cyhzb3J0KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnREaXIgPSBzb3J0W3NvcnRGaWVsZF07XG4gICAgICAgICAgICAgICAgaWYgKGkxW3NvcnRGaWVsZF0gPT09IGkyW3NvcnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNvcnREaXIgPT09ICdhc2MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMVtzb3J0RmllbGRdID4gaTJbc29ydEZpZWxkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxW3NvcnRGaWVsZF0gPCBpMltzb3J0RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZmlsdGVyIE9iamVjdCBmaWx0ZXIgcGFyYW1zXG4gICAgICovXG4gICAgcHJpdmF0ZSBmaWx0ZXJJdGVtcyhmaWx0ZXIpIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBmaWx0ZXIpIHtcbiAgICAgICAgICAgIGlmICghZmlsdGVyLmhhc093blByb3BlcnR5KGZpZWxkKSB8fCBmaWx0ZXJbZmllbGRdID09PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBmaWx0ZXJbZmllbGRdLFxuICAgICAgICAgICAgICAgIGNvbXBhcmVGdW5jOiAoaXRlbTogT2JqZWN0KSA9PiB2b2lkO1xuXG4gICAgICAgICAgICBpZiAoaXNOdW1lcmljKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVGdW5jID0gKGl0ZW0pID0+IGl0ZW1bZmllbGRdID09IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlRnVuYyA9IChpdGVtKSA9PiBpdGVtW2ZpZWxkXS5zZWFyY2gobmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKSkgPiAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcihjb21wYXJlRnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaChwYXJhbXM/OiBTZWFyY2hQYXJhbXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhID0gWyAuLi50aGlzLmFsbERhdGEgXTtcbiAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc29ydCAmJiBPYmplY3Qua2V5cyhwYXJhbXMuc29ydCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRJdGVtcyhwYXJhbXMuc29ydCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRTZWFyY2hQYXJhbSh0aGlzLmZpbHRlclBhcmFtTmFtZSk7XG4gICAgICAgIGlmIChmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlckl0ZW1zKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICB9XG59Il19