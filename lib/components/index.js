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
      _this.props.provider._navigate(_defineProperty({}, _this.props.filterNamePrefix, values), function (search) {
        fieldNames.forEach(function (fieldName) {
          if (search[_this.props.filterNamePrefix]) {
            delete search[_this.props.filterNamePrefix][fieldName];
          }
        });
        return search;
      });

      _this.props.provider.fetch(); //делаем запрос

    });

    return _this;
  }

  _createClass(ExtTable, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.filter && !this.filter) {
        var _this$props = this.props,
            _filter = _this$props.filter,
            _provider = _this$props.provider;
        this.filter = (0, _filters.createFilterForm)({
          name: _filter.name,
          items: _filter.items,
          handleFilter: this.handleFilter,
          initialValues: _provider.getSearchParam(this.props.filterNamePrefix, {}),
          filterNamePrefix: this.props.filterNamePrefix
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
  isFetching: false,
  filterNamePrefix: 'filter'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJmaWx0ZXJOYW1lUHJlZml4Iiwic2VhcmNoIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZldGNoIiwiZmlsdGVyIiwibmFtZSIsIml0ZW1zIiwiaGFuZGxlRmlsdGVyIiwiaW5pdGlhbFZhbHVlcyIsImdldFNlYXJjaFBhcmFtIiwiY29sdW1ucyIsImhlYWRlciIsInNvcnRhYmxlIiwiaXNGZXRjaGluZyIsInN0YXRlIiwiZ2V0VW5pcUtleSIsImxlbmd0aCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CcUJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRkFRUixJOztvRkFFRDtBQUFFQyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLOztxR0FvQmlCLFVBQUNDLENBQUQsUUFBdUI7QUFBQSxVQUFqQkQsVUFBaUIsUUFBakJBLFVBQWlCOztBQUM1QyxVQUFJLE1BQUtFLEtBQUwsQ0FBV0MsWUFBZixFQUE2QjtBQUN6QixjQUFLRCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JILFVBQXhCO0FBQ0g7O0FBQ0QsWUFBS0UsS0FBTCxDQUFXRSxRQUFYLENBQW9CQyxhQUFwQixDQUFrQ0wsVUFBbEM7O0FBQ0EsWUFBS00sUUFBTCxDQUFjO0FBQUVOLFFBQUFBLFVBQVUsRUFBVkE7QUFBRixPQUFkO0FBQ0gsSzs7MkZBUWMsVUFBQ08sTUFBRCxFQUFTQyxVQUFULEVBQXdCO0FBQ25DO0FBQ0EsWUFBS04s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QUFVLEVBQUUsS0FITTtBQUlsQmQsRUFBQUEsZ0JBQWdCLEVBQUU7QUFKQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRhYmxlLFxuICAgIERpbW1lcixcbiAgICBMb2FkZXJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnLi9ib2R5J1xuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xuaW1wb3J0IHsgY3JlYXRlRmlsdGVyRm9ybSB9IGZyb20gJy4vZmlsdGVycydcbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gXCIuL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyXCI7XG5cbi8vdHlwZXNcbmltcG9ydCB7XG4gICAgQ29sdW1uXG59IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0VGFibGVQcm9wcyB7XG4gICAgZmlsdGVyOiB7IG5hbWU6IHN0cmluZywgaXRlbXM6IFtdIH07XG4gICAgcHJvdmlkZXI6IEFic3RyYWN0UHJvdmlkZXI7XG4gICAgb25QYWdlQ2hhbmdlOiAoKGFjdGl2ZVBhZ2U6IG51bWJlcikgPT4gdm9pZCk7XG4gICAgY29sdW1uczogQ29sdW1uW107XG4gICAgaGVhZGVyPzogc3RyaW5nO1xuICAgIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgICBpc0ZldGNoaW5nOiBib29sZWFuO1xuICAgIGZpbHRlck5hbWVQcmVmaXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXh0VGFibGVQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgZmlsdGVyTmFtZVByZWZpeDogJ2ZpbHRlcidcbiAgICB9O1xuXG4gICAgZmlsdGVyID0gbnVsbDtcblxuICAgIHN0YXRlID0geyBhY3RpdmVQYWdlOiAxIH07XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgIXRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbHRlciwgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9IGNyZWF0ZUZpbHRlckZvcm0oe1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbHRlci5uYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaWx0ZXIuaXRlbXMsXG4gICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyOiB0aGlzLmhhbmRsZUZpbHRlcixcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBwcm92aWRlci5nZXRTZWFyY2hQYXJhbSh0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXgsIHt9KSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiB0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J7QsdGA0LDQsdC+0YLRh9C40Log0L/QsNCz0LjQvdCw0YbQuNC4XG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhY3RpdmVQYWdlXG4gICAgICovXG4gICAgaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSA9IChlLCB7IGFjdGl2ZVBhZ2UgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuc2V0QWN0aXZlUGFnZShhY3RpdmVQYWdlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVBhZ2UgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCe0LHRgNCw0LHQvtGC0YfQuNC6INGE0LjQu9GM0YLRgNCw0YbQuNC4INGB0L/QuNGB0LrQsCDRgtCw0LHQu9C40YbRi1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWVsZE5hbWVzINGB0L/QuNGB0L7QuiDQstC+0LfQvNC+0LbQvdGL0YUg0LjQvNC10L0g0L/QvtC70LXQuSDRhNC40LvRjNGC0YDQsCxcbiAgICAgKiDQvdGD0LbQtdC9INC00LvRjyDRg9C00LDQu9C10L3QuNGPINC40Lcg0YHRgtGA0L7QutC4INGB0L7RgdGC0L7Rj9C90LjRjyDQu9C40YjQvdC10LPQvlxuICAgICAqL1xuICAgIGhhbmRsZUZpbHRlciA9ICh2YWx1ZXMsIGZpZWxkTmFtZXMpID0+IHtcbiAgICAgICAgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0LIgc2VhcmNoINGB0YLRgNC+0LrQuCDQsdGA0LDRg9C30LXRgNCwINC30L3QsNGH0LXQvdC40Y8g0YTQuNC70YzRgtGA0LAg0LTQu9GPINGB0L7RhdGA0LDQvdC10L3QuNGPINGB0L7RgdGC0L7Rj9C90LjRj1xuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLl9uYXZpZ2F0ZSh7IFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdOiB2YWx1ZXMgfSwgKHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgZmllbGROYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWFyY2hbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLmZldGNoKCk7IC8v0LTQtdC70LDQtdC8INC30LDQv9GA0L7RgVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29sdW1ucywgaGVhZGVyLCBwcm92aWRlciwgc29ydGFibGUsIGlzRmV0Y2hpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5maWx0ZXJ9XG5cbiAgICAgICAgICAgICAgICB7aXNGZXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlIGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGFibGUgY2VsbGVkIGNvbG9yPSd0ZWFsJyBzdHJpcGVkIHNvcnRhYmxlPXtzb3J0YWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXt0aGlzLnN0YXRlLmFjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLmdldFVuaXFLZXkoKX0vPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVGb290ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGFnaW5hdGU9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuIl19