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
          emptyMessage = _this$props2.emptyMessage,
          extra = _this$props2.extra;
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
        extra: extra,
        provider: provider,
        header: header
      }), React.createElement(_body.default, {
        emptyMessage: emptyMessage,
        rowOptions: rowOptions,
        provider: provider,
        columns: columns,
        extra: extra,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJmaWx0ZXJOYW1lUHJlZml4Iiwic2VhcmNoIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZldGNoIiwiZmlsdGVyIiwiaGFuZGxlRmlsdGVyIiwiaW5pdGlhbFZhbHVlcyIsImdldFNlYXJjaFBhcmFtIiwiY29sdW1ucyIsImhlYWRlciIsInNvcnRhYmxlIiwiaXNGZXRjaGluZyIsInJvd09wdGlvbnMiLCJlbXB0eU1lc3NhZ2UiLCJleHRyYSIsInN0YXRlIiwiZ2V0VW5pcUtleSIsImxlbmd0aCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JxQkEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FGQVFSLEk7O29GQUVEO0FBQUVDLE1BQUFBLFVBQVUsRUFBRTtBQUFkLEs7O3FHQW1CaUIsVUFBQ0MsQ0FBRCxRQUF1QjtBQUFBLFVBQWpCRCxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQzVDLFVBQUksTUFBS0UsS0FBTCxDQUFXQyxZQUFmLEVBQTZCO0FBQ3pCLGNBQUtELEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkgsVUFBeEI7QUFDSDs7QUFDRCxZQUFLRSxLQUFMLENBQVdFLFFBQVgsQ0FBb0JDLGFBQXBCLENBQWtDTCxVQUFsQzs7QUFDQSxZQUFLTSxRQUFMLENBQWM7QUFBRU4sUUFBQUEsVUFBVSxFQUFWQTtBQUFGLE9BQWQ7QUFDSCxLOzsyRkFPYyxVQUFDTyxNQUFELEVBQVNDLFVBQVQs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LEVBQUUsS0FBS3lCO0FBSHpCLFFBZEosQ0FUSixDQURKO0FBK0JIOzs7O0VBMUZpQ0MsS0FBSyxDQUFDQyxTOzs7O2dCQUF2QmhDLFEsa0JBQ0s7QUFDbEJvQixFQUFBQSxPQUFPLEVBQUUsRUFEUztBQUVsQkUsRUFBQUEsUUFBUSxFQUFFLEtBRlE7QUFHbEJDLEVBQUFBLFVBQVUsRUFBRSxLQUhNO0FBSWxCWixFQUFBQSxnQkFBZ0IsRUFBRTtBQUpBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgRGltbWVyLFxuICAgIExvYWRlclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL2JvZHknXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9mb290ZXInXG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXJGb3JtIH0gZnJvbSAnLi9maWx0ZXJzJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSBcIi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXJcIjtcblxuLy90eXBlc1xuaW1wb3J0IHtcbiAgICBDb2x1bW5cbn0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBFeHRUYWJsZVByb3BzIHtcbiAgICBmaWx0ZXI6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogW10gfTtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcjtcbiAgICBvblBhZ2VDaGFuZ2U6ICgoYWN0aXZlUGFnZTogbnVtYmVyKSA9PiB2b2lkKTtcbiAgICBjb2x1bW5zOiBDb2x1bW5bXTtcbiAgICBoZWFkZXI/OiBzdHJpbmc7XG4gICAgc29ydGFibGU/OiBib29sZWFuO1xuICAgIGlzRmV0Y2hpbmc6IGJvb2xlYW47XG4gICAgZmlsdGVyTmFtZVByZWZpeDogc3RyaW5nO1xuICAgIHJvd09wdGlvbnM6IHsgWyBwcm9wOiBzdHJpbmcgXTogYW55O307XG4gICAgZW1wdHlNZXNzYWdlOiBhbnk7XG4gICAgZXh0cmE6IHsgWyBwcm9wOiBzdHJpbmcgXTogYW55O307XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEV4dFRhYmxlUHJvcHMsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29sdW1uczogW10sXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGZpbHRlck5hbWVQcmVmaXg6ICdmaWx0ZXInXG4gICAgfTtcblxuICAgIGZpbHRlciA9IG51bGw7XG5cbiAgICBzdGF0ZSA9IHsgYWN0aXZlUGFnZTogMSB9O1xuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyICYmICF0aGlzLmZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgeyBmaWx0ZXIsIHByb3ZpZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSBjcmVhdGVGaWx0ZXJGb3JtKHtcbiAgICAgICAgICAgICAgICAuLi5maWx0ZXIsXG4gICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyOiB0aGlzLmhhbmRsZUZpbHRlcixcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBwcm92aWRlci5nZXRTZWFyY2hQYXJhbSh0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXgsIHt9KSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiB0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFnaW5hdGlvbiBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhY3RpdmVQYWdlXG4gICAgICovXG4gICAgaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSA9IChlLCB7IGFjdGl2ZVBhZ2UgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuc2V0QWN0aXZlUGFnZShhY3RpdmVQYWdlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVBhZ2UgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERhdGEgZmlsdGVyIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmllbGROYW1lcyBsaXN0IG9mIHBvc3NpYmxlIGZpbHRlciBmaWVsZCBuYW1lc1xuICAgICAqL1xuICAgIGhhbmRsZUZpbHRlciA9ICh2YWx1ZXMsIGZpZWxkTmFtZXMpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5fbmF2aWdhdGUoeyBbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XTogdmFsdWVzLCBwYWdlOiAxIH0sIChzZWFyY2gpID0+IHtcbiAgICAgICAgICAgIGZpZWxkTmFtZXMuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VhcmNoW3RoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeF1bZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5mZXRjaCgpOyAvL2RvIHJlcXVlc3RcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbHVtbnMsIGhlYWRlciwgcHJvdmlkZXIsIHNvcnRhYmxlLCBpc0ZldGNoaW5nLCByb3dPcHRpb25zLCBlbXB0eU1lc3NhZ2UsIGV4dHJhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMuZmlsdGVyfVxuXG4gICAgICAgICAgICAgICAge2lzRmV0Y2hpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZSBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxuICAgICAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPFRhYmxlIGNlbGxlZCBjb2xvcj0ndGVhbCcgc3RyaXBlZCBzb3J0YWJsZT17c29ydGFibGV9PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17ZXh0cmF9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlcn0vPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2U9e2VtcHR5TWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd09wdGlvbnM9e3Jvd09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e2V4dHJhfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17dGhpcy5zdGF0ZS5hY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm92aWRlci5nZXRVbmlxS2V5KCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlRm9vdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPXtjb2x1bW5zLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBhZ2luYXRlPXt0aGlzLmhhbmRsZVBhZ2luYXRpb25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==