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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "apiCallback", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "total", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "items", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_r", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "defaultParams", {});

    return _this;
  }

  _createClass(ApiDataProvider, [{
    key: "getApiCallback",
    value: function getApiCallback() {
      return this.apiCallback;
    }
  }, {
    key: "setApiCallback",
    value: function setApiCallback(value) {
      this.apiCallback = value;
    }
  }, {
    key: "setDefaultParams",
    value: function setDefaultParams(defaultParams) {
      this.defaultParams = defaultParams;
    }
  }, {
    key: "getDefaultParams",
    value: function getDefaultParams() {
      return this.defaultParams;
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
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _get(_getPrototypeOf(ApiDataProvider.prototype), "setActivePage", this).call(this, page, limit);

      var params = {
        page: page
      };

      if (limit) {
        params['limit'] = limit;
      }

      this.fetch(params);
      return this;
    }
  }, {
    key: "fetch",
    value: function fetch(params) {
      var defaults = _objectSpread({
        limit: this.getPerPage(),
        page: this.getActivePage()
      }, this.defaultParams);

      this.apiCallback(_objectSpread({}, defaults, this.getSearchParams(), params));
    }
  }]);

  return ApiDataProvider;
}(_AbstractProvider.default);

exports.default = ApiDataProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BcGlEYXRhUHJvdmlkZXIudHMiXSwibmFtZXMiOlsiQXBpRGF0YVByb3ZpZGVyIiwiYXBpQ2FsbGJhY2siLCJ2YWx1ZSIsImRlZmF1bHRQYXJhbXMiLCJpdGVtcyIsIl9yIiwiTWF0aCIsInJhbmRvbSIsInRvdGFsIiwicGFnZSIsImxpbWl0IiwicGFyYW1zIiwiZmV0Y2giLCJkZWZhdWx0cyIsImdldFBlclBhZ2UiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0U2VhcmNoUGFyYW1zIiwiQWJzdHJhY3REYXRhUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEZBQ0ssSTs7b0ZBQ04sQzs7b0ZBQ0EsRTs7aUZBQ0gsQzs7NEZBQ1csRTs7Ozs7OztxQ0FFUDtBQUNiLGFBQU8sS0FBS0MsV0FBWjtBQUNIOzs7bUNBRWNDLEssRUFBTztBQUNsQixXQUFLRCxXQUFMLEdBQW1CQyxLQUFuQjtBQUNIOzs7cUNBRWdCQyxhLEVBQWU7QUFDNUIsV0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDSDs7O3VDQUVrQjtBQUNmLGFBQU8sS0FBS0EsYUFBWjtBQUNIOzs7NkJBRVFDLEssRUFBTztBQUNaLFdBQUtDLEVBQUwsR0FBVUMsSUFBSSxDQUFDQyxNQUFMLEVBQVY7QUFDQSxXQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7OytCQUVVO0FBQ1AsYUFBTyxLQUFLQSxLQUFaO0FBQ0g7OztvQ0FFZTtBQUNaLGFBQU8sS0FBS0ksS0FBWjtBQUNIOzs7aUNBRVk7QUFDVCxhQUFPLEtBQUtILEVBQVo7QUFDSDs7O3NDQUVzQjtBQUFBLFVBQVRHLEtBQVMsUUFBVEEsS0FBUztBQUNuQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFPLElBQVA7QUFDSDs7O2tDQUVhQyxJLEVBQW9CO0FBQUEsVUFBZEMsS0FBYyx1RUFBTixJQUFNOztBQUM5Qix5RkFBb0JELElBQXBCLEVBQTBCQyxLQUExQjs7QUFDQSxVQUFJQyxNQUFNLEdBQUc7QUFBRUYsUUFBQUEsSUFBSSxFQUFKQTtBQUFGLE9BQWI7O0FBQ0EsVUFBSUMsS0FBSixFQUFXO0FBQ1BDLFFBQUFBLE1BQU0sQ0FBQyxPQUFELENBQU4sR0FBa0JELEtBQWxCO0FBQ0g7O0FBQ0QsV0FBS0UsS0FBTCxDQUFXRCxNQUFYO0FBRUEsYUFBTyxJQUFQO0FBQ0g7OzswQkFFS0EsTSxFQUFRO0FBQ1YsVUFBSUUsUUFBUTtBQUNSSCxRQUFBQSxLQUFLLEVBQUUsS0FBS0ksVUFBTCxFQURDO0FBRVJMLFFBQUFBLElBQUksRUFBRSxLQUFLTSxhQUFMO0FBRkUsU0FHTCxLQUFLWixhQUhBLENBQVo7O0FBTUEsV0FBS0YsV0FBTCxtQkFDT1ksUUFEUCxFQUVPLEtBQUtHLGVBQUwsRUFGUCxFQUdPTCxNQUhQO0FBS0g7Ozs7RUFwRXdDTSx5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdERhdGFQcm92aWRlciBmcm9tICcuL0Fic3RyYWN0UHJvdmlkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaURhdGFQcm92aWRlciBleHRlbmRzIEFic3RyYWN0RGF0YVByb3ZpZGVyIHtcbiAgICBwcml2YXRlIGFwaUNhbGxiYWNrID0gbnVsbDtcbiAgICBwcml2YXRlIHRvdGFsID0gMDtcbiAgICBwcml2YXRlIGl0ZW1zID0gW107XG4gICAgcHJpdmF0ZSBfciA9IDA7XG4gICAgcHJpdmF0ZSBkZWZhdWx0UGFyYW1zID0ge307XG5cbiAgICBnZXRBcGlDYWxsYmFjaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbGJhY2s7XG4gICAgfVxuXG4gICAgc2V0QXBpQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hcGlDYWxsYmFjayA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldERlZmF1bHRQYXJhbXMoZGVmYXVsdFBhcmFtcykge1xuICAgICAgICB0aGlzLmRlZmF1bHRQYXJhbXMgPSBkZWZhdWx0UGFyYW1zO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQYXJhbXM7XG4gICAgfVxuXG4gICAgc2V0SXRlbXMoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5fciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWw7XG4gICAgfVxuXG4gICAgZ2V0VW5pcUtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3I7XG4gICAgfVxuXG4gICAgc2V0TWV0YWRhdGEoeyB0b3RhbCB9KSB7XG4gICAgICAgIHRoaXMudG90YWwgPSB0b3RhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlUGFnZShwYWdlLCBsaW1pdCA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIuc2V0QWN0aXZlUGFnZShwYWdlLCBsaW1pdCk7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7IHBhZ2UgfTtcbiAgICAgICAgaWYgKGxpbWl0KSB7XG4gICAgICAgICAgICBwYXJhbXNbJ2xpbWl0J10gPSBsaW1pdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZldGNoKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmV0Y2gocGFyYW1zKSB7XG4gICAgICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLmdldFBlclBhZ2UoKSxcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuZ2V0QWN0aXZlUGFnZSgpLFxuICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0UGFyYW1zXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hcGlDYWxsYmFjayh7XG4gICAgICAgICAgICAuLi5kZWZhdWx0cyxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0U2VhcmNoUGFyYW1zKCksXG4gICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19