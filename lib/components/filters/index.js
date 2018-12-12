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
          handleSubmit = _this$props.handleSubmit,
          filterButton = _this$props.filterButton;
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
      }), filterButton.visible && React.createElement(_semanticUiReact.Grid.Column, {
        verticalAlign: 'bottom',
        style: styles.button
      }, React.createElement(_semanticUiReact.Button, {
        primary: true,
        icon: (0, _lodash.get)(filterButton, 'icon', 'filter')
      })))));
    }
  }]);

  return Filter;
}(React.Component);

_defineProperty(Filter, "defaultProps", {
  filterNamePrefix: 'filter',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm0iLCJwYWRkaW5nTGVmdCIsIml0ZW0iLCJtYXJnaW5SaWdodCIsImJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsIkZpbHRlciIsInZhbHVlcyIsInByb3BzIiwiaGFuZGxlRmlsdGVyIiwiaXRlbXNOYW1lcyIsIml0ZW1zIiwiaGFuZGxlU3VibWl0IiwiZmlsdGVyQnV0dG9uIiwiaGFuZGxlU2VhcmNoIiwibWFwIiwiaSIsInR5cGUiLCJjb21wb25lbnQiLCJvcHRpb25zIiwidXBkYXRlQWZ0ZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJoYW5kbGVDaGFuZ2UiLCJ2aXNpYmxlIiwiUmVhY3QiLCJmaWx0ZXJOYW1lUHJlZml4IiwiaWNvbiIsImNyZWF0ZUZpbHRlckZvcm0iLCJuYW1lIiwiaW5pdGlhbFZhbHVlcyIsImZpbHRlckluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluY2x1ZGVzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxXQUFXLEVBQUU7QUFEWCxHQURLO0FBSVhDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxXQUFXLEVBQUU7QUFEWCxHQUpLO0FBT1hDLEVBQUFBLE1BQU0sRUFBRTtBQUNKQyxJQUFBQSxZQUFZLEVBQUU7QUFEVjtBQVBHLENBQWY7O0lBeUJNQyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkZBU2EsVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZCLFlBQUtDLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkYsTUFBeEIsRUFBZ0MsTUFBS0MsS0FB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QUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDMEIsSUFBVDtBQUFBLEdBQWQsQ0FBakI7O0FBQ0EsTUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDdkIsTUFBRCxFQUFZO0FBQ3BDd0IsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVl6QixNQUFaLEVBQW9CMEIsT0FBcEIsQ0FBNEIsVUFBQUMsR0FBRyxFQUFJO0FBQy9CLFVBQUksQ0FBQ3hCLFVBQVUsQ0FBQ3lCLFFBQVgsQ0FBb0JELEdBQXBCLENBQUwsRUFBK0I7QUFDM0IsZUFBTzNCLE1BQU0sQ0FBQzJCLEdBQUQsQ0FBYjtBQUNIO0FBQ0osS0FKRDtBQU1BLFdBQU8zQixNQUFQO0FBQ0gsR0FSRDs7QUFVQSxNQUFNNkIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVE3QixLQUFSLEVBQWtCO0FBQ3RDLFdBQU87QUFDSHFCLE1BQUFBLGFBQWEsRUFBRUMsbUJBQW1CLENBQUNELGFBQUQsQ0FEL0I7QUFFSG5CLE1BQUFBLFVBQVUsRUFBVkE7QUFGRyxLQUFQO0FBSUgsR0FMRDs7QUFPQVcsRUFBQUEsU0FBUyxHQUFHLHlCQUFRZSxlQUFSLEVBQXlCZixTQUF6QixDQUFaO0FBRUEsU0FBTyxvQkFBQyxTQUFELGVBQWViLEtBQWY7QUFBc0IsSUFBQSxLQUFLLEVBQUVHO0FBQTdCLEtBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQge1xuICAgIEdyaWQsXG4gICAgRm9ybSxcbiAgICBCdXR0b25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknXG5pbXBvcnQgeyBDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBmb3JtOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAyMFxuICAgIH0sXG4gICAgaXRlbToge1xuICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDFcbiAgICB9XG59O1xuXG5pbnRlcmZhY2UgRmlsdGVyUHJvcHMge1xuICAgIGhhbmRsZUZpbHRlcjogKCh2YWx1ZXM6IGFueSwgIG5hbWVzOiBhbnkpID0+IHZvaWQpO1xuICAgIGl0ZW1zOiBhbnlbXTtcbiAgICBoYW5kbGVTdWJtaXQ6ICh2YWx1ZXMpID0+IGFueTtcbiAgICBpdGVtc05hbWVzOiBhbnlbXTtcbiAgICBmaWx0ZXJOYW1lUHJlZml4OiBzdHJpbmc7XG4gICAgb3B0aW9uczogQ29sdW1uT3B0aW9ucztcbiAgICBmaWx0ZXJCdXR0b24/OiB7XG4gICAgICAgIGljb246IHN0cmluZztcbiAgICAgICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICB9XG59XG5cbmNsYXNzIEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGaWx0ZXJQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiAnZmlsdGVyJyxcbiAgICAgICAgZmlsdGVyQnV0dG9uOiB7XG4gICAgICAgICAgICBpY29uOiAnZmlsdGVyJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBoYW5kbGVTZWFyY2ggPSAodmFsdWVzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlRmlsdGVyKHZhbHVlcywgdGhpcy5wcm9wcy5pdGVtc05hbWVzKTtcbiAgICB9O1xuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGl0ZW1zLCBoYW5kbGVTdWJtaXQsIGZpbHRlckJ1dHRvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNlYXJjaCl9IHN0eWxlPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHR5cGUsIGNvbXBvbmVudCwgb3B0aW9ucyA9IHt9LCB1cGRhdGVBZnRlckNoYW5nZSA9IGZhbHNlLCAuLi5wcm9wcyB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgQ29tcG9uZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gZmFjdG9yeSh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlQWZ0ZXJDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlQ2hhbmdlID0gaGFuZGxlU3VibWl0KHRoaXMuaGFuZGxlU2VhcmNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4ga2V5PXtpfSB3aWR0aD17M30gey4uLm9wdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NvbXBvbmVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJCdXR0b24udmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHZlcnRpY2FsQWxpZ249eydib3R0b20nfSBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBpY29uPXtnZXQoZmlsdGVyQnV0dG9uLCAnaWNvbicsICdmaWx0ZXInKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlckZvcm0oeyBuYW1lLCBpbml0aWFsVmFsdWVzLCBpdGVtcyA9IFtdLCBjb21wb25lbnQgPSBGaWx0ZXIsIC4uLnByb3BzIH0pIHtcbiAgICBsZXQgQ29tcG9uZW50ID0gcmVkdXhGb3JtKHtcbiAgICAgICAgZm9ybTogbmFtZVxuICAgIH0pKGNvbXBvbmVudCk7XG5cbiAgICBsZXQgaXRlbXNOYW1lcyA9IGl0ZW1zLm1hcChpdGVtID0+IGl0ZW0ubmFtZSk7XG4gICAgY29uc3QgZmlsdGVySW5pdGlhbFZhbHVlcyA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1zTmFtZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9O1xuXG4gICAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlczogZmlsdGVySW5pdGlhbFZhbHVlcyhpbml0aWFsVmFsdWVzKSxcbiAgICAgICAgICAgIGl0ZW1zTmFtZXNcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBDb21wb25lbnQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tcG9uZW50KTtcblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gaXRlbXM9e2l0ZW1zfS8+XG59XG4iXX0=