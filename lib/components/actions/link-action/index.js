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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
          rest = _objectWithoutProperties(_this$props, ["link", "row"]);

      var href;

      if (typeof link === 'function') {
        href = link(row);
      } else {
        href = link;
      }

      return React.createElement(_semanticUiReact.Button, _extends({
        as: _reactRouterDom.Link,
        to: href
      }, rest));
    }
  }]);

  return LinkAction;
}(React.Component);

exports.default = LinkAction;

_defineProperty(LinkAction, "defaultProps", {
  icon: 'edit'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjdGlvbnMvbGluay1hY3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxpbmtBY3Rpb24iLCJwcm9wcyIsImxpbmsiLCJyb3ciLCJyZXN0IiwiaHJlZiIsIkxpbmsiLCJSZWFjdCIsIkNvbXBvbmVudCIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUXFCQSxVOzs7Ozs7Ozs7Ozs7OzZCQUtSO0FBQUEsd0JBQzBCLEtBQUtDLEtBRC9CO0FBQUEsVUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsVUFDU0MsR0FEVCxlQUNTQSxHQURUO0FBQUEsVUFDaUJDLElBRGpCOztBQUVMLFVBQUlDLElBQUo7O0FBRUEsVUFBSSxPQUFPSCxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzVCRyxRQUFBQSxJQUFJLEdBQUdILElBQUksQ0FBQ0MsR0FBRCxDQUFYO0FBQ0gsT0FGRCxNQUVPO0FBQ0hFLFFBQUFBLElBQUksR0FBR0gsSUFBUDtBQUNIOztBQUVELGFBQ0ksb0JBQUMsdUJBQUQ7QUFDSSxRQUFBLEVBQUUsRUFBRUksb0JBRFI7QUFFSSxRQUFBLEVBQUUsRUFBRUQ7QUFGUixTQUdRRCxJQUhSLEVBREo7QUFNSDs7OztFQXJCbUNHLEtBQUssQ0FBQ0MsUzs7OztnQkFBekJSLFUsa0JBQ0s7QUFDbEJTLEVBQUFBLElBQUksRUFBRTtBQURZLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgQnV0dG9uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmludGVyZmFjZSBMaW5rQWN0aW9uUHJvcHMge1xuICAgIGxpbmsocm93OiBhbnkpOiB2b2lkO1xuICAgIHJvdzogYW55O1xuICAgIGljb24/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua0FjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMaW5rQWN0aW9uUHJvcHMsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaWNvbjogJ2VkaXQnXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBsaW5rLCByb3csIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBocmVmO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbGluayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaHJlZiA9IGxpbmsocm93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhyZWYgPSBsaW5rO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICB0bz17aHJlZn1cbiAgICAgICAgICAgICAgICB7Li4ucmVzdH0vPlxuICAgICAgICApXG4gICAgfVxufSJdfQ==