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
          props = _objectWithoutProperties(_this$props, ["actions"]);

      return React.createElement(_semanticUiReact.Table.Cell, {
        textAlign: 'center'
      }, actions.map(function (item, i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvYWN0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBY3Rpb25Db2x1bW4iLCJwcm9wcyIsImFjdGlvbnMiLCJtYXAiLCJpdGVtIiwiaSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInZpc2libGUiLCJyZXN0IiwiaXNWaXNpYmxlIiwicm93IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVdxQkEsWTs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUM4QixLQUFLQyxLQURuQztBQUFBLDRDQUNHQyxPQURIO0FBQUEsVUFDR0EsT0FESCxvQ0FDYSxFQURiO0FBQUEsVUFDb0JELEtBRHBCOztBQUdMLGFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQO0FBQVksUUFBQSxTQUFTLEVBQUU7QUFBdkIsU0FDS0MsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFBQSxZQUNIQyxTQURHLEdBQzZCRixJQUQ3QixDQUNkRyxTQURjO0FBQUEsWUFDUUMsT0FEUixHQUM2QkosSUFEN0IsQ0FDUUksT0FEUjtBQUFBLFlBQ29CQyxJQURwQiw0QkFDNkJMLElBRDdCOztBQUd0QixZQUFJLE9BQU9JLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDaEMsY0FBSUUsU0FBUyxHQUFJLE9BQU9GLE9BQVAsS0FBbUIsVUFBcEIsR0FBa0NBLE9BQU8sQ0FBQ1AsS0FBSyxDQUFDVSxHQUFQLENBQXpDLEdBQXVESCxPQUF2RTs7QUFDQSxjQUFJLENBQUNFLFNBQUwsRUFBZ0I7QUFDWixtQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFFRCxlQUFPLG9CQUFDLFNBQUQ7QUFBVyxVQUFBLEdBQUcsRUFBRUw7QUFBaEIsV0FBdUJKLEtBQXZCLEVBQWtDUSxJQUFsQyxFQUFQO0FBQ0gsT0FYQSxDQURMLENBREo7QUFnQkg7Ozs7RUFwQnFDRyxLQUFLLENBQUNOLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGVcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IENvbHVtbkFjdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQWN0aW9uQ29sdW1uUHJvcHMge1xuICAgIGFjdGlvbnM6IENvbHVtbkFjdGlvbltdLFxuICAgIHJvdzogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25Db2x1bW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QWN0aW9uQ29sdW1uUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFjdGlvbnMgPSBbXSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZS5DZWxsIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICAgIHthY3Rpb25zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNvbXBvbmVudDogQ29tcG9uZW50LCB2aXNpYmxlLCAuLi5yZXN0IH0gPSBpdGVtO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmlzaWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1Zpc2libGUgPSAodHlwZW9mIHZpc2libGUgPT09ICdmdW5jdGlvbicpID8gdmlzaWJsZShwcm9wcy5yb3cpIDogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCBrZXk9e2l9IHsuLi5wcm9wc30gey4uLnJlc3R9Lz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==