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

      if (Object.keys(filter).length > 0) {
        this.filterItems(filter);
      }
    }
  }]);

  return ArrayDataProvider;
}(_AbstractProvider2.default);

exports.default = ArrayDataProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BcnJheURhdGFQcm92aWRlci50cyJdLCJuYW1lcyI6WyJBcnJheURhdGFQcm92aWRlciIsInBhcmFtcyIsImRhdGEiLCJhbGxEYXRhIiwiZmlsdGVyUGFyYW1OYW1lIiwiZmV0Y2giLCJsZW5ndGgiLCJzbGljZSIsImdldFN0YXJ0SW5kZXgiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsInNvcnQiLCJpMSIsImkyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRGaWVsZCIsInNvcnREaXIiLCJmaWx0ZXIiLCJmaWVsZCIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJjb21wYXJlRnVuYyIsIml0ZW0iLCJzZWFyY2giLCJSZWdFeHAiLCJzb3J0SXRlbXMiLCJnZXRTZWFyY2hQYXJhbSIsImZpbHRlckl0ZW1zIiwiQWJzdHJhY3RQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7O0FBS2pCLDZCQUFZQyxNQUFaLEVBQW9GO0FBQUE7O0FBQUE7O0FBQ2hGLDJGQUFNQSxNQUFOOztBQURnRjs7QUFBQTs7QUFBQSw4RkFGbEQsUUFFa0Q7O0FBRWhGLFVBQUtDLElBQUwsR0FBWUQsTUFBTSxDQUFDQyxJQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZUYsTUFBTSxDQUFDQyxJQUF0Qjs7QUFDQSxRQUFJRCxNQUFNLENBQUNHLGVBQVgsRUFBNEI7QUFDeEIsWUFBS0EsZUFBTCxHQUF1QkgsTUFBTSxDQUFDRyxlQUE5QjtBQUNIOztBQUNELFVBQUtDLEtBQUw7O0FBUGdGO0FBUW5GO0FBRUQ7Ozs7Ozs7b0NBR2dCO0FBQ1osYUFBTyxLQUFLSCxJQUFMLENBQVVJLE1BQWpCO0FBQ0g7QUFFRDs7Ozs7OytCQUdXO0FBQ1AsYUFBTyxLQUFLSixJQUFMLENBQVVLLEtBQVYsQ0FBZ0IsS0FBS0MsYUFBTCxFQUFoQixFQUFzQyxLQUFLQyxhQUFMLEtBQXVCLEtBQUtDLFVBQUwsRUFBN0QsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7NkJBSVNSLEksRUFBYTtBQUNsQixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxPQUFMLEdBQWVELElBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7OEJBR2tCUyxJLEVBQWM7QUFDNUIsV0FBS1QsSUFBTCxDQUFVUyxJQUFWLENBQWUsVUFBQ0MsRUFBRCxFQUFLQyxFQUFMLEVBQVk7QUFBQSxtQkFDREMsTUFBTSxDQUFDQyxJQUFQLENBQVlKLElBQVosQ0FEQzs7QUFDdkIsaURBQXlDO0FBQXBDLGNBQUlLLFNBQVMsV0FBYjtBQUNELGNBQU1DLE9BQU8sR0FBR04sSUFBSSxDQUFDSyxTQUFELENBQXBCOztBQUNBLGNBQUlKLEVBQUUsQ0FBQ0ksU0FBRCxDQUFGLEtBQWtCSCxFQUFFLENBQUNHLFNBQUQsQ0FBeEIsRUFBcUM7QUFDakM7QUFDSDs7QUFFRCxjQUFJQyxPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDbkIsZ0JBQUlMLEVBQUUsQ0FBQ0ksU0FBRCxDQUFGLEdBQWdCSCxFQUFFLENBQUNHLFNBQUQsQ0FBdEIsRUFBbUM7QUFDL0IscUJBQU8sQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFPLENBQUMsQ0FBUjtBQUNIO0FBQ0osV0FORCxNQU1PO0FBQ0gsZ0JBQUlKLEVBQUUsQ0FBQ0ksU0FBRCxDQUFGLEdBQWdCSCxFQUFFLENBQUNHLFNBQUQsQ0FBdEIsRUFBbUM7QUFDL0IscUJBQU8sQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFPLENBQUMsQ0FBUjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxlQUFPLENBQVA7QUFDSCxPQXZCRDtBQXdCSDtBQUVEOzs7Ozs7Z0NBR29CRSxNLEVBQVE7QUFBQTs7QUFBQSxpQ0FDYkMsS0FEYTtBQUVwQixZQUFJLENBQUNELE1BQU0sQ0FBQ0UsY0FBUCxDQUFzQkQsS0FBdEIsQ0FBRCxJQUFpQ0QsTUFBTSxDQUFDQyxLQUFELENBQU4sS0FBa0IsRUFBdkQsRUFBMkQ7QUFDdkQ7QUFDSDs7QUFFRCxZQUFJRSxLQUFLLEdBQUdILE1BQU0sQ0FBQ0MsS0FBRCxDQUFsQjtBQUFBLFlBQ0lHLFdBQW1DLFNBRHZDOztBQUdBLFlBQUksc0JBQVVELEtBQVYsQ0FBSixFQUFzQjtBQUNsQkMsVUFBQUEsV0FBVyxHQUFHLHFCQUFDQyxJQUFEO0FBQUEsbUJBQVVBLElBQUksQ0FBQ0osS0FBRCxDQUFKLElBQWVFLEtBQXpCO0FBQUEsV0FBZDtBQUNILFNBRkQsTUFFTztBQUNIQyxVQUFBQSxXQUFXLEdBQUcscUJBQUNDLElBQUQ7QUFBQSxtQkFBVUEsSUFBSSxDQUFDSixLQUFELENBQUosQ0FBWUssTUFBWixDQUFtQixJQUFJQyxNQUFKLENBQVdKLEtBQVgsRUFBa0IsR0FBbEIsQ0FBbkIsSUFBNkMsQ0FBQyxDQUF4RDtBQUFBLFdBQWQ7QUFDSDs7QUFFRCxRQUFBLE1BQUksQ0FBQ25CLElBQUwsR0FBWSxNQUFJLENBQUNBLElBQUwsQ0FBVWdCLE1BQVYsQ0FBaUJJLFdBQWpCLENBQVo7QUFmb0I7O0FBQ3hCLFdBQUssSUFBTUgsS0FBWCxJQUFvQkQsTUFBcEIsRUFBNEI7QUFBQSx5QkFBakJDLEtBQWlCOztBQUFBLGlDQUVwQjtBQWFQO0FBQ0o7OzswQkFFS2xCLE0sRUFBNkI7QUFDL0IsV0FBS0MsSUFBTCxzQkFBaUIsS0FBS0MsT0FBdEI7O0FBQ0EsVUFBSUYsTUFBTSxJQUFJQSxNQUFNLENBQUNVLElBQWpCLElBQXlCRyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsTUFBTSxDQUFDVSxJQUFuQixFQUF5QkwsTUFBdEQsRUFBOEQ7QUFDMUQsYUFBS29CLFNBQUwsQ0FBZXpCLE1BQU0sQ0FBQ1UsSUFBdEI7QUFDSDs7QUFDRCxVQUFNTyxNQUFNLEdBQUcsS0FBS1MsY0FBTCxDQUFvQixLQUFLdkIsZUFBekIsQ0FBZjs7QUFDQSxVQUFJVSxNQUFNLENBQUNDLElBQVAsQ0FBWUcsTUFBWixFQUFvQlosTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDaEMsYUFBS3NCLFdBQUwsQ0FBaUJWLE1BQWpCO0FBQ0g7QUFDSjs7OztFQXBHMENXLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIsIHsgUHJvdmlkZXJTZXR0aW5ncyB9IGZyb20gJy4vQWJzdHJhY3RQcm92aWRlcidcbmltcG9ydCB7IFNlYXJjaFBhcmFtcyB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5RGF0YVByb3ZpZGVyIGV4dGVuZHMgQWJzdHJhY3RQcm92aWRlciB7XG4gICAgcHJpdmF0ZSBkYXRhOiBhbnk7XG4gICAgcHJpdmF0ZSBhbGxEYXRhOiBhbnk7XG4gICAgcHJpdmF0ZSBmaWx0ZXJQYXJhbU5hbWU6IHN0cmluZyA9ICdmaWx0ZXInO1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBQcm92aWRlclNldHRpbmdzICYgeyBkYXRhPzogYW55W10sIGZpbHRlclBhcmFtTmFtZT86IHN0cmluZzsgfSkge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgICAgICB0aGlzLmRhdGEgPSBwYXJhbXMuZGF0YTtcbiAgICAgICAgdGhpcy5hbGxEYXRhID0gcGFyYW1zLmRhdGE7XG4gICAgICAgIGlmIChwYXJhbXMuZmlsdGVyUGFyYW1OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlclBhcmFtTmFtZSA9IHBhcmFtcy5maWx0ZXJQYXJhbU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgZ2V0VG90YWxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBnZXRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zbGljZSh0aGlzLmdldFN0YXJ0SW5kZXgoKSwgdGhpcy5nZXRBY3RpdmVQYWdlKCkgKiB0aGlzLmdldFBlclBhZ2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHthcnJheX0gZGF0YVxuICAgICAqIEByZXR1cm4ge0FycmF5RGF0YVByb3ZpZGVyfVxuICAgICAqL1xuICAgIHNldEl0ZW1zKGRhdGE6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuYWxsRGF0YSA9IGRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzb3J0IE9iamVjdCBzb3J0IHBhcmFtc1xuICAgICAqL1xuICAgIHByaXZhdGUgc29ydEl0ZW1zKHNvcnQ6IE9iamVjdCkge1xuICAgICAgICB0aGlzLmRhdGEuc29ydCgoaTEsIGkyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBzb3J0RmllbGQgb2YgT2JqZWN0LmtleXMoc29ydCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0RGlyID0gc29ydFtzb3J0RmllbGRdO1xuICAgICAgICAgICAgICAgIGlmIChpMVtzb3J0RmllbGRdID09PSBpMltzb3J0RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzb3J0RGlyID09PSAnYXNjJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTFbc29ydEZpZWxkXSA+IGkyW3NvcnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMVtzb3J0RmllbGRdIDwgaTJbc29ydEZpZWxkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZpbHRlciBPYmplY3QgZmlsdGVyIHBhcmFtc1xuICAgICAqL1xuICAgIHByaXZhdGUgZmlsdGVySXRlbXMoZmlsdGVyKSB7XG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgaW4gZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlci5oYXNPd25Qcm9wZXJ0eShmaWVsZCkgfHwgZmlsdGVyW2ZpZWxkXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZmlsdGVyW2ZpZWxkXSxcbiAgICAgICAgICAgICAgICBjb21wYXJlRnVuYzogKGl0ZW06IE9iamVjdCkgPT4gdm9pZDtcblxuICAgICAgICAgICAgaWYgKGlzTnVtZXJpYyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlRnVuYyA9IChpdGVtKSA9PiBpdGVtW2ZpZWxkXSA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZUZ1bmMgPSAoaXRlbSkgPT4gaXRlbVtmaWVsZF0uc2VhcmNoKG5ldyBSZWdFeHAodmFsdWUsICdpJykpID4gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoY29tcGFyZUZ1bmMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2gocGFyYW1zPzogU2VhcmNoUGFyYW1zKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFsgLi4udGhpcy5hbGxEYXRhIF07XG4gICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQgJiYgT2JqZWN0LmtleXMocGFyYW1zLnNvcnQpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0SXRlbXMocGFyYW1zLnNvcnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0U2VhcmNoUGFyYW0odGhpcy5maWx0ZXJQYXJhbU5hbWUpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlckl0ZW1zKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICB9XG59Il19