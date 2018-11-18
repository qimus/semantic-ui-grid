"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilterForm = createFilterForm;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("./factory");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  form: {
    paddingLeft: 20
  },
  item: {
    marginRight: 10
  },
  button: {
    marginBottom: 1
  }
};

var Filter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Filter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearch", function (values) {
      _this.props.handleFilter(values, _this.props.itemsNames);
    });

    return _this;
  }

  _createClass(Filter, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          handleSubmit = _this$props.handleSubmit;
      return React.createElement(_semanticUiReact.Form, {
        onSubmit: handleSubmit(this.handleSearch),
        style: styles.form
      }, React.createElement(_semanticUiReact.Grid, null, React.createElement(_semanticUiReact.Grid.Row, null, items.map(function (item, i) {
        var type = item.type,
            props = _objectWithoutProperties(item, ["type"]);

        var Component = (0, _factory.factory)(type),
            name = _this2.props.filterNamePrefix + '[' + item.name + ']';
        return React.createElement("div", {
          style: styles.item,
          key: i
        }, React.createElement(_reduxForm.Field, _extends({
          key: i
        }, props, {
          component: Component,
          name: name
        })));
      }), React.createElement(_semanticUiReact.Grid.Column, {
        verticalAlign: 'bottom',
        style: styles.button
      }, React.createElement(_semanticUiReact.Button, {
        primary: true,
        icon: 'filter'
      })))));
    }
  }]);

  return Filter;
}(React.Component);

_defineProperty(Filter, "defaultProps", {
  filterNamePrefix: 'filter'
});

function createFilterForm(_ref) {
  var name = _ref.name,
      initialValues = _ref.initialValues,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? Filter : _ref$component,
      props = _objectWithoutProperties(_ref, ["name", "initialValues", "items", "component"]);

  var Component = (0, _reduxForm.reduxForm)({
    form: name
  })(component);
  var itemsNames = items.map(function (item) {
    return item.name;
  });

  var filterInitialValues = function filterInitialValues(values) {
    Object.keys(values).forEach(function (key) {
      if (!itemsNames.includes(key)) {
        delete values[key];
      }
    });
    return values;
  };

  var mapStateToProps = function mapStateToProps(state, props) {
    return {
      initialValues: filterInitialValues(_objectSpread({}, initialValues)),
      itemsNames: itemsNames
    };
  };

  Component = (0, _reactRedux.connect)(mapStateToProps)(Component);
  return React.createElement(Component, _extends({}, props, {
    items: items
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm0iLCJwYWRkaW5nTGVmdCIsIml0ZW0iLCJtYXJnaW5SaWdodCIsImJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsIkZpbHRlciIsInZhbHVlcyIsInByb3BzIiwiaGFuZGxlRmlsdGVyIiwiaXRlbXNOYW1lcyIsIml0ZW1zIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VhcmNoIiwibWFwIiwiaSIsInR5cGUiLCJDb21wb25lbnQiLCJuYW1lIiwiZmlsdGVyTmFtZVByZWZpeCIsIlJlYWN0IiwiY3JlYXRlRmlsdGVyRm9ybSIsImluaXRpYWxWYWx1ZXMiLCJjb21wb25lbnQiLCJmaWx0ZXJJbml0aWFsVmFsdWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxXQUFXLEVBQUU7QUFEWCxHQURLO0FBSVhDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxXQUFXLEVBQUU7QUFEWCxHQUpLO0FBT1hDLEVBQUFBLE1BQU0sRUFBRTtBQUNKQyxJQUFBQSxZQUFZLEVBQUU7QUFEVjtBQVBHLENBQWY7O0lBb0JNQyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkZBS2EsVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZCLFlBQUtDLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkYsTUFBeEIsRUFBZ0MsTUFBS0MsS0FBTCxDQUFXRSxVQUEzQztBQUNILEs7Ozs7Ozs7NENBRXVCO0FBQ3BCLGFBQU8sS0FBUDtBQUNIOzs7NkJBRVE7QUFBQTs7QUFBQSx3QkFDMkIs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Ryx5QkFBUWEsZUFBUixFQUF5QmIsU0FBekIsQ0FBWjtBQUVBLFNBQU8sb0JBQUMsU0FBRCxlQUFlVCxLQUFmO0FBQXNCLElBQUEsS0FBSyxFQUFFRztBQUE3QixLQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHtcbiAgICBHcmlkLFxuICAgIEZvcm0sXG4gICAgQnV0dG9uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5J1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZm9ybToge1xuICAgICAgICBwYWRkaW5nTGVmdDogMjBcbiAgICB9LFxuICAgIGl0ZW06IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxXG4gICAgfVxufTtcblxuaW50ZXJmYWNlIEZpbHRlclByb3BzIHtcbiAgICBoYW5kbGVGaWx0ZXI6ICgodmFsdWVzOiBhbnksICBuYW1lczogYW55KSA9PiB2b2lkKTtcbiAgICBpdGVtczogYW55W107XG4gICAgaGFuZGxlU3VibWl0OiAodmFsdWVzKSA9PiBhbnk7XG4gICAgaXRlbXNOYW1lczogYW55W107XG4gICAgZmlsdGVyTmFtZVByZWZpeDogc3RyaW5nO1xufVxuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RmlsdGVyUHJvcHMsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZmlsdGVyTmFtZVByZWZpeDogJ2ZpbHRlcidcbiAgICB9O1xuXG4gICAgaGFuZGxlU2VhcmNoID0gKHZhbHVlcykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUZpbHRlcih2YWx1ZXMsIHRoaXMucHJvcHMuaXRlbXNOYW1lcyk7XG4gICAgfTtcblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpdGVtcywgaGFuZGxlU3VibWl0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHRoaXMuaGFuZGxlU2VhcmNoKX0gc3R5bGU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgLi4ucHJvcHMgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IENvbXBvbmVudCA9IGZhY3RvcnkodHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSB0aGlzLnByb3BzLmZpbHRlck5hbWVQcmVmaXggKyAnWycgKyBpdGVtLm5hbWUgKyAnXSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBrZXk9e2l9IHsuLi5wcm9wc30gY29tcG9uZW50PXtDb21wb25lbnR9IG5hbWU9e25hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB2ZXJ0aWNhbEFsaWduPXsnYm90dG9tJ30gc3R5bGU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGljb249eydmaWx0ZXInfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsdGVyRm9ybSh7IG5hbWUsIGluaXRpYWxWYWx1ZXMsIGl0ZW1zID0gW10sIGNvbXBvbmVudCA9IEZpbHRlciwgLi4ucHJvcHMgfSkge1xuICAgIGxldCBDb21wb25lbnQgPSByZWR1eEZvcm0oe1xuICAgICAgICBmb3JtOiBuYW1lXG4gICAgfSkoY29tcG9uZW50KTtcblxuICAgIGxldCBpdGVtc05hbWVzID0gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKTtcbiAgICBjb25zdCBmaWx0ZXJJbml0aWFsVmFsdWVzID0gKHZhbHVlcykgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbXNOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH07XG5cbiAgICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBmaWx0ZXJJbml0aWFsVmFsdWVzKHsgLi4uaW5pdGlhbFZhbHVlcyB9KSxcbiAgICAgICAgICAgIGl0ZW1zTmFtZXNcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBDb21wb25lbnQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tcG9uZW50KTtcblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gaXRlbXM9e2l0ZW1zfS8+XG59Il19