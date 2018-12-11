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
          icon = _this$props.icon,
          _this$props$options = _this$props.options,
          options = _this$props$options === void 0 ? {} : _this$props$options;
      var href;

      if (typeof link === 'function') {
        href = link(row);
      } else {
        href = link;
      }

      return React.createElement(_semanticUiReact.Button, _extends({
        as: _reactRouterDom.Link,
        to: href,
        icon: icon
      }, options));
    }
  }]);

  return LinkAction;
}(React.Component);

exports.default = LinkAction;

_defineProperty(LinkAction, "defaultProps", {
  icon: 'edit'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjdGlvbnMvbGluay1hY3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxpbmtBY3Rpb24iLCJwcm9wcyIsImxpbmsiLCJyb3ciLCJpY29uIiwib3B0aW9ucyIsImhyZWYiLCJMaW5rIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcUJBLFU7Ozs7Ozs7Ozs7Ozs7NkJBS1I7QUFBQSx3QkFDcUMsS0FBS0MsS0FEMUM7QUFBQSxVQUNHQyxJQURILGVBQ0dBLElBREg7QUFBQSxVQUNTQyxHQURULGVBQ1NBLEdBRFQ7QUFBQSxVQUNjQyxJQURkLGVBQ2NBLElBRGQ7QUFBQSw0Q0FDb0JDLE9BRHBCO0FBQUEsVUFDb0JBLE9BRHBCLG9DQUM4QixFQUQ5QjtBQUVMLFVBQUlDLElBQUo7O0FBRUEsVUFBSSxPQUFPSixJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzVCSSxRQUFBQSxJQUFJLEdBQUdKLElBQUksQ0FBQ0MsR0FBRCxDQUFYO0FBQ0gsT0FGRCxNQUVPO0FBQ0hHLFFBQUFBLElBQUksR0FBR0osSUFBUDtBQUNIOztBQUVELGFBQ0ksb0JBQUMsdUJBQUQ7QUFDSSxRQUFBLEVBQUUsRUFBRUssb0JBRFI7QUFFSSxRQUFBLEVBQUUsRUFBRUQsSUFGUjtBQUdJLFFBQUEsSUFBSSxFQUFFRjtBQUhWLFNBSVFDLE9BSlIsRUFESjtBQU9IOzs7O0VBdEJtQ0csS0FBSyxDQUFDQyxTOzs7O2dCQUF6QlQsVSxrQkFDSztBQUNsQkksRUFBQUEsSUFBSSxFQUFFO0FBRFksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBCdXR0b25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW50ZXJmYWNlIExpbmtBY3Rpb25Qcm9wcyB7XG4gICAgbGluayhyb3c6IGFueSk6IHZvaWQ7XG4gICAgcm93OiBhbnk7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBvcHRpb25zOiB7IFtwcm9wOiBzdHJpbmddOiBhbnkgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rQWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExpbmtBY3Rpb25Qcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpY29uOiAnZWRpdCdcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGxpbmssIHJvdywgaWNvbiwgb3B0aW9ucyA9IHt9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgaHJlZjtcblxuICAgICAgICBpZiAodHlwZW9mIGxpbmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGhyZWYgPSBsaW5rKHJvdyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocmVmID0gbGluaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgdG89e2hyZWZ9XG4gICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICB7Li4ub3B0aW9uc30vPlxuICAgICAgICApXG4gICAgfVxufVxuIl19