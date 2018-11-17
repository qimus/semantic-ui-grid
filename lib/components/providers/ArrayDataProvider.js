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
    value: function fetch(params) {}
  }]);

  return ArrayDataProvider;
}(_AbstractProvider2.default);

exports.default = ArrayDataProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BcnJheURhdGFQcm92aWRlci50cyJdLCJuYW1lcyI6WyJBcnJheURhdGFQcm92aWRlciIsInBhcmFtcyIsImRhdGEiLCJsZW5ndGgiLCJzbGljZSIsImdldFN0YXJ0SW5kZXgiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0UGVyUGFnZSIsIkFic3RyYWN0UHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7QUFHakIsNkJBQVlDLE1BQVosRUFBeUQ7QUFBQTs7QUFBQTs7QUFDckQsMkZBQU1BLE1BQU47O0FBRHFEOztBQUVyRCxVQUFLQyxJQUFMLEdBQVlELE1BQU0sQ0FBQ0MsSUFBbkI7QUFGcUQ7QUFHeEQ7QUFFRDs7Ozs7OztvQ0FHZ0I7QUFDWixhQUFPLEtBQUtBLElBQUwsQ0FBVUMsTUFBakI7QUFDSDtBQUVEOzs7Ozs7K0JBR1c7QUFDUCxhQUFPLEtBQUtELElBQUwsQ0FBVUUsS0FBVixDQUFnQixLQUFLQyxhQUFMLEVBQWhCLEVBQXNDLEtBQUtDLGFBQUwsS0FBdUIsS0FBS0MsVUFBTCxFQUE3RCxDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs0QkFJUUwsSSxFQUFhO0FBQ2pCLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7MEJBRUtELE0sRUFBb0IsQ0FBRTs7OztFQS9CZU8sMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RQcm92aWRlciwgeyBQcm92aWRlclNldHRpbmdzIH0gZnJvbSAnLi9BYnN0cmFjdFByb3ZpZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheURhdGFQcm92aWRlciBleHRlbmRzIEFic3RyYWN0UHJvdmlkZXIge1xuICAgIHByaXZhdGUgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBQcm92aWRlclNldHRpbmdzICYgeyBkYXRhPzogYW55W10gfSkge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgICAgICB0aGlzLmRhdGEgPSBwYXJhbXMuZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIGdldFRvdGFsQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgZ2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuc2xpY2UodGhpcy5nZXRTdGFydEluZGV4KCksIHRoaXMuZ2V0QWN0aXZlUGFnZSgpICogdGhpcy5nZXRQZXJQYWdlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGRhdGFcbiAgICAgKiBAcmV0dXJuIHtBcnJheURhdGFQcm92aWRlcn1cbiAgICAgKi9cbiAgICBzZXREYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZldGNoKHBhcmFtcz86IGFueSk6IHZvaWQge31cbn0iXX0=