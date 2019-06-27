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
      filter: null
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
      if (this.props.filter && this.props.filter !== prevState.filter) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJmaWx0ZXIiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJmaWx0ZXJOYW1lUHJlZml4Iiwic2VhcmNoIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZldGNoIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJoYW5kbGVGaWx0ZXIiLCJpbml0aWFsVmFsdWVzIiwiZ2V0U2VhcmNoUGFyYW0iLCJjb2x1bW5zIiwiaGVhZGVyIiwic29ydGFibGUiLCJpc0ZldGNoaW5nIiwicm93T3B0aW9ucyIsImVtcHR5TWVzc2FnZSIsImV4dHJhIiwic3RhdGUiLCJnZXRVbmlxS2V5IiwibGVuZ3RoIiwiaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQnFCQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0ZBUVQ7QUFBRUMsTUFBQUEsVUFBVSxFQUFFLENBQWQ7QUFBaUJDLE1BQUFBLE1BQU0sRUFBRTtBQUF6QixLOztxR0FxQmlCLFVBQUNDLENBQUQsUUFBdUI7QUFBQSxVQUFqQkYsVUFBaUIsUUFBakJBLFVBQWlCOztBQUM1QyxVQUFJLE1BQUtHLEtBQUwsQ0FBV0MsWUFBZixFQUE2QjtBQUN6QixjQUFLRCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JKLFVBQXhCO0FBQ0g7O0FBQ0QsWUFBS0csS0FBTCxDQUFXRSxRQUFYLENBQW9CQyxhQUFwQixDQUFrQ04sVUFBbEM7O0FBQ0EsWUFBS08sUUFBTCxDQUFjO0FBQUVQLFFBQUFBLFVBQVUsRUFBVkE7QUFBRixPQUFkO0FBQ0gsSzs7MkZBT2MsVUFBQ1EsTUFBRCxFQUFTQyxVQUFULEVBQXdCO0FBQUE7O0FBQ25DLFlBQUtOLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkssU0FBcEIscUVBQWlDLE1BQUtQLEtBQUwsQ0FBV1EsZ0JBQTVDLEVBQStESCxNQUEvRCxrREFBNkUsQ0FBN0UsMkJBQWtGLFVBQUNJLE1BQUQsRUFBWTtBQUMxRkgsUUFBQUEsVUFBVSxDQUFDSSxPQUFYLENBQW1CLFVBQUFDLFNBQVMsRUFBSTtBQUM1QixjQUFJRixNQUFNLENBQUMsTUFBS1QsS0FBTCxDQUFXUSxnQkFBWixDQUFWLEVBQXlDO0FBQ3JDLG1CQUFPQyxNQUFNLENBQUMsTUFBS1QsS0FBTCxDQUFXUSxnQkFBWixDQUFOLENBQW9DRyxTQUFwQyxDQUFQO0FBQ0g7QUFDSixTQUpEO0FBTUEsZUFBT0YsTUFBUDtBQUNILE9BUkQ7O0FBVUEsWUFBS1QsS0FBTCxDQUFXRSxRQUFYLENBQW9CVSxLQUFwQixHQVhtQyxDQVdOOztBQUNoQyxLOzs7Ozs7O3VDQTVDa0JDLFMsRUFBb0NDLFMsRUFBV0MsUSxFQUFzQjtBQUNwRixVQUFJLEtBQUtmLEtBQUwsQ0FBV0YsTUFBWCxJQUFxQixLQUFLRSxLQUFMLENBQVdGLE1BQVgsS0FBc0JnQixTQUFTLENBQUNoQixNQUF6RCxFQUFpRTtBQUFBLDBCQUNoQyxLQUFLRSxLQUQyQjtBQUFBLFlBQ3JERixPQURxRCxlQUNyREEsTUFEcUQ7QUFBQSxZQUM3Q0ksU0FENkMsZUFDN0NBLFFBRDZDO0FBRTdELGFBQUtFLFFBQUwsQ0FBYztBQUNWTixVQUFBQSxNQUFNLEVBQUUsaURBQ0RBLE9BREM7QUFFSmtCLFlBQUFBLFlBQVksRUFBRSxLQUFLQSxZQUZmO0FBR0pDLFlBQUFBLGFBQWEsRUFBRWYsU0FBUSxDQUFDZ0IsY0FBVCxDQUF3QixLQUFLbEIsS0FBTCxDQUFXUSxnQkFBbkMsRUFBcUQsRUFBckQsQ0FIWDtBQUlKQSxZQUFBQSxnQkFBZ0IsRUFBRSxLQUFLUixLQUFMLENBQVdRO0FBSnpCO0FBREUsU0FBZDtBQVFIO0FBQ0o7QUFFRDs7Ozs7Ozs7NkJBZ0NTO0FBQUEseUJBQ3dGLEtBQUtSLEtBRDdGO0FBQUEsVUFDR21CLE9BREgsZ0JBQ0dBLE9BREg7QUFBQSxVQUNZQyxNQURaLGdCQUNZQSxNQURaO0FBQUEsVUFDb0JsQixRQURwQixnQkFDb0JBLFFBRHBCO0FBQUEsVUFDOEJtQixRQUQ5QixnQkFDOEJBLFFBRDlCO0FBQUEsVUFDd0NDLFVBRHhDLGdCQUN3Q0EsVUFEeEM7QUFBQSxVQUNvREMsVUFEcEQsZ0JBQ29EQSxVQURwRDtBQUFBLFVBQ2dFQyxZQURoRSxnQkFDZ0VBLFlBRGhFO0FBQUEsVUFDOEVDLEtBRDlFLGdCQUM4RUEsS0FEOUU7QUFHTCxhQUNJLG9CQUFDLEtBQUQsQ0FBTyxRQUFQLFFBQ0ssS0FBS0MsS0FBTCxDQUFXNUIsTUFEaEIsRUFHS3dCLFVBQVUsSUFDUCxvQkFBQyx1QkFBRDtBQUFRLFFBQUEsTUFBTSxNQUFkO0FBQWUsUUFBQSxRQUFRO0FBQXZCLFNBQ0ksb0JBQUMsdUJBQUQsT0FESixDQUpSLEVBU0ksb0JBQUMsc0JBQUQ7QUFBTyxRQUFBLE1BQU0sTUFBYjtBQUFjLFFBQUEsS0FBSyxFQUFDLE1BQXBCO0FBQTJCLFFBQUEsT0FBTyxNQUFsQztBQUFtQyxRQUFBLFFBQVEsRUFBRUQ7QUFBN0MsU0FDSSxvQkFBQyxlQUFEO0FBQ0ksUUFBQSxPQUFPLEVBQUVGLE9BRGI7QUFFSSxRQUFBLEtBQUssRUFBRU0sS0FGWDtBQUdJLFFBQUEsUUFBUSxFQUFFdkIsUUFIZDtBQUlJLFFBQUEsTUFBTSxFQUFFa0I7QUFKWixRQURKLEVBTUksb0JBQUMsYUFBRDtBQUNJLFFBQUEsWUFBWSxFQUFFSSxZQURsQjtBQUVJLFFBQUEsVUFBVSxFQUFFRCxVQUZoQjtBQUdJLFFBQUEsUUFBUSxFQUFFckIsUUFIZDtBQUlJLFFBQUEsT0FBTyxFQUFFaUIsT0FKYjtBQUtJLFFBQUEsS0FBSyxFQUFFTSxLQUxYO0FBTUksUUFBQSxVQUFVLEVBQUUsS0FBS0MsS0FBTCxDQUFXN0IsVUFOM0I7QUFPSSxRQUFBLEdBQUcsRUFBRUssUUFBUSxDQUFDeUIsVUFBVDtBQVBULFFBTkosRUFjSSxvQkFBQyxlQUFEO0FBQ0ksUUFBQSxPQUFPLEVBQUVSLE9BQU8sQ0FBQ1MsTUFEckI7QUFFSSxRQUFBLFFBQVEsRUFBRTFCLFFBRmQ7QUFHSSxRQUFBLGNBQWMsRUFBRSxLQUFLMkI7QUFIekIsUUFkSixDQVRKLENBREo7QUErQkg7Ozs7RUExRmlDQyxLQUFLLENBQUNDLFM7Ozs7Z0JBQXZCbkMsUSxrQkFDSztBQUNsQnVCLEVBQUFBLE9BQU8sRUFBRSxFQURTO0FBRWxCRSxFQUFBQSxRQUFRLEVBQUUsS0FGUTtBQUdsQkMsRUFBQUEsVUFBVSxFQUFFLEtBSE07QUFJbEJkLEVBQUFBLGdCQUFnQixFQUFFO0FBSkEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBEaW1tZXIsXG4gICAgTG9hZGVyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vYm9keSdcbmltcG9ydCBUYWJsZUhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICcuL2Zvb3RlcidcbmltcG9ydCB7IGNyZWF0ZUZpbHRlckZvcm0gfSBmcm9tICcuL2ZpbHRlcnMnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tIFwiLi9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlclwiO1xuXG4vL3R5cGVzXG5pbXBvcnQge1xuICAgIENvbHVtblxufSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dFRhYmxlUHJvcHMge1xuICAgIGZpbHRlcjogeyBuYW1lOiBzdHJpbmcsIGl0ZW1zOiBbXSB9O1xuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyO1xuICAgIG9uUGFnZUNoYW5nZTogKChhY3RpdmVQYWdlOiBudW1iZXIpID0+IHZvaWQpO1xuICAgIGNvbHVtbnM6IENvbHVtbltdO1xuICAgIGhlYWRlcj86IHN0cmluZztcbiAgICBzb3J0YWJsZT86IGJvb2xlYW47XG4gICAgaXNGZXRjaGluZzogYm9vbGVhbjtcbiAgICBmaWx0ZXJOYW1lUHJlZml4OiBzdHJpbmc7XG4gICAgcm93T3B0aW9uczogeyBbIHByb3A6IHN0cmluZyBdOiBhbnk7fTtcbiAgICBlbXB0eU1lc3NhZ2U6IGFueTtcbiAgICBleHRyYTogeyBbIHByb3A6IHN0cmluZyBdOiBhbnk7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXh0VGFibGVQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgZmlsdGVyTmFtZVByZWZpeDogJ2ZpbHRlcidcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7IGFjdGl2ZVBhZ2U6IDEsIGZpbHRlcjogbnVsbCB9O1xuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUmVhZG9ubHk8RXh0VGFibGVQcm9wcz4sIHByZXZTdGF0ZSwgc25hcHNob3Q/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyICYmIHRoaXMucHJvcHMuZmlsdGVyICE9PSBwcmV2U3RhdGUuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbHRlciwgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGNyZWF0ZUZpbHRlckZvcm0oe1xuICAgICAgICAgICAgICAgICAgICAuLi5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlcjogdGhpcy5oYW5kbGVGaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IHByb3ZpZGVyLmdldFNlYXJjaFBhcmFtKHRoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeCwge30pLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiB0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhZ2luYXRpb24gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYWN0aXZlUGFnZVxuICAgICAqL1xuICAgIGhhbmRsZVBhZ2luYXRpb25DaGFuZ2UgPSAoZSwgeyBhY3RpdmVQYWdlIH0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZShhY3RpdmVQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLnNldEFjdGl2ZVBhZ2UoYWN0aXZlUGFnZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVQYWdlIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEYXRhIGZpbHRlciBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpZWxkTmFtZXMgbGlzdCBvZiBwb3NzaWJsZSBmaWx0ZXIgZmllbGQgbmFtZXNcbiAgICAgKi9cbiAgICBoYW5kbGVGaWx0ZXIgPSAodmFsdWVzLCBmaWVsZE5hbWVzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuX25hdmlnYXRlKHsgW3RoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeF06IHZhbHVlcywgcGFnZTogMSB9LCAoc2VhcmNoKSA9PiB7XG4gICAgICAgICAgICBmaWVsZE5hbWVzLmZvckVhY2goZmllbGROYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoW3RoaXMucHJvcHMuZmlsdGVyTmFtZVByZWZpeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlYXJjaFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2g7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuZmV0Y2goKTsgLy9kbyByZXF1ZXN0XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb2x1bW5zLCBoZWFkZXIsIHByb3ZpZGVyLCBzb3J0YWJsZSwgaXNGZXRjaGluZywgcm93T3B0aW9ucywgZW1wdHlNZXNzYWdlLCBleHRyYSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZpbHRlcn1cblxuICAgICAgICAgICAgICAgIHtpc0ZldGNoaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmUgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxUYWJsZSBjZWxsZWQgY29sb3I9J3RlYWwnIHN0cmlwZWQgc29ydGFibGU9e3NvcnRhYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e2V4dHJhfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlPXtlbXB0eU1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dPcHRpb25zPXtyb3dPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXtleHRyYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e3RoaXMuc3RhdGUuYWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvdmlkZXIuZ2V0VW5pcUtleSgpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUZvb3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17Y29sdW1ucy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQYWdpbmF0ZT17dGhpcy5oYW5kbGVQYWdpbmF0aW9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=