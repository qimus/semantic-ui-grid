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
          _this$props$rowOption = _this$props.rowOptions,
          rowOptions = _this$props$rowOption === void 0 ? {} : _this$props$rowOption;
      return React.createElement(_semanticUiReact.Table.Body, null, provider.getItems().map(function (item, i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwicHJvdmlkZXIiLCJjb2x1bW5zIiwicm93T3B0aW9ucyIsImdldEl0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJpdGVtcyIsImNvbHVtbiIsImoiLCJ0eXBlIiwiZmllbGQiLCJ2YWx1ZSIsImNvbHVtblZhbHVlIiwiQ29sdW1uIiwiY29tcG9uZW50IiwiZ2V0QWN0aXZlUGFnZSIsImN1cnJlbnRSb3dPcHRpb25zIiwia2V5Iiwib3B0aW9uVmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVdxQkEsUzs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUMwQyxLQUFLQyxLQUQvQztBQUFBLFVBQ0dDLFFBREgsZUFDR0EsUUFESDtBQUFBLFVBQ2FDLE9BRGIsZUFDYUEsT0FEYjtBQUFBLDhDQUNzQkMsVUFEdEI7QUFBQSxVQUNzQkEsVUFEdEIsc0NBQ21DLEVBRG5DO0FBR0wsYUFDSSxvQkFBQyxzQkFBRCxDQUFPLElBQVAsUUFDS0YsUUFBUSxDQUFDRyxRQUFULEdBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNsQyxZQUFJQyxLQUFLLEdBQUdOLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNJLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQUEsY0FDM0JDLElBRDJCLEdBQ0pGLE1BREksQ0FDM0JFLElBRDJCO0FBQUEsY0FDckJDLEtBRHFCLEdBQ0pILE1BREksQ0FDckJHLEtBRHFCO0FBQUEsY0FDZEMsS0FEYyxHQUNKSixNQURJLENBQ2RJLEtBRGM7QUFFbkMsY0FBSUMsV0FBSjs7QUFFQSxjQUFJRCxLQUFKLEVBQVc7QUFDUCxnQkFBSSxPQUFPQSxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0FBQzdCQyxjQUFBQSxXQUFXLEdBQUdELEtBQUssQ0FBQ1AsSUFBRCxFQUFPQyxDQUFQLENBQW5CO0FBQ0gsYUFGRCxNQUVPO0FBQ0hPLGNBQUFBLFdBQVcsR0FBR0QsS0FBZDtBQUNIO0FBQ0osV0FORCxNQU1PLElBQUlELEtBQUosRUFBVztBQUNkRSxZQUFBQSxXQUFXLEdBQUdSLElBQUksQ0FBQ00sS0FBRCxDQUFKLElBQWUsRUFBN0I7QUFDSDs7QUFFRCxjQUFJRyxNQUFKOztBQUNBLGNBQUlOLE1BQU0sQ0FBQ08sU0FBWCxFQUFzQjtBQUNsQkQsWUFBQUEsTUFBTSxHQUFHTixNQUFNLENBQUNPLFNBQWhCO0FBQ0gsV0FGRCxNQUVPO0FBQ0hELFlBQUFBLE1BQU0sR0FBRyxzQkFBY0osSUFBZCxDQUFUO0FBQ0g7O0FBRUQsaUJBQU8sb0JBQUMsTUFBRCxlQUNVRixNQURWO0FBRUssWUFBQSxLQUFLLEVBQUVLLFdBRlo7QUFHSyxZQUFBLEdBQUcsRUFBRVIsSUFIVjtBQUlLLFlBQUEsUUFBUSxFQUFFTCxRQUpmO0FBS0ssWUFBQSxNQUFNLEVBQUVNLENBTGI7QUFNSyxZQUFBLEdBQUcsWUFBS04sUUFBUSxDQUFDZ0IsYUFBVCxFQUFMLGNBQWlDVixDQUFqQyxjQUFzQ0csQ0FBdEM7QUFOUixhQUFQO0FBT0gsU0E1QlcsQ0FBWjtBQThCQSxZQUFJUSxpQkFBaUIsR0FBRyxFQUF4Qjs7QUFDQSxhQUFLLElBQUlDLEdBQVQsSUFBZ0JoQixVQUFoQixFQUE0QjtBQUN4QixjQUFJaUIsV0FBVyxHQUFHakIsVUFBVSxDQUFDZ0IsR0FBRCxDQUE1Qjs7QUFDQSxjQUFJLE9BQU9DLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDbkNBLFlBQUFBLFdBQVcsR0FBR0EsV0FBVyxDQUFDZCxJQUFELENBQXpCO0FBQ0g7O0FBQ0RZLFVBQUFBLGlCQUFpQixDQUFDQyxHQUFELENBQWpCLEdBQXlCQyxXQUF6QjtBQUNIOztBQUVELGVBQU8sb0JBQUMsc0JBQUQsQ0FBTyxHQUFQO0FBQVcsVUFBQSxHQUFHLEVBQUViO0FBQWhCLFdBQXdCVyxpQkFBeEIsR0FBNkNWLEtBQTdDLENBQVA7QUFDSCxPQXpDQSxDQURMLENBREo7QUE4Q0g7Ozs7RUFsRGtDYSxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGVcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBjb2x1bW5GYWN0b3J5IGZyb20gJy4uL2NvbHVtbnMnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tICcuLi9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlcidcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgVGFibGVCb2R5UHJvcHMge1xuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyO1xuICAgIGNvbHVtbnM6IENvbHVtbltdLFxuICAgIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgICByb3dPcHRpb25zOiB7IFtwcm9wOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYmxlQm9keVByb3BzLCB7fT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcm92aWRlciwgY29sdW1ucywgcm93T3B0aW9ucyA9IHt9IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICB7cHJvdmlkZXIuZ2V0SXRlbXMoKS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gY29sdW1ucy5tYXAoKGNvbHVtbiwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBmaWVsZCwgdmFsdWUgfSA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHZhbHVlKGl0ZW0sIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gaXRlbVtmaWVsZF0gfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBDb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbiA9IGNvbHVtbi5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbiA9IGNvbHVtbkZhY3RvcnkodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sdW1uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5jb2x1bW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbHVtblZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtUm93PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtwcm92aWRlci5nZXRBY3RpdmVQYWdlKCl9LiR7aX0uJHtqfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSb3dPcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiByb3dPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSByb3dPcHRpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSb3dPcHRpb25zW2tleV0gPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGUuUm93IGtleT17aX0geyAuLi5jdXJyZW50Um93T3B0aW9ucyB9PntpdGVtc308L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==