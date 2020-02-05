"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _cell = _interopRequireDefault(require("./cell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableHeader, _React$Component);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableHeader).apply(this, arguments));
  }

  _createClass(TableHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columns = _this$props.columns,
          provider = _this$props.provider,
          header = _this$props.header,
          extra = _this$props.extra;
      var sort = provider.getSort();
      var headerComponent;

      if (header && _typeof(header) === 'object') {
        headerComponent = header;
      } else if (header && typeof header === 'string') {
        headerComponent = React.createElement(_semanticUiReact.Header, {
          as: 'h3'
        }, header);
      }

      return React.createElement(_semanticUiReact.Table.Header, null, headerComponent && React.createElement(_semanticUiReact.Table.Row, null, React.createElement(_semanticUiReact.Table.HeaderCell, {
        colSpan: columns.length
      }, headerComponent)), React.createElement(_semanticUiReact.Table.Row, null, columns.map(function (item, i) {
        var fieldSort;

        if (item.field && sort[item.field]) {
          fieldSort = sort[item.field];
        }

        var HeaderComponent;

        if (item.header) {
          HeaderComponent = item.header;
        } else {
          HeaderComponent = _cell.default;
        }

        return React.createElement(HeaderComponent, {
          item: item,
          key: i,
          provider: provider,
          sort: fieldSort,
          extra: extra
        });
      })));
    }
  }]);

  return TableHeader;
}(React.Component);

exports.default = TableHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiVGFibGVIZWFkZXIiLCJwcm9wcyIsImNvbHVtbnMiLCJwcm92aWRlciIsImhlYWRlciIsImV4dHJhIiwic29ydCIsImdldFNvcnQiLCJoZWFkZXJDb21wb25lbnQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImZpZWxkU29ydCIsImZpZWxkIiwiSGVhZGVyQ29tcG9uZW50IiwiSGVhZGVyQ2VsbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVVxQkEsVzs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUN3QyxLQUFLQyxLQUQ3QztBQUFBLFVBQ0dDLE9BREgsZUFDR0EsT0FESDtBQUFBLFVBQ1lDLFFBRFosZUFDWUEsUUFEWjtBQUFBLFVBQ3NCQyxNQUR0QixlQUNzQkEsTUFEdEI7QUFBQSxVQUM4QkMsS0FEOUIsZUFDOEJBLEtBRDlCO0FBRUwsVUFBTUMsSUFBSSxHQUFHSCxRQUFRLENBQUNJLE9BQVQsRUFBYjtBQUVBLFVBQUlDLGVBQUo7O0FBRUEsVUFBSUosTUFBTSxJQUFJLFFBQU9BLE1BQVAsTUFBa0IsUUFBaEMsRUFBMEM7QUFDdENJLFFBQUFBLGVBQWUsR0FBR0osTUFBbEI7QUFDSCxPQUZELE1BRU8sSUFBSUEsTUFBTSxJQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBaEMsRUFBMEM7QUFDN0NJLFFBQUFBLGVBQWUsR0FBRyxvQkFBQyx1QkFBRDtBQUFRLFVBQUEsRUFBRSxFQUFFO0FBQVosV0FBbUJKLE1BQW5CLENBQWxCO0FBQ0g7O0FBRUQsYUFDSSxvQkFBQyxzQkFBRCxDQUFPLE1BQVAsUUFDS0ksZUFBZSxJQUNaLG9CQUFDLHNCQUFELENBQU8sR0FBUCxRQUNJLG9CQUFDLHNCQUFELENBQU8sVUFBUDtBQUFrQixRQUFBLE9BQU8sRUFBRU4sT0FBTyxDQUFDTztBQUFuQyxTQUNLRCxlQURMLENBREosQ0FGUixFQVFJLG9CQUFDLHNCQUFELENBQU8sR0FBUCxRQUNLTixPQUFPLENBQUNRLEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN0QixZQUFJQyxTQUFKOztBQUNBLFlBQUlGLElBQUksQ0FBQ0csS0FBTCxJQUFjUixJQUFJLENBQUNLLElBQUksQ0FBQ0csS0FBTixDQUF0QixFQUFvQztBQUNoQ0QsVUFBQUEsU0FBUyxHQUFHUCxJQUFJLENBQUNLLElBQUksQ0FBQ0csS0FBTixDQUFoQjtBQUNIOztBQUVELFlBQUlDLGVBQUo7O0FBQ0EsWUFBSUosSUFBSSxDQUFDUCxNQUFULEVBQWlCO0FBQ2JXLFVBQUFBLGVBQWUsR0FBR0osSUFBSSxDQUFDUCxNQUF2QjtBQUNILFNBRkQsTUFFTztBQUNIVyxVQUFBQSxlQUFlLEdBQUdDLGFBQWxCO0FBQ0g7O0FBRUQsZUFBTyxvQkFBQyxlQUFEO0FBQWlCLFVBQUEsSUFBSSxFQUFFTCxJQUF2QjtBQUE2QixVQUFBLEdBQUcsRUFBRUMsQ0FBbEM7QUFBcUMsVUFBQSxRQUFRLEVBQUVULFFBQS9DO0FBQXlELFVBQUEsSUFBSSxFQUFFVSxTQUEvRDtBQUEwRSxVQUFBLEtBQUssRUFBRVI7QUFBakYsVUFBUDtBQUNILE9BZEEsQ0FETCxDQVJKLENBREo7QUE0Qkg7Ozs7RUF6Q29DWSxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgSGVhZGVyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdjb21wb25lbnRzL3R5cGVzJ1xuXG5pbXBvcnQgSGVhZGVyQ2VsbCBmcm9tICcuL2NlbGwnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tICcuLi9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlcidcblxuaW50ZXJmYWNlIFRhYmxlSGVhZGVyUHJvcHMge1xuICAgIGNvbHVtbnM6IENvbHVtbltdLFxuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyLFxuICAgIGhlYWRlcjogc3RyaW5nO1xuICAgIGV4dHJhOiB7IFtwcm9wOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFibGVIZWFkZXJQcm9wcywge30+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29sdW1ucywgcHJvdmlkZXIsIGhlYWRlciwgZXh0cmEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBwcm92aWRlci5nZXRTb3J0KCk7XG5cbiAgICAgICAgbGV0IGhlYWRlckNvbXBvbmVudDtcblxuICAgICAgICBpZiAoaGVhZGVyICYmIHR5cGVvZiBoZWFkZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBoZWFkZXJDb21wb25lbnQgPSBoZWFkZXI7XG4gICAgICAgIH0gZWxzZSBpZiAoaGVhZGVyICYmIHR5cGVvZiBoZWFkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBoZWFkZXJDb21wb25lbnQgPSA8SGVhZGVyIGFzPXsnaDMnfT57aGVhZGVyfTwvSGVhZGVyPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgIHtoZWFkZXJDb21wb25lbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgY29sU3Bhbj17Y29sdW1ucy5sZW5ndGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRTb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZmllbGQgJiYgc29ydFtpdGVtLmZpZWxkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU29ydCA9IHNvcnRbaXRlbS5maWVsZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBIZWFkZXJDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDb21wb25lbnQgPSBpdGVtLmhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyQ29tcG9uZW50ID0gSGVhZGVyQ2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxIZWFkZXJDb21wb25lbnQgaXRlbT17aXRlbX0ga2V5PXtpfSBwcm92aWRlcj17cHJvdmlkZXJ9IHNvcnQ9e2ZpZWxkU29ydH0gZXh0cmE9e2V4dHJhfS8+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=