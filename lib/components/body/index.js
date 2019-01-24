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
          rowOptions = _this$props$rowOption === void 0 ? {} : _this$props$rowOption,
          extra = _this$props.extra;
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
            extra: extra,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwicHJvdmlkZXIiLCJjb2x1bW5zIiwiZW1wdHlNZXNzYWdlIiwicm93T3B0aW9ucyIsImV4dHJhIiwiaXRlbXMiLCJnZXRJdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpIiwiY29sdW1uIiwiaiIsInR5cGUiLCJmaWVsZCIsInZhbHVlIiwiY29sdW1uVmFsdWUiLCJDb2x1bW4iLCJjb21wb25lbnQiLCJnZXRBY3RpdmVQYWdlIiwiY3VycmVudFJvd09wdGlvbnMiLCJrZXkiLCJvcHRpb25WYWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBYXFCQSxTOzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQUEsd0JBQytELEtBQUtDLEtBRHBFO0FBQUEsVUFDR0MsUUFESCxlQUNHQSxRQURIO0FBQUEsVUFDYUMsT0FEYixlQUNhQSxPQURiO0FBQUEsVUFDc0JDLFlBRHRCLGVBQ3NCQSxZQUR0QjtBQUFBLDhDQUNvQ0MsVUFEcEM7QUFBQSxVQUNvQ0EsVUFEcEMsc0NBQ2lELEVBRGpEO0FBQUEsVUFDcURDLEtBRHJELGVBQ3FEQSxLQURyRDtBQUVMLFVBQU1DLEtBQUssR0FBR0wsUUFBUSxDQUFDTSxRQUFULEVBQWQ7O0FBRUEsVUFBSUQsS0FBSyxDQUFDRSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGVBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxHQUFQLFFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQO0FBQVksVUFBQSxPQUFPLEVBQUVOLE9BQU8sQ0FBQ00sTUFBN0I7QUFBcUMsVUFBQSxTQUFTLEVBQUU7QUFBaEQsV0FDS0wsWUFETCxDQURKLENBREosQ0FESjtBQVNIOztBQUVELGFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQ0tHLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3BCLFlBQUlMLEtBQUssR0FBR0osT0FBTyxDQUFDTyxHQUFSLENBQVksVUFBQ0csTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFBQSxjQUMzQkMsSUFEMkIsR0FDSkYsTUFESSxDQUMzQkUsSUFEMkI7QUFBQSxjQUNyQkMsS0FEcUIsR0FDSkgsTUFESSxDQUNyQkcsS0FEcUI7QUFBQSxjQUNkQyxLQURjLEdBQ0pKLE1BREksQ0FDZEksS0FEYztBQUVuQyxjQUFJQyxXQUFKOztBQUVBLGNBQUlELEtBQUosRUFBVztBQUNQLGdCQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDN0JDLGNBQUFBLFdBQVcsR0FBR0QsS0FBSyxDQUFDTixJQUFELEVBQU9DLENBQVAsQ0FBbkI7QUFDSCxhQUZELE1BRU87QUFDSE0sY0FBQUEsV0FBVyxHQUFHRCxLQUFkO0FBQ0g7QUFDSixXQU5ELE1BTU8sSUFBSUQsS0FBSixFQUFXO0FBQ2RFLFlBQUFBLFdBQVcsR0FBR1AsSUFBSSxDQUFDSyxLQUFELENBQUosSUFBZSxFQUE3QjtBQUNIOztBQUVELGNBQUlHLE1BQUo7O0FBQ0EsY0FBSU4sTUFBTSxDQUFDTyxTQUFYLEVBQXNCO0FBQ2xCRCxZQUFBQSxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sU0FBaEI7QUFDSCxXQUZELE1BRU87QUFDSEQsWUFBQUEsTUFBTSxHQUFHLHNCQUFjSixJQUFkLENBQVQ7QUFDSDs7QUFFRCxpQkFBTyxvQkFBQyxNQUFELGVBQ1VGLE1BRFY7QUFFSyxZQUFBLEtBQUssRUFBRVAsS0FGWjtBQUdLLFlBQUEsS0FBSyxFQUFFWSxXQUhaO0FBSUssWUFBQSxHQUFHLEVBQUVQLElBSlY7QUFLSyxZQUFBLFFBQVEsRUFBRVQsUUFMZjtBQU1LLFlBQUEsTUFBTSxFQUFFVSxDQU5iO0FBT0ssWUFBQSxHQUFHLFlBQUtWLFFBQVEsQ0FBQ21CLGFBQVQsRUFBTCxjQUFpQ1QsQ0FBakMsY0FBc0NFLENBQXRDO0FBUFIsYUFBUDtBQVFILFNBN0JXLENBQVo7QUErQkEsWUFBSVEsaUJBQWlCLEdBQUcsRUFBeEI7O0FBQ0EsWUFBSSxPQUFPakIsVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNsQ2lCLFVBQUFBLGlCQUFpQixHQUFHakIsVUFBVSxDQUFDTSxJQUFELENBQTlCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZUFBSyxJQUFJWSxHQUFULElBQWdCbEIsVUFBaEIsRUFBNEI7QUFDeEIsZ0JBQUltQixXQUFXLEdBQUduQixVQUFVLENBQUNrQixHQUFELENBQTVCOztBQUNBLGdCQUFJLE9BQU9DLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDbkNBLGNBQUFBLFdBQVcsR0FBR0EsV0FBVyxDQUFDYixJQUFELENBQXpCO0FBQ0g7O0FBQ0RXLFlBQUFBLGlCQUFpQixDQUFDQyxHQUFELENBQWpCLEdBQXlCQyxXQUF6QjtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxvQkFBQyxzQkFBRCxDQUFPLEdBQVA7QUFBVyxVQUFBLEdBQUcsRUFBRVo7QUFBaEIsV0FBd0JVLGlCQUF4QixHQUE2Q2YsS0FBN0MsQ0FBUDtBQUNILE9BOUNBLENBREwsQ0FESjtBQW1ESDs7OztFQXBFa0NrQixLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgTWVzc2FnZVxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IGNvbHVtbkZhY3RvcnkgZnJvbSAnLi4vY29sdW1ucydcbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gJy4uL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyJ1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmludGVyZmFjZSBUYWJsZUJvZHlQcm9wcyB7XG4gICAgcHJvdmlkZXI6IEFic3RyYWN0UHJvdmlkZXI7XG4gICAgY29sdW1uczogQ29sdW1uW10sXG4gICAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICAgIHJvd09wdGlvbnM6IGFueTtcbiAgICBlbXB0eU1lc3NhZ2U6IGFueTtcbiAgICBleHRyYTogeyBbcHJvcDogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJsZUJvZHlQcm9wcywge30+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvdmlkZXIsIGNvbHVtbnMsIGVtcHR5TWVzc2FnZSwgcm93T3B0aW9ucyA9IHt9LCBleHRyYSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm92aWRlci5nZXRJdGVtcygpO1xuXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbCBjb2xTcGFuPXtjb2x1bW5zLmxlbmd0aH0gdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VtcHR5TWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gY29sdW1ucy5tYXAoKGNvbHVtbiwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBmaWVsZCwgdmFsdWUgfSA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHZhbHVlKGl0ZW0sIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gaXRlbVtmaWVsZF0gfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBDb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbiA9IGNvbHVtbi5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbiA9IGNvbHVtbkZhY3RvcnkodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17ZXh0cmF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sdW1uVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1Sb3c9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3Byb3ZpZGVyLmdldEFjdGl2ZVBhZ2UoKX0uJHtpfS4ke2p9YH0vPlxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJvd09wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByb3dPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Um93T3B0aW9ucyA9IHJvd09wdGlvbnMoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcm93T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IHJvd09wdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWUoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSb3dPcHRpb25zW2tleV0gPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGUuUm93IGtleT17aX0geyAuLi5jdXJyZW50Um93T3B0aW9ucyB9PntpdGVtc308L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==