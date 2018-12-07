"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LinkAction =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LinkAction, _React$Component);

  function LinkAction() {
    _classCallCheck(this, LinkAction);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinkAction).apply(this, arguments));
  }

  _createClass(LinkAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          link = _this$props.link,
          row = _this$props.row,
          options = _this$props.options;
      var href;

      if (typeof link === 'function') {
        href = link(row);
      } else {
        href = link;
      }

      return React.createElement(_semanticUiReact.Button, _extends({
        as: _reactRouterDom.Link,
        to: href
      }, options));
    }
  }]);

  return LinkAction;
}(React.Component);

exports.default = LinkAction;

_defineProperty(LinkAction, "defaultProps", {
  icon: 'edit'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjdGlvbnMvbGluay1hY3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxpbmtBY3Rpb24iLCJwcm9wcyIsImxpbmsiLCJyb3ciLCJvcHRpb25zIiwiaHJlZiIsIkxpbmsiLCJSZWFjdCIsIkNvbXBvbmVudCIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcUJBLFU7Ozs7Ozs7Ozs7Ozs7NkJBS1I7QUFBQSx3QkFDMEIsS0FBS0MsS0FEL0I7QUFBQSxVQUNHQyxJQURILGVBQ0dBLElBREg7QUFBQSxVQUNTQyxHQURULGVBQ1NBLEdBRFQ7QUFBQSxVQUNjQyxPQURkLGVBQ2NBLE9BRGQ7QUFFTCxVQUFJQyxJQUFKOztBQUVBLFVBQUksT0FBT0gsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM1QkcsUUFBQUEsSUFBSSxHQUFHSCxJQUFJLENBQUNDLEdBQUQsQ0FBWDtBQUNILE9BRkQsTUFFTztBQUNIRSxRQUFBQSxJQUFJLEdBQUdILElBQVA7QUFDSDs7QUFFRCxhQUNJLG9CQUFDLHVCQUFEO0FBQ0ksUUFBQSxFQUFFLEVBQUVJLG9CQURSO0FBRUksUUFBQSxFQUFFLEVBQUVEO0FBRlIsU0FHUUQsT0FIUixFQURKO0FBTUg7Ozs7RUFyQm1DRyxLQUFLLENBQUNDLFM7Ozs7Z0JBQXpCUixVLGtCQUNLO0FBQ2xCUyxFQUFBQSxJQUFJLEVBQUU7QUFEWSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIEJ1dHRvblxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbnRlcmZhY2UgTGlua0FjdGlvblByb3BzIHtcbiAgICBsaW5rKHJvdzogYW55KTogdm9pZDtcbiAgICByb3c6IGFueTtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIG9wdGlvbnM6IHsgW3Byb3A6IHN0cmluZ106IGFueSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGlua0FjdGlvblByb3BzLCB7fT4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGljb246ICdlZGl0J1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbGluaywgcm93LCBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgaHJlZjtcblxuICAgICAgICBpZiAodHlwZW9mIGxpbmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGhyZWYgPSBsaW5rKHJvdyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocmVmID0gbGluaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgdG89e2hyZWZ9XG4gICAgICAgICAgICAgICAgey4uLm9wdGlvbnN9Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==