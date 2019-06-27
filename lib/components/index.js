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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activePage: 1,
      filter: null,
      filterForm: null
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
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.filter !== prevProps.filter) {
        if (this.props.filter) {
          var _this$props = this.props,
              _filter = _this$props.filter,
              _provider = _this$props.provider;
          this.setState({
            filter: (0, _filters.createFilterForm)(_objectSpread({}, _filter, {
              handleFilter: this.handleFilter,
              initialValues: _provider.getSearchParam(this.props.filterNamePrefix, {}),
              filterNamePrefix: this.props.filterNamePrefix
            }))
          });
        } else {
          this.setState({
            filter: null
          });
        }
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
      return React.createElement(React.Fragment, null, this.state.filter, isFetching && React.createElement(_semanticUiReact.Dimmer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJmaWx0ZXIiLCJmaWx0ZXJGb3JtIiwiZSIsInByb3BzIiwib25QYWdlQ2hhbmdlIiwicHJvdmlkZXIiLCJzZXRBY3RpdmVQYWdlIiwic2V0U3RhdGUiLCJ2YWx1ZXMiLCJmaWVsZE5hbWVzIiwiX25hdmlnYXRlIiwiZmlsdGVyTmFtZVByZWZpeCIsInNlYXJjaCIsImZvckVhY2giLCJmaWVsZE5hbWUiLCJmZXRjaCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiaGFuZGxlRmlsdGVyIiwiaW5pdGlhbFZhbHVlcyIsImdldFNlYXJjaFBhcmFtIiwiY29sdW1ucyIsImhlYWRlciIsInNvcnRhYmxlIiwiaXNGZXRjaGluZyIsInJvd09wdGlvbnMiLCJlbXB0eU1lc3NhZ2UiLCJleHRyYSIsInN0YXRlIiwiZ2V0VW5pcUtleSIsImxlbmd0aCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JxQkEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29GQVFUO0FBQUVDLE1BQUFBLFVBQVUsRUFBRSxDQUFkO0FBQWlCQyxNQUFBQSxNQUFNLEVBQUUsSUFBekI7QUFBK0JDLE1BQUFBLFVBQVUsRUFBRTtBQUEzQyxLOztxR0EyQmlCLFVBQUNDLENBQUQsUUFBdUI7QUFBQSxVQUFqQkgsVUFBaUIsUUFBakJBLFVBQWlCOztBQUM1QyxVQUFJLE1BQUtJLEtBQUwsQ0FBV0MsWUFBZixFQUE2QjtBQUN6QixjQUFLRCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JMLFVBQXhCO0FBQ0g7O0FBQ0QsWUFBS0ksS0FBTCxDQUFXRSxRQUFYLENBQW9CQyxhQUFwQixDQUFrQ1As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LFVBRmhCO0FBR0ksUUFBQSxRQUFRLEVBQUVyQixRQUhkO0FBSUksUUFBQSxPQUFPLEVBQUVpQixPQUpiO0FBS0ksUUFBQSxLQUFLLEVBQUVNLEtBTFg7QUFNSSxRQUFBLFVBQVUsRUFBRSxLQUFLQyxLQUFMLENBQVc5QixVQU4zQjtBQU9JLFFBQUEsR0FBRyxFQUFFTSxRQUFRLENBQUN5QixVQUFUO0FBUFQsUUFOSixFQWNJLG9CQUFDLGVBQUQ7QUFDSSxRQUFBLE9BQU8sRUFBRVIsT0FBTyxDQUFDUyxNQURyQjtBQUVJLFFBQUEsUUFBUSxFQUFFMUIsUUFGZDtBQUdJLFFBQUEsY0FBYyxFQUFFLEtBQUsyQjtBQUh6QixRQWRKLENBVEosQ0FESjtBQStCSDs7OztFQWhHaUNDLEtBQUssQ0FBQ0MsUzs7OztnQkFBdkJwQyxRLGtCQUNLO0FBQ2xCd0IsRUFBQUEsT0FBTyxFQUFFLEVBRFM7QUFFbEJFLEVBQUFBLFFBQVEsRUFBRSxLQUZRO0FBR2xCQyxFQUFBQSxVQUFVLEVBQUUsS0FITTtBQUlsQmQsRUFBQUEsZ0JBQWdCLEVBQUU7QUFKQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRhYmxlLFxuICAgIERpbW1lcixcbiAgICBMb2FkZXJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnLi9ib2R5J1xuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xuaW1wb3J0IHsgY3JlYXRlRmlsdGVyRm9ybSB9IGZyb20gJy4vZmlsdGVycydcbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gXCIuL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyXCI7XG5cbi8vdHlwZXNcbmltcG9ydCB7XG4gICAgQ29sdW1uXG59IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0VGFibGVQcm9wcyB7XG4gICAgZmlsdGVyOiB7IG5hbWU6IHN0cmluZywgaXRlbXM6IFtdIH07XG4gICAgcHJvdmlkZXI6IEFic3RyYWN0UHJvdmlkZXI7XG4gICAgb25QYWdlQ2hhbmdlOiAoKGFjdGl2ZVBhZ2U6IG51bWJlcikgPT4gdm9pZCk7XG4gICAgY29sdW1uczogQ29sdW1uW107XG4gICAgaGVhZGVyPzogc3RyaW5nO1xuICAgIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgICBpc0ZldGNoaW5nOiBib29sZWFuO1xuICAgIGZpbHRlck5hbWVQcmVmaXg6IHN0cmluZztcbiAgICByb3dPcHRpb25zOiB7IFsgcHJvcDogc3RyaW5nIF06IGFueTt9O1xuICAgIGVtcHR5TWVzc2FnZTogYW55O1xuICAgIGV4dHJhOiB7IFsgcHJvcDogc3RyaW5nIF06IGFueTt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFeHRUYWJsZVByb3BzLCB7fT4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiAnZmlsdGVyJ1xuICAgIH07XG5cbiAgICBzdGF0ZSA9IHsgYWN0aXZlUGFnZTogMSwgZmlsdGVyOiBudWxsLCBmaWx0ZXJGb3JtOiBudWxsIH07XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBSZWFkb25seTxFeHRUYWJsZVByb3BzPiwgcHJldlN0YXRlLCBzbmFwc2hvdD86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgIT09IHByZXZQcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZmlsdGVyLCBwcm92aWRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBjcmVhdGVGaWx0ZXJGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlcjogdGhpcy5oYW5kbGVGaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBwcm92aWRlci5nZXRTZWFyY2hQYXJhbSh0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXgsIHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck5hbWVQcmVmaXg6IHRoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBudWxsLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYWdpbmF0aW9uIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFjdGl2ZVBhZ2VcbiAgICAgKi9cbiAgICBoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKGUsIHsgYWN0aXZlUGFnZSB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UoYWN0aXZlUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5zZXRBY3RpdmVQYWdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlUGFnZSB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGF0YSBmaWx0ZXIgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWVsZE5hbWVzIGxpc3Qgb2YgcG9zc2libGUgZmlsdGVyIGZpZWxkIG5hbWVzXG4gICAgICovXG4gICAgaGFuZGxlRmlsdGVyID0gKHZhbHVlcywgZmllbGROYW1lcykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLl9uYXZpZ2F0ZSh7IFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdOiB2YWx1ZXMsIHBhZ2U6IDEgfSwgKHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgZmllbGROYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWFyY2hbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLmZldGNoKCk7IC8vZG8gcmVxdWVzdFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29sdW1ucywgaGVhZGVyLCBwcm92aWRlciwgc29ydGFibGUsIGlzRmV0Y2hpbmcsIHJvd09wdGlvbnMsIGVtcHR5TWVzc2FnZSwgZXh0cmEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maWx0ZXJ9XG5cbiAgICAgICAgICAgICAgICB7aXNGZXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlIGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGFibGUgY2VsbGVkIGNvbG9yPSd0ZWFsJyBzdHJpcGVkIHNvcnRhYmxlPXtzb3J0YWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXtleHRyYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZT17ZW1wdHlNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93T3B0aW9ucz17cm93T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17ZXh0cmF9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXt0aGlzLnN0YXRlLmFjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLmdldFVuaXFLZXkoKX0vPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVGb290ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGFnaW5hdGU9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuIl19