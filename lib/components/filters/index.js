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
            _item$updateAfterChan = item.updateAfterChange,
            updateAfterChange = _item$updateAfterChan === void 0 ? false : _item$updateAfterChan,
            props = _objectWithoutProperties(item, ["type", "component", "filterOptions", "updateAfterChange"]);

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
        }, filterOptions), React.createElement(_reduxForm.Field, _extends({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm0iLCJwYWRkaW5nTGVmdCIsIml0ZW0iLCJtYXJnaW5SaWdodCIsImJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsIkZpbHRlciIsInZhbHVlcyIsInByb3BzIiwiaGFuZGxlRmlsdGVyIiwiaXRlbXNOYW1lcyIsIml0ZW1zIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VhcmNoIiwibWFwIiwiaSIsInR5cGUiLCJjb21wb25lbnQiLCJmaWx0ZXJPcHRpb25zIiwidXBkYXRlQWZ0ZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsImZpbHRlck5hbWVQcmVmaXgiLCJjcmVhdGVGaWx0ZXJGb3JtIiwibmFtZSIsImluaXRpYWxWYWx1ZXMiLCJmaWx0ZXJJbml0aWFsVmFsdWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsV0FBVyxFQUFFO0FBRFgsR0FESztBQUlYQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsV0FBVyxFQUFFO0FBRFgsR0FKSztBQU9YQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsWUFBWSxFQUFFO0FBRFY7QUFQRyxDQUFmOztJQW9CTUMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJGQUthLFVBQUNDLE1BQUQsRUFBWTtBQUN2QixZQUFLQyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JGLE1BQXhCLEVBQWdDLE1BQUtDLEtBQUwsQ0FBV0UsVUFBM0M7QUFDSCxLOzs7Ozs7OzRDQUV1QjtBQUNwQixhQUFPLEtBQVA7QUFDSDs7OzZCQUVRO0FBQUE7O0FBQUEsd0JBQzJCLEtBQUtGLEtBRGhDO0FBQUEsVUFDR0csS0FESCxlQUNHQSxLQURIO0FBQUEsVUFDVUMsWUFEVixlQUNVQSxZQURWO0FBR0wsYUFDSSxvQkFBQyxxQkFBRDtBQUFNLFFBQUEsUUFBUSxFQUFFQSxZQUFZLENBQUMsS0FBS0MsWUFBTixDQUE1QjtBQUFpRCxRQUFBLEtBQUssRUFBRWQsTUFBTSxDQUFDQztBQUEvRCxTQUNJLG9CQUFDLHFCQUFELFFBQ0ksb0JBQUMscUJBQUQsQ0FBTSxHQUFOLFFBQ0tXLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNaLElBQUQsRUFBT2EsQ0FBUCxFQUFhO0FBQUEsWUFDWkMsSUFEWSxHQUNpRWQsSUFEakUsQ0FDWmMsSUFEWTtBQUFBLFlBQ05DLFNBRE0sR0FDaUVmLElBRGpFLENBQ05lLFNBRE07QUFBQSxrQ0FDaUVmLElBRGpFLENBQ0tnQixhQURMO0FBQUEsWUFDS0EsYUFETCxvQ0FDcUIsRUFEckI7QUFBQSxvQ0FDaUVoQixJQURqRSxDQUN5QmlCLGlCQUR6QjtBQUFBLFlBQ3lCQSxpQkFEekIsc0NBQzZDLEtBRDdDO0FBQUEsWUFDdURYLEtBRHZELDRCQUNpRU4sSUFEakU7O0FBRXBCLFlBQUlrQixTQUFKOztBQUVBLFlBQUlILFNBQUosRUFBZTtBQUNYRyxVQUFBQSxTQUFTLEdBQUdILFNBQVo7QUFDSCxTQUZELE1BRU87QUFDSEcsVUFBQUEsU0FBUyxHQUFHLHNCQUFRSixJQUFSLENBQVo7QUFDSDs7QUFFRCxZQUFJRyxpQkFBSixFQUF1QjtBQUNuQlgsVUFBQUEsS0FBSyxDQUFDYSxZQUFOLEdBQXFCVCxZQUFZLENBQUMsTUFBSSxDQUFDQyxZQUFOLENBQWpDO0FBQ0g7O0FBRUQsZUFDSSxvQkFBQyxxQkFBRCxDQUFNLE1BQU47QUFBYSxVQUFBLEdBQUcsRUFBRUUsQ0FBbEI7QUFBcUIsVUFBQSxLQUFLLEVBQUU7QUFBNUIsV0FBbUNHLGFBQW5DLEdBQ0ksb0JBQUMsZ0JBQUQ7QUFDSSxVQUFBLEdBQUcsRUFBRUg7QUFEVCxXQUVRUCxLQUZSO0FBR0ksVUFBQSxTQUFTLEVBQUVZO0FBSGYsV0FESixDQURKO0FBUUgsT0F0QkEsQ0FETCxFQXdCSSxvQkFBQyxxQkFBRCxDQUFNLE1BQU47QUFBYSxRQUFBLGFBQWEsRUFBRSxRQUE1QjtBQUFzQyxRQUFBLEtBQUssRUFBRXJCLE1BQU0sQ0FBQ0s7QUFBcEQsU0FDSSxvQkFBQyx1QkFBRDtBQUFRLFFBQUEsT0FBTyxNQUFmO0FBQWdCLFFBQUEsSUFBSSxFQUFFO0FBQXRCLFFBREosQ0F4QkosQ0FESixDQURKLENBREo7QUFrQ0g7Ozs7RUFsRGdCa0IsS0FBSyxDQUFDRixTOztnQkFBckJkLE0sa0JBQ29CO0FBQ2xCaUIsRUFBQUEsZ0JBQWdCLEVBQUU7QUFEQSxDOztBQW9EbkIsU0FBU0MsZ0JBQVQsT0FBNkY7QUFBQSxNQUFqRUMsSUFBaUUsUUFBakVBLElBQWlFO0FBQUEsTUFBM0RDLGFBQTJELFFBQTNEQSxhQUEyRDtBQUFBLHdCQUE1Q2YsS0FBNEM7QUFBQSxNQUE1Q0EsS0FBNEMsMkJBQXBDLEVBQW9DO0FBQUEsNEJBQWhDTSxTQUFnQztBQUFBLE1BQWhDQSxTQUFnQywrQkFBcEJYLE1BQW9CO0FBQUEsTUFBVEUsS0FBUzs7QUFDaEcsTUFBSVksU0FBUyxHQUFHLDBCQUFVO0FBQ3RCcEIsSUFBQUEsSUFBSSxFQUFFeUI7QUFEZ0IsR0FBVixFQUViUixTQUZhLENBQWhCO0FBSUEsTUFBSVAsVUFBVSxHQUFHQyxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBWixJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDdUIsSUFBVDtBQUFBLEdBQWQsQ0FBakI7O0FBQ0EsTUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDcEIsTUFBRCxFQUFZO0FBQ3BDcUIsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVl0QixNQUFaLEVBQW9CdUIsT0FBcEIsQ0FBNEIsVUFBQUMsR0FBRyxFQUFJO0FBQy9CLFVBQUksQ0FBQ3JCLFVBQVUsQ0FBQ3NCLFFBQVgsQ0FBb0JELEdBQXBCLENBQUwsRUFBK0I7QUFDM0IsZUFBT3hCLE1BQU0sQ0FBQ3dCLEdBQUQsQ0FBYjtBQUNIO0FBQ0osS0FKRDtBQU1BLFdBQU94QixNQUFQO0FBQ0gsR0FSRDs7QUFVQSxNQUFNMEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVExQixLQUFSLEVBQWtCO0FBQ3RDLFdBQU87QUFDSGtCLE1BQUFBLGFBQWEsRUFBRUMsbUJBQW1CLENBQUNELGFBQUQsQ0FEL0I7QUFFSGhCLE1BQUFBLFVBQVUsRUFBVkE7QUFGRyxLQUFQO0FBSUgsR0FMRDs7QUFPQVUsRUFBQUEsU0FBUyxHQUFHLHlCQUFRYSxlQUFSLEVBQXlCYixTQUF6QixDQUFaO0FBRUEsU0FBTyxvQkFBQyxTQUFELGVBQWVaLEtBQWY7QUFBc0IsSUFBQSxLQUFLLEVBQUVHO0FBQTdCLEtBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQge1xuICAgIEdyaWQsXG4gICAgRm9ybSxcbiAgICBCdXR0b25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBmb3JtOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAyMFxuICAgIH0sXG4gICAgaXRlbToge1xuICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDFcbiAgICB9XG59O1xuXG5pbnRlcmZhY2UgRmlsdGVyUHJvcHMge1xuICAgIGhhbmRsZUZpbHRlcjogKCh2YWx1ZXM6IGFueSwgIG5hbWVzOiBhbnkpID0+IHZvaWQpO1xuICAgIGl0ZW1zOiBhbnlbXTtcbiAgICBoYW5kbGVTdWJtaXQ6ICh2YWx1ZXMpID0+IGFueTtcbiAgICBpdGVtc05hbWVzOiBhbnlbXTtcbiAgICBmaWx0ZXJOYW1lUHJlZml4OiBzdHJpbmc7XG59XG5cbmNsYXNzIEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGaWx0ZXJQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBmaWx0ZXJOYW1lUHJlZml4OiAnZmlsdGVyJ1xuICAgIH07XG5cbiAgICBoYW5kbGVTZWFyY2ggPSAodmFsdWVzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlRmlsdGVyKHZhbHVlcywgdGhpcy5wcm9wcy5pdGVtc05hbWVzKTtcbiAgICB9O1xuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGl0ZW1zLCBoYW5kbGVTdWJtaXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTZWFyY2gpfSBzdHlsZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBjb21wb25lbnQsIGZpbHRlck9wdGlvbnMgPSB7fSwgdXBkYXRlQWZ0ZXJDaGFuZ2UgPSBmYWxzZSwgLi4ucHJvcHMgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IENvbXBvbmVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudCA9IGZhY3RvcnkodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZUFmdGVyQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhhbmRsZUNoYW5nZSA9IGhhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNlYXJjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGtleT17aX0gd2lkdGg9ezN9IHsuLi5maWx0ZXJPcHRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDb21wb25lbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gdmVydGljYWxBbGlnbj17J2JvdHRvbSd9IHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgaWNvbj17J2ZpbHRlcid9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsdGVyRm9ybSh7IG5hbWUsIGluaXRpYWxWYWx1ZXMsIGl0ZW1zID0gW10sIGNvbXBvbmVudCA9IEZpbHRlciwgLi4ucHJvcHMgfSkge1xuICAgIGxldCBDb21wb25lbnQgPSByZWR1eEZvcm0oe1xuICAgICAgICBmb3JtOiBuYW1lXG4gICAgfSkoY29tcG9uZW50KTtcblxuICAgIGxldCBpdGVtc05hbWVzID0gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKTtcbiAgICBjb25zdCBmaWx0ZXJJbml0aWFsVmFsdWVzID0gKHZhbHVlcykgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbXNOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH07XG5cbiAgICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBmaWx0ZXJJbml0aWFsVmFsdWVzKGluaXRpYWxWYWx1ZXMpLFxuICAgICAgICAgICAgaXRlbXNOYW1lc1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIENvbXBvbmVudCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBpdGVtcz17aXRlbXN9Lz5cbn1cbiJdfQ==