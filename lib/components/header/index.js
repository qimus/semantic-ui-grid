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
          header = _this$props.header;
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

        return React.createElement(_cell.default, {
          item: item,
          key: i,
          provider: provider,
          sort: fieldSort
        });
      })));
    }
  }]);

  return TableHeader;
}(React.Component);

exports.default = TableHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiVGFibGVIZWFkZXIiLCJwcm9wcyIsImNvbHVtbnMiLCJwcm92aWRlciIsImhlYWRlciIsInNvcnQiLCJnZXRTb3J0IiwiaGVhZGVyQ29tcG9uZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImkiLCJmaWVsZFNvcnQiLCJmaWVsZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVNxQkEsVzs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUNpQyxLQUFLQyxLQUR0QztBQUFBLFVBQ0dDLE9BREgsZUFDR0EsT0FESDtBQUFBLFVBQ1lDLFFBRFosZUFDWUEsUUFEWjtBQUFBLFVBQ3NCQyxNQUR0QixlQUNzQkEsTUFEdEI7QUFFTCxVQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csT0FBVCxFQUFiO0FBRUEsVUFBSUMsZUFBSjs7QUFFQSxVQUFJSCxNQUFNLElBQUksUUFBT0EsTUFBUCxNQUFrQixRQUFoQyxFQUEwQztBQUN0Q0csUUFBQUEsZUFBZSxHQUFHSCxNQUFsQjtBQUNILE9BRkQsTUFFTyxJQUFJQSxNQUFNLElBQUksT0FBT0EsTUFBUCxLQUFrQixRQUFoQyxFQUEwQztBQUM3Q0csUUFBQUEsZUFBZSxHQUFHLG9CQUFDLHVCQUFEO0FBQVEsVUFBQSxFQUFFLEVBQUU7QUFBWixXQUFtQkgsTUFBbkIsQ0FBbEI7QUFDSDs7QUFFRCxhQUNJLG9CQUFDLHNCQUFELENBQU8sTUFBUCxRQUNJLG9CQUFDLHNCQUFELENBQU8sR0FBUCxRQUNJLG9CQUFDLHNCQUFELENBQU8sVUFBUDtBQUFrQixRQUFBLE9BQU8sRUFBRUYsT0FBTyxDQUFDTTtBQUFuQyxTQUNLRCxlQURMLENBREosQ0FESixFQU1JLG9CQUFDLHNCQUFELENBQU8sR0FBUCxRQUNLTCxPQUFPLENBQUNPLEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN0QixZQUFJQyxTQUFKOztBQUNBLFlBQUlGLElBQUksQ0FBQ0csS0FBTCxJQUFjUixJQUFJLENBQUNLLElBQUksQ0FBQ0csS0FBTixDQUF0QixFQUFvQztBQUNoQ0QsVUFBQUEsU0FBUyxHQUFHUCxJQUFJLENBQUNLLElBQUksQ0FBQ0csS0FBTixDQUFoQjtBQUNIOztBQUVELGVBQU8sb0JBQUMsYUFBRDtBQUFZLFVBQUEsSUFBSSxFQUFFSCxJQUFsQjtBQUF3QixVQUFBLEdBQUcsRUFBRUMsQ0FBN0I7QUFBZ0MsVUFBQSxRQUFRLEVBQUVSLFFBQTFDO0FBQW9ELFVBQUEsSUFBSSxFQUFFUztBQUExRCxVQUFQO0FBQ0gsT0FQQSxDQURMLENBTkosQ0FESjtBQW1CSDs7OztFQWhDb0NFLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBIZWFkZXJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ2NvbXBvbmVudHMvdHlwZXMnXG5cbmltcG9ydCBIZWFkZXJDZWxsIGZyb20gJy4vY2VsbCdcbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gJy4uL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyJ1xuXG5pbnRlcmZhY2UgVGFibGVIZWFkZXJQcm9wcyB7XG4gICAgY29sdW1uczogQ29sdW1uW10sXG4gICAgcHJvdmlkZXI6IEFic3RyYWN0UHJvdmlkZXIsXG4gICAgaGVhZGVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYmxlSGVhZGVyUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbHVtbnMsIHByb3ZpZGVyLCBoZWFkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBwcm92aWRlci5nZXRTb3J0KCk7XG5cbiAgICAgICAgbGV0IGhlYWRlckNvbXBvbmVudDtcblxuICAgICAgICBpZiAoaGVhZGVyICYmIHR5cGVvZiBoZWFkZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBoZWFkZXJDb21wb25lbnQgPSBoZWFkZXI7XG4gICAgICAgIH0gZWxzZSBpZiAoaGVhZGVyICYmIHR5cGVvZiBoZWFkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBoZWFkZXJDb21wb25lbnQgPSA8SGVhZGVyIGFzPXsnaDMnfT57aGVhZGVyfTwvSGVhZGVyPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZFNvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5maWVsZCAmJiBzb3J0W2l0ZW0uZmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTb3J0ID0gc29ydFtpdGVtLmZpZWxkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxIZWFkZXJDZWxsIGl0ZW09e2l0ZW19IGtleT17aX0gcHJvdmlkZXI9e3Byb3ZpZGVyfSBzb3J0PXtmaWVsZFNvcnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICA8L1RhYmxlLkhlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==