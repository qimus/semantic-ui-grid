"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractProvider = _interopRequireDefault(require("./AbstractProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ApiDataProvider =
/*#__PURE__*/
function (_AbstractDataProvider) {
  _inherits(ApiDataProvider, _AbstractDataProvider);

  function ApiDataProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ApiDataProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ApiDataProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_apiCallback", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "total", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "items", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_r", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_defaultParams", {});

    return _this;
  }

  _createClass(ApiDataProvider, [{
    key: "setApiCallback",
    value: function setApiCallback() {
      return this._apiCallback;
    }
  }, {
    key: "getApiCallback",
    value: function getApiCallback(value) {
      this._apiCallback = value;
    }
  }, {
    key: "setDefaultsParams",
    value: function setDefaultsParams(defaultParams) {
      this._defaultParams = defaultParams;
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      this._r = Math.random();
      this.items = items;
    }
  }, {
    key: "getItems",
    value: function getItems() {
      return this.items;
    }
  }, {
    key: "getTotalCount",
    value: function getTotalCount() {
      return this.total;
    }
  }, {
    key: "getUniqKey",
    value: function getUniqKey() {
      return this._r;
    }
  }, {
    key: "setMetadata",
    value: function setMetadata(_ref) {
      var total = _ref.total;
      this.total = total;
      return this;
    }
  }, {
    key: "setActivePage",
    value: function setActivePage(page) {
      _get(_getPrototypeOf(ApiDataProvider.prototype), "setActivePage", this).call(this, page);

      this.fetch({
        page: page
      });
      return this;
    }
  }, {
    key: "fetch",
    value: function fetch(params) {
      var defaults = _objectSpread({
        limit: this.getPerPage(),
        page: this.getActivePage()
      }, this._defaultParams);

      this._apiCallback(_objectSpread({}, defaults, this.getSearchParams(), params));
    }
  }]);

  return ApiDataProvider;
}(_AbstractProvider.default);

exports.default = ApiDataProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BcGlEYXRhUHJvdmlkZXIudHMiXSwibmFtZXMiOlsiQXBpRGF0YVByb3ZpZGVyIiwiX2FwaUNhbGxiYWNrIiwidmFsdWUiLCJkZWZhdWx0UGFyYW1zIiwiX2RlZmF1bHRQYXJhbXMiLCJpdGVtcyIsIl9yIiwiTWF0aCIsInJhbmRvbSIsInRvdGFsIiwicGFnZSIsImZldGNoIiwicGFyYW1zIiwiZGVmYXVsdHMiLCJsaW1pdCIsImdldFBlclBhZ2UiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0U2VhcmNoUGFyYW1zIiwiQWJzdHJhY3REYXRhUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkZBQ0YsSTs7b0ZBQ1AsQzs7b0ZBQ0EsRTs7aUZBQ0gsQzs7NkZBQ1ksRTs7Ozs7OztxQ0FFQTtBQUNiLGFBQU8sS0FBS0MsWUFBWjtBQUNIOzs7bUNBRWNDLEssRUFBTztBQUNsQixXQUFLRCxZQUFMLEdBQW9CQyxLQUFwQjtBQUNIOzs7c0NBRWlCQyxhLEVBQWU7QUFDN0IsV0FBS0MsY0FBTCxHQUFzQkQsYUFBdEI7QUFDSDs7OzZCQUVRRSxLLEVBQU87QUFDWixXQUFLQyxFQUFMLEdBQVVDLElBQUksQ0FBQ0MsTUFBTCxFQUFWO0FBQ0EsV0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7OzsrQkFFVTtBQUNQLGFBQU8sS0FBS0EsS0FBWjtBQUNIOzs7b0NBRWU7QUFDWixhQUFPLEtBQUtJLEtBQVo7QUFDSDs7O2lDQUVZO0FBQ1QsYUFBTyxLQUFLSCxFQUFaO0FBQ0g7OztzQ0FFc0I7QUFBQSxVQUFURyxLQUFTLFFBQVRBLEtBQVM7QUFDbkIsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7OztrQ0FFYUMsSSxFQUFNO0FBQ2hCLHlGQUFvQkEsSUFBcEI7O0FBQ0EsV0FBS0MsS0FBTCxDQUFXO0FBQUVELFFBQUFBLElBQUksRUFBSkE7QUFBRixPQUFYO0FBRUEsYUFBTyxJQUFQO0FBQ0g7OzswQkFFS0UsTSxFQUFRO0FBQ1YsVUFBSUMsUUFBUTtBQUNSQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsVUFBTCxFQURDO0FBRVJMLFFBQUFBLElBQUksRUFBRSxLQUFLTSxhQUFMO0FBRkUsU0FHTCxLQUFLWixjQUhBLENBQVo7O0FBTUEsV0FBS0gsWUFBTCxtQkFDT1ksUUFEUCxFQUVPLEtBQUtJLGVBQUwsRUFGUCxFQUdPTCxNQUhQO0FBS0g7Ozs7RUE1RHdDTSx5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdERhdGFQcm92aWRlciBmcm9tICcuL0Fic3RyYWN0UHJvdmlkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaURhdGFQcm92aWRlciBleHRlbmRzIEFic3RyYWN0RGF0YVByb3ZpZGVyIHtcbiAgICBfYXBpQ2FsbGJhY2sgPSBudWxsO1xuICAgIHRvdGFsID0gMDtcbiAgICBpdGVtcyA9IFtdO1xuICAgIF9yID0gMDtcbiAgICBfZGVmYXVsdFBhcmFtcyA9IHt9O1xuXG4gICAgc2V0QXBpQ2FsbGJhY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlDYWxsYmFjaztcbiAgICB9XG5cbiAgICBnZXRBcGlDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hcGlDYWxsYmFjayA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldERlZmF1bHRzUGFyYW1zKGRlZmF1bHRQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFBhcmFtcyA9IGRlZmF1bHRQYXJhbXM7XG4gICAgfVxuXG4gICAgc2V0SXRlbXMoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5fciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWw7XG4gICAgfVxuXG4gICAgZ2V0VW5pcUtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3I7XG4gICAgfVxuXG4gICAgc2V0TWV0YWRhdGEoeyB0b3RhbCB9KSB7XG4gICAgICAgIHRoaXMudG90YWwgPSB0b3RhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlUGFnZShwYWdlKSB7XG4gICAgICAgIHN1cGVyLnNldEFjdGl2ZVBhZ2UocGFnZSk7XG4gICAgICAgIHRoaXMuZmV0Y2goeyBwYWdlIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZldGNoKHBhcmFtcykge1xuICAgICAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBsaW1pdDogdGhpcy5nZXRQZXJQYWdlKCksXG4gICAgICAgICAgICBwYWdlOiB0aGlzLmdldEFjdGl2ZVBhZ2UoKSxcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZmF1bHRQYXJhbXNcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9hcGlDYWxsYmFjayh7XG4gICAgICAgICAgICAuLi5kZWZhdWx0cyxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0U2VhcmNoUGFyYW1zKCksXG4gICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19