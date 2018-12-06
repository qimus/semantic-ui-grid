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
            component = item.component,
            _item$filterOptions = item.filterOptions,
            filterOptions = _item$filterOptions === void 0 ? {} : _item$filterOptions,
            props = _objectWithoutProperties(item, ["type", "component", "filterOptions"]);

        var Component;

        if (component) {
          Component = component;
        } else {
          Component = (0, _factory.factory)(type);
        }

        return React.createElement(_semanticUiReact.Grid.Column, _extends({
          key: i,
          width: 3
        }, filterOptions), React.createElement(_reduxForm.Field, _extends({
          key: i,
          handleChange: handleSubmit(_this2.handleSearch)
        }, props, {
          component: Component
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
      initialValues: filterInitialValues(initialValues),
      itemsNames: itemsNames
    };
  };

  Component = (0, _reactRedux.connect)(mapStateToProps)(Component);
  return React.createElement(Component, _extends({}, props, {
    items: items
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm0iLCJwYWRkaW5nTGVmdCIsIml0ZW0iLCJtYXJnaW5SaWdodCIsImJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsIkZpbHRlciIsInZhbHVlcyIsInByb3BzIiwiaGFuZGxlRmlsdGVyIiwiaXRlbXNOYW1lcyIsIml0ZW1zIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VhcmNoIiwibWFwIiwiaSIsInR5cGUiLCJjb21wb25lbnQiLCJmaWx0ZXJPcHRpb25zIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJmaWx0ZXJOYW1lUHJlZml4IiwiY3JlYXRlRmlsdGVyRm9ybSIsIm5hbWUiLCJpbml0aWFsVmFsdWVzIiwiZmlsdGVySW5pdGlhbFZhbHVlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFdBQVcsRUFBRTtBQURYLEdBREs7QUFJWEMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFdBQVcsRUFBRTtBQURYLEdBSks7QUFPWEMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLFlBQVksRUFBRTtBQURWO0FBUEcsQ0FBZjs7SUFvQk1DLE07Ozs7Ozs7Ozs7Ozs7Ozs7OzsyRkFLYSxVQUFDQyxNQUFELEVBQVk7QUFDdkIsWUFBS0MsS0FBTCxDQUFXQyxZQUFYLENBQXdCRixNQUF4QixFQUFnQyxNQUFLQyxLQUFMLENBQVdFLFVBQTNDO0FBQ0gsSzs7Ozs7Ozs0Q0FFdUI7QUFDcEIsYUFBTyxLQUFQO0FBQ0g7Ozs2QkFFUTtBQUFB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QixDQUFDQyxLQUFELEVBQVF4QixLQUFSLEVBQWtCO0FBQ3RDLFdBQU87QUFDSGdCLE1BQUFBLGFBQWEsRUFBRUMsbUJBQW1CLENBQUNELGFBQUQsQ0FEL0I7QUFFSGQsTUFBQUEsVUFBVSxFQUFWQTtBQUZHLEtBQVA7QUFJSCxHQUxEOztBQU9BUyxFQUFBQSxTQUFTLEdBQUcseUJBQVFZLGVBQVIsRUFBeUJaLFNBQXpCLENBQVo7QUFFQSxTQUFPLG9CQUFDLFNBQUQsZUFBZVgsS0FBZjtBQUFzQixJQUFBLEtBQUssRUFBRUc7QUFBN0IsS0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7XG4gICAgR3JpZCxcbiAgICBGb3JtLFxuICAgIEJ1dHRvblxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IHsgZmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSdcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGZvcm06IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDIwXG4gICAgfSxcbiAgICBpdGVtOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAxMFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMVxuICAgIH1cbn07XG5cbmludGVyZmFjZSBGaWx0ZXJQcm9wcyB7XG4gICAgaGFuZGxlRmlsdGVyOiAoKHZhbHVlczogYW55LCAgbmFtZXM6IGFueSkgPT4gdm9pZCk7XG4gICAgaXRlbXM6IGFueVtdO1xuICAgIGhhbmRsZVN1Ym1pdDogKHZhbHVlcykgPT4gYW55O1xuICAgIGl0ZW1zTmFtZXM6IGFueVtdO1xuICAgIGZpbHRlck5hbWVQcmVmaXg6IHN0cmluZztcbn1cblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZpbHRlclByb3BzLCB7fT4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGZpbHRlck5hbWVQcmVmaXg6ICdmaWx0ZXInXG4gICAgfTtcblxuICAgIGhhbmRsZVNlYXJjaCA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVGaWx0ZXIodmFsdWVzLCB0aGlzLnByb3BzLml0ZW1zTmFtZXMpO1xuICAgIH07XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXRlbXMsIGhhbmRsZVN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNlYXJjaCl9IHN0eWxlPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHR5cGUsIGNvbXBvbmVudCwgZmlsdGVyT3B0aW9ucyA9IHt9LCAuLi5wcm9wcyB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgQ29tcG9uZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gZmFjdG9yeSh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4ga2V5PXtpfSB3aWR0aD17M30gey4uLmZpbHRlck9wdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlU3VibWl0KHRoaXMuaGFuZGxlU2VhcmNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDb21wb25lbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gdmVydGljYWxBbGlnbj17J2JvdHRvbSd9IHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgaWNvbj17J2ZpbHRlcid9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsdGVyRm9ybSh7IG5hbWUsIGluaXRpYWxWYWx1ZXMsIGl0ZW1zID0gW10sIGNvbXBvbmVudCA9IEZpbHRlciwgLi4ucHJvcHMgfSkge1xuICAgIGxldCBDb21wb25lbnQgPSByZWR1eEZvcm0oe1xuICAgICAgICBmb3JtOiBuYW1lXG4gICAgfSkoY29tcG9uZW50KTtcblxuICAgIGxldCBpdGVtc05hbWVzID0gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKTtcbiAgICBjb25zdCBmaWx0ZXJJbml0aWFsVmFsdWVzID0gKHZhbHVlcykgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbXNOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH07XG5cbiAgICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBmaWx0ZXJJbml0aWFsVmFsdWVzKGluaXRpYWxWYWx1ZXMpLFxuICAgICAgICAgICAgaXRlbXNOYW1lc1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIENvbXBvbmVudCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBpdGVtcz17aXRlbXN9Lz5cbn1cbiJdfQ==