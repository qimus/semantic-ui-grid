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

        return React.createElement(_semanticUiReact.Grid.Column, _extends({
          key: i,
          width: 3
        }, options), React.createElement(_reduxForm.Field, _extends({
          key: i
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm0iLCJwYWRkaW5nTGVmdCIsIml0ZW0iLCJtYXJnaW5SaWdodCIsImJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsIkZpbHRlciIsInZhbHVlcyIsInByb3BzIiwiaGFuZGxlRmlsdGVyIiwiaXRlbXNOYW1lcyIsIml0ZW1zIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VhcmNoIiwibWFwIiwiaSIsInR5cGUiLCJjb21wb25lbnQiLCJvcHRpb25zIiwidXBkYXRlQWZ0ZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsImZpbHRlck5hbWVQcmVmaXgiLCJjcmVhdGVGaWx0ZXJGb3JtIiwibmFtZSIsImluaXRpYWxWYWx1ZXMiLCJmaWx0ZXJJbml0aWFsVmFsdWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsV0FBVyxFQUFFO0FBRFgsR0FESztBQUlYQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsV0FBVyxFQUFFO0FBRFgsR0FKSztBQU9YQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsWUFBWSxFQUFFO0FBRFY7QUFQRyxDQUFmOztJQXFCTUMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJGQUthLFVBQUNDLE1BQUQsRUFBWTtBQUN2QixZQUFLQyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JGLE1BQXhCLEVBQWdDLE1BQUtDLEtBQUwsQ0FBV0UsVUFBM0M7QUFDSCxLOzs7Ozs7OzRDQUV1QjtBQUNw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QUFYLENBQW9CRCxHQUFwQixDQUFMLEVBQStCO0FBQzNCLGVBQU94QixNQUFNLENBQUN3QixHQUFELENBQWI7QUFDSDtBQUNKLEtBSkQ7QUFNQSxXQUFPeEIsTUFBUDtBQUNILEdBUkQ7O0FBVUEsTUFBTTBCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRMUIsS0FBUixFQUFrQjtBQUN0QyxXQUFPO0FBQ0hrQixNQUFBQSxhQUFhLEVBQUVDLG1CQUFtQixDQUFDRCxhQUFELENBRC9CO0FBRUhoQixNQUFBQSxVQUFVLEVBQVZBO0FBRkcsS0FBUDtBQUlILEdBTEQ7O0FBT0FVLEVBQUFBLFNBQVMsR0FBRyx5QkFBUWEsZUFBUixFQUF5QmIsU0FBekIsQ0FBWjtBQUVBLFNBQU8sb0JBQUMsU0FBRCxlQUFlWixLQUFmO0FBQXNCLElBQUEsS0FBSyxFQUFFRztBQUE3QixLQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHtcbiAgICBHcmlkLFxuICAgIEZvcm0sXG4gICAgQnV0dG9uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5J1xuaW1wb3J0IHsgQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZm9ybToge1xuICAgICAgICBwYWRkaW5nTGVmdDogMjBcbiAgICB9LFxuICAgIGl0ZW06IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxXG4gICAgfVxufTtcblxuaW50ZXJmYWNlIEZpbHRlclByb3BzIHtcbiAgICBoYW5kbGVGaWx0ZXI6ICgodmFsdWVzOiBhbnksICBuYW1lczogYW55KSA9PiB2b2lkKTtcbiAgICBpdGVtczogYW55W107XG4gICAgaGFuZGxlU3VibWl0OiAodmFsdWVzKSA9PiBhbnk7XG4gICAgaXRlbXNOYW1lczogYW55W107XG4gICAgZmlsdGVyTmFtZVByZWZpeDogc3RyaW5nO1xuICAgIG9wdGlvbnM6IENvbHVtbk9wdGlvbnM7XG59XG5cbmNsYXNzIEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGaWx0ZXJQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiAnZmlsdGVyJ1xuICAgIH07XG5cbiAgICBoYW5kbGVTZWFyY2ggPSAodmFsdWVzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlRmlsdGVyKHZhbHVlcywgdGhpcy5wcm9wcy5pdGVtc05hbWVzKTtcbiAgICB9O1xuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGl0ZW1zLCBoYW5kbGVTdWJtaXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTZWFyY2gpfSBzdHlsZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBjb21wb25lbnQsIG9wdGlvbnMgPSB7fSwgdXBkYXRlQWZ0ZXJDaGFuZ2UgPSBmYWxzZSwgLi4ucHJvcHMgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IENvbXBvbmVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudCA9IGZhY3RvcnkodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZUFmdGVyQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhhbmRsZUNoYW5nZSA9IGhhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNlYXJjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGtleT17aX0gd2lkdGg9ezN9IHsuLi5vcHRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDb21wb25lbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gdmVydGljYWxBbGlnbj17J2JvdHRvbSd9IHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgaWNvbj17J2ZpbHRlcid9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsdGVyRm9ybSh7IG5hbWUsIGluaXRpYWxWYWx1ZXMsIGl0ZW1zID0gW10sIGNvbXBvbmVudCA9IEZpbHRlciwgLi4ucHJvcHMgfSkge1xuICAgIGxldCBDb21wb25lbnQgPSByZWR1eEZvcm0oe1xuICAgICAgICBmb3JtOiBuYW1lXG4gICAgfSkoY29tcG9uZW50KTtcblxuICAgIGxldCBpdGVtc05hbWVzID0gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKTtcbiAgICBjb25zdCBmaWx0ZXJJbml0aWFsVmFsdWVzID0gKHZhbHVlcykgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbXNOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH07XG5cbiAgICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBmaWx0ZXJJbml0aWFsVmFsdWVzKGluaXRpYWxWYWx1ZXMpLFxuICAgICAgICAgICAgaXRlbXNOYW1lc1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIENvbXBvbmVudCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBpdGVtcz17aXRlbXN9Lz5cbn1cbiJdfQ==