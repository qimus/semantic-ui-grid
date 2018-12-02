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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJmaWx0ZXJOYW1lUHJlZml4Iiwic2VhcmNoIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZldGNoIiwiZmlsdGVyIiwibmFtZSIsIml0ZW1zIiwiaGFuZGxlRmlsdGVyIiwiaW5pdGlhbFZhbHVlcyIsImdldFNlYXJjaFBhcmFtIiwiY29sdW1ucyIsImhlYWRlciIsInNvcnRhYmxlIiwiaXNGZXRjaGluZyIsInN0YXRlIiwiZ2V0VW5pcUtleSIsImxlbmd0aCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CcUJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRkFRUixJOztvRkFFRDtBQUFFQyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLOztxR0FvQmlCLFVBQUNDLENBQUQsUUFBdUI7QUFBQSxVQUFqQkQsVUFBaUIsUUFBakJBLFVBQWlCOztBQUM1QyxVQUFJLE1BQUtFLEtBQUwsQ0FBV0MsWUFBZixFQUE2QjtBQUN6QixjQUFLRCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JILFVBQXhCO0FBQ0g7O0FBQ0QsWUFBS0UsS0FBTCxDQUFXRSxRQUFYLENBQW9CQyxhQUFwQixDQUFrQ0wsVUFBbEM7O0FBQ0EsWUFBS00sUUFBTCxDQUFjO0FBQUVOLFFBQUFBLFVBQVUsRUFBVkE7QUFBRixPQUFkO0FBQ0gsSzs7MkZBT2MsVUFBQ08sTUFBRCxFQUFTQyxVQUFULEVBQXdCO0FBQ25DLFlBQUtOLEtBQUws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QUFFLEtBSE07QUFJbEJkLEVBQUFBLGdCQUFnQixFQUFFO0FBSkEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBEaW1tZXIsXG4gICAgTG9hZGVyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vYm9keSdcbmltcG9ydCBUYWJsZUhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICcuL2Zvb3RlcidcbmltcG9ydCB7IGNyZWF0ZUZpbHRlckZvcm0gfSBmcm9tICcuL2ZpbHRlcnMnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tIFwiLi9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlclwiO1xuXG4vL3R5cGVzXG5pbXBvcnQge1xuICAgIENvbHVtblxufSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dFRhYmxlUHJvcHMge1xuICAgIGZpbHRlcjogeyBuYW1lOiBzdHJpbmcsIGl0ZW1zOiBbXSB9O1xuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyO1xuICAgIG9uUGFnZUNoYW5nZTogKChhY3RpdmVQYWdlOiBudW1iZXIpID0+IHZvaWQpO1xuICAgIGNvbHVtbnM6IENvbHVtbltdO1xuICAgIGhlYWRlcj86IHN0cmluZztcbiAgICBzb3J0YWJsZT86IGJvb2xlYW47XG4gICAgaXNGZXRjaGluZzogYm9vbGVhbjtcbiAgICBmaWx0ZXJOYW1lUHJlZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEV4dFRhYmxlUHJvcHMsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29sdW1uczogW10sXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGZpbHRlck5hbWVQcmVmaXg6ICdmaWx0ZXInXG4gICAgfTtcblxuICAgIGZpbHRlciA9IG51bGw7XG5cbiAgICBzdGF0ZSA9IHsgYWN0aXZlUGFnZTogMSB9O1xuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyICYmICF0aGlzLmZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgeyBmaWx0ZXIsIHByb3ZpZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSBjcmVhdGVGaWx0ZXJGb3JtKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWx0ZXIubmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtczogZmlsdGVyLml0ZW1zLFxuICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlcjogdGhpcy5oYW5kbGVGaWx0ZXIsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlczogcHJvdmlkZXIuZ2V0U2VhcmNoUGFyYW0odGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4LCB7fSksXG4gICAgICAgICAgICAgICAgZmlsdGVyTmFtZVByZWZpeDogdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhZ2luYXRpb24gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYWN0aXZlUGFnZVxuICAgICAqL1xuICAgIGhhbmRsZVBhZ2luYXRpb25DaGFuZ2UgPSAoZSwgeyBhY3RpdmVQYWdlIH0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZShhY3RpdmVQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLnNldEFjdGl2ZVBhZ2UoYWN0aXZlUGFnZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVQYWdlIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEYXRhIGZpbHRlciBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpZWxkTmFtZXMgbGlzdCBvZiBwb3NzaWJsZSBmaWx0ZXIgZmllbGQgbmFtZXNcbiAgICAgKi9cbiAgICBoYW5kbGVGaWx0ZXIgPSAodmFsdWVzLCBmaWVsZE5hbWVzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuX25hdmlnYXRlKHsgW3RoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeF06IHZhbHVlcyB9LCAoc2VhcmNoKSA9PiB7XG4gICAgICAgICAgICBmaWVsZE5hbWVzLmZvckVhY2goZmllbGROYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoW3RoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlYXJjaFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2g7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuZmV0Y2goKTsgLy9kbyByZXF1ZXN0XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb2x1bW5zLCBoZWFkZXIsIHByb3ZpZGVyLCBzb3J0YWJsZSwgaXNGZXRjaGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHt0aGlzLmZpbHRlcn1cblxuICAgICAgICAgICAgICAgIHtpc0ZldGNoaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmUgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxUYWJsZSBjZWxsZWQgY29sb3I9J3RlYWwnIHN0cmlwZWQgc29ydGFibGU9e3NvcnRhYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e3RoaXMuc3RhdGUuYWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvdmlkZXIuZ2V0VW5pcUtleSgpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUZvb3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17Y29sdW1ucy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQYWdpbmF0ZT17dGhpcy5oYW5kbGVQYWdpbmF0aW9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=