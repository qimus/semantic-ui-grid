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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwicHJvdmlkZXIiLCJjb2x1bW5zIiwiZW1wdHlNZXNzYWdlIiwicm93T3B0aW9ucyIsImV4dHJhIiwiaXRlbXMiLCJnZXRJdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpIiwiY29sdW1uIiwiaiIsInR5cGUiLCJmaWVsZCIsInZhbHVlIiwiY29sdW1uVmFsdWUiLCJDb2x1bW4iLCJjb21wb25lbnQiLCJnZXRBY3RpdmVQYWdlIiwiY3VycmVudFJvd09wdGlvbnMiLCJrZXkiLCJvcHRpb25WYWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBYXFCQSxTOzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQUEsd0JBQytELEtBQUtDLEtBRHBFO0FBQUEsVUFDR0MsUUFESCxlQUNHQSxRQURIO0FBQUEsVUFDYUMsT0FEYixlQUNhQSxPQURiO0FBQUEsVUFDc0JDLFlBRHRCLGVBQ3NCQSxZQUR0QjtBQUFBLDhDQUNvQ0MsVUFEcEM7QUFBQSxVQUNvQ0EsVUFEcEMsc0NBQ2lELEVBRGpEO0FBQUEsVUFDcURDLEtBRHJELGVBQ3FEQSxLQURyRDtBQUVMLFVBQU1DLEtBQUssR0FBR0wsUUFBUSxDQUFDTSxRQUFULEVBQWQ7O0FBRUEsVUFBSUQsS0FBSyxDQUFDRSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGVBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxHQUFQLFFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQO0FBQVksVUFBQSxPQUFPLEVBQUVOLE9BQU8sQ0FBQ00sTUFBN0I7QUFBcUMsVUFBQSxTQUFTLEVBQUU7QUFBaEQsV0FDS0wsWUFETCxDQURKLENBREosQ0FESjtBQVNIOztBQUVELGFBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQ0tHLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3BCLFlBQUlMLEtBQUssR0FBR0osT0FBTyxDQUFDTyxHQUFSLENBQVksVUFBQ0csTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFBQSxjQUMzQkMsSUFEMkIsR0FDSkYsTUFESSxDQUMzQkUsSUFEMkI7QUFBQSxjQUNyQkMsS0FEcUIsR0FDSkgsTUFESSxDQUNyQkcsS0FEcUI7QUFBQSxjQUNkQyxLQURjLEdBQ0pKLE1BREksQ0FDZEksS0FEYztBQUVuQyxjQUFJQyxXQUFKOztBQUVBLGNBQUlELEtBQUosRUFBVztBQUNQLGdCQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDN0JDLGNBQUFBLFdBQVcsR0FBR0QsS0FBSyxDQUFDTixJQUFELEVBQU9DLENBQVAsQ0FBbkI7QUFDSCxhQUZELE1BRU87QUFDSE0sY0FBQUEsV0FBVyxHQUFHRCxLQUFkO0FBQ0g7QUFDSixXQU5ELE1BTU8sSUFBSUQsS0FBSixFQUFXO0FBQ2RFLFlBQUFBLFdBQVcsR0FBR1AsSUFBSSxDQUFDSyxLQUFELENBQUosSUFBZSxFQUE3QjtBQUNIOztBQUVELGNBQUlHLE1BQUo7O0FBQ0EsY0FBSU4sTUFBTSxDQUFDTyxTQUFYLEVBQXNCO0FBQ2xCRCxZQUFBQSxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sU0FBaEI7QUFDSCxXQUZELE1BRU87QUFDSEQsWUFBQUEsTUFBTSxHQUFHLHNCQUFjSixJQUFkLENBQVQ7QUFDSDs7QUFFRCxpQkFBTyxvQkFBQyxNQUFELGVBQ1VGLE1BRFY7QUFFSyxZQUFBLEtBQUssRUFBRVAsS0FGWjtBQUdLLFlBQUEsS0FBSyxFQUFFWSxXQUhaO0FBSUssWUFBQSxHQUFHLEVBQUVQLElBSlY7QUFLSyxZQUFBLFFBQVEsRUFBRVQsUUFMZjtBQU1LLFlBQUEsTUFBTSxFQUFFVSxDQU5iO0FBT0ssWUFBQSxHQUFHLFlBQUtWLFFBQVEsQ0FBQ21CLGFBQVQsRUFBTCxjQUFpQ1QsQ0FBakMsY0FBc0NFLENBQXRDO0FBUFIsYUFBUDtBQVFILFNBN0JXLENBQVo7QUErQkEsWUFBSVEsaUJBQWlCLEdBQUcsRUFBeEI7O0FBQ0EsYUFBSyxJQUFJQyxHQUFULElBQWdCbEIsVUFBaEIsRUFBNEI7QUFDeEIsY0FBSW1CLFdBQVcsR0FBR25CLFVBQVUsQ0FBQ2tCLEdBQUQsQ0FBNUI7O0FBQ0EsY0FBSSxPQUFPQyxXQUFQLEtBQXVCLFVBQTNCLEVBQXVDO0FBQ25DQSxZQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ2IsSUFBRCxDQUF6QjtBQUNIOztBQUNEVyxVQUFBQSxpQkFBaUIsQ0FBQ0MsR0FBRCxDQUFqQixHQUF5QkMsV0FBekI7QUFDSDs7QUFFRCxlQUFPLG9CQUFDLHNCQUFELENBQU8sR0FBUDtBQUFXLFVBQUEsR0FBRyxFQUFFWjtBQUFoQixXQUF3QlUsaUJBQXhCLEdBQTZDZixLQUE3QyxDQUFQO0FBQ0gsT0ExQ0EsQ0FETCxDQURKO0FBK0NIOzs7O0VBaEVrQ2tCLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBNZXNzYWdlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgY29sdW1uRmFjdG9yeSBmcm9tICcuLi9jb2x1bW5zJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSAnLi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXInXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi90eXBlcydcblxuaW50ZXJmYWNlIFRhYmxlQm9keVByb3BzIHtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcjtcbiAgICBjb2x1bW5zOiBDb2x1bW5bXSxcbiAgICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gICAgcm93T3B0aW9uczogeyBbcHJvcDogc3RyaW5nXTogYW55IH07XG4gICAgZW1wdHlNZXNzYWdlOiBhbnk7XG4gICAgZXh0cmE6IHsgW3Byb3A6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFibGVCb2R5UHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb3ZpZGVyLCBjb2x1bW5zLCBlbXB0eU1lc3NhZ2UsIHJvd09wdGlvbnMgPSB7fSwgZXh0cmEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvdmlkZXIuZ2V0SXRlbXMoKTtcblxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGwgY29sU3Bhbj17Y29sdW1ucy5sZW5ndGh9IHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbXB0eU1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IGNvbHVtbnMubWFwKChjb2x1bW4sIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgZmllbGQsIHZhbHVlIH0gPSBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1uVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmFsdWUgPSB2YWx1ZShpdGVtLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IGl0ZW1bZmllbGRdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgQ29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2x1bW4gPSBjb2x1bW4uY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2x1bW4gPSBjb2x1bW5GYWN0b3J5KHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5jb2x1bW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e2V4dHJhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbHVtblZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtUm93PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtwcm92aWRlci5nZXRBY3RpdmVQYWdlKCl9LiR7aX0uJHtqfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSb3dPcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiByb3dPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSByb3dPcHRpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSb3dPcHRpb25zW2tleV0gPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGUuUm93IGtleT17aX0geyAuLi5jdXJyZW50Um93T3B0aW9ucyB9PntpdGVtc308L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==