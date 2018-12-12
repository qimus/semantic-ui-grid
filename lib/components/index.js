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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      var _this$props$provider$;

      _this.props.provider._navigate((_this$props$provider$ = {}, _defineProperty(_this$props$provider$, _this.props.filterNamePrefix, values), _defineProperty(_this$props$provider$, "page", 1), _this$props$provider$), function (search) {
        fieldNames.forEach(function (fieldName) {
          if (search[_this.props.filterNamePrefix]) {
            delete search[_this.props.filterNamePrefix][fieldName];
          }
        });
        return search;
      });

      _this.props.provider.fetch(); //do request

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
        this.filter = (0, _filters.createFilterForm)(_objectSpread({}, _filter, {
          handleFilter: this.handleFilter,
          initialValues: _provider.getSearchParam(this.props.filterNamePrefix, {}),
          filterNamePrefix: this.props.filterNamePrefix
        }));
      }
    }
    /**
     * Pagination handler
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
          isFetching = _this$props2.isFetching,
          rowOptions = _this$props2.rowOptions,
          emptyMessage = _this$props2.emptyMessage;
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
        emptyMessage: emptyMessage,
        rowOptions: rowOptions,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJmaWx0ZXJOYW1lUHJlZml4Iiwic2VhcmNoIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZldGNoIiwiZmlsdGVyIiwiaGFuZGxlRmlsdGVyIiwiaW5pdGlhbFZhbHVlcyIsImdldFNlYXJjaFBhcmFtIiwiY29sdW1ucyIsImhlYWRlciIsInNvcnRhYmxlIiwiaXNGZXRjaGluZyIsInJvd09wdGlvbnMiLCJlbXB0eU1lc3NhZ2UiLCJzdGF0ZSIsImdldFVuaXFLZXkiLCJsZW5ndGgiLCJoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCcUJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRkFRUixJOztvRkFFRDtBQUFFQyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLOztxR0FtQmlCLFVBQUNDLENBQUQsUUFBdUI7QUFBQSxVQUFqQkQsVUFBaUIsUUFBakJBLFVBQWlCOztBQUM1QyxVQUFJLE1BQUtFLEtBQUwsQ0FBV0MsWUFBZixFQUE2QjtBQUN6QixjQUFLRCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JILFVBQXhCO0FBQ0g7O0FBQ0QsWUFBS0UsS0FBTCxDQUFXRSxRQUFYLENBQW9CQyxhQUFwQixDQUFrQ0wsVUFBbEM7O0FBQ0EsWUFBS00sUUFBTCxDQUFjO0FBQUVOLFFBQUFBLFVBQVUsRUFBVkE7QUFBRixPQUFkO0FBQ0gsSzs7MkZBT2MsVUFBQ08sTUFBRCxFQUFTQyxVQUFULEVBQXdCO0FB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QUFBQSxPQUFPLEVBQUUsRUFEUztBQUVsQkUsRUFBQUEsUUFBUSxFQUFFLEtBRlE7QUFHbEJDLEVBQUFBLFVBQVUsRUFBRSxLQUhNO0FBSWxCWixFQUFBQSxnQkFBZ0IsRUFBRTtBQUpBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgRGltbWVyLFxuICAgIExvYWRlclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL2JvZHknXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9mb290ZXInXG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXJGb3JtIH0gZnJvbSAnLi9maWx0ZXJzJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSBcIi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXJcIjtcblxuLy90eXBlc1xuaW1wb3J0IHtcbiAgICBDb2x1bW5cbn0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBFeHRUYWJsZVByb3BzIHtcbiAgICBmaWx0ZXI6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogW10gfTtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcjtcbiAgICBvblBhZ2VDaGFuZ2U6ICgoYWN0aXZlUGFnZTogbnVtYmVyKSA9PiB2b2lkKTtcbiAgICBjb2x1bW5zOiBDb2x1bW5bXTtcbiAgICBoZWFkZXI/OiBzdHJpbmc7XG4gICAgc29ydGFibGU/OiBib29sZWFuO1xuICAgIGlzRmV0Y2hpbmc6IGJvb2xlYW47XG4gICAgZmlsdGVyTmFtZVByZWZpeDogc3RyaW5nO1xuICAgIHJvd09wdGlvbnM6IHsgWyBwcm9wOiBzdHJpbmcgXTogYW55O31cbiAgICBlbXB0eU1lc3NhZ2U6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXh0VGFibGVQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgZmlsdGVyTmFtZVByZWZpeDogJ2ZpbHRlcidcbiAgICB9O1xuXG4gICAgZmlsdGVyID0gbnVsbDtcblxuICAgIHN0YXRlID0geyBhY3RpdmVQYWdlOiAxIH07XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgIXRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbHRlciwgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9IGNyZWF0ZUZpbHRlckZvcm0oe1xuICAgICAgICAgICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXI6IHRoaXMuaGFuZGxlRmlsdGVyLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IHByb3ZpZGVyLmdldFNlYXJjaFBhcmFtKHRoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeCwge30pLFxuICAgICAgICAgICAgICAgIGZpbHRlck5hbWVQcmVmaXg6IHRoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYWdpbmF0aW9uIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFjdGl2ZVBhZ2VcbiAgICAgKi9cbiAgICBoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKGUsIHsgYWN0aXZlUGFnZSB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UoYWN0aXZlUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5zZXRBY3RpdmVQYWdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlUGFnZSB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGF0YSBmaWx0ZXIgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWVsZE5hbWVzIGxpc3Qgb2YgcG9zc2libGUgZmlsdGVyIGZpZWxkIG5hbWVzXG4gICAgICovXG4gICAgaGFuZGxlRmlsdGVyID0gKHZhbHVlcywgZmllbGROYW1lcykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLl9uYXZpZ2F0ZSh7IFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdOiB2YWx1ZXMsIHBhZ2U6IDEgfSwgKHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgZmllbGROYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWFyY2hbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLmZldGNoKCk7IC8vZG8gcmVxdWVzdFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29sdW1ucywgaGVhZGVyLCBwcm92aWRlciwgc29ydGFibGUsIGlzRmV0Y2hpbmcsIHJvd09wdGlvbnMsIGVtcHR5TWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHt0aGlzLmZpbHRlcn1cblxuICAgICAgICAgICAgICAgIHtpc0ZldGNoaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmUgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxUYWJsZSBjZWxsZWQgY29sb3I9J3RlYWwnIHN0cmlwZWQgc29ydGFibGU9e3NvcnRhYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlPXtlbXB0eU1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dPcHRpb25zPXtyb3dPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e3RoaXMuc3RhdGUuYWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvdmlkZXIuZ2V0VW5pcUtleSgpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUZvb3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17Y29sdW1ucy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQYWdpbmF0ZT17dGhpcy5oYW5kbGVQYWdpbmF0aW9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=