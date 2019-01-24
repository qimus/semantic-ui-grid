"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _columns = _interopRequireDefault(require("../columns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var TableBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableBody, _React$Component);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableBody).apply(this, arguments));
  }

  _createClass(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          provider = _this$props.provider,
          columns = _this$props.columns,
          emptyMessage = _this$props.emptyMessage,
          _this$props$rowOption = _this$props.rowOptions,
          rowOptions = _this$props$rowOption === void 0 ? {} : _this$props$rowOption;
      var items = provider.getItems();

      if (items.length === 0) {
        return React.createElement(_semanticUiReact.Table.Body, null, React.createElement(_semanticUiReact.Table.Row, null, React.createElement(_semanticUiReact.Table.Cell, {
          colSpan: columns.length,
          textAlign: 'center'
        }, emptyMessage)));
      }

      return React.createElement(_semanticUiReact.Table.Body, null, items.map(function (item, i) {
        var items = columns.map(function (column, j) {
          var type = column.type,
              field = column.field,
              value = column.value;
          var columnValue;

          if (value) {
            if (typeof value === 'function') {
              columnValue = value(item, i);
            } else {
              columnValue = value;
            }
          } else if (field) {
            columnValue = item[field] || '';
          }

          var Column;

          if (column.component) {
            Column = column.component;
          } else {
            Column = (0, _columns.default)(type);
          }

          return React.createElement(Column, _extends({}, column, {
            value: columnValue,
            row: item,
            provider: provider,
            numRow: i,
            key: "".concat(provider.getActivePage(), ".").concat(i, ".").concat(j)
          }));
        });
        var currentRowOptions = {};

        if (typeof rowOptions === 'function') {
          currentRowOptions = rowOptions(item);
        } else {
          for (var key in rowOptions) {
            var optionValue = rowOptions[key];

            if (typeof optionValue === 'function') {
              optionValue = optionValue(item);
            }

            currentRowOptions[key] = optionValue;
          }
        }

        return React.createElement(_semanticUiReact.Table.Row, _extends({
          key: i
        }, currentRowOptions), items);
      }));
    }
  }]);

  return TableBody;
}(React.Component);

exports.default = TableBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwicHJvdmlkZXIiLCJjb2x1bW5zIiwiZW1wdHlNZXNzYWdlIiwicm93T3B0aW9ucyIsIml0ZW1zIiwiZ2V0SXRlbXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImNvbHVtbiIsImoiLCJ0eXBlIiwiZmllbGQiLCJ2YWx1ZSIsImNvbHVtblZhbHVlIiwiQ29sdW1uIiwiY29tcG9uZW50IiwiZ2V0QWN0aXZlUGFnZSIsImN1cnJlbnRSb3dPcHRpb25zIiwia2V5Iiwib3B0aW9uVmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQkEsUzs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUN3RCxLQUFLQyxLQUQ3RDtBQUFBLFVBQ0dDLFFBREgsZUFDR0EsUUFESDtBQUFBLFVBQ2FDLE9BRGIsZUFDYUEsT0FEYjtBQUFBLFVBQ3NCQyxZQUR0QixlQUNzQkEsWUFEdEI7QUFBQSw4Q0FDb0NDLFVBRHBDO0FBQUEsVUFDb0NBLFVBRHBDLHNDQUNpRCxFQURqRDtBQUVMLFVBQU1DLEtBQUssR0FBR0osUUFBUSxDQUFDSyxRQUFULEVBQWQ7O0FBRUEsVUFBSUQsS0FBSyxDQUFDRSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGVBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxHQUFQLFFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQO0FBQVksVUFBQSxPQUFPLEVBQUVMLE9BQU8sQ0FBQ0ssTUFBN0I7QUFBcUMsVUFBQSxTQUFTLEVBQUU7QUFBaEQsV0FDS0osWUFETCxDQURKLENBREosQ0FESjtBQVNIOztBQUVELGFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQ0tFLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3BCLFlBQUlMLEtBQUssR0FBR0gsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ0csTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFBQSxjQUMzQkMsSUFEMkIsR0FDSkYsTUFESSxDQUMzQkUsSUFEMkI7QUFBQSxjQUNyQkMsS0FEcUIsR0FDSkgsTUFESSxDQUNyQkcsS0FEcUI7QUFBQSxjQUNkQyxLQURjLEdBQ0pKLE1BREksQ0FDZEksS0FEYztBQUVuQyxjQUFJQyxXQUFKOztBQUVBLGNBQUlELEtBQUosRUFBVztBQUNQLGdCQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDN0JDLGNBQUFBLFdBQVcsR0FBR0QsS0FBSyxDQUFDTixJQUFELEVBQU9DLENBQVAsQ0FBbkI7QUFDSCxhQUZELE1BRU87QUFDSE0sY0FBQUEsV0FBVyxHQUFHRCxLQUFkO0FBQ0g7QUFDSixXQU5ELE1BTU8sSUFBSUQsS0FBSixFQUFXO0FBQ2RFLFlBQUFBLFdBQVcsR0FBR1AsSUFBSSxDQUFDSyxLQUFELENBQUosSUFBZSxFQUE3QjtBQUNIOztBQUVELGNBQUlHLE1BQUo7O0FBQ0EsY0FBSU4sTUFBTSxDQUFDTyxTQUFYLEVBQXNCO0FBQ2xCRCxZQUFBQSxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sU0FBaEI7QUFDSCxXQUZELE1BRU87QUFDSEQsWUFBQUEsTUFBTSxHQUFHLHNCQUFjSixJQUFkLENBQVQ7QUFDSDs7QUFFRCxpQkFBTyxvQkFBQyxNQUFELGVBQ1VGLE1BRFY7QUFFSyxZQUFBLEtBQUssRUFBRUssV0FGWjtBQUdLLFlBQUEsR0FBRyxFQUFFUCxJQUhWO0FBSUssWUFBQSxRQUFRLEVBQUVSLFFBSmY7QUFLSyxZQUFBLE1BQU0sRUFBRVMsQ0FMYjtBQU1LLFlBQUEsR0FBRyxZQUFLVCxRQUFRLENBQUNrQixhQUFULEVBQUwsY0FBaUNULENBQWpDLGNBQXNDRSxDQUF0QztBQU5SLGFBQVA7QUFPSCxTQTVCVyxDQUFaO0FBOEJBLFlBQUlRLGlCQUFpQixHQUFHLEVBQXhCOztBQUNBLFlBQUksT0FBT2hCLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDbENnQixVQUFBQSxpQkFBaUIsR0FBR2hCLFVBQVUsQ0FBQ0ssSUFBRCxDQUE5QjtBQUNILFNBRkQsTUFFTztBQUNILGVBQUssSUFBSVksR0FBVCxJQUFnQmpCLFVBQWhCLEVBQTRCO0FBQ3hCLGdCQUFJa0IsV0FBVyxHQUFHbEIsVUFBVSxDQUFDaUIsR0FBRCxDQUE1Qjs7QUFDQSxnQkFBSSxPQUFPQyxXQUFQLEtBQXVCLFVBQTNCLEVBQXVDO0FBQ25DQSxjQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ2IsSUFBRCxDQUF6QjtBQUNIOztBQUNEVyxZQUFBQSxpQkFBaUIsQ0FBQ0MsR0FBRCxDQUFqQixHQUF5QkMsV0FBekI7QUFDSDtBQUNKOztBQUVELGVBQU8sb0JBQUMsc0JBQUQsQ0FBTyxHQUFQO0FBQVcsVUFBQSxHQUFHLEVBQUVaO0FBQWhCLFdBQXdCVSxpQkFBeEIsR0FBNkNmLEtBQTdDLENBQVA7QUFDSCxPQTdDQSxDQURMLENBREo7QUFrREg7Ozs7RUFuRWtDa0IsS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRhYmxlLFxuICAgIE1lc3NhZ2Vcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBjb2x1bW5GYWN0b3J5IGZyb20gJy4uL2NvbHVtbnMnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tICcuLi9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlcidcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgVGFibGVCb2R5UHJvcHMge1xuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyO1xuICAgIGNvbHVtbnM6IENvbHVtbltdLFxuICAgIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgICByb3dPcHRpb25zOiBhbnk7XG4gICAgZW1wdHlNZXNzYWdlOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJsZUJvZHlQcm9wcywge30+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvdmlkZXIsIGNvbHVtbnMsIGVtcHR5TWVzc2FnZSwgcm93T3B0aW9ucyA9IHt9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHByb3ZpZGVyLmdldEl0ZW1zKCk7XG5cbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofSB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wdHlNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSBjb2x1bW5zLm1hcCgoY29sdW1uLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHR5cGUsIGZpZWxkLCB2YWx1ZSB9ID0gY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdmFsdWUoaXRlbSwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmFsdWUgPSBpdGVtW2ZpZWxkXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IENvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uID0gY29sdW1uLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uID0gY29sdW1uRmFjdG9yeSh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2x1bW4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sdW1uVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1Sb3c9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3Byb3ZpZGVyLmdldEFjdGl2ZVBhZ2UoKX0uJHtpfS4ke2p9YH0vPlxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJvd09wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByb3dPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Um93T3B0aW9ucyA9IHJvd09wdGlvbnMoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcm93T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IHJvd09wdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWUoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSb3dPcHRpb25zW2tleV0gPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGUuUm93IGtleT17aX0geyAuLi5jdXJyZW50Um93T3B0aW9ucyB9PntpdGVtc308L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==