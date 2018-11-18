"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractProvider2 = _interopRequireDefault(require("./AbstractProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

    _this.data = params.data;
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
    key: "setData",
    value: function setData(data) {
      this.data = data;
      return this;
    }
  }, {
    key: "fetch",
    value: function fetch(params) {
      if (params && params.sort && Object.keys(params.sort).length) {
        this.data.sort(function (i1, i2) {
          var _arr = Object.keys(params.sort);

          for (var _i = 0; _i < _arr.length; _i++) {
            var sortField = _arr[_i];
            var sortDir = params.sort[sortField];

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
    }
  }]);

  return ArrayDataProvider;
}(_AbstractProvider2.default);

exports.default = ArrayDataProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BcnJheURhdGFQcm92aWRlci50cyJdLCJuYW1lcyI6WyJBcnJheURhdGFQcm92aWRlciIsInBhcmFtcyIsImRhdGEiLCJsZW5ndGgiLCJzbGljZSIsImdldFN0YXJ0SW5kZXgiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsInNvcnQiLCJPYmplY3QiLCJrZXlzIiwiaTEiLCJpMiIsInNvcnRGaWVsZCIsInNvcnREaXIiLCJBYnN0cmFjdFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7O0FBR2pCLDZCQUFZQyxNQUFaLEVBQXlEO0FBQUE7O0FBQUE7O0FBQ3JELDJGQUFNQSxNQUFOOztBQURxRDs7QUFFckQsVUFBS0MsSUFBTCxHQUFZRCxNQUFNLENBQUNDLElBQW5CO0FBRnFEO0FBR3hEO0FBRUQ7Ozs7Ozs7b0NBR2dCO0FBQ1osYUFBTyxLQUFLQSxJQUFMLENBQVVDLE1BQWpCO0FBQ0g7QUFFRDs7Ozs7OytCQUdXO0FBQ1AsYUFBTyxLQUFLRCxJQUFMLENBQVVFLEtBQVYsQ0FBZ0IsS0FBS0MsYUFBTCxFQUFoQixFQUFzQyxLQUFLQyxhQUFMLEtBQXVCLEtBQUtDLFVBQUwsRUFBN0QsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7NEJBSVFMLEksRUFBYTtBQUNqQixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzBCQUVLRCxNLEVBQW9CO0FBQ3RCLFVBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxJQUFqQixJQUF5QkMsTUFBTSxDQUFDQyxJQUFQLENBQVlULE1BQU0sQ0FBQ08sSUFBbkIsRUFBeUJMLE1BQXRELEVBQThEO0FBQzFELGFBQUtELElBQUwsQ0FBVU0sSUFBVixDQUFlLFVBQUNHLEVBQUQsRUFBS0MsRUFBTCxFQUFZO0FBQUEscUJBQ0RILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVCxNQUFNLENBQUNPLElBQW5CLENBREM7O0FBQ3ZCLG1EQUFnRDtBQUEzQyxnQkFBSUssU0FBUyxXQUFiO0FBQ0QsZ0JBQU1DLE9BQU8sR0FBR2IsTUFBTSxDQUFDTyxJQUFQLENBQVlLLFNBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlGLEVBQUUsQ0FBQ0UsU0FBRCxDQUFGLEtBQWtCRCxFQUFFLENBQUNDLFNBQUQsQ0FBeEIsRUFBcUM7QUFDakM7QUFDSDs7QUFFRCxnQkFBSUMsT0FBTyxLQUFLLEtBQWhCLEVBQXVCO0FBQ25CLGtCQUFJSCxFQUFFLENBQUNFLFNBQUQsQ0FBRixHQUFnQkQsRUFBRSxDQUFDQyxTQUFELENBQXRCLEVBQW1DO0FBQy9CLHVCQUFPLENBQVA7QUFDSCxlQUZELE1BRU87QUFDSCx1QkFBTyxDQUFDLENBQVI7QUFDSDtBQUNKLGFBTkQsTUFNTztBQUNILGtCQUFJRixFQUFFLENBQUNFLFNBQUQsQ0FBRixHQUFnQkQsRUFBRSxDQUFDQyxTQUFELENBQXRCLEVBQW1DO0FBQy9CLHVCQUFPLENBQVA7QUFDSCxlQUZELE1BRU87QUFDSCx1QkFBTyxDQUFDLENBQVI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsaUJBQU8sQ0FBUDtBQUNILFNBdkJEO0FBd0JIO0FBQ0o7Ozs7RUExRDBDRSwwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFByb3ZpZGVyLCB7IFByb3ZpZGVyU2V0dGluZ3MgfSBmcm9tICcuL0Fic3RyYWN0UHJvdmlkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5RGF0YVByb3ZpZGVyIGV4dGVuZHMgQWJzdHJhY3RQcm92aWRlciB7XG4gICAgcHJpdmF0ZSBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IFByb3ZpZGVyU2V0dGluZ3MgJiB7IGRhdGE/OiBhbnlbXSB9KSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHBhcmFtcy5kYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgZ2V0VG90YWxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBnZXRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zbGljZSh0aGlzLmdldFN0YXJ0SW5kZXgoKSwgdGhpcy5nZXRBY3RpdmVQYWdlKCkgKiB0aGlzLmdldFBlclBhZ2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHthcnJheX0gZGF0YVxuICAgICAqIEByZXR1cm4ge0FycmF5RGF0YVByb3ZpZGVyfVxuICAgICAqL1xuICAgIHNldERhdGEoZGF0YTogYW55W10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmV0Y2gocGFyYW1zPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQgJiYgT2JqZWN0LmtleXMocGFyYW1zLnNvcnQpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNvcnQoKGkxLCBpMikgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNvcnRGaWVsZCBvZiBPYmplY3Qua2V5cyhwYXJhbXMuc29ydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydERpciA9IHBhcmFtcy5zb3J0W3NvcnRGaWVsZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMVtzb3J0RmllbGRdID09PSBpMltzb3J0RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0RGlyID09PSAnYXNjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkxW3NvcnRGaWVsZF0gPiBpMltzb3J0RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaTFbc29ydEZpZWxkXSA8IGkyW3NvcnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19