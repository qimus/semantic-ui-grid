"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactRouter = require("react-router");

var _class;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var sortMap = {
  'asc': 'ascending',
  'desc': 'descending'
};

var HeaderCell = (0, _reactRouter.withRouter)(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderCell, _React$Component);

  function HeaderCell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSort", function () {
      var _this$props = _this.props,
          provider = _this$props.provider,
          item = _this$props.item,
          sort = _this$props.sort;

      if (item.sortable) {
        provider.setSortField(item.field, sort === 'asc' ? 'desc' : 'asc');
      }
    });

    return _this;
  }

  _createClass(HeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          sort = _this$props2.sort;
      var sorted;

      if (sort) {
        sorted = sortMap[sort];
      }

      return React.createElement(_semanticUiReact.Table.HeaderCell, {
        sorted: sorted,
        onClick: this.handleSort
      }, item.title || '');
    }
  }]);

  return HeaderCell;
}(React.Component)) || _class;

exports.default = HeaderCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlYWRlci9jZWxsLnRzeCJdLCJuYW1lcyI6WyJzb3J0TWFwIiwiSGVhZGVyQ2VsbCIsIndpdGhSb3V0ZXIiLCJwcm9wcyIsInByb3ZpZGVyIiwiaXRlbSIsInNvcnQiLCJzb3J0YWJsZSIsInNldFNvcnRGaWVsZCIsImZpZWxkIiwic29ydGVkIiwiaGFuZGxlU29ydCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUc7QUFDWixTQUFPLFdBREs7QUFFWixVQUFRO0FBRkksQ0FBaEI7O0lBWXFCQyxVLE9BRHBCQyx1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lGQUVnQixZQUFNO0FBQUEsd0JBQ2tCLE1BQUtDLEtBRHZCO0FBQUEsVUFDUEMsUUFETyxlQUNQQSxRQURPO0FBQUEsVUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsVUFDU0MsSUFEVCxlQUNTQSxJQURUOztBQUVmLFVBQUlELElBQUksQ0FBQ0UsUUFBVCxFQUFtQjtBQUNmSCxRQUFBQSxRQUFRLENBQUNJLFlBQVQsQ0FBc0JILElBQUksQ0FBQ0ksS0FBM0IsRUFBbUNILElBQUksS0FBSyxLQUFWLEdBQW1CLE1BQW5CLEdBQTRCLEtBQTlEO0FBQ0g7QUFDSixLOzs7Ozs7OzZCQUVRO0FBQUEseUJBQ2tCLEtBQUtILEtBRHZCO0FBQUEsVUFDR0UsSUFESCxnQkFDR0EsSUFESDtBQUFBLFVBQ1NDLElBRFQsZ0JBQ1NBLElBRFQ7QUFFTCxVQUFJSSxNQUFKOztBQUVBLFVBQUlKLElBQUosRUFBVTtBQUNOSSxRQUFBQSxNQUFNLEdBQUdWLE9BQU8sQ0FBQ00sSUFBRCxDQUFoQjtBQUNIOztBQUVELGFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxVQUFQO0FBQ0ksUUFBQSxNQUFNLEVBQUVJLE1BRFo7QUFFSSxRQUFBLE9BQU8sRUFBRSxLQUFLQztBQUZsQixTQUdFTixJQUFJLENBQUNPLEtBQUwsSUFBYyxFQUhoQixDQURKO0FBTUg7Ozs7RUF0Qm1DQyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGVcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSBcIi4uL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyXCI7XG5cbmNvbnN0IHNvcnRNYXAgPSB7XG4gICAgJ2FzYyc6ICdhc2NlbmRpbmcnLFxuICAgICdkZXNjJzogJ2Rlc2NlbmRpbmcnXG59O1xuXG5pbnRlcmZhY2UgSGVhZGVyQ2VsbFByb3BzIHtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcixcbiAgICBpdGVtOiBhbnksXG4gICAgc29ydDogc3RyaW5nO1xufVxuXG5Ad2l0aFJvdXRlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIZWFkZXJDZWxsUHJvcHMsIHt9PiB7XG4gICAgaGFuZGxlU29ydCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBwcm92aWRlciwgaXRlbSwgc29ydCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGl0ZW0uc29ydGFibGUpIHtcbiAgICAgICAgICAgIHByb3ZpZGVyLnNldFNvcnRGaWVsZChpdGVtLmZpZWxkLCAoc29ydCA9PT0gJ2FzYycpID8gJ2Rlc2MnIDogJ2FzYycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpdGVtLCBzb3J0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc29ydGVkO1xuXG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICBzb3J0ZWQgPSBzb3J0TWFwW3NvcnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsXG4gICAgICAgICAgICAgICAgc29ydGVkPXtzb3J0ZWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTb3J0fVxuICAgICAgICAgICAgPntpdGVtLnRpdGxlIHx8ICcnfTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==