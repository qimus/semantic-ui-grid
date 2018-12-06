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

var CheckboxColumn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxColumn, _React$Component);

  function CheckboxColumn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckboxColumn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxColumn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: _this.props.value
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      e.preventDefault();
      var isChecked = !_this.state.value;

      _this.setState({
        value: isChecked
      });

      if (_this.props.handleChange) {
        _this.props.handleChange(isChecked, _this.props.row);
      }
    });

    return _this;
  }

  _createClass(CheckboxColumn, [{
    key: "render",
    value: function render() {
      return React.createElement(_semanticUiReact.Table.Cell, {
        textAlign: 'center'
      }, React.createElement(_semanticUiReact.Checkbox, {
        checked: this.state.value,
        onChange: this.handleChange
      }));
    }
  }]);

  return CheckboxColumn;
}(React.Component);

exports.default = CheckboxColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvY2hlY2tib3gvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Q29sdW1uIiwidmFsdWUiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzQ2hlY2tlZCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJyb3ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFXcUJBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFDVDtBQUNKQyxNQUFBQSxLQUFLLEVBQUUsTUFBS0MsS0FBTCxDQUFXRDtBQURkLEs7OzJGQUlPLFVBQUNFLENBQUQsRUFBTztBQUNsQkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLENBQUMsTUFBS0MsS0FBTCxDQUFXTCxLQUE1Qjs7QUFDQSxZQUFLTSxRQUFMLENBQWM7QUFDVk4sUUFBQUEsS0FBSyxFQUFFSTtBQURHLE9BQWQ7O0FBR0EsVUFBSSxNQUFLSCxLQUFMLENBQVdNLFlBQWYsRUFBNkI7QUFDekIsY0FBS04sS0FBTCxDQUFXTSxZQUFYLENBQXdCSCxTQUF4QixFQUFtQyxNQUFLSCxLQUFMLENBQVdPLEdBQTlDO0FBQ0g7QUFDSixLOzs7Ozs7OzZCQUVRO0FBRUwsYUFDSSxvQkFBQyxzQkFBRCxDQUFPLElBQVA7QUFBWSxRQUFBLFNBQVMsRUFBRTtBQUF2QixTQUNJLG9CQUFDLHlCQUFEO0FBQ0ksUUFBQSxPQUFPLEVBQUUsS0FBS0gsS0FBTCxDQUFXTCxLQUR4QjtBQUVJLFFBQUEsUUFBUSxFQUFFLEtBQUtPO0FBRm5CLFFBREosQ0FESjtBQU9IOzs7O0VBekJ1Q0UsS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIENoZWNrYm94LFxuICAgIFRhYmxlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbnRlcmZhY2UgQ2hlY2tib3hDb2x1bW5Qcm9wcyB7XG4gICAgdmFsdWU6IGJvb2xlYW4sXG4gICAgaGFuZGxlQ2hhbmdlOiAoaXNDaGVja2VkOiBib29sZWFuLCBpdGVtOiBhbnkpID0+IHZvaWQsXG4gICAgcm93OiBvYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3hDb2x1bW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q2hlY2tib3hDb2x1bW5Qcm9wcywge30+IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWVcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgaXNDaGVja2VkID0gIXRoaXMuc3RhdGUudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWU6IGlzQ2hlY2tlZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUNoYW5nZShpc0NoZWNrZWQsIHRoaXMucHJvcHMucm93KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuQ2VsbCB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgIClcbiAgICB9XG59Il19