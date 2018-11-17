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
          columns = _this$props.columns;
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

          var Column = (0, _columns.default)(type);
          return React.createElement(Column, _extends({}, column, {
            value: columnValue,
            row: item,
            provider: provider,
            numRow: i,
            key: "".concat(provider.getActivePage(), ".").concat(i, ".").concat(j)
          }));
        });
        return React.createElement(_semanticUiReact.Table.Row, {
          key: i
        }, items);
      }));
    }
  }]);

  return TableBody;
}(React.Component);

exports.default = TableBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwicHJvdmlkZXIiLCJjb2x1bW5zIiwiZ2V0SXRlbXMiLCJtYXAiLCJpdGVtIiwiaSIsIml0ZW1zIiwiY29sdW1uIiwiaiIsInR5cGUiLCJmaWVsZCIsInZhbHVlIiwiY29sdW1uVmFsdWUiLCJDb2x1bW4iLCJnZXRBY3RpdmVQYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFVcUJBLFM7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFBQSx3QkFDeUIsS0FBS0MsS0FEOUI7QUFBQSxVQUNHQyxRQURILGVBQ0dBLFFBREg7QUFBQSxVQUNhQyxPQURiLGVBQ2FBLE9BRGI7QUFHTCxhQUNJLG9CQUFDLHNCQUFELENBQU8sSUFBUCxRQUNLRCxRQUFRLENBQUNFLFFBQVQsR0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ2xDLFlBQUlDLEtBQUssR0FBR0wsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0ksTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFBQSxjQUMzQkMsSUFEMkIsR0FDSkYsTUFESSxDQUMzQkUsSUFEMkI7QUFBQSxjQUNyQkMsS0FEcUIsR0FDSkgsTUFESSxDQUNyQkcsS0FEcUI7QUFBQSxjQUNkQyxLQURjLEdBQ0pKLE1BREksQ0FDZEksS0FEYztBQUVuQyxjQUFJQyxXQUFKOztBQUVBLGNBQUlELEtBQUosRUFBVztBQUNQLGdCQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDN0JDLGNBQUFBLFdBQVcsR0FBR0QsS0FBSyxDQUFDUCxJQUFELEVBQU9DLENBQVAsQ0FBbkI7QUFDSCxhQUZELE1BRU87QUFDSE8sY0FBQUEsV0FBVyxHQUFHRCxLQUFkO0FBQ0g7QUFDSixXQU5ELE1BTU8sSUFBSUQsS0FBSixFQUFXO0FBQ2RFLFlBQUFBLFdBQVcsR0FBR1IsSUFBSSxDQUFDTSxLQUFELENBQUosSUFBZSxFQUE3QjtBQUNIOztBQUVELGNBQUlHLE1BQU0sR0FBRyxzQkFBY0osSUFBZCxDQUFiO0FBRUEsaUJBQU8sb0JBQUMsTUFBRCxlQUFhRixNQUFiO0FBQ1EsWUFBQSxLQUFLLEVBQUVLLFdBRGY7QUFFUSxZQUFBLEdBQUcsRUFBRVIsSUFGYjtBQUdRLFlBQUEsUUFBUSxFQUFFSixRQUhsQjtBQUlRLFlBQUEsTUFBTSxFQUFFSyxDQUpoQjtBQUtRLFlBQUEsR0FBRyxZQUFLTCxRQUFRLENBQUNjLGFBQVQsRUFBTCxjQUFpQ1QsQ0FBakMsY0FBc0NHLENBQXRDO0FBTFgsYUFBUDtBQU1ILFNBdEJXLENBQVo7QUF3QkEsZUFBTyxvQkFBQyxzQkFBRCxDQUFPLEdBQVA7QUFBVyxVQUFBLEdBQUcsRUFBRUg7QUFBaEIsV0FBb0JDLEtBQXBCLENBQVA7QUFDSCxPQTFCQSxDQURMLENBREo7QUErQkg7Ozs7RUFuQ2tDUyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGVcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBjb2x1bW5GYWN0b3J5IGZyb20gJy4uL2NvbHVtbnMnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tICcuLi9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlcidcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgVGFibGVCb2R5UHJvcHMge1xuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyO1xuICAgIGNvbHVtbnM6IENvbHVtbltdLFxuICAgIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYmxlQm9keVByb3BzLCB7fT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcm92aWRlciwgY29sdW1ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAge3Byb3ZpZGVyLmdldEl0ZW1zKCkubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IGNvbHVtbnMubWFwKChjb2x1bW4sIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgZmllbGQsIHZhbHVlIH0gPSBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1uVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmFsdWUgPSB2YWx1ZShpdGVtLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IGl0ZW1bZmllbGRdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgQ29sdW1uID0gY29sdW1uRmFjdG9yeSh0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2x1bW4geyAuLi5jb2x1bW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbHVtblZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtUm93PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtwcm92aWRlci5nZXRBY3RpdmVQYWdlKCl9LiR7aX0uJHtqfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUYWJsZS5Sb3cga2V5PXtpfT57aXRlbXN9PC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=