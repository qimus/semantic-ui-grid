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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createFilter", function () {
      if (_this.props.filter) {
        var _this$props = _this.props,
            _filter = _this$props.filter,
            _provider = _this$props.provider;

        _this.setState({
          filter: (0, _filters.createFilterForm)(_objectSpread({}, _filter, {
            handleFilter: _this.handleFilter,
            initialValues: _provider.getSearchParam(_this.props.filterNamePrefix, {}),
            filterNamePrefix: _this.props.filterNamePrefix
          }))
        });
      } else {
        _this.setState({
          filter: null
        });
      }
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
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.filter) {
        this.createFilter();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.filter !== prevProps.filter) {
        this.createFilter();
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJmaWx0ZXIiLCJwcm9wcyIsInByb3ZpZGVyIiwic2V0U3RhdGUiLCJoYW5kbGVGaWx0ZXIiLCJpbml0aWFsVmFsdWVzIiwiZ2V0U2VhcmNoUGFyYW0iLCJmaWx0ZXJOYW1lUHJlZml4IiwiZSIsIm9uUGFnZUNoYW5nZSIsInNldEFjdGl2ZVBhZ2UiLCJ2YWx1ZXMiLCJmaWVsZE5hbWVzIiwiX25hdmlnYXRlIiwic2VhcmNoIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZldGNoIiwiY3JlYXRlRmlsdGVyIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjb2x1bW5zIiwiaGVhZGVyIiwic29ydGFibGUiLCJpc0ZldGNoaW5nIiwicm93T3B0aW9ucyIsImVtcHR5TWVzc2FnZSIsImV4dHJhIiwic3RhdGUiLCJnZXRVbmlxS2V5IiwibGVuZ3RoIiwiaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQnFCQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0ZBUVQ7QUFBRUMsTUFBQUEsVUFBVSxFQUFFLENBQWQ7QUFBaUJDLE1BQUFBLE1BQU0sRUFBRTtBQUF6QixLOzsyRkFjTyxZQUFNO0FBQ2pCLFVBQUksTUFBS0MsS0FBTCxDQUFXRCxNQUFmLEVBQXVCO0FBQUEsMEJBQ1UsTUFBS0MsS0FEZjtBQUFBLFlBQ1hELE9BRFcsZUFDWEEsTUFEVztBQUFBLFlBQ0hFLFNBREcsZUFDSEEsUUFERzs7QUFFbkIsY0FBS0MsUUFBTCxDQUFjO0FBQ1ZILFVBQUFBLE1BQU0sRUFBRSxpREFDREEsT0FEQztBQUVKSSxZQUFBQSxZQUFZLEVBQUUsTUFBS0EsWUFGZjtB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cUI7QUFKWixRQURKLEVBTUksb0JBQUMsYUFBRDtBQUNJLFFBQUEsWUFBWSxFQUFFSSxZQURsQjtBQUVJLFFBQUEsVUFBVSxFQUFFRCxVQUZoQjtBQUdJLFFBQUEsUUFBUSxFQUFFeEIsUUFIZDtBQUlJLFFBQUEsT0FBTyxFQUFFb0IsT0FKYjtBQUtJLFFBQUEsS0FBSyxFQUFFTSxLQUxYO0FBTUksUUFBQSxVQUFVLEVBQUUsS0FBS0MsS0FBTCxDQUFXOUIsVUFOM0I7QUFPSSxRQUFBLEdBQUcsRUFBRUcsUUFBUSxDQUFDNEIsVUFBVDtBQVBULFFBTkosRUFjSSxvQkFBQyxlQUFEO0FBQ0ksUUFBQSxPQUFPLEVBQUVSLE9BQU8sQ0FBQ1MsTUFEckI7QUFFSSxRQUFBLFFBQVEsRUFBRTdCLFFBRmQ7QUFHSSxRQUFBLGNBQWMsRUFBRSxLQUFLOEI7QUFIekIsUUFkSixDQVRKLENBREo7QUErQkg7Ozs7RUExR2lDQyxLQUFLLENBQUNDLFM7Ozs7Z0JBQXZCcEMsUSxrQkFDSztBQUNsQndCLEVBQUFBLE9BQU8sRUFBRSxFQURTO0FBRWxCRSxFQUFBQSxRQUFRLEVBQUUsS0FGUTtBQUdsQkMsRUFBQUEsVUFBVSxFQUFFLEtBSE07QUFJbEJsQixFQUFBQSxnQkFBZ0IsRUFBRTtBQUpBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgRGltbWVyLFxuICAgIExvYWRlclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL2JvZHknXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9mb290ZXInXG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXJGb3JtIH0gZnJvbSAnLi9maWx0ZXJzJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSBcIi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXJcIjtcblxuLy90eXBlc1xuaW1wb3J0IHtcbiAgICBDb2x1bW5cbn0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBFeHRUYWJsZVByb3BzIHtcbiAgICBmaWx0ZXI6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogW10gfTtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcjtcbiAgICBvblBhZ2VDaGFuZ2U6ICgoYWN0aXZlUGFnZTogbnVtYmVyKSA9PiB2b2lkKTtcbiAgICBjb2x1bW5zOiBDb2x1bW5bXTtcbiAgICBoZWFkZXI/OiBzdHJpbmc7XG4gICAgc29ydGFibGU/OiBib29sZWFuO1xuICAgIGlzRmV0Y2hpbmc6IGJvb2xlYW47XG4gICAgZmlsdGVyTmFtZVByZWZpeDogc3RyaW5nO1xuICAgIHJvd09wdGlvbnM6IHsgWyBwcm9wOiBzdHJpbmcgXTogYW55O307XG4gICAgZW1wdHlNZXNzYWdlOiBhbnk7XG4gICAgZXh0cmE6IHsgWyBwcm9wOiBzdHJpbmcgXTogYW55O307XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEV4dFRhYmxlUHJvcHMsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29sdW1uczogW10sXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGZpbHRlck5hbWVQcmVmaXg6ICdmaWx0ZXInXG4gICAgfTtcblxuICAgIHN0YXRlID0geyBhY3RpdmVQYWdlOiAxLCBmaWx0ZXI6IG51bGwgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBSZWFkb25seTxFeHRUYWJsZVByb3BzPiwgcHJldlN0YXRlLCBzbmFwc2hvdD86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgIT09IHByZXZQcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVGaWx0ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgeyBmaWx0ZXIsIHByb3ZpZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBjcmVhdGVGaWx0ZXJGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXI6IHRoaXMuaGFuZGxlRmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBwcm92aWRlci5nZXRTZWFyY2hQYXJhbSh0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXgsIHt9KSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTmFtZVByZWZpeDogdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBudWxsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYWdpbmF0aW9uIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFjdGl2ZVBhZ2VcbiAgICAgKi9cbiAgICBoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKGUsIHsgYWN0aXZlUGFnZSB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UoYWN0aXZlUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wcm92aWRlci5zZXRBY3RpdmVQYWdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlUGFnZSB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGF0YSBmaWx0ZXIgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWVsZE5hbWVzIGxpc3Qgb2YgcG9zc2libGUgZmlsdGVyIGZpZWxkIG5hbWVzXG4gICAgICovXG4gICAgaGFuZGxlRmlsdGVyID0gKHZhbHVlcywgZmllbGROYW1lcykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLl9uYXZpZ2F0ZSh7IFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdOiB2YWx1ZXMsIHBhZ2U6IDEgfSwgKHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgZmllbGROYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFt0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWFyY2hbdGhpcy5wcm9wcy5maWx0ZXJOYW1lUHJlZml4XVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLmZldGNoKCk7IC8vZG8gcmVxdWVzdFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29sdW1ucywgaGVhZGVyLCBwcm92aWRlciwgc29ydGFibGUsIGlzRmV0Y2hpbmcsIHJvd09wdGlvbnMsIGVtcHR5TWVzc2FnZSwgZXh0cmEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maWx0ZXJ9XG5cbiAgICAgICAgICAgICAgICB7aXNGZXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlIGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGFibGUgY2VsbGVkIGNvbG9yPSd0ZWFsJyBzdHJpcGVkIHNvcnRhYmxlPXtzb3J0YWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXtleHRyYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZT17ZW1wdHlNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93T3B0aW9ucz17cm93T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17ZXh0cmF9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXt0aGlzLnN0YXRlLmFjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLmdldFVuaXFLZXkoKX0vPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVGb290ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGFnaW5hdGU9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuIl19