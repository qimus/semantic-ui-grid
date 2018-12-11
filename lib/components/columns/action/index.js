"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

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

var ActionColumn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActionColumn, _React$Component);

  function ActionColumn() {
    _classCallCheck(this, ActionColumn);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActionColumn).apply(this, arguments));
  }

  _createClass(ActionColumn, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$actions = _this$props.actions,
          actions = _this$props$actions === void 0 ? [] : _this$props$actions,
          _this$props$columnOpt = _this$props.columnOptions,
          columnOptions = _this$props$columnOpt === void 0 ? {} : _this$props$columnOpt,
          props = _objectWithoutProperties(_this$props, ["actions", "columnOptions"]);

      return React.createElement(_semanticUiReact.Table.Cell, _extends({
        textAlign: 'center'
      }, columnOptions), actions.map(function (item, i) {
        var Component = item.component,
            visible = item.visible,
            rest = _objectWithoutProperties(item, ["component", "visible"]);

        if (typeof visible !== 'undefined') {
          var isVisible = typeof visible === 'function' ? visible(props.row) : visible;

          if (!isVisible) {
            return null;
          }
        }

        return React.createElement(Component, _extends({
          key: i
        }, props, rest));
      }));
    }
  }]);

  return ActionColumn;
}(React.Component);

exports.default = ActionColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvYWN0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBY3Rpb25Db2x1bW4iLCJwcm9wcyIsImFjdGlvbnMiLCJjb2x1bW5PcHRpb25zIiwibWFwIiwiaXRlbSIsImkiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ2aXNpYmxlIiwicmVzdCIsImlzVmlzaWJsZSIsInJvdyIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlcUJBLFk7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFBQSx3QkFDa0QsS0FBS0MsS0FEdkQ7QUFBQSw0Q0FDR0MsT0FESDtBQUFBLFVBQ0dBLE9BREgsb0NBQ2EsRUFEYjtBQUFBLDhDQUNpQkMsYUFEakI7QUFBQSxVQUNpQkEsYUFEakIsc0NBQ2lDLEVBRGpDO0FBQUEsVUFDd0NGLEtBRHhDOztBQUdMLGFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQO0FBQVksUUFBQSxTQUFTLEVBQUU7QUFBdkIsU0FBcUNFLGFBQXJDLEdBQ0tELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQUEsWUFDSEMsU0FERyxHQUM2QkYsSUFEN0IsQ0FDZEcsU0FEYztBQUFBLFlBQ1FDLE9BRFIsR0FDNkJKLElBRDdCLENBQ1FJLE9BRFI7QUFBQSxZQUNvQkMsSUFEcEIsNEJBQzZCTCxJQUQ3Qjs7QUFHdEIsWUFBSSxPQUFPSSxPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2hDLGNBQUlFLFNBQVMsR0FBSSxPQUFPRixPQUFQLEtBQW1CLFVBQXBCLEdBQWtDQSxPQUFPLENBQUNSLEtBQUssQ0FBQ1csR0FBUCxDQUF6QyxHQUF1REgsT0FBdkU7O0FBQ0EsY0FBSSxDQUFDRSxTQUFMLEVBQWdCO0FBQ1osbUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxvQkFBQyxTQUFEO0FBQVcsVUFBQSxHQUFHLEVBQUVMO0FBQWhCLFdBQXVCTCxLQUF2QixFQUFrQ1MsSUFBbEMsRUFBUDtBQUNILE9BWEEsQ0FETCxDQURKO0FBZ0JIOzs7O0VBcEJxQ0csS0FBSyxDQUFDTixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRhYmxlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQge1xuICAgIENvbHVtbkFjdGlvbixcbiAgICBDb2x1bW5PcHRpb25zXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQWN0aW9uQ29sdW1uUHJvcHMge1xuICAgIGFjdGlvbnM6IENvbHVtbkFjdGlvbltdLFxuICAgIHJvdzogYW55O1xuICAgIGNvbHVtbk9wdGlvbnM6IENvbHVtbk9wdGlvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBY3Rpb25Db2x1bW5Qcm9wcywge30+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aW9ucyA9IFtdLCBjb2x1bW5PcHRpb25zID0ge30sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuQ2VsbCB0ZXh0QWxpZ249eydjZW50ZXInfSB7Li4uY29sdW1uT3B0aW9uc30+XG4gICAgICAgICAgICAgICAge2FjdGlvbnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY29tcG9uZW50OiBDb21wb25lbnQsIHZpc2libGUsIC4uLnJlc3QgfSA9IGl0ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aXNpYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzVmlzaWJsZSA9ICh0eXBlb2YgdmlzaWJsZSA9PT0gJ2Z1bmN0aW9uJykgPyB2aXNpYmxlKHByb3BzLnJvdykgOiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50IGtleT17aX0gey4uLnByb3BzfSB7Li4ucmVzdH0vPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICApXG4gICAgfVxufVxuIl19