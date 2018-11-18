"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

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

var sortMap = {
  'asc': 'ascending',
  'desc': 'descending'
};

var HeaderCell =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderCell, _React$Component);

  function HeaderCell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSort", function () {
      var _this$props = _this.props,
          provider = _this$props.provider,
          item = _this$props.item,
          sort = _this$props.sort;

      if (item.sortable) {
        provider.setSortField(item.field, sort === 'asc' ? 'desc' : 'asc');
      }
    });

    return _this;
  }

  _createClass(HeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          sort = _this$props2.sort;
      var sorted;

      if (sort) {
        sorted = sortMap[sort];
      }

      return React.createElement(_semanticUiReact.Table.HeaderCell, {
        sorted: sorted,
        onClick: this.handleSort
      }, item.title || '');
    }
  }]);

  return HeaderCell;
}(React.Component);

exports.default = HeaderCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlYWRlci9jZWxsLnRzeCJdLCJuYW1lcyI6WyJzb3J0TWFwIiwiSGVhZGVyQ2VsbCIsInByb3BzIiwicHJvdmlkZXIiLCJpdGVtIiwic29ydCIsInNvcnRhYmxlIiwic2V0U29ydEZpZWxkIiwiZmllbGQiLCJzb3J0ZWQiLCJoYW5kbGVTb3J0IiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNQSxPQUFPLEdBQUc7QUFDWixTQUFPLFdBREs7QUFFWixVQUFRO0FBRkksQ0FBaEI7O0lBV3FCQyxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUZBQ0osWUFBTTtBQUFBLHdCQUNrQixNQUFLQyxLQUR2QjtBQUFBLFVBQ1BDLFFBRE8sZUFDUEEsUUFETztBQUFBLFVBQ0dDLElBREgsZUFDR0EsSUFESDtBQUFBLFVBQ1NDLElBRFQsZUFDU0EsSUFEVDs7QUFFZixVQUFJRCxJQUFJLENBQUNFLFFBQVQsRUFBbUI7QUFDZkgsUUFBQUEsUUFBUSxDQUFDSSxZQUFULENBQXNCSCxJQUFJLENBQUNJLEtBQTNCLEVBQW1DSCxJQUFJLEtBQUssS0FBVixHQUFtQixNQUFuQixHQUE0QixLQUE5RDtBQUNIO0FBQ0osSzs7Ozs7Ozs2QkFFUTtBQUFBLHlCQUNrQixLQUFLSCxLQUR2QjtBQUFBLFVBQ0dFLElBREgsZ0JBQ0dBLElBREg7QUFBQSxVQUNTQyxJQURULGdCQUNTQSxJQURUO0FBRUwsVUFBSUksTUFBSjs7QUFFQSxVQUFJSixJQUFKLEVBQVU7QUFDTkksUUFBQUEsTUFBTSxHQUFHVCxPQUFPLENBQUNLLElBQUQsQ0FBaEI7QUFDSDs7QUFFRCxhQUNJLG9CQUFDLHNCQUFELENBQU8sVUFBUDtBQUNJLFFBQUEsTUFBTSxFQUFFSSxNQURaO0FBRUksUUFBQSxPQUFPLEVBQUUsS0FBS0M7QUFGbEIsU0FHRU4sSUFBSSxDQUFDTyxLQUFMLElBQWMsRUFIaEIsQ0FESjtBQU1IOzs7O0VBdEJtQ0MsS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRhYmxlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSBcIi4uL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyXCI7XG5cbmNvbnN0IHNvcnRNYXAgPSB7XG4gICAgJ2FzYyc6ICdhc2NlbmRpbmcnLFxuICAgICdkZXNjJzogJ2Rlc2NlbmRpbmcnXG59O1xuXG5pbnRlcmZhY2UgSGVhZGVyQ2VsbFByb3BzIHtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcixcbiAgICBpdGVtOiBhbnksXG4gICAgc29ydDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEhlYWRlckNlbGxQcm9wcywge30+IHtcbiAgICBoYW5kbGVTb3J0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHByb3ZpZGVyLCBpdGVtLCBzb3J0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoaXRlbS5zb3J0YWJsZSkge1xuICAgICAgICAgICAgcHJvdmlkZXIuc2V0U29ydEZpZWxkKGl0ZW0uZmllbGQsIChzb3J0ID09PSAnYXNjJykgPyAnZGVzYycgOiAnYXNjJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGl0ZW0sIHNvcnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzb3J0ZWQ7XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHNvcnRlZCA9IHNvcnRNYXBbc29ydF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGxcbiAgICAgICAgICAgICAgICBzb3J0ZWQ9e3NvcnRlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNvcnR9XG4gICAgICAgICAgICA+e2l0ZW0udGl0bGUgfHwgJyd9PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICApXG4gICAgfVxufVxuIl19