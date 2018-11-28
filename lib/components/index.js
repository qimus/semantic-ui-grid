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
          initialValues: _provider.getSearchParam(this.props.filterPrefix, {}),
          filterPrefix: this.props.filterPrefix
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
  filterPrefix: 'filter'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeHRUYWJsZSIsImFjdGl2ZVBhZ2UiLCJlIiwicHJvcHMiLCJvblBhZ2VDaGFuZ2UiLCJwcm92aWRlciIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImZpZWxkTmFtZXMiLCJfbmF2aWdhdGUiLCJzZWFyY2giLCJmb3JFYWNoIiwiZmllbGROYW1lIiwiZmV0Y2giLCJmaWx0ZXIiLCJuYW1lIiwiaXRlbXMiLCJoYW5kbGVGaWx0ZXIiLCJpbml0aWFsVmFsdWVzIiwiZ2V0U2VhcmNoUGFyYW0iLCJmaWx0ZXJQcmVmaXgiLCJjb2x1bW5zIiwiaGVhZGVyIiwic29ydGFibGUiLCJpc0ZldGNoaW5nIiwic3RhdGUiLCJnZXRVbmlxS2V5IiwibGVuZ3RoIiwiaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJxQkEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FGQVFSLEk7O29GQUVEO0FBQUVDLE1BQUFBLFVBQVUsRUFBRTtBQUFkLEs7O3FHQW9CaUIsVUFBQ0MsQ0FBRCxRQUF1QjtBQUFBLFVBQWpCRCxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQzVDLFVBQUksTUFBS0UsS0FBTCxDQUFXQyxZQUFmLEVBQTZCO0FBQ3pCLGNBQUtELEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkgsVUFBeEI7QUFDSDs7QUFDRCxZQUFLRSxLQUFMLENBQVdFLFFBQVgsQ0FBb0JDLGFBQXBCLENBQWtDTCxVQUFsQzs7QUFDQSxZQUFLTSxRQUFMLENBQWM7QUFBRU4sUUFBQUEsVUFBVSxFQUFWQTtBQUFGLE9BQWQ7QUFDSCxLOzsyRkFRYyxVQUFDTyxNQUFELEVBQVNDLFVBQVQsRUFBd0I7QUFDbkM7QUFDQSxZQUFLTixLQUFMLENBQVdFLFFBQVgsQ0FBb0JLLFNBQXBCLENBQThCRixNQUE5QixFQUFzQyxVQUFDRyxNQUFELEVBQVk7QUFDOUNGLFFBQUFBLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQixVQUFBQyxTQUFTLEVBQUk7QUFDNUIsaUJBQU9GLE1BQU0sQ0FBQ0UsU0FBRCxDQUFiO0FBQ0gsU0FGRDtBQUlBLGVBQU9GLE1BQVA7QUFDSCxPQU5EOztBQVFBLFlBQUtSLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQlMsS0FBcEIsR0FWbUMsQ0FVTjs7QUFDaEMsSzs7Ozs7OztnREEzQzJCO0FBQ3hCLFVBQUksS0FBS1gsS0FBTCxDQUFXWSxNQUFYLElBQXFCLENBQUMsS0FBS0EsTUFBL0IsRUFBdUM7QUFBQSwwQkFDTixLQUFLWixLQURDO0FBQUEsWUFDM0JZLE9BRDJCLGVBQzNCQSxNQUQyQjtBQUFBLFlBQ25CVixTQURtQixlQUNuQkEsUUFEbUI7QUFFbkMsYUFBS1UsTUFBTCxHQUFjLCtCQUFpQjtBQUMzQkMsVUFBQUEsSUFBSSxFQUFFRCxPQUFNLENBQUNDLElBRGM7QUFFM0JDLFVBQUFBLEtBQUssRUFBRUYsT0FBTSxDQUFDRSxLQUZhO0FBRzNCQyxVQUFBQSxZQUFZLEVBQUUsS0FBS0EsWUFIUTtBQUkzQkMsVUFBQUEsYUFBYSxFQUFFZCxTQUFRLENBQUNlLGNBQVQsQ0FBd0IsS0FBS2pCLEtBQUwsQ0FBV2tCLFlBQW5DLEVBQWlELEVBQWpELENBSlk7QUFLM0JBLFVBQUFBLFlBQVksRUFBRSxLQUFLbEIsS0FBTCxDQUFXa0I7QUFMRSxTQUFqQixDQUFkO0FBT0g7QUFDSjtBQUVEOzs7Ozs7Ozs2QkFnQ1M7QUFBQSx5QkFDdUQsS0FBS2xCLEtBRDVEO0FBQUEsVUFDR21CLE9BREgsZ0JBQ0dBLE9BREg7QUFBQSxVQUNZQyxNQURaLGdCQUNZQSxNQURaO0FBQUEsVUFDb0JsQixRQURwQixnQkFDb0JBLFFBRHBCO0FBQUEsVUFDOEJtQixRQUQ5QixnQkFDOEJBLFFBRDlCO0FBQUEsVUFDd0NDLFVBRHhDLGdCQUN3Q0EsVUFEeEM7QUFHTCxhQUNJLG9CQUFDLEtBQUQsQ0FBTyxRQUFQLFFBQ0ssS0FBS1YsTUFEVixFQUdLVSxVQUFVLElBQ1Asb0JBQUMsdUJBQUQ7QUFBUSxRQUFBLE1BQU0sTUFBZDtBQUFlLFFBQUEsUUFBUTtBQUF2QixTQUNJLG9CQUFDLHVCQUFELE9BREosQ0FKUixFQVNJLG9CQUFDLHNCQUFEO0FBQU8sUUFBQSxNQUFNLE1BQWI7QUFBYyxRQUFBLEtBQUssRUFBQyxNQUFwQjtBQUEyQixRQUFBLE9BQU8sTUFBbEM7QUFBbUMsUUFBQSxRQUFRLEVBQUVEO0FBQTdDLFNBQ0ksb0JBQUMsZUFBRDtBQUNJLFFBQUEsT0FBTyxFQUFFRixPQURiO0FBRUksUUFBQSxRQUFRLEVBQUVqQixRQUZkO0FBR0ksUUFBQSxNQUFNLEVBQUVrQjtBQUhaLFFBREosRUFLSSxvQkFBQyxhQUFEO0FBQ0ksUUFBQSxRQUFRLEVBQUVsQixRQURkO0FBRUksUUFBQSxPQUFPLEVBQUVpQixPQUZiO0FBR0ksUUFBQSxVQUFVLEVBQUUsS0FBS0ksS0FBTCxDQUFXekIsVUFIM0I7QUFJSSxRQUFBLEdBQUcsRUFBRUksUUFBUSxDQUFDc0IsVUFBVDtBQUpULFFBTEosRUFVSSxvQkFBQyxlQUFEO0FBQ0ksUUFBQSxPQUFPLEVBQUVMLE9BQU8sQ0FBQ00sTUFEckI7QUFFSSxRQUFBLFFBQVEsRUFBRXZCLFFBRmQ7QUFHSSxRQUFBLGNBQWMsRUFBRSxLQUFLd0I7QUFIekIsUUFWSixDQVRKLENBREo7QUEyQkg7Ozs7RUF2RmlDQyxLQUFLLENBQUNDLFM7Ozs7Z0JBQXZCL0IsUSxrQkFDSztBQUNsQnNCLEVBQUFBLE9BQU8sRUFBRSxFQURTO0FBRWxCRSxFQUFBQSxRQUFRLEVBQUUsS0FGUTtBQUdsQkMsRUFBQUEsVUFBVSxFQUFFLEtBSE07QUFJbEJKLEVBQUFBLFlBQVksRUFBRTtBQUpJLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgRGltbWVyLFxuICAgIExvYWRlclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL2JvZHknXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9mb290ZXInXG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXJGb3JtIH0gZnJvbSAnLi9maWx0ZXJzJ1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSBcIi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXJcIjtcblxuLy90eXBlc1xuaW1wb3J0IHtcbiAgICBDb2x1bW5cbn0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBFeHRUYWJsZVByb3BzIHtcbiAgICBmaWx0ZXI6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogW10gfTtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcjtcbiAgICBvblBhZ2VDaGFuZ2U6ICgoYWN0aXZlUGFnZTogbnVtYmVyKSA9PiB2b2lkKTtcbiAgICBjb2x1bW5zOiBDb2x1bW5bXTtcbiAgICBoZWFkZXI/OiBzdHJpbmc7XG4gICAgc29ydGFibGU/OiBib29sZWFuO1xuICAgIGlzRmV0Y2hpbmc6IGJvb2xlYW47XG4gICAgZmlsdGVyUHJlZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEV4dFRhYmxlUHJvcHMsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29sdW1uczogW10sXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGZpbHRlclByZWZpeDogJ2ZpbHRlcidcbiAgICB9O1xuXG4gICAgZmlsdGVyID0gbnVsbDtcblxuICAgIHN0YXRlID0geyBhY3RpdmVQYWdlOiAxIH07XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgIXRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbHRlciwgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9IGNyZWF0ZUZpbHRlckZvcm0oe1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbHRlci5uYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaWx0ZXIuaXRlbXMsXG4gICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyOiB0aGlzLmhhbmRsZUZpbHRlcixcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBwcm92aWRlci5nZXRTZWFyY2hQYXJhbSh0aGlzLnByb3BzLmZpbHRlclByZWZpeCwge30pLFxuICAgICAgICAgICAgICAgIGZpbHRlclByZWZpeDogdGhpcy5wcm9wcy5maWx0ZXJQcmVmaXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J7QsdGA0LDQsdC+0YLRh9C40Log0L/QsNCz0LjQvdCw0YbQuNC4XG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhY3RpdmVQYWdlXG4gICAgICovXG4gICAgaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSA9IChlLCB7IGFjdGl2ZVBhZ2UgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKGFjdGl2ZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMucHJvdmlkZXIuc2V0QWN0aXZlUGFnZShhY3RpdmVQYWdlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVBhZ2UgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCe0LHRgNCw0LHQvtGC0YfQuNC6INGE0LjQu9GM0YLRgNCw0YbQuNC4INGB0L/QuNGB0LrQsCDRgtCw0LHQu9C40YbRi1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWVsZE5hbWVzINGB0L/QuNGB0L7QuiDQstC+0LfQvNC+0LbQvdGL0YUg0LjQvNC10L0g0L/QvtC70LXQuSDRhNC40LvRjNGC0YDQsCxcbiAgICAgKiDQvdGD0LbQtdC9INC00LvRjyDRg9C00LDQu9C10L3QuNGPINC40Lcg0YHRgtGA0L7QutC4INGB0L7RgdGC0L7Rj9C90LjRjyDQu9C40YjQvdC10LPQvlxuICAgICAqL1xuICAgIGhhbmRsZUZpbHRlciA9ICh2YWx1ZXMsIGZpZWxkTmFtZXMpID0+IHtcbiAgICAgICAgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0LIgc2VhcmNoINGB0YLRgNC+0LrQuCDQsdGA0LDRg9C30LXRgNCwINC30L3QsNGH0LXQvdC40Y8g0YTQuNC70YzRgtGA0LAg0LTQu9GPINGB0L7RhdGA0LDQvdC10L3QuNGPINGB0L7RgdGC0L7Rj9C90LjRj1xuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLl9uYXZpZ2F0ZSh2YWx1ZXMsIChzZWFyY2gpID0+IHtcbiAgICAgICAgICAgIGZpZWxkTmFtZXMuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWFyY2hbZmllbGROYW1lXTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLnByb3ZpZGVyLmZldGNoKCk7IC8v0LTQtdC70LDQtdC8INC30LDQv9GA0L7RgVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29sdW1ucywgaGVhZGVyLCBwcm92aWRlciwgc29ydGFibGUsIGlzRmV0Y2hpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5maWx0ZXJ9XG5cbiAgICAgICAgICAgICAgICB7aXNGZXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlIGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGFibGUgY2VsbGVkIGNvbG9yPSd0ZWFsJyBzdHJpcGVkIHNvcnRhYmxlPXtzb3J0YWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXt0aGlzLnN0YXRlLmFjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLmdldFVuaXFLZXkoKX0vPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVGb290ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGFnaW5hdGU9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuIl19