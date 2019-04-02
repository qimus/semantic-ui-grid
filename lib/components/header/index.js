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

      return React.createElement(_semanticUiReact.Table.Header, null, React.createElement(_semanticUiReact.Table.Row, null, React.createElement(_semanticUiReact.Table.HeaderCell, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiVGFibGVIZWFkZXIiLCJwcm9wcyIsImNvbHVtbnMiLCJwcm92aWRlciIsImhlYWRlciIsImV4dHJhIiwic29ydCIsImdldFNvcnQiLCJoZWFkZXJDb21wb25lbnQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImZpZWxkU29ydCIsImZpZWxkIiwiSGVhZGVyQ29tcG9uZW50IiwiSGVhZGVyQ2VsbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVVxQkEsVzs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUN3QyxLQUFLQyxLQUQ3QztBQUFBLFVBQ0dDLE9BREgsZUFDR0EsT0FESDtBQUFBLFVBQ1lDLFFBRFosZUFDWUEsUUFEWjtBQUFBLFVBQ3NCQyxNQUR0QixlQUNzQkEsTUFEdEI7QUFBQSxVQUM4QkMsS0FEOUIsZUFDOEJBLEtBRDlCO0FBRUwsVUFBTUMsSUFBSSxHQUFHSCxRQUFRLENBQUNJLE9BQVQsRUFBYjtBQUVBLFVBQUlDLGVBQUo7O0FBRUEsVUFBSUosTUFBTSxJQUFJLFFBQU9BLE1BQVAsTUFBa0IsUUFBaEMsRUFBMEM7QUFDdENJLFFBQUFBLGVBQWUsR0FBR0osTUFBbEI7QUFDSCxPQUZELE1BRU8sSUFBSUEsTUFBTSxJQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBaEMsRUFBMEM7QUFDN0NJLFFBQUFBLGVBQWUsR0FBRyxvQkFBQyx1QkFBRDtBQUFRLFVBQUEsRUFBRSxFQUFFO0FBQVosV0FBbUJKLE1BQW5CLENBQWxCO0FBQ0g7O0FBRUQsYUFDSSxvQkFBQyxzQkFBRCxDQUFPLE1BQVAsUUFDSSxvQkFBQyxzQkFBRCxDQUFPLEdBQVAsUUFDSSxvQkFBQyxzQkFBRCxDQUFPLFVBQVA7QUFBa0IsUUFBQSxPQUFPLEVBQUVGLE9BQU8sQ0FBQ087QUFBbkMsU0FDS0QsZUFETCxDQURKLENBREosRUFNSSxvQkFBQyxzQkFBRCxDQUFPLEdBQVAsUUFDS04sT0FBTyxDQUFDUSxHQUFSLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDdEIsWUFBSUMsU0FBSjs7QUFDQSxZQUFJRixJQUFJLENBQUNHLEtBQUwsSUFBY1IsSUFBSSxDQUFDSyxJQUFJLENBQUNHLEtBQU4sQ0FBdEIsRUFBb0M7QUFDaENELFVBQUFBLFNBQVMsR0FBR1AsSUFBSSxDQUFDSyxJQUFJLENBQUNHLEtBQU4sQ0FBaEI7QUFDSDs7QUFFRCxZQUFJQyxlQUFKOztBQUNBLFlBQUlKLElBQUksQ0FBQ1AsTUFBVCxFQUFpQjtBQUNiVyxVQUFBQSxlQUFlLEdBQUdKLElBQUksQ0FBQ1AsTUFBdkI7QUFDSCxTQUZELE1BRU87QUFDSFcsVUFBQUEsZUFBZSxHQUFHQyxhQUFsQjtBQUNIOztBQUVELGVBQU8sb0JBQUMsZUFBRDtBQUFpQixVQUFBLElBQUksRUFBRUwsSUFBdkI7QUFBNkIsVUFBQSxHQUFHLEVBQUVDLENBQWxDO0FBQXFDLFVBQUEsUUFBUSxFQUFFVCxRQUEvQztBQUF5RCxVQUFBLElBQUksRUFBRVUsU0FBL0Q7QUFBMEUsVUFBQSxLQUFLLEVBQUVSO0FBQWpGLFVBQVA7QUFDSCxPQWRBLENBREwsQ0FOSixDQURKO0FBMEJIOzs7O0VBdkNvQ1ksS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRhYmxlLFxuICAgIEhlYWRlclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnY29tcG9uZW50cy90eXBlcydcblxuaW1wb3J0IEhlYWRlckNlbGwgZnJvbSAnLi9jZWxsJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSAnLi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXInXG5cbmludGVyZmFjZSBUYWJsZUhlYWRlclByb3BzIHtcbiAgICBjb2x1bW5zOiBDb2x1bW5bXSxcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcixcbiAgICBoZWFkZXI6IHN0cmluZztcbiAgICBleHRyYTogeyBbcHJvcDogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYmxlSGVhZGVyUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbHVtbnMsIHByb3ZpZGVyLCBoZWFkZXIsIGV4dHJhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzb3J0ID0gcHJvdmlkZXIuZ2V0U29ydCgpO1xuXG4gICAgICAgIGxldCBoZWFkZXJDb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGhlYWRlciAmJiB0eXBlb2YgaGVhZGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaGVhZGVyQ29tcG9uZW50ID0gaGVhZGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGhlYWRlciAmJiB0eXBlb2YgaGVhZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaGVhZGVyQ29tcG9uZW50ID0gPEhlYWRlciBhcz17J2gzJ30+e2hlYWRlcn08L0hlYWRlcj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCBjb2xTcGFuPXtjb2x1bW5zLmxlbmd0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRTb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZmllbGQgJiYgc29ydFtpdGVtLmZpZWxkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU29ydCA9IHNvcnRbaXRlbS5maWVsZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBIZWFkZXJDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDb21wb25lbnQgPSBpdGVtLmhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyQ29tcG9uZW50ID0gSGVhZGVyQ2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxIZWFkZXJDb21wb25lbnQgaXRlbT17aXRlbX0ga2V5PXtpfSBwcm92aWRlcj17cHJvdmlkZXJ9IHNvcnQ9e2ZpZWxkU29ydH0gZXh0cmE9e2V4dHJhfS8+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=