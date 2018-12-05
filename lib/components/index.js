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
      _this.props.provider._navigate(_defineProperty({}, _this.props.filterNamePrefix, values), function (search) {
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
          rowOptions = _this$props2.rowOptions;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJmaWx0ZXJOYW1lUHJlZml4Iiwic2VhcmNoIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZldGNoIiwiZmlsdGVyIiwibmFtZSIsIml0ZW1zIiwiaGFuZGxlRmlsdGVyIiwiaW5pdGlhbFZhbHVlcyIsImdldFNlYXJjaFBhcmFtIiwiY29sdW1ucyIsImhlYWRlciIsInNvcnRhYmxlIiwiaXNGZXRjaGluZyIsInJvd09wdGlvbnMiLCJzdGF0ZSIsImdldFVuaXFLZXkiLCJsZW5ndGgiLCJoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQnFCQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUZBUVIsSTs7b0ZBRUQ7QUFBRUMsTUFBQUEsVUFBVSxFQUFFO0FBQWQsSzs7cUdBb0JpQixVQUFDQyxDQUFELFFBQXVCO0FBQUEsVUFBakJELFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFDNUMsVUFBSSxNQUFLRSxLQUFMLENBQVdDLFlBQWYsRUFBNkI7QUFDekIsY0FBS0QsS0FBTCxDQUFXQyxZQUFYLENBQXdCSCxVQUF4QjtBQUNIOztBQUNELFlBQUtFLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkMsYUFBcEIsQ0FBa0NMLFVBQWxDOztBQUNBLFlBQUtNLFFBQUwsQ0FBYztBQUFFTixRQUFBQSxVQUFVLEVBQVZBO0FBQUYsT0FBZDtBQUNILEs7OzJGQU9jLFVBQUNPLE1BQUQsRUFBU0MsVUFBVCxFQUF3QjtBQUNu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QnNCLEVBQUFBLE9BQU8sRUFBRSxFQURTO0FBRWxCRSxFQUFBQSxRQUFRLEVBQUUsS0FGUTtBQUdsQkMsRUFBQUEsVUFBVSxFQUFFLEtBSE07QUFJbEJkLEVBQUFBLGdCQUFnQixFQUFFO0FBSkEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBEaW1tZXIsXG4gICAgTG9hZGVyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vYm9keSdcbmltcG9ydCBUYWJsZUhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICcuL2Zvb3RlcidcbmltcG9ydCB7IGNyZWF0ZUZpbHRlckZvcm0gfSBmcm9tICcuL2ZpbHRlcnMnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tIFwiLi9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlclwiO1xuXG4vL3R5cGVzXG5pbXBvcnQge1xuICAgIENvbHVtblxufSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dFRhYmxlUHJvcHMge1xuICAgIGZpbHRlcjogeyBuYW1lOiBzdHJpbmcsIGl0ZW1zOiBbXSB9O1xuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyO1xuICAgIG9uUGFnZUNoYW5nZTogKChhY3RpdmVQYWdlOiBudW1iZXIpID0+IHZvaWQpO1xuICAgIGNvbHVtbnM6IENvbHVtbltdO1xuICAgIGhlYWRlcj86IHN0cmluZztcbiAgICBzb3J0YWJsZT86IGJvb2xlYW47XG4gICAgaXNGZXRjaGluZzogYm9vbGVhbjtcbiAgICBmaWx0ZXJOYW1lUHJlZml4OiBzdHJpbmc7XG4gICAgcm93T3B0aW9uczogeyBbIHByb3A6IHN0cmluZyBdOiBhbnk7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFeHRUYWJsZVByb3BzLCB7fT4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiAnZmlsdGVyJ1xuICAgIH07XG5cbiAgICBmaWx0ZXIgPSBudWxsO1xuXG4gICAgc3RhdGUgPSB7IGFjdGl2ZVBhZ2U6IDEgfTtcblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlciAmJiAhdGhpcy5maWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmlsdGVyLCBwcm92aWRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyID0gY3JlYXRlRmlsdGVyRm9ybSh7XG4gICAgICAgICAgICAgICAgbmFtZTogZmlsdGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IGZpbHRlci5pdGVtcyxcbiAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXI6IHRoaXMuaGFuZGxlRmlsdGVyLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IHByb3ZpZGVyLmdldFNlYXJjaFBhcmFtKHRoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeCwge30pLFxuICAgICAgICAgICAgICAgIGZpbHRlck5hbWVQcmVmaXg6IHRoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYWdpbmF0aW9uIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFjdGl2ZVBhZ2VcbiAgICAgKi9cbiAgICBoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKGUsIHsgYWN0aXZlUGFnZSB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UoYWN0aXZlUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5zZXRBY3RpdmVQYWdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlUGFnZSB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGF0YSBmaWx0ZXIgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWVsZE5hbWVzIGxpc3Qgb2YgcG9zc2libGUgZmlsdGVyIGZpZWxkIG5hbWVzXG4gICAgICovXG4gICAgaGFuZGxlRmlsdGVyID0gKHZhbHVlcywgZmllbGROYW1lcykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLl9uYXZpZ2F0ZSh7IFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdOiB2YWx1ZXMgfSwgKHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgZmllbGROYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWFyY2hbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLmZldGNoKCk7IC8vZG8gcmVxdWVzdFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29sdW1ucywgaGVhZGVyLCBwcm92aWRlciwgc29ydGFibGUsIGlzRmV0Y2hpbmcsIHJvd09wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5maWx0ZXJ9XG5cbiAgICAgICAgICAgICAgICB7aXNGZXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlIGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGFibGUgY2VsbGVkIGNvbG9yPSd0ZWFsJyBzdHJpcGVkIHNvcnRhYmxlPXtzb3J0YWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd09wdGlvbnM9e3Jvd09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17dGhpcy5zdGF0ZS5hY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm92aWRlci5nZXRVbmlxS2V5KCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlRm9vdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPXtjb2x1bW5zLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBhZ2luYXRlPXt0aGlzLmhhbmRsZVBhZ2luYXRpb25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==