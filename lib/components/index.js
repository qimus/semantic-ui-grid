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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJmaWx0ZXJOYW1lUHJlZml4Iiwic2VhcmNoIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZldGNoIiwiZmlsdGVyIiwibmFtZSIsIml0ZW1zIiwiaGFuZGxlRmlsdGVyIiwiaW5pdGlhbFZhbHVlcyIsImdldFNlYXJjaFBhcmFtIiwiY29sdW1ucyIsImhlYWRlciIsInNvcnRhYmxlIiwiaXNGZXRjaGluZyIsInJvd09wdGlvbnMiLCJlbXB0eU1lc3NhZ2UiLCJzdGF0ZSIsImdldFVuaXFLZXkiLCJsZW5ndGgiLCJoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQnFCQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUZBUVIsSTs7b0ZBRUQ7QUFBRUMsTUFBQUEsVUFBVSxFQUFFO0FBQWQsSzs7cUdBb0JpQixVQUFDQyxDQUFELFFBQXVCO0FBQUEsVUFBakJELFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFDNUMsVUFBSSxNQUFLRSxLQUFMLENBQVdDLFlBQWYsRUFBNkI7QUFDekIsY0FBS0QsS0FBTCxDQUFXQyxZQUFYLENBQXdCSCxVQUF4QjtBQUNIOztBQUNELFlBQUtFLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkMsYUFBcEIsQ0FBa0NMLFVBQWxDOztBQUNBLFlBQUtNLFFBQUwsQ0FBYztBQUFFTixRQUFBQSxVQUFVLEVBQVZBO0FBQUYsT0FBZDtBQUNILEs7OzJGQU9jLFVBQUNPLE1BQUQsRUFBU0Ms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QSxjQUFjLEVBQUUsS0FBSzBCO0FBSHpCLFFBWkosQ0FUSixDQURKO0FBNkJIOzs7O0VBekZpQ0MsS0FBSyxDQUFDQyxTOzs7O2dCQUF2QmpDLFEsa0JBQ0s7QUFDbEJzQixFQUFBQSxPQUFPLEVBQUUsRUFEUztBQUVsQkUsRUFBQUEsUUFBUSxFQUFFLEtBRlE7QUFHbEJDLEVBQUFBLFVBQVUsRUFBRSxLQUhNO0FBSWxCZCxFQUFBQSxnQkFBZ0IsRUFBRTtBQUpBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgRGltbWVyLFxuICAgIExvYWRlclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL2JvZHknXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9mb290ZXInXG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXJGb3JtIH0gZnJvbSAnLi9maWx0ZXJzJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSBcIi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXJcIjtcblxuLy90eXBlc1xuaW1wb3J0IHtcbiAgICBDb2x1bW5cbn0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBFeHRUYWJsZVByb3BzIHtcbiAgICBmaWx0ZXI6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogW10gfTtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcjtcbiAgICBvblBhZ2VDaGFuZ2U6ICgoYWN0aXZlUGFnZTogbnVtYmVyKSA9PiB2b2lkKTtcbiAgICBjb2x1bW5zOiBDb2x1bW5bXTtcbiAgICBoZWFkZXI/OiBzdHJpbmc7XG4gICAgc29ydGFibGU/OiBib29sZWFuO1xuICAgIGlzRmV0Y2hpbmc6IGJvb2xlYW47XG4gICAgZmlsdGVyTmFtZVByZWZpeDogc3RyaW5nO1xuICAgIHJvd09wdGlvbnM6IHsgWyBwcm9wOiBzdHJpbmcgXTogYW55O31cbiAgICBlbXB0eU1lc3NhZ2U6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXh0VGFibGVQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgZmlsdGVyTmFtZVByZWZpeDogJ2ZpbHRlcidcbiAgICB9O1xuXG4gICAgZmlsdGVyID0gbnVsbDtcblxuICAgIHN0YXRlID0geyBhY3RpdmVQYWdlOiAxIH07XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgIXRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbHRlciwgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9IGNyZWF0ZUZpbHRlckZvcm0oe1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbHRlci5uYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaWx0ZXIuaXRlbXMsXG4gICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyOiB0aGlzLmhhbmRsZUZpbHRlcixcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBwcm92aWRlci5nZXRTZWFyY2hQYXJhbSh0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXgsIHt9KSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiB0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFnaW5hdGlvbiBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhY3RpdmVQYWdlXG4gICAgICovXG4gICAgaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSA9IChlLCB7IGFjdGl2ZVBhZ2UgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuc2V0QWN0aXZlUGFnZShhY3RpdmVQYWdlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVBhZ2UgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERhdGEgZmlsdGVyIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmllbGROYW1lcyBsaXN0IG9mIHBvc3NpYmxlIGZpbHRlciBmaWVsZCBuYW1lc1xuICAgICAqL1xuICAgIGhhbmRsZUZpbHRlciA9ICh2YWx1ZXMsIGZpZWxkTmFtZXMpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5fbmF2aWdhdGUoeyBbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XTogdmFsdWVzLCBwYWdlOiAxIH0sIChzZWFyY2gpID0+IHtcbiAgICAgICAgICAgIGZpZWxkTmFtZXMuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VhcmNoW3RoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeF1bZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5mZXRjaCgpOyAvL2RvIHJlcXVlc3RcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbHVtbnMsIGhlYWRlciwgcHJvdmlkZXIsIHNvcnRhYmxlLCBpc0ZldGNoaW5nLCByb3dPcHRpb25zLCBlbXB0eU1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5maWx0ZXJ9XG5cbiAgICAgICAgICAgICAgICB7aXNGZXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlIGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGFibGUgY2VsbGVkIGNvbG9yPSd0ZWFsJyBzdHJpcGVkIHNvcnRhYmxlPXtzb3J0YWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZT17ZW1wdHlNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93T3B0aW9ucz17cm93T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXt0aGlzLnN0YXRlLmFjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLmdldFVuaXFLZXkoKX0vPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVGb290ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGFnaW5hdGU9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuIl19