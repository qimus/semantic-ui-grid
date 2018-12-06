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

        for (var key in rowOptions) {
          var optionValue = rowOptions[key];

          if (typeof optionValue === 'function') {
            optionValue = optionValue(item);
          }

          currentRowOptions[key] = optionValue;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwicHJvdmlkZXIiLCJjb2x1bW5zIiwiZW1wdHlNZXNzYWdlIiwicm93T3B0aW9ucyIsIml0ZW1zIiwiZ2V0SXRlbXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImNvbHVtbiIsImoiLCJ0eXBlIiwiZmllbGQiLCJ2YWx1ZSIsImNvbHVtblZhbHVlIiwiQ29sdW1uIiwiY29tcG9uZW50IiwiZ2V0QWN0aXZlUGFnZSIsImN1cnJlbnRSb3dPcHRpb25zIiwia2V5Iiwib3B0aW9uVmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQkEsUzs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUN3RCxLQUFLQyxLQUQ3RDtBQUFBLFVBQ0dDLFFBREgsZUFDR0EsUUFESDtBQUFBLFVBQ2FDLE9BRGIsZUFDYUEsT0FEYjtBQUFBLFVBQ3NCQyxZQUR0QixlQUNzQkEsWUFEdEI7QUFBQSw4Q0FDb0NDLFVBRHBDO0FBQUEsVUFDb0NBLFVBRHBDLHNDQUNpRCxFQURqRDtBQUVMLFVBQU1DLEtBQUssR0FBR0osUUFBUSxDQUFDSyxRQUFULEVBQWQ7O0FBRUEsVUFBSUQsS0FBSyxDQUFDRSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGVBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxHQUFQLFFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQO0FBQVksVUFBQSxPQUFPLEVBQUVMLE9BQU8sQ0FBQ0ssTUFBN0I7QUFBcUMsVUFBQSxTQUFTLEVBQUU7QUFBaEQsV0FDS0osWUFETCxDQURKLENBREosQ0FESjtBQVNIOztBQUVELGFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQ0tFLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3BCLFlBQUlMLEtBQUssR0FBR0gsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ0csTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFBQSxjQUMzQkMsSUFEMkIsR0FDSkYsTUFESSxDQUMzQkUsSUFEMkI7QUFBQSxjQUNyQkMsS0FEcUIsR0FDSkgsTUFESSxDQUNyQkcsS0FEcUI7QUFBQSxjQUNkQyxLQURjLEdBQ0pKLE1BREksQ0FDZEksS0FEYztBQUVuQyxjQUFJQyxXQUFKOztBQUVBLGNBQUlELEtBQUosRUFBVztBQUNQLGdCQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDN0JDLGNBQUFBLFdBQVcsR0FBR0QsS0FBSyxDQUFDTixJQUFELEVBQU9DLENBQVAsQ0FBbkI7QUFDSCxhQUZELE1BRU87QUFDSE0sY0FBQUEsV0FBVyxHQUFHRCxLQUFkO0FBQ0g7QUFDSixXQU5ELE1BTU8sSUFBSUQsS0FBSixFQUFXO0FBQ2RFLFlBQUFBLFdBQVcsR0FBR1AsSUFBSSxDQUFDSyxLQUFELENBQUosSUFBZSxFQUE3QjtBQUNIOztBQUVELGNBQUlHLE1BQUo7O0FBQ0EsY0FBSU4sTUFBTSxDQUFDTyxTQUFYLEVBQXNCO0FBQ2xCRCxZQUFBQSxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sU0FBaEI7QUFDSCxXQUZELE1BRU87QUFDSEQsWUFBQUEsTUFBTSxHQUFHLHNCQUFjSixJQUFkLENBQVQ7QUFDSDs7QUFFRCxpQkFBTyxvQkFBQyxNQUFELGVBQ1VGLE1BRFY7QUFFSyxZQUFBLEtBQUssRUFBRUssV0FGWjtBQUdLLFlBQUEsR0FBRyxFQUFFUCxJQUhWO0FBSUssWUFBQSxRQUFRLEVBQUVSLFFBSmY7QUFLSyxZQUFBLE1BQU0sRUFBRVMsQ0FMYjtBQU1LLFlBQUEsR0FBRyxZQUFLVCxRQUFRLENBQUNrQixhQUFULEVBQUwsY0FBaUNULENBQWpDLGNBQXNDRSxDQUF0QztBQU5SLGFBQVA7QUFPSCxTQTVCVyxDQUFaO0FBOEJBLFlBQUlRLGlCQUFpQixHQUFHLEVBQXhCOztBQUNBLGFBQUssSUFBSUMsR0FBVCxJQUFnQmpCLFVBQWhCLEVBQTRCO0FBQ3hCLGNBQUlrQixXQUFXLEdBQUdsQixVQUFVLENBQUNpQixHQUFELENBQTVCOztBQUNBLGNBQUksT0FBT0MsV0FBUCxLQUF1QixVQUEzQixFQUF1QztBQUNuQ0EsWUFBQUEsV0FBVyxHQUFHQSxXQUFXLENBQUNiLElBQUQsQ0FBekI7QUFDSDs7QUFDRFcsVUFBQUEsaUJBQWlCLENBQUNDLEdBQUQsQ0FBakIsR0FBeUJDLFdBQXpCO0FBQ0g7O0FBRUQsZUFBTyxvQkFBQyxzQkFBRCxDQUFPLEdBQVA7QUFBVyxVQUFBLEdBQUcsRUFBRVo7QUFBaEIsV0FBd0JVLGlCQUF4QixHQUE2Q2YsS0FBN0MsQ0FBUDtBQUNILE9BekNBLENBREwsQ0FESjtBQThDSDs7OztFQS9Ea0NrQixLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgTWVzc2FnZVxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IGNvbHVtbkZhY3RvcnkgZnJvbSAnLi4vY29sdW1ucydcbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gJy4uL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyJ1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmludGVyZmFjZSBUYWJsZUJvZHlQcm9wcyB7XG4gICAgcHJvdmlkZXI6IEFic3RyYWN0UHJvdmlkZXI7XG4gICAgY29sdW1uczogQ29sdW1uW10sXG4gICAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICAgIHJvd09wdGlvbnM6IHsgW3Byb3A6IHN0cmluZ106IGFueSB9O1xuICAgIGVtcHR5TWVzc2FnZTogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFibGVCb2R5UHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb3ZpZGVyLCBjb2x1bW5zLCBlbXB0eU1lc3NhZ2UsIHJvd09wdGlvbnMgPSB7fSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm92aWRlci5nZXRJdGVtcygpO1xuXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbCBjb2xTcGFuPXtjb2x1bW5zLmxlbmd0aH0gdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VtcHR5TWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gY29sdW1ucy5tYXAoKGNvbHVtbiwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBmaWVsZCwgdmFsdWUgfSA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHZhbHVlKGl0ZW0sIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gaXRlbVtmaWVsZF0gfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBDb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbiA9IGNvbHVtbi5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbiA9IGNvbHVtbkZhY3RvcnkodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sdW1uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5jb2x1bW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbHVtblZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtUm93PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtwcm92aWRlci5nZXRBY3RpdmVQYWdlKCl9LiR7aX0uJHtqfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSb3dPcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiByb3dPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSByb3dPcHRpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSb3dPcHRpb25zW2tleV0gPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGUuUm93IGtleT17aX0geyAuLi5jdXJyZW50Um93T3B0aW9ucyB9PntpdGVtc308L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==