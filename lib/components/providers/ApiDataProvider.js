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

    return _this;
  }

  _createClass(ApiDataProvider, [{
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
      var defaults = {
        limit: this.getPerPage(),
        page: this.getActivePage()
      };

      this._apiCallback(_objectSpread({}, defaults, this.getSearchParams(), params));
    }
  }, {
    key: "apiCallback",
    get: function get() {
      return this._apiCallback;
    },
    set: function set(value) {
      this._apiCallback = value;
    }
  }]);

  return ApiDataProvider;
}(_AbstractProvider.default);

exports.default = ApiDataProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy9BcGlEYXRhUHJvdmlkZXIudHMiXSwibmFtZXMiOlsiQXBpRGF0YVByb3ZpZGVyIiwiaXRlbXMiLCJfciIsIk1hdGgiLCJyYW5kb20iLCJ0b3RhbCIsInBhZ2UiLCJmZXRjaCIsInBhcmFtcyIsImRlZmF1bHRzIiwibGltaXQiLCJnZXRQZXJQYWdlIiwiZ2V0QWN0aXZlUGFnZSIsIl9hcGlDYWxsYmFjayIsImdldFNlYXJjaFBhcmFtcyIsInZhbHVlIiwiQWJzdHJhY3REYXRhUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkZBQ0YsSTs7b0ZBRVAsQzs7b0ZBRUEsRTs7aUZBRUgsQzs7Ozs7Ozs2QkFVSUMsSyxFQUFPO0FBQ1osV0FBS0MsRUFBTCxHQUFVQyxJQUFJLENBQUNDLE1BQUwsRUFBVjtBQUNBLFdBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7K0JBRVU7QUFDUCxhQUFPLEtBQUtBLEtBQVo7QUFDSDs7O29DQUVlO0FBQ1osYUFBTyxLQUFLSSxLQUFaO0FBQ0g7OztpQ0FFWTtBQUNULGFBQU8sS0FBS0gsRUFBWjtBQUNIOzs7c0NBRXNCO0FBQUEsVUFBVEcsS0FBUyxRQUFUQSxLQUFTO0FBQ25CLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7a0NBRWFDLEksRUFBTTtBQUNoQix5RkFBb0JBLElBQXBCOztBQUNBLFdBQUtDLEtBQUwsQ0FBVztBQUFFRCxRQUFBQSxJQUFJLEVBQUpBO0FBQUYsT0FBWDtBQUVBLGFBQU8sSUFBUDtBQUNIOzs7MEJBRUtFLE0sRUFBUTtBQUNWLFVBQUlDLFFBQVEsR0FBRztBQUNYQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsVUFBTCxFQURJO0FBRVhMLFFBQUFBLElBQUksRUFBRSxLQUFLTSxhQUFMO0FBRkssT0FBZjs7QUFLQSxXQUFLQyxZQUFMLG1CQUNPSixRQURQLEVBRU8sS0FBS0ssZUFBTCxFQUZQLEVBR09OLE1BSFA7QUFLSDs7O3dCQWhEaUI7QUFDZCxhQUFPLEtBQUtLLFlBQVo7QUFDSCxLO3NCQUVlRSxLLEVBQU87QUFDbkIsV0FBS0YsWUFBTCxHQUFvQkUsS0FBcEI7QUFDSDs7OztFQWZ3Q0MseUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3REYXRhUHJvdmlkZXIgZnJvbSAnLi9BYnN0cmFjdFByb3ZpZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlEYXRhUHJvdmlkZXIgZXh0ZW5kcyBBYnN0cmFjdERhdGFQcm92aWRlciB7XG4gICAgX2FwaUNhbGxiYWNrID0gbnVsbDtcblxuICAgIHRvdGFsID0gMDtcblxuICAgIGl0ZW1zID0gW107XG5cbiAgICBfciA9IDA7XG5cbiAgICBnZXQgYXBpQ2FsbGJhY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlDYWxsYmFjaztcbiAgICB9XG5cbiAgICBzZXQgYXBpQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYXBpQ2FsbGJhY2sgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRJdGVtcyhpdGVtcykge1xuICAgICAgICB0aGlzLl9yID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRUb3RhbENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbDtcbiAgICB9XG5cbiAgICBnZXRVbmlxS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcjtcbiAgICB9XG5cbiAgICBzZXRNZXRhZGF0YSh7IHRvdGFsIH0pIHtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2UpIHtcbiAgICAgICAgc3VwZXIuc2V0QWN0aXZlUGFnZShwYWdlKTtcbiAgICAgICAgdGhpcy5mZXRjaCh7IHBhZ2UgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmV0Y2gocGFyYW1zKSB7XG4gICAgICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLmdldFBlclBhZ2UoKSxcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuZ2V0QWN0aXZlUGFnZSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fYXBpQ2FsbGJhY2soe1xuICAgICAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgICAgICAuLi50aGlzLmdldFNlYXJjaFBhcmFtcygpLFxuICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==