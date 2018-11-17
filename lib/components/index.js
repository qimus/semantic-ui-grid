"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _body = _interopRequireDefault(require("./body"));

var _header = _interopRequireDefault(require("./header"));

var _footer = _interopRequireDefault(require("./footer"));

var _filters = require("./filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExtTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExtTable, _React$Component);

  function ExtTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExtTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExtTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filter", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activePage: 1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePaginationChange", function (e, _ref) {
      var activePage = _ref.activePage;

      if (_this.props.onPageChange) {
        _this.props.onPageChange(activePage);
      }

      _this.props.provider.setActivePage(activePage);

      _this.setState({
        activePage: activePage
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFilter", function (values, fieldNames) {
      //добавляем в search строки браузера значения фильтра для сохранения состояния
      _this.props.provider._navigate(values, function (search) {
        fieldNames.forEach(function (fieldName) {
          delete search[fieldName];
        });
        return search;
      });

      _this.props.provider.fetch(); //делаем запрос

    });

    return _this;
  }

  _createClass(ExtTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.filter && !this.filter) {
        var _this$props = this.props,
            _filter = _this$props.filter,
            _provider = _this$props.provider;
        this.filter = (0, _filters.createFilterForm)({
          name: _filter.name,
          items: _filter.items,
          handleFilter: this.handleFilter,
          initialValues: _provider.getSearchParams()
        });
      }
    }
    /**
     * Обработчик пагинации
     * @param {Event} e
     * @param {Number} activePage
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          columns = _this$props2.columns,
          header = _this$props2.header,
          provider = _this$props2.provider,
          sortable = _this$props2.sortable,
          isFetching = _this$props2.isFetching;
      return React.createElement(React.Fragment, null, this.filter, isFetching && React.createElement(_semanticUiReact.Dimmer, {
        active: true,
        inverted: true
      }, React.createElement(_semanticUiReact.Loader, null)), React.createElement(_semanticUiReact.Table, {
        celled: true,
        color: "teal",
        striped: true,
        sortable: sortable
      }, React.createElement(_header.default, {
        columns: columns,
        provider: provider,
        header: header
      }), React.createElement(_body.default, {
        provider: provider,
        columns: columns,
        activePage: this.state.activePage,
        key: provider.getUniqKey()
      }), React.createElement(_footer.default, {
        colSpan: columns.length,
        provider: provider,
        handlePaginate: this.handlePaginationChange
      })));
    }
  }]);

  return ExtTable;
}(React.Component);

exports.default = ExtTable;

_defineProperty(ExtTable, "defaultProps", {
  columns: [],
  sortable: false,
  isFetching: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJzZWFyY2giLCJmb3JFYWNoIiwiZmllbGROYW1lIiwiZmV0Y2giLCJmaWx0ZXIiLCJuYW1lIiwiaXRlbXMiLCJoYW5kbGVGaWx0ZXIiLCJpbml0aWFsVmFsdWVzIiwiZ2V0U2VhcmNoUGFyYW1zIiwiY29sdW1ucyIsImhlYWRlciIsInNvcnRhYmxlIiwiaXNGZXRjaGluZyIsInN0YXRlIiwiZ2V0VW5pcUtleSIsImxlbmd0aCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CcUJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRkFPUixJOztvRkFFRDtBQUFFQyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLOztxR0FtQmlCLFVBQUNDLENBQUQsUUFBdUI7QUFBQSxVQUFqQkQsVUFBaUIsUUFBakJBLFVBQWlCOztBQUM1QyxVQUFJLE1BQUtFLEtBQUwsQ0FBV0MsWUFBZixFQUE2QjtBQUN6QixjQUFLRCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JILFVBQXhCO0FBQ0g7O0FBQ0QsWUFBS0UsS0FBTCxDQUFXRSxRQUFYLENBQW9CQyxhQUFwQixDQUFrQ0wsVUFBbEM7O0FBQ0EsWUFBS00sUUFBTCxDQUFjO0FBQUVOLFFBQUFBLFVBQVUsRUFBVkE7QUFBRixPQUFkO0FBQ0gsSzs7MkZBUWMsVUFBQ08sTUFBRCxFQUFTQyxVQUFULEVBQXdCO0FBQ25DO0FBQ0EsWUFBS04sS0FBTCxDQUFXRSxRQUFYLENBQW9CSyxTQUFwQixDQUE4QkYsTUFBOUIsRUFBc0MsVUFBQ0csTUFBRCxFQUFZO0FBQzlDRixRQUFBQSxVQUFVLENBQUNHLE9BQVgsQ0FBbUIsVUFBQUMsU0FBUyxFQUFJO0FBQzVCLGlCQUFPRixNQUFNLENBQUNFLFNBQUQsQ0FBYjtBQUNILFNBRkQ7QUFJQSxlQUFPRixNQUFQO0FBQ0gsT0FORDs7QUFRQSxZQUFLUixLQUFMLENBQVdFLFFBQVgsQ0FBb0JTLEtBQXBCLEdBVm1DLENBVU47O0FBQ2hDLEs7Ozs7Ozs7d0NBMUNtQjtBQUNoQixVQUFJLEtBQUtYLEtBQUwsQ0FBV1ksTUFBWCxJQUFxQixDQUFDLEtBQUtBLE1BQS9CLEVBQXVDO0FBQUEsMEJBQ04sS0FBS1osS0FEQztBQUFBLFlBQzNCWSxPQUQyQixlQUMzQkEsTUFEMkI7QUFBQSxZQUNuQlYsU0FEbUIsZUFDbkJBLFFBRG1CO0FBRW5DLGFBQUtVLE1BQUwsR0FBYywrQkFBaUI7QUFDM0JDLFVBQUFBLElBQUksRUFBRUQsT0FBTSxDQUFDQyxJQURjO0FBRTNCQyxVQUFBQSxLQUFLLEVBQUVGLE9BQU0sQ0FBQ0UsS0FGYTtBQUczQkMsVUFBQUEsWUFBWSxFQUFFLEtBQUtBLFlBSFE7QUFJM0JDLFVBQUFBLGFBQWEsRUFBRWQsU0FBUSxDQUFDZSxlQUFUO0FBSlksU0FBakIsQ0FBZDtBQU1IO0FBQ0o7QUFFRDs7Ozs7Ozs7NkJBZ0NTO0FBQUEseUJBQ3VELEtBQUtqQixLQUQ1RDtBQUFBLFVBQ0drQixPQURILGdCQUNHQSxPQURIO0FBQUEsVUFDWUMsTUFEWixnQkFDWUEsTUFEWjtBQUFBLFVBQ29CakIsUUFEcEIsZ0JBQ29CQSxRQURwQjtBQUFBLFVBQzhCa0IsUUFEOUIsZ0JBQzhCQSxRQUQ5QjtBQUFBLFVBQ3dDQyxVQUR4QyxnQkFDd0NBLFVBRHhDO0FBR0wsYUFDSSxvQkFBQyxLQUFELENBQU8sUUFBUCxRQUNLLEtBQUtULE1BRFYsRUFHS1MsVUFBVSxJQUNQLG9CQUFDLHVCQUFEO0FBQVEsUUFBQSxNQUFNLE1BQWQ7QUFBZSxRQUFBLFFBQVE7QUFBdkIsU0FDSSxvQkFBQyx1QkFBRCxPQURKLENBSlIsRUFTSSxvQkFBQyxzQkFBRDtBQUFPLFFBQUEsTUFBTSxNQUFiO0FBQWMsUUFBQSxLQUFLLEVBQUMsTUFBcEI7QUFBMkIsUUFBQSxPQUFPLE1BQWxDO0FBQW1DLFFBQUEsUUFBUSxFQUFFRDtBQUE3QyxTQUNJLG9CQUFDLGVBQUQ7QUFDSSxRQUFBLE9BQU8sRUFBRUYsT0FEYjtBQUVJLFFBQUEsUUFBUSxFQUFFaEIsUUFGZDtBQUdJLFFBQUEsTUFBTSxFQUFFaUI7QUFIWixRQURKLEVBS0ksb0JBQUMsYUFBRDtBQUNJLFFBQUEsUUFBUSxFQUFFakIsUUFEZDtBQUVJLFFBQUEsT0FBTyxFQUFFZ0IsT0FGYjtBQUdJLFFBQUEsVUFBVSxFQUFFLEtBQUtJLEtBQUwsQ0FBV3hCLFVBSDNCO0FBSUksUUFBQSxHQUFHLEVBQUVJLFFBQVEsQ0FBQ3FCLFVBQVQ7QUFKVCxRQUxKLEVBVUksb0JBQUMsZUFBRDtBQUNJLFFBQUEsT0FBTyxFQUFFTCxPQUFPLENBQUNNLE1BRHJCO0FBRUksUUFBQSxRQUFRLEVBQUV0QixRQUZkO0FBR0ksUUFBQSxjQUFjLEVBQUUsS0FBS3VCO0FBSHpCLFFBVkosQ0FUSixDQURKO0FBMkJIOzs7O0VBckZpQ0MsS0FBSyxDQUFDQyxTOzs7O2dCQUF2QjlCLFEsa0JBQ0s7QUFDbEJxQixFQUFBQSxPQUFPLEVBQUUsRUFEUztBQUVsQkUsRUFBQUEsUUFBUSxFQUFFLEtBRlE7QUFHbEJDLEVBQUFBLFVBQVUsRUFBRTtBQUhNLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgRGltbWVyLFxuICAgIExvYWRlclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL2JvZHknXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9mb290ZXInXG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXJGb3JtIH0gZnJvbSAnLi9maWx0ZXJzJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSBcIi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXJcIjtcblxuLy90eXBlc1xuaW1wb3J0IHtcbiAgICBDb2x1bW5cbn0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBFeHRUYWJsZVByb3BzIHtcbiAgICBmaWx0ZXI6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogW10gfTtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcjtcbiAgICBvblBhZ2VDaGFuZ2U6ICgoYWN0aXZlUGFnZTogbnVtYmVyKSA9PiB2b2lkKTtcbiAgICBjb2x1bW5zOiBDb2x1bW5bXTtcbiAgICBoZWFkZXI/OiBzdHJpbmc7XG4gICAgc29ydGFibGU/OiBib29sZWFuO1xuICAgIGlzRmV0Y2hpbmc6IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXh0VGFibGVQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBmaWx0ZXIgPSBudWxsO1xuXG4gICAgc3RhdGUgPSB7IGFjdGl2ZVBhZ2U6IDEgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgIXRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbHRlciwgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9IGNyZWF0ZUZpbHRlckZvcm0oe1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbHRlci5uYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaWx0ZXIuaXRlbXMsXG4gICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyOiB0aGlzLmhhbmRsZUZpbHRlcixcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBwcm92aWRlci5nZXRTZWFyY2hQYXJhbXMoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDQv9Cw0LPQuNC90LDRhtC40LhcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFjdGl2ZVBhZ2VcbiAgICAgKi9cbiAgICBoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKGUsIHsgYWN0aXZlUGFnZSB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UoYWN0aXZlUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5zZXRBY3RpdmVQYWdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlUGFnZSB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0J7QsdGA0LDQsdC+0YLRh9C40Log0YTQuNC70YzRgtGA0LDRhtC40Lgg0YHQv9C40YHQutCwINGC0LDQsdC70LjRhtGLXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpZWxkTmFtZXMg0YHQv9C40YHQvtC6INCy0L7Qt9C80L7QttC90YvRhSDQuNC80LXQvSDQv9C+0LvQtdC5INGE0LjQu9GM0YLRgNCwLFxuICAgICAqINC90YPQttC10L0g0LTQu9GPINGD0LTQsNC70LXQvdC40Y8g0LjQtyDRgdGC0YDQvtC60Lgg0YHQvtGB0YLQvtGP0L3QuNGPINC70LjRiNC90LXQs9C+XG4gICAgICovXG4gICAgaGFuZGxlRmlsdGVyID0gKHZhbHVlcywgZmllbGROYW1lcykgPT4ge1xuICAgICAgICAvL9C00L7QsdCw0LLQu9GP0LXQvCDQsiBzZWFyY2gg0YHRgtGA0L7QutC4INCx0YDQsNGD0LfQtdGA0LAg0LfQvdCw0YfQtdC90LjRjyDRhNC40LvRjNGC0YDQsCDQtNC70Y8g0YHQvtGF0YDQsNC90LXQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNGPXG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuX25hdmlnYXRlKHZhbHVlcywgKHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgZmllbGROYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlYXJjaFtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2g7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuZmV0Y2goKTsgLy/QtNC10LvQsNC10Lwg0LfQsNC/0YDQvtGBXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb2x1bW5zLCBoZWFkZXIsIHByb3ZpZGVyLCBzb3J0YWJsZSwgaXNGZXRjaGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHt0aGlzLmZpbHRlcn1cblxuICAgICAgICAgICAgICAgIHtpc0ZldGNoaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmUgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxUYWJsZSBjZWxsZWQgY29sb3I9J3RlYWwnIHN0cmlwZWQgc29ydGFibGU9e3NvcnRhYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e3RoaXMuc3RhdGUuYWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvdmlkZXIuZ2V0VW5pcUtleSgpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUZvb3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17Y29sdW1ucy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQYWdpbmF0ZT17dGhpcy5oYW5kbGVQYWdpbmF0aW9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=