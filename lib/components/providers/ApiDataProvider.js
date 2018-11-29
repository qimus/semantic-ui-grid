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
    key: "getApiCallback",
    value: function getApiCallback() {
      return this._apiCallback;
    }
  }, {
    key: "setApiCallback",
    value: function setApiCallback(value) {
      this._apiCallback = value;
    }
  }, {
    key: "setDefaultParams",
    value: function setDefaultParams(defaultParams) {
      this._defaultParams = defaultParams;
    }
  }, {
    key: "getDefaultParams",
    value: function getDefaultParams() {
      return this._defaultParams;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BcGlEYXRhUHJvdmlkZXIudHMiXSwibmFtZXMiOlsiQXBpRGF0YVByb3ZpZGVyIiwiX2FwaUNhbGxiYWNrIiwidmFsdWUiLCJkZWZhdWx0UGFyYW1zIiwiX2RlZmF1bHRQYXJhbXMiLCJpdGVtcyIsIl9yIiwiTWF0aCIsInJhbmRvbSIsInRvdGFsIiwicGFnZSIsImZldGNoIiwicGFyYW1zIiwiZGVmYXVsdHMiLCJsaW1pdCIsImdldFBlclBhZ2UiLCJnZXRBY3RpdmVQYWdlIiwiZ2V0U2VhcmNoUGFyYW1zIiwiQWJzdHJhY3REYXRhUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkZBQ0YsSTs7b0ZBQ1AsQzs7b0ZBQ0EsRTs7aUZBQ0gsQzs7NkZBQ1ksRTs7Ozs7OztxQ0FFQTtBQUNiLGFBQU8sS0FBS0MsWUFBWjtBQUNIOzs7bUNBRWNDLEssRUFBTztBQUNsQixXQUFLRCxZQUFMLEdBQW9CQyxLQUFwQjtBQUNIOzs7cUNBRWdCQyxhLEVBQWU7QUFDNUIsV0FBS0MsY0FBTCxHQUFzQkQsYUFBdEI7QUFDSDs7O3VDQUVrQjtBQUNmLGFBQU8sS0FBS0MsY0FBWjtBQUNIOzs7NkJBRVFDLEssRUFBTztBQUNaLFdBQUtDLEVBQUwsR0FBVUMsSUFBSSxDQUFDQyxNQUFMLEVBQVY7QUFDQSxXQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7OytCQUVVO0FBQ1AsYUFBTyxLQUFLQSxLQUFaO0FBQ0g7OztvQ0FFZTtBQUNaLGFBQU8sS0FBS0ksS0FBWjtBQUNIOzs7aUNBRVk7QUFDVCxhQUFPLEtBQUtILEVBQVo7QUFDSDs7O3NDQUVzQjtBQUFBLFVBQVRHLEtBQVMsUUFBVEEsS0FBUztBQUNuQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFPLElBQVA7QUFDSDs7O2tDQUVhQyxJLEVBQU07QUFDaEIseUZBQW9CQSxJQUFwQjs7QUFDQSxXQUFLQyxLQUFMLENBQVc7QUFBRUQsUUFBQUEsSUFBSSxFQUFKQTtBQUFGLE9BQVg7QUFFQSxhQUFPLElBQVA7QUFDSDs7OzBCQUVLRSxNLEVBQVE7QUFDVixVQUFJQyxRQUFRO0FBQ1JDLFFBQUFBLEtBQUssRUFBRSxLQUFLQyxVQUFMLEVBREM7QUFFUkwsUUFBQUEsSUFBSSxFQUFFLEtBQUtNLGFBQUw7QUFGRSxTQUdMLEtBQUtaLGNBSEEsQ0FBWjs7QUFNQSxXQUFLSCxZQUFMLG1CQUNPWSxRQURQLEVBRU8sS0FBS0ksZUFBTCxFQUZQLEVBR09MLE1BSFA7QUFLSDs7OztFQWhFd0NNLHlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0RGF0YVByb3ZpZGVyIGZyb20gJy4vQWJzdHJhY3RQcm92aWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpRGF0YVByb3ZpZGVyIGV4dGVuZHMgQWJzdHJhY3REYXRhUHJvdmlkZXIge1xuICAgIF9hcGlDYWxsYmFjayA9IG51bGw7XG4gICAgdG90YWwgPSAwO1xuICAgIGl0ZW1zID0gW107XG4gICAgX3IgPSAwO1xuICAgIF9kZWZhdWx0UGFyYW1zID0ge307XG5cbiAgICBnZXRBcGlDYWxsYmFjaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaUNhbGxiYWNrO1xuICAgIH1cblxuICAgIHNldEFwaUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2FwaUNhbGxiYWNrID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdFBhcmFtcyhkZWZhdWx0UGFyYW1zKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRQYXJhbXMgPSBkZWZhdWx0UGFyYW1zO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UGFyYW1zO1xuICAgIH1cblxuICAgIHNldEl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX3IgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldFRvdGFsQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsO1xuICAgIH1cblxuICAgIGdldFVuaXFLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yO1xuICAgIH1cblxuICAgIHNldE1ldGFkYXRhKHsgdG90YWwgfSkge1xuICAgICAgICB0aGlzLnRvdGFsID0gdG90YWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVBhZ2UocGFnZSkge1xuICAgICAgICBzdXBlci5zZXRBY3RpdmVQYWdlKHBhZ2UpO1xuICAgICAgICB0aGlzLmZldGNoKHsgcGFnZSB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmZXRjaChwYXJhbXMpIHtcbiAgICAgICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGltaXQ6IHRoaXMuZ2V0UGVyUGFnZSgpLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5nZXRBY3RpdmVQYWdlKCksXG4gICAgICAgICAgICAuLi50aGlzLl9kZWZhdWx0UGFyYW1zXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fYXBpQ2FsbGJhY2soe1xuICAgICAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgICAgICAuLi50aGlzLmdldFNlYXJjaFBhcmFtcygpLFxuICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==