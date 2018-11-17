"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var Suggest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Suggest, _React$Component);

  function Suggest() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Suggest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Suggest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      titleMap: null,
      isFetching: false
    });

    return _this;
  }

  _createClass(Suggest, [{
    key: "_mapOptions",
    value: function _mapOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return options.map(function (item) {
        return _objectSpread({}, item, {
          key: item.value,
          text: item.name
        }, item.extra || {});
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          titleMap = _this$props.titleMap,
          request = _this$props.request,
          _this$props$fluid = _this$props.fluid,
          fluid = _this$props$fluid === void 0 ? true : _this$props$fluid,
          _this$props$meta = _this$props.meta;
      _this$props$meta = _this$props$meta === void 0 ? {} : _this$props$meta;
      var _this$props$meta$touc = _this$props$meta.touched,
          touched = _this$props$meta$touc === void 0 ? false : _this$props$meta$touc,
          _this$props$meta$erro = _this$props$meta.error,
          error = _this$props$meta$erro === void 0 ? false : _this$props$meta$erro,
          input = _this$props.input,
          prompt = _this$props.prompt,
          _this$props$multi = _this$props.multi,
          multi = _this$props$multi === void 0 ? false : _this$props$multi,
          ajaxSource = _this$props.ajaxSource,
          ajaxCallback = _this$props.ajaxCallback,
          readonly = _this$props.readonly,
          _this$props$canDelete = _this$props.canDelete,
          canDelete = _this$props$canDelete === void 0 ? false : _this$props$canDelete,
          noResultsMessage = _this$props.noResultsMessage;
      var isFetching = this.state.isFetching;
      var title = React.createElement("span", null, label);

      if (this.state.titleMap) {
        titleMap = this.state.titleMap;
      }

      var handleChange = function handleChange(e, _ref) {
        var value = _ref.value;
        input.onChange(value);
      };

      var handleRemove = function handleRemove() {
        input.onChange(null);
      };

      var handleBlur = function handleBlur(e, _ref2) {
        var value = _ref2.value;
        input.onBlur(value);
      };

      var handleFocus =
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(ajaxSource && (!titleMap || titleMap.length === 0))) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return makeRequest();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function handleFocus() {
          return _ref3.apply(this, arguments);
        };
      }();

      var makeRequest =
      /*#__PURE__*/
      function () {
        var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(searchQuery) {
          var result;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this2.setState({
                    isFetching: true
                  });

                  if (!(ajaxSource || ajaxCallback)) {
                    _context2.next = 13;
                    break;
                  }

                  result = [];

                  if (!ajaxCallback) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.next = 6;
                  return ajaxCallback({
                    term: searchQuery
                  });

                case 6:
                  result = _context2.sent;
                  _context2.next = 12;
                  break;

                case 9:
                  _context2.next = 11;
                  return request.get(ajaxSource, {
                    term: searchQuery
                  }).then(function (json) {
                    return json.data.result;
                  });

                case 11:
                  result = _context2.sent;

                case 12:
                  _this2.setState({
                    titleMap: _this2._mapOptions(result),
                    isFetching: false
                  });

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function makeRequest(_x) {
          return _ref4.apply(this, arguments);
        };
      }();

      var handleSearchChange =
      /*#__PURE__*/
      function () {
        var _ref6 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(value, _ref5) {
          var searchQuery;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  searchQuery = _ref5.searchQuery;

                  if (!(searchQuery.length >= _this2.props.minLength)) {
                    _context3.next = 4;
                    break;
                  }

                  _context3.next = 4;
                  return makeRequest(searchQuery);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function handleSearchChange(_x2, _x3) {
          return _ref6.apply(this, arguments);
        };
      }();

      return React.createElement(_semanticUiReact.Form.Field, {
        error: touched && error
      }, title && React.createElement("div", {
        style: {
          display: 'inline-block',
          marginBottom: 0
        },
        className: 'field'
      }, React.createElement("label", null, title)), React.createElement("div", {
        style: {
          position: 'relative'
        }
      }, React.createElement(_semanticUiReact.Dropdown, _extends({
        placeholder: prompt,
        fluid: fluid,
        search: true,
        selection: true,
        disabled: readonly || isFetching,
        loading: isFetching
      }, input, {
        onChange: handleChange,
        onSearchChange: handleSearchChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        multiple: multi,
        style: {
          borderColor: '#999'
        },
        noResultsMessage: noResultsMessage,
        options: this._mapOptions(titleMap)
      })), input.value && canDelete && React.createElement(_semanticUiReact.Icon, {
        style: {
          float: 'right',
          top: 9,
          right: 20,
          display: 'inline',
          position: 'absolute',
          cursor: 'pointer'
        },
        onClick: handleRemove,
        name: "delete",
        color: "red"
      })));
    }
  }]);

  return Suggest;
}(React.Component);

exports.default = Suggest;

_defineProperty(Suggest, "defaultProps", {
  minLength: 2,
  noResultsMessage: 'По вашему запросу ничего не найдено',
  prompt: 'Выберите значение...'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlZHV4LWZvcm0vc3VnZ2VzdC9pbmRleC50c3giXSwibmFtZXMiOlsiU3VnZ2VzdCIsInRpdGxlTWFwIiwiaXNGZXRjaGluZyIsIm9wdGlvbnMiLCJtYXAiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJ0ZXh0IiwibmFtZSIsImV4dHJhIiwicHJvcHMiLCJsYWJlbCIsInJlcXVlc3QiLCJmbHVpZCIsIm1ldGEiLCJ0b3VjaGVkIiwiZXJyb3IiLCJpbnB1dCIsInByb21wdCIsIm11bHRpIiwiYWpheFNvdXJjZSIsImFqYXhDYWxsYmFjayIsInJlYWRvbmx5IiwiY2FuRGVsZXRlIiwibm9SZXN1bHRzTWVzc2FnZSIsInN0YXRlIiwidGl0bGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwib25DaGFuZ2UiLCJoYW5kbGVSZW1vdmUiLCJoYW5kbGVCbHVyIiwib25CbHVyIiwiaGFuZGxlRm9jdXMiLCJsZW5ndGgiLCJtYWtlUmVxdWVzdCIsInNlYXJjaFF1ZXJ5Iiwic2V0U3RhdGUiLCJyZXN1bHQiLCJ0ZXJtIiwiZ2V0IiwidGhlbiIsImpzb24iLCJkYXRhIiwiX21hcE9wdGlvbnMiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJtaW5MZW5ndGgiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJib3JkZXJDb2xvciIsImZsb2F0IiwidG9wIiwicmlnaHQiLCJjdXJzb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFPVDtBQUNKQyxNQUFBQSxRQUFRLEVBQUUsSUFETjtBQUVKQyxNQUFBQSxVQUFVLEVBQUU7QUFGUixLOzs7Ozs7O2tDQUs4QjtBQUFBLFVBQTFCQyxPQUEwQix1RUFBSixFQUFJO0FBQ2xDLGFBQU9BLE9BQU8sQ0FBQ0MsR0FBUixDQUFZ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TUFBTSxFQUFFO0FBTkwsU0FEWDtBQVNJLFFBQUEsT0FBTyxFQUFFeEIsWUFUYjtBQVVJLFFBQUEsSUFBSSxFQUFDLFFBVlQ7QUFVa0IsUUFBQSxLQUFLLEVBQUM7QUFWeEIsUUFsQlIsQ0FOSixDQURKO0FBeUNIOzs7O0VBdklnQ3lCLEtBQUssQ0FBQ0MsUzs7OztnQkFBdEJ6RCxPLGtCQUNLO0FBQ2xCK0MsRUFBQUEsU0FBUyxFQUFFLENBRE87QUFFbEJ0QixFQUFBQSxnQkFBZ0IsRUFBRSxxQ0FGQTtBQUdsQk4sRUFBQUEsTUFBTSxFQUFFO0FBSFUsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgV3JhcHBlZEZpZWxkUHJvcHMsIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7XG4gICAgRHJvcGRvd24sXG4gICAgRm9ybSxcbiAgICBJY29uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgeyBSZXF1ZXN0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbnR5cGUgVGl0bGVNYXAgPSB7IHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyB8IG51bWJlciB9ICYgeyBbcHJvcDogc3RyaW5nXTogYW55IH07XG5cbmludGVyZmFjZSBTdWdnZXN0UHJvcHMge1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIHRpdGxlTWFwPzogVGl0bGVNYXBbXTtcbiAgICByZXF1ZXN0OiBSZXF1ZXN0SW50ZXJmYWNlLFxuICAgIGZsdWlkOiBib29sZWFuO1xuICAgIG1pbkxlbmd0aDogbnVtYmVyO1xuICAgIHByb21wdDogc3RyaW5nO1xuICAgIG11bHRpOiBib29sZWFuO1xuICAgIGFqYXhTb3VyY2U6IHN0cmluZztcbiAgICBhamF4Q2FsbGJhY2socGFyYW1zOiB7IHRlcm06IHN0cmluZywgW3Byb3A6IHN0cmluZ106IGFueSB9KTtcbiAgICByZWFkb25seTogYm9vbGVhbjtcbiAgICBjYW5EZWxldGU6IGJvb2xlYW47XG4gICAgbm9SZXN1bHRzTWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWdnZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN1Z2dlc3RQcm9wcyAmIFdyYXBwZWRGaWVsZFByb3BzICYgRmllbGQsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbWluTGVuZ3RoOiAyLFxuICAgICAgICBub1Jlc3VsdHNNZXNzYWdlOiAn0J/QviDQstCw0YjQtdC80YMg0LfQsNC/0YDQvtGB0YMg0L3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4nLFxuICAgICAgICBwcm9tcHQ6ICfQktGL0LHQtdGA0LjRgtC1INC30L3QsNGH0LXQvdC40LUuLi4nXG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICB0aXRsZU1hcDogbnVsbCxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgX21hcE9wdGlvbnMob3B0aW9uczogVGl0bGVNYXBbXSA9IFtdKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICBrZXk6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIC4uLihpdGVtLmV4dHJhIHx8IHt9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgdGl0bGVNYXAsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgZmx1aWQgPSB0cnVlLFxuICAgICAgICAgICAgbWV0YTogeyB0b3VjaGVkID0gZmFsc2UsIGVycm9yID0gZmFsc2UgfSA9IHt9LFxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICBwcm9tcHQsXG4gICAgICAgICAgICBtdWx0aSA9IGZhbHNlLFxuICAgICAgICAgICAgYWpheFNvdXJjZSxcbiAgICAgICAgICAgIGFqYXhDYWxsYmFjayxcbiAgICAgICAgICAgIHJlYWRvbmx5LFxuICAgICAgICAgICAgY2FuRGVsZXRlID0gZmFsc2UsXG4gICAgICAgICAgICBub1Jlc3VsdHNNZXNzYWdlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB7IGlzRmV0Y2hpbmcgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHRpdGxlID0gPHNwYW4+e2xhYmVsfTwvc3Bhbj47XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGl0bGVNYXApIHtcbiAgICAgICAgICAgIHRpdGxlTWFwID0gdGhpcy5zdGF0ZS50aXRsZU1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlucHV0Lm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5vbkNoYW5nZShudWxsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVCbHVyID0gKGUsIHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaW5wdXQub25CbHVyKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVGb2N1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhamF4U291cmNlICYmICghdGl0bGVNYXAgfHwgdGl0bGVNYXAubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG1ha2VSZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWFrZVJlcXVlc3QgPSBhc3luYyAoc2VhcmNoUXVlcnk/KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmIChhamF4U291cmNlIHx8IGFqYXhDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoYWpheENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGFqYXhDYWxsYmFjayh7IHRlcm06IHNlYXJjaFF1ZXJ5IH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QuZ2V0KGFqYXhTb3VyY2UsIHsgdGVybTogc2VhcmNoUXVlcnkgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlTWFwOiB0aGlzLl9tYXBPcHRpb25zKHJlc3VsdCksXG4gICAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gYXN5bmMgKHZhbHVlLCB7IHNlYXJjaFF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICAgIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggPj0gdGhpcy5wcm9wcy5taW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBtYWtlUmVxdWVzdChzZWFyY2hRdWVyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtLkZpZWxkIGVycm9yPXt0b3VjaGVkICYmIGVycm9yfT5cbiAgICAgICAgICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW5Cb3R0b206IDAgfX0gY2xhc3NOYW1lPXsnZmllbGQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9e3Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZG9ubHkgfHwgaXNGZXRjaGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2lzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e211bHRpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICcjOTk5JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9SZXN1bHRzTWVzc2FnZT17bm9SZXN1bHRzTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuX21hcE9wdGlvbnModGl0bGVNYXApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7aW5wdXQudmFsdWUgJiYgY2FuRGVsZXRlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZW1vdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVsZXRlJyBjb2xvcj0ncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==