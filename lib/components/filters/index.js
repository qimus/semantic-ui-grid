"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilterForm = createFilterForm;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _lodash = require("lodash");

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("./factory");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var FilterContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FilterContainer, _React$Component);

  function FilterContainer() {
    _classCallCheck(this, FilterContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilterContainer).apply(this, arguments));
  }

  _createClass(FilterContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(_semanticUiReact.Grid, null, React.createElement(_semanticUiReact.Grid.Row, null, this.props.children));
    }
  }]);

  return FilterContainer;
}(React.Component);

var FilterContainerItem =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(FilterContainerItem, _React$Component2);

  function FilterContainerItem() {
    _classCallCheck(this, FilterContainerItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilterContainerItem).apply(this, arguments));
  }

  _createClass(FilterContainerItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          options = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(_semanticUiReact.Grid.Column, options, children);
    }
  }]);

  return FilterContainerItem;
}(React.Component);

var FilterButtonComponent =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(FilterButtonComponent, _React$Component3);

  function FilterButtonComponent() {
    _classCallCheck(this, FilterButtonComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilterButtonComponent).apply(this, arguments));
  }

  _createClass(FilterButtonComponent, [{
    key: "render",
    value: function render() {
      var icon = this.props.icon;
      return React.createElement(_semanticUiReact.Grid.Column, {
        verticalAlign: 'bottom',
        style: styles.button
      }, React.createElement(_semanticUiReact.Button, {
        primary: true,
        icon: icon
      }));
    }
  }]);

  return FilterButtonComponent;
}(React.Component);

_defineProperty(FilterButtonComponent, "defaultProps", {
  icon: 'filter'
});

var Filter =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Filter, _React$Component4);

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

      var _this$props2 = this.props,
          items = _this$props2.items,
          handleSubmit = _this$props2.handleSubmit,
          filterButton = _this$props2.filterButton,
          FilterContainer = _this$props2.filterContainer,
          FilterContainerItem = _this$props2.filterContainerItem,
          FilterButtonComponent = _this$props2.filterButtonComponent;
      return React.createElement(_semanticUiReact.Form, {
        onSubmit: handleSubmit(this.handleSearch),
        style: styles.form
      }, React.createElement(FilterContainer, null, items.map(function (item, i) {
        var type = item.type,
            component = item.component,
            _item$options = item.options,
            options = _item$options === void 0 ? {} : _item$options,
            _item$updateAfterChan = item.updateAfterChange,
            updateAfterChange = _item$updateAfterChan === void 0 ? false : _item$updateAfterChan,
            props = _objectWithoutProperties(item, ["type", "component", "options", "updateAfterChange"]);

        var Component;

        if (component) {
          Component = component;
        } else {
          Component = (0, _factory.factory)(type);
        }

        if (updateAfterChange) {
          props.handleChange = handleSubmit(_this2.handleSearch);
        }

        return React.createElement(FilterContainerItem, _extends({
          key: i,
          width: 3
        }, options), React.createElement(_reduxForm.Field, _extends({
          key: i
        }, props, {
          component: Component
        })));
      }), filterButton.visible && React.createElement(FilterButtonComponent, {
        icon: (0, _lodash.get)(filterButton, 'icon', 'filter')
      })));
    }
  }]);

  return Filter;
}(React.Component);

_defineProperty(Filter, "defaultProps", {
  filterNamePrefix: 'filter',
  filterContainer: FilterContainer,
  filterContainerItem: FilterContainerItem,
  filterButtonComponent: FilterButtonComponent,
  filterButton: {
    icon: 'filter',
    visible: true
  }
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
      initialValues: filterInitialValues(initialValues),
      itemsNames: itemsNames
    };
  };

  Component = (0, _reactRedux.connect)(mapStateToProps)(Component);
  return React.createElement(Component, _extends({}, props, {
    items: items
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm0iLCJwYWRkaW5nTGVmdCIsIml0ZW0iLCJtYXJnaW5SaWdodCIsImJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsIkZpbHRlckNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZpbHRlckNvbnRhaW5lckl0ZW0iLCJvcHRpb25zIiwiRmlsdGVyQnV0dG9uQ29tcG9uZW50IiwiaWNvbiIsIkZpbHRlciIsInZhbHVlcyIsImhhbmRsZUZpbHRlciIsIml0ZW1zTmFtZXMiLCJpdGVtcyIsImhhbmRsZVN1Ym1pdCIsImZpbHRlckJ1dHRvbiIsImZpbHRlckNvbnRhaW5lciIsImZpbHRlckNvbnRhaW5lckl0ZW0iLCJmaWx0ZXJCdXR0b25Db21wb25lbnQiLCJoYW5kbGVTZWFyY2giLCJtYXAiLCJpIiwidHlwZSIsImNvbXBvbmVudCIsInVwZGF0ZUFmdGVyQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwidmlzaWJsZSIsImZpbHRlck5hbWVQcmVmaXgiLCJjcmVhdGVGaWx0ZXJGb3JtIiwibmFtZSIsImluaXRpYWxWYWx1ZXMiLCJmaWx0ZXJJbml0aWFsVmFsdWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsV0FBVyxFQUFFO0FBRFgsR0FESztBQUlYQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsV0FBVyxFQUFFO0FBRFgsR0FKSztBQU9YQyxFQUFBQSxNQUFNLEVBQUU7QUFD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QUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ3JCLE1BQUQsRUFBWTtBQUNwQ3NCLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdkIsTUFBWixFQUFvQndCLE9BQXBCLENBQTRCLFVBQUFDLEdBQUcsRUFBSTtBQUMvQixVQUFJLENBQUN2QixVQUFVLENBQUN3QixRQUFYLENBQW9CRCxHQUFwQixDQUFMLEVBQStCO0FBQzNCLGVBQU96QixNQUFNLENBQUN5QixHQUFELENBQWI7QUFDSDtBQUNKLEtBSkQ7QUFNQSxXQUFPekIsTUFBUDtBQUNILEdBUkQ7O0FBVUEsTUFBTTJCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRckMsS0FBUixFQUFrQjtBQUN0QyxXQUFPO0FBQ0g2QixNQUFBQSxhQUFhLEVBQUVDLG1CQUFtQixDQUFDRCxhQUFELENBRC9CO0FBRUhsQixNQUFBQSxVQUFVLEVBQVZBO0FBRkcsS0FBUDtBQUlILEdBTEQ7O0FBT0FSLEVBQUFBLFNBQVMsR0FBRyx5QkFBUWlDLGVBQVIsRUFBeUJqQyxTQUF6QixDQUFaO0FBRUEsU0FBTyxvQkFBQyxTQUFELGVBQWVILEtBQWY7QUFBc0IsSUFBQSxLQUFLLEVBQUVZO0FBQTdCLEtBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQge1xuICAgIEdyaWQsXG4gICAgRm9ybSxcbiAgICBCdXR0b25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknXG5pbXBvcnQgeyBDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQge1JlYWN0Tm9kZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBmb3JtOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAyMFxuICAgIH0sXG4gICAgaXRlbToge1xuICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDFcbiAgICB9XG59O1xuXG5pbnRlcmZhY2UgRmlsdGVyUHJvcHMge1xuICAgIGhhbmRsZUZpbHRlcjogKCh2YWx1ZXM6IGFueSwgIG5hbWVzOiBhbnkpID0+IHZvaWQpO1xuICAgIGl0ZW1zOiBhbnlbXTtcbiAgICBoYW5kbGVTdWJtaXQ6ICh2YWx1ZXMpID0+IGFueTtcbiAgICBpdGVtc05hbWVzOiBhbnlbXTtcbiAgICBmaWx0ZXJOYW1lUHJlZml4OiBzdHJpbmc7XG4gICAgb3B0aW9uczogQ29sdW1uT3B0aW9ucztcbiAgICBmaWx0ZXJDb250YWluZXI6IGFueTtcbiAgICBmaWx0ZXJDb250YWluZXJJdGVtOiBhbnk7XG4gICAgZmlsdGVyQnV0dG9uQ29tcG9uZW50OiBhbnk7XG4gICAgZmlsdGVyQnV0dG9uPzoge1xuICAgICAgICBpY29uOiBzdHJpbmc7XG4gICAgICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgRmlsdGVyQ29udGFpbmVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmludGVyZmFjZSBGaWx0ZXJDb250YWluZXJJdGVtUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gICAgW3Byb3A6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIEZpbHRlckJ1dHRvbkNvbXBvbmVudFByb3BzIHtcbiAgICBpY29uPzogc3RyaW5nO1xufVxuXG5jbGFzcyBGaWx0ZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RmlsdGVyQ29udGFpbmVyUHJvcHM+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNsYXNzIEZpbHRlckNvbnRhaW5lckl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RmlsdGVyQ29udGFpbmVySXRlbVByb3BzPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5vcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gey4uLm9wdGlvbnN9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNsYXNzIEZpbHRlckJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGaWx0ZXJCdXR0b25Db21wb25lbnRQcm9wcz4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGljb246ICdmaWx0ZXInXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpY29uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gdmVydGljYWxBbGlnbj17J2JvdHRvbSd9IHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgaWNvbj17aWNvbn0vPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZpbHRlclByb3BzLCB7fT4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGZpbHRlck5hbWVQcmVmaXg6ICdmaWx0ZXInLFxuICAgICAgICBmaWx0ZXJDb250YWluZXI6IEZpbHRlckNvbnRhaW5lcixcbiAgICAgICAgZmlsdGVyQ29udGFpbmVySXRlbTogRmlsdGVyQ29udGFpbmVySXRlbSxcbiAgICAgICAgZmlsdGVyQnV0dG9uQ29tcG9uZW50OiBGaWx0ZXJCdXR0b25Db21wb25lbnQsXG4gICAgICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgICAgICAgaWNvbjogJ2ZpbHRlcicsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaGFuZGxlU2VhcmNoID0gKHZhbHVlcykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUZpbHRlcih2YWx1ZXMsIHRoaXMucHJvcHMuaXRlbXNOYW1lcyk7XG4gICAgfTtcblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICBmaWx0ZXJCdXR0b24sXG4gICAgICAgICAgICBmaWx0ZXJDb250YWluZXI6IEZpbHRlckNvbnRhaW5lcixcbiAgICAgICAgICAgIGZpbHRlckNvbnRhaW5lckl0ZW06IEZpbHRlckNvbnRhaW5lckl0ZW0sXG4gICAgICAgICAgICBmaWx0ZXJCdXR0b25Db21wb25lbnQ6IEZpbHRlckJ1dHRvbkNvbXBvbmVudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNlYXJjaCl9IHN0eWxlPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgICAgICAgPEZpbHRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBjb21wb25lbnQsIG9wdGlvbnMgPSB7fSwgdXBkYXRlQWZ0ZXJDaGFuZ2UgPSBmYWxzZSwgLi4ucHJvcHMgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgQ29tcG9uZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQgPSBmYWN0b3J5KHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlQWZ0ZXJDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVDaGFuZ2UgPSBoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTZWFyY2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXJJdGVtIGtleT17aX0gd2lkdGg9ezN9IHsuLi5vcHRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NvbXBvbmVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpbHRlckNvbnRhaW5lckl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJCdXR0b24udmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQnV0dG9uQ29tcG9uZW50IGljb249e2dldChmaWx0ZXJCdXR0b24sICdpY29uJywgJ2ZpbHRlcicpfS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9GaWx0ZXJDb250YWluZXI+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWx0ZXJGb3JtKHsgbmFtZSwgaW5pdGlhbFZhbHVlcywgaXRlbXMgPSBbXSwgY29tcG9uZW50ID0gRmlsdGVyLCAuLi5wcm9wcyB9KSB7XG4gICAgbGV0IENvbXBvbmVudCA9IHJlZHV4Rm9ybSh7XG4gICAgICAgIGZvcm06IG5hbWVcbiAgICB9KShjb21wb25lbnQpO1xuXG4gICAgbGV0IGl0ZW1zTmFtZXMgPSBpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpO1xuICAgIGNvbnN0IGZpbHRlckluaXRpYWxWYWx1ZXMgPSAodmFsdWVzKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtc05hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IGZpbHRlckluaXRpYWxWYWx1ZXMoaW5pdGlhbFZhbHVlcyksXG4gICAgICAgICAgICBpdGVtc05hbWVzXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29tcG9uZW50ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IGl0ZW1zPXtpdGVtc30vPlxufVxuIl19