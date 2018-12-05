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
          row = _this$props.row,
          props = _objectWithoutProperties(_this$props, ["actions", "row"]);

      return React.createElement(_semanticUiReact.Table.Cell, {
        textAlign: 'center'
      }, actions.map(function (item, i) {
        var Component = item.component,
            visible = item.visible,
            rest = _objectWithoutProperties(item, ["component", "visible"]);

        if (typeof visible !== 'undefined') {
          var isVisible = typeof visible === 'function' ? visible(row) : visible;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvYWN0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBY3Rpb25Db2x1bW4iLCJwcm9wcyIsImFjdGlvbnMiLCJyb3ciLCJtYXAiLCJpdGVtIiwiaSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInZpc2libGUiLCJyZXN0IiwiaXNWaXNpYmxlIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVdxQkEsWTs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUNtQyxLQUFLQyxLQUR4QztBQUFBLDRDQUNHQyxPQURIO0FBQUEsVUFDR0EsT0FESCxvQ0FDYSxFQURiO0FBQUEsVUFDaUJDLEdBRGpCLGVBQ2lCQSxHQURqQjtBQUFBLFVBQ3lCRixLQUR6Qjs7QUFHTCxhQUNJLG9CQUFDLHNCQUFELENBQU8sSUFBUDtBQUFZLFFBQUEsU0FBUyxFQUFFO0FBQXZCLFNBQ0tDLE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQUEsWUFDSEMsU0FERyxHQUM2QkYsSUFEN0IsQ0FDZEcsU0FEYztBQUFBLFlBQ1FDLE9BRFIsR0FDNkJKLElBRDdCLENBQ1FJLE9BRFI7QUFBQSxZQUNvQkMsSUFEcEIsNEJBQzZCTCxJQUQ3Qjs7QUFHdEIsWUFBSSxPQUFPSSxPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2hDLGNBQUlFLFNBQVMsR0FBSSxPQUFPRixPQUFQLEtBQW1CLFVBQXBCLEdBQWtDQSxPQUFPLENBQUNOLEdBQUQsQ0FBekMsR0FBaURNLE9BQWpFOztBQUNBLGNBQUksQ0FBQ0UsU0FBTCxFQUFnQjtBQUNaLG1CQUFPLElBQVA7QUFDSDtBQUNKOztBQUVELGVBQU8sb0JBQUMsU0FBRDtBQUFXLFVBQUEsR0FBRyxFQUFFTDtBQUFoQixXQUF1QkwsS0FBdkIsRUFBa0NTLElBQWxDLEVBQVA7QUFDSCxPQVhBLENBREwsQ0FESjtBQWdCSDs7OztFQXBCcUNFLEtBQUssQ0FBQ0wsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUYWJsZVxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IHsgQ29sdW1uQWN0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmludGVyZmFjZSBBY3Rpb25Db2x1bW5Qcm9wcyB7XG4gICAgYWN0aW9uczogQ29sdW1uQWN0aW9uW10sXG4gICAgcm93OiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBY3Rpb25Db2x1bW5Qcm9wcywge30+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aW9ucyA9IFtdLCByb3csIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuQ2VsbCB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgICAgICB7YWN0aW9ucy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjb21wb25lbnQ6IENvbXBvbmVudCwgdmlzaWJsZSwgLi4ucmVzdCB9ID0gaXRlbTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpc2libGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNWaXNpYmxlID0gKHR5cGVvZiB2aXNpYmxlID09PSAnZnVuY3Rpb24nKSA/IHZpc2libGUocm93KSA6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnQga2V5PXtpfSB7Li4ucHJvcHN9IHsuLi5yZXN0fS8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=