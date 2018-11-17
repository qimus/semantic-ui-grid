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
      var _this$props = this.props,
          items = _this$props.items,
          handleSubmit = _this$props.handleSubmit;
      return React.createElement(_semanticUiReact.Form, {
        onSubmit: handleSubmit(this.handleSearch),
        style: styles.form
      }, React.createElement(_semanticUiReact.Grid, null, React.createElement(_semanticUiReact.Grid.Row, null, items.map(function (item, i) {
        var type = item.type,
            props = _objectWithoutProperties(item, ["type"]);

        var Component = (0, _factory.factory)(type);
        return React.createElement("div", {
          style: styles.item,
          key: i
        }, React.createElement(_reduxForm.Field, _extends({
          key: i,
          component: Component
        }, props)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm0iLCJwYWRkaW5nTGVmdCIsIml0ZW0iLCJtYXJnaW5SaWdodCIsImJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsIkZpbHRlciIsInZhbHVlcyIsInByb3BzIiwiaGFuZGxlRmlsdGVyIiwiaXRlbXNOYW1lcyIsIml0ZW1zIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VhcmNoIiwibWFwIiwiaSIsInR5cGUiLCJDb21wb25lbnQiLCJSZWFjdCIsImNyZWF0ZUZpbHRlckZvcm0iLCJuYW1lIiwiaW5pdGlhbFZhbHVlcyIsImNvbXBvbmVudCIsImZpbHRlckluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluY2x1ZGVzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFdBQVcsRUFBRTtBQURYLEdBREs7QUFJWEMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFdBQVcsRUFBRTtBQURYLEdBSks7QUFPWEMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLFlBQVksRUFBRTtBQURWO0FBUEcsQ0FBZjs7SUFtQk1DLE07Ozs7Ozs7Ozs7Ozs7Ozs7OzsyRkFDYSxVQUFDQyxNQUFELEVBQVk7QUFDdkIsWUFBS0MsS0FBTCxDQUFXQyxZQUFYLENBQXdCRixNQUF4QixFQUFnQyxNQUFLQyxLQUFMLENBQVdFLFVBQTNDO0FBQ0gsSzs7Ozs7Ozs0Q0FFdUI7QUFDcEIsYUFBTyxLQUFQO0FBQ0g7Ozs2QkFFUTtBQUFBLHdCQUMyQixLQUFLRixLQURoQztBQUFBLFVBQ0dHLEtBREgsZUFDR0EsS0FESDtBQUFBLFVBQ1VDLFlBRFYsZUFDVUEsWUFEVjtBQUdMLGFBQ0ksb0JBQUMscUJBQUQ7QUFBTSxRQUFBLFFBQVEsRUFBRUEsWUFBWSxDQUFDLEtBQUtDLFlBQU4sQ0FBNUI7QUFBaUQsUUFBQSxLQUFLLEVBQUVkLE1BQU0sQ0FBQ0M7QUFBL0QsU0FDSSxvQkFBQyxxQkFBRCxRQUNJLG9CQUFDLHFCQUFELENBQU0sR0FBTixRQUNLVyxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDWixJQUFELEVBQU9hLENBQVAsRUFBYTtBQUFBLFlBQ1pDLElBRFksR0FDT2QsSUFEUCxDQUNaYyxJQURZO0FBQUEsWUFDSFIsS0FERyw0QkFDT04sSUFEUDs7QUFFcEIsWUFBSWUsU0FBUyxHQUFHLHNCQUFRRCxJQUFSLENBQWhCO0FBRUEsZUFDSTtBQUFLLFVBQUEsS0FBSyxFQUFFakIsTUFBTSxDQUFDRyxJQUFuQjtBQUF5QixVQUFBLEdBQUcsRUFBRWE7QUFBOUIsV0FDSSxvQkFBQyxnQkFBRDtBQUFPLFVBQUEsR0FBRyxFQUFFQSxDQUFaO0FBQWUsVUFBQSxTQUFTLEVBQUVFO0FBQTFCLFdBQXlDVCxLQUF6QyxFQURKLENBREo7QUFLSCxPQVRBLENBREwsRUFXQSxvQkFBQyxxQkFBRCxDQUFNLE1BQU47QUFBYSxRQUFBLGFBQWEsRUFBRSxRQUE1QjtBQUFzQyxRQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDSztBQUFwRCxTQUNJLG9CQUFDLHVCQUFEO0FBQVEsUUFBQSxPQUFPLE1BQWY7QUFBZ0IsUUFBQSxJQUFJLEVBQUU7QUFBdEIsUUFESixDQVhBLENBREosQ0FESixDQURKO0FBcUJIOzs7O0VBakNnQmMsS0FBSyxDQUFDRCxTOztBQW9DcEIsU0FBU0UsZ0JBQVQsT0FBNkY7QUFBQSxNQUFqRUMsSUFBaUUsUUFBakVBLElBQWlFO0FBQUEsTUFBM0RDLGFBQTJELFFBQTNEQSxhQUEyRDtBQUFBLHdCQUE1Q1YsS0FBNEM7QUFBQSxNQUE1Q0EsS0FBNEMsMkJBQXBDLEVBQW9DO0FBQUEsNEJBQWhDVyxTQUFnQztBQUFBLE1BQWhDQSxTQUFnQywrQkFBcEJoQixNQUFvQjtBQUFBLE1BQVRFLEtBQVM7O0FBQ2hHLE1BQUlTLFNBQVMsR0FBRywwQkFBVTtBQUN0QmpCLElBQUFBLElBQUksRUFBRW9CO0FBRGdCLEdBQVYsRUFFYkUsU0FGYSxDQUFoQjtBQUlBLE1BQUlaLFVBQVUsR0FBR0MsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQVosSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ2tCLElBQVQ7QUFBQSxHQUFkLENBQWpCOztBQUNBLE1BQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ2hCLE1BQUQsRUFBWTtBQUNwQ2lCLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbEIsTUFBWixFQUFvQm1CLE9BQXBCLENBQTRCLFVBQUFDLEdBQUcsRUFBSTtBQUMvQixVQUFJLENBQUNqQixVQUFVLENBQUNrQixRQUFYLENBQW9CRCxHQUFwQixDQUFMLEVBQStCO0FBQzNCLGVBQU9wQixNQUFNLENBQUNvQixHQUFELENBQWI7QUFDSDtBQUNKLEtBSkQ7QUFNQSxXQUFPcEIsTUFBUDtBQUNILEdBUkQ7O0FBVUEsTUFBTXNCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRdEIsS0FBUixFQUFrQjtBQUN0QyxXQUFPO0FBQ0hhLE1BQUFBLGFBQWEsRUFBRUUsbUJBQW1CLG1CQUFNRixhQUFOLEVBRC9CO0FBRUhYLE1BQUFBLFVBQVUsRUFBVkE7QUFGRyxLQUFQO0FBSUgsR0FMRDs7QUFPQU8sRUFBQUEsU0FBUyxHQUFHLHlCQUFRWSxlQUFSLEVBQXlCWixTQUF6QixDQUFaO0FBRUEsU0FBTyxvQkFBQyxTQUFELGVBQWVULEtBQWY7QUFBc0IsSUFBQSxLQUFLLEVBQUVHO0FBQTdCLEtBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQge1xuICAgIEdyaWQsXG4gICAgRm9ybSxcbiAgICBCdXR0b25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBmb3JtOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAyMFxuICAgIH0sXG4gICAgaXRlbToge1xuICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDFcbiAgICB9XG59O1xuXG5pbnRlcmZhY2UgRmlsdGVyUHJvcHMge1xuICAgIGhhbmRsZUZpbHRlcjogKCh2YWx1ZXM6IGFueSwgIG5hbWVzOiBhbnkpID0+IHZvaWQpO1xuICAgIGl0ZW1zOiBhbnlbXTtcbiAgICBoYW5kbGVTdWJtaXQ6ICh2YWx1ZXMpID0+IGFueTtcbiAgICBpdGVtc05hbWVzOiBhbnlbXTtcbn1cblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZpbHRlclByb3BzLCB7fT4ge1xuICAgIGhhbmRsZVNlYXJjaCA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVGaWx0ZXIodmFsdWVzLCB0aGlzLnByb3BzLml0ZW1zTmFtZXMpO1xuICAgIH07XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXRlbXMsIGhhbmRsZVN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNlYXJjaCl9IHN0eWxlPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHR5cGUsIC4uLnByb3BzIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBDb21wb25lbnQgPSBmYWN0b3J5KHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLml0ZW19IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQga2V5PXtpfSBjb21wb25lbnQ9e0NvbXBvbmVudH0gey4uLnByb3BzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gdmVydGljYWxBbGlnbj17J2JvdHRvbSd9IHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBpY29uPXsnZmlsdGVyJ30vPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlckZvcm0oeyBuYW1lLCBpbml0aWFsVmFsdWVzLCBpdGVtcyA9IFtdLCBjb21wb25lbnQgPSBGaWx0ZXIsIC4uLnByb3BzIH0pIHtcbiAgICBsZXQgQ29tcG9uZW50ID0gcmVkdXhGb3JtKHtcbiAgICAgICAgZm9ybTogbmFtZVxuICAgIH0pKGNvbXBvbmVudCk7XG5cbiAgICBsZXQgaXRlbXNOYW1lcyA9IGl0ZW1zLm1hcChpdGVtID0+IGl0ZW0ubmFtZSk7XG4gICAgY29uc3QgZmlsdGVySW5pdGlhbFZhbHVlcyA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1zTmFtZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9O1xuXG4gICAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlczogZmlsdGVySW5pdGlhbFZhbHVlcyh7IC4uLmluaXRpYWxWYWx1ZXMgfSksXG4gICAgICAgICAgICBpdGVtc05hbWVzXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29tcG9uZW50ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IGl0ZW1zPXtpdGVtc30vPlxufSJdfQ==