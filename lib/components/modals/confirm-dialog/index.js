"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _i18n = _interopRequireDefault(require("../../i18n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ConfirmDialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfirmDialog, _React$Component);

  function ConfirmDialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfirmDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfirmDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: _this.props.open || false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        open: false
      });

      if (_this.props.closeCallback) {
        _this.props.closeCallback();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleConfirm", function (e, item) {
      if (_this.props.confirmCallback) {
        _this.props.confirmCallback();
      }

      _this.handleClose();
    });

    return _this;
  }

  _createClass(ConfirmDialog, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.open != this.props.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var _this$props = this.props,
          header = _this$props.header,
          content = _this$props.content,
          cancelButtonTitle = _this$props.cancelButtonTitle,
          confirmButtonTitle = _this$props.confirmButtonTitle;
      return React.createElement(_semanticUiReact.Confirm, {
        open: open,
        header: header,
        content: content,
        onCancel: this.handleClose,
        onConfirm: this.handleConfirm,
        cancelButton: cancelButtonTitle,
        confirmButton: confirmButtonTitle
      });
    }
  }]);

  return ConfirmDialog;
}(React.Component);

_defineProperty(ConfirmDialog, "defaultProps", {
  header: _i18n.default.getMessage('confirm_dialog.confirm_header', 'Подтверждение'),
  content: _i18n.default.getMessage('confirm_dialog.message', 'Вы уверены что хотите совершить данное действие?'),
  cancelButtonTitle: _i18n.default.getMessage('confirm_dialog.no', 'Нет'),
  confirmButtonTitle: _i18n.default.getMessage('confirm_dialog.yes', 'Да')
});

var _default = ConfirmDialog;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9jb25maXJtLWRpYWxvZy9pbmRleC50c3giXSwibmFtZXMiOlsiQ29uZmlybURpYWxvZyIsIm9wZW4iLCJwcm9wcyIsInNldFN0YXRlIiwiY2xvc2VDYWxsYmFjayIsImUiLCJpdGVtIiwiY29uZmlybUNhbGxiYWNrIiwiaGFuZGxlQ2xvc2UiLCJuZXh0UHJvcHMiLCJzdGF0ZSIsImhlYWRlciIsImNvbnRlbnQiLCJjYW5jZWxCdXR0b25UaXRsZSIsImNvbmZpcm1CdXR0b25UaXRsZSIsImhhbmRsZUNvbmZpcm0iLCJSZWFjdCIsIkNvbXBvbmVudCIsImkxOG4iLCJnZXRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBWU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFRTTtBQUNKQyxNQUFBQSxJQUFJLEVBQUUsTUFBS0MsS0FBTCxDQUFXRCxJQUFYLElBQW1CO0FBRHJCLEs7OzBGQVlNLFlBQU07QUFDaEIsWUFBS0UsUUFBTCxDQUFjO0FBQUVGLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQWQ7O0FBRUEsVUFBSSxNQUFLQyxLQUFMLENBQVdFLGFBQWYsRUFBOEI7QUFDMUIsY0FBS0YsS0FBTCxDQUFXRSxhQUFYO0FBQ0g7QUFDSixLOzs0RkFFZSxVQUFDQyxDQUFELEVBQUlDLElBQUosRUFBYTtBQUN6QixVQUFJLE1BQUtKLEtBQUwsQ0FBV0ssZUFBZixFQUFnQztBQUM1QixjQUFLTCxLQUFMLENBQVdLLGVBQVg7QUFDSDs7QUFFRCxZQUFLQyxXQUFMO0FBQ0gsSzs7Ozs7OztxREF0QmdDQyxTLEVBQVc7QUFDeEMsVUFBSUEsU0FBUyxDQUFDUixJQUFWLElBQWtCLEtBQUtDLEtBQUwsQ0FBV0QsSUFBakMsRUFBdUM7QUFDbkMsYUFBS0UsUUFBTCxDQUFjO0FBQ1ZGLFVBQUFBLElBQUksRUFBRVEsU0FBUyxDQUFDUjtBQUROLFNBQWQ7QUFHSDtBQUNKOzs7NkJBa0JRO0FBQUEsVUFDR0EsSUFESCxHQUNZLEtBQUtTLEtBRGpCLENBQ0dULElBREg7QUFBQSx3QkFFOEQsS0FBS0MsS0FGbkU7QUFBQSxVQUVHUyxNQUZILGVBRUdBLE1BRkg7QUFBQSxVQUVXQyxPQUZYLGVBRVdBLE9BRlg7QUFBQSxVQUVvQkMsaUJBRnBCLGVBRW9CQSxpQkFGcEI7QUFBQSxVQUV1Q0Msa0JBRnZDLGVBRXVDQSxrQkFGdkM7QUFJTCxhQUNJLG9CQUFDLHdCQUFEO0FBQ0ksUUFBQSxJQUFJLEVBQUViLElBRFY7QUFFSSxRQUFBLE1BQU0sRUFBRVUsTUFGWjtBQUdJLFFBQUEsT0FBTyxFQUFFQyxPQUhiO0FBSUksUUFBQSxRQUFRLEVBQUUsS0FBS0osV0FKbkI7QUFLSSxRQUFBLFNBQVMsRUFBRSxLQUFLTyxhQUxwQjtBQU1JLFFBQUEsWUFBWSxFQUFFRixpQkFObEI7QUFPSSxRQUFBLGFBQWEsRUFBRUM7QUFQbkIsUUFESjtBQVdIOzs7O0VBbkR1QkUsS0FBSyxDQUFDQyxTOztnQkFBNUJqQixhLGtCQUNvQjtBQUNsQlcsRUFBQUEsTUFBTSxFQUFFTyxjQUFLQyxVQUFMLENBQWdCLCtCQUFoQixFQUFpRCxlQUFqRCxDQURVO0FBRWxCUCxFQUFBQSxPQUFPLEVBQUVNLGNBQUtDLFVBQUwsQ0FBZ0Isd0JBQWhCLEVBQTBDLGtEQUExQyxDQUZTO0FBR2xCTixFQUFBQSxpQkFBaUIsRUFBRUssY0FBS0MsVUFBTCxDQUFnQixtQkFBaEIsRUFBcUMsS0FBckMsQ0FIRDtBQUlsQkwsRUFBQUEsa0JBQWtCLEVBQUVJLGNBQUtDLFVBQUwsQ0FBZ0Isb0JBQWhCLEVBQXNDLElBQXRDO0FBSkYsQzs7ZUFxRFhuQixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIENvbmZpcm1cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi9pMThuJ1xuXG5pbnRlcmZhY2UgQ29uZmlybURpYWxvZ1Byb3BzIHtcbiAgICBvcGVuOiBib29sZWFuO1xuICAgIGNsb3NlQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgY29uZmlybUNhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIGhlYWRlcjogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBjYW5jZWxCdXR0b25UaXRsZTogc3RyaW5nO1xuICAgIGNvbmZpcm1CdXR0b25UaXRsZTogc3RyaW5nO1xufVxuXG5jbGFzcyBDb25maXJtRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvbmZpcm1EaWFsb2dQcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBoZWFkZXI6IGkxOG4uZ2V0TWVzc2FnZSgnY29uZmlybV9kaWFsb2cuY29uZmlybV9oZWFkZXInLCAn0J/QvtC00YLQstC10YDQttC00LXQvdC40LUnKSxcbiAgICAgICAgY29udGVudDogaTE4bi5nZXRNZXNzYWdlKCdjb25maXJtX2RpYWxvZy5tZXNzYWdlJywgJ9CS0Ysg0YPQstC10YDQtdC90Ysg0YfRgtC+INGF0L7RgtC40YLQtSDRgdC+0LLQtdGA0YjQuNGC0Ywg0LTQsNC90L3QvtC1INC00LXQudGB0YLQstC40LU/JyksXG4gICAgICAgIGNhbmNlbEJ1dHRvblRpdGxlOiBpMThuLmdldE1lc3NhZ2UoJ2NvbmZpcm1fZGlhbG9nLm5vJywgJ9Cd0LXRgicpLFxuICAgICAgICBjb25maXJtQnV0dG9uVGl0bGU6IGkxOG4uZ2V0TWVzc2FnZSgnY29uZmlybV9kaWFsb2cueWVzJywgJ9CU0LAnKVxuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgb3BlbjogdGhpcy5wcm9wcy5vcGVuIHx8IGZhbHNlXG4gICAgfTtcblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLm9wZW4gIT0gdGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcGVuOiBuZXh0UHJvcHMub3BlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGhhbmRsZUNvbmZpcm0gPSAoZSwgaXRlbSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maXJtQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybUNhbGxiYWNrKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBoZWFkZXIsIGNvbnRlbnQsIGNhbmNlbEJ1dHRvblRpdGxlLCBjb25maXJtQnV0dG9uVGl0bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb25maXJtXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbj17Y2FuY2VsQnV0dG9uVGl0bGV9XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbj17Y29uZmlybUJ1dHRvblRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURpYWxvZzsiXX0=