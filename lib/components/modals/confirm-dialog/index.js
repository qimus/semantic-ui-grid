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
  header: 'Подтверждение',
  content: 'Вы уверены что хотите совершить данное действие?',
  cancelButtonTitle: 'Нет',
  confirmButtonTitle: 'Да'
});

var _default = ConfirmDialog;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9jb25maXJtLWRpYWxvZy9pbmRleC50c3giXSwibmFtZXMiOlsiQ29uZmlybURpYWxvZyIsIm9wZW4iLCJwcm9wcyIsInNldFN0YXRlIiwiY2xvc2VDYWxsYmFjayIsImUiLCJpdGVtIiwiY29uZmlybUNhbGxiYWNrIiwiaGFuZGxlQ2xvc2UiLCJuZXh0UHJvcHMiLCJzdGF0ZSIsImhlYWRlciIsImNvbnRlbnQiLCJjYW5jZWxCdXR0b25UaXRsZSIsImNvbmZpcm1CdXR0b25UaXRsZSIsImhhbmRsZUNvbmZpcm0iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFjTUEsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29GQVFNO0FBQ0pDLE1BQUFBLElBQUksRUFBRSxNQUFLQyxLQUFMLENBQVdELElBQVgsSUFBbUI7QUFEckIsSzs7MEZBWU0sWUFBTTtBQUNoQixZQUFLRSxRQUFMLENBQWM7QUFBRUYsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBZDs7QUFFQSxVQUFJLE1BQUtDLEtBQUwsQ0FBV0UsYUFBZixFQUE4QjtBQUMxQixjQUFLRixLQUFMLENBQVdFLGFBQVg7QUFDSDtBQUNKLEs7OzRGQUVlLFVBQUNDLENBQUQsRUFBSUMsSUFBSixFQUFhO0FBQ3pCLFVBQUksTUFBS0osS0FBTCxDQUFXSyxlQUFmLEVBQWdDO0FBQzVCLGNBQUtMLEtBQUwsQ0FBV0ssZUFBWDtBQUNIOztBQUVELFlBQUtDLFdBQUw7QUFDSCxLOzs7Ozs7O3FEQXRCZ0NDLFMsRUFBVztBQUN4QyxVQUFJQSxTQUFTLENBQUNSLElBQVYsSUFBa0IsS0FBS0MsS0FBTCxDQUFXRCxJQUFqQyxFQUF1QztBQUNuQyxhQUFLRSxRQUFMLENBQWM7QUFDVkYsVUFBQUEsSUFBSSxFQUFFUSxTQUFTLENBQUNSO0FBRE4sU0FBZDtBQUdIO0FBQ0o7Ozs2QkFrQlE7QUFBQSxVQUNHQSxJQURILEdBQ1ksS0FBS1MsS0FEakIsQ0FDR1QsSUFESDtBQUFBLHdCQUU4RCxLQUFLQyxLQUZuRTtBQUFBLFVBRUdTLE1BRkgsZUFFR0EsTUFGSDtBQUFBLFVBRVdDLE9BRlgsZUFFV0EsT0FGWDtBQUFBLFVBRW9CQyxpQkFGcEIsZUFFb0JBLGlCQUZwQjtBQUFBLFVBRXVDQyxrQkFGdkMsZUFFdUNBLGtCQUZ2QztBQUlMLGFBQ0ksb0JBQUMsd0JBQUQ7QUFDSSxRQUFBLElBQUksRUFBRWIsSUFEVjtBQUVJLFFBQUEsTUFBTSxFQUFFVSxNQUZaO0FBR0ksUUFBQSxPQUFPLEVBQUVDLE9BSGI7QUFJSSxRQUFBLFFBQVEsRUFBRSxLQUFLSixXQUpuQjtBQUtJLFFBQUEsU0FBUyxFQUFFLEtBQUtPLGFBTHBCO0FBTUksUUFBQSxZQUFZLEVBQUVGLGlCQU5sQjtBQU9JLFFBQUEsYUFBYSxFQUFFQztBQVBuQixRQURKO0FBV0g7Ozs7RUFuRHVCRSxLQUFLLENBQUNDLFM7O2dCQUE1QmpCLGEsa0JBQ29CO0FBQ2xCVyxFQUFBQSxNQUFNLEVBQUUsZUFEVTtBQUVsQkMsRUFBQUEsT0FBTyxFQUFFLGtEQUZTO0FBR2xCQyxFQUFBQSxpQkFBaUIsRUFBRSxLQUhEO0FBSWxCQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUpGLEM7O2VBcURYZCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIENvbmZpcm1cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmludGVyZmFjZSBDb25maXJtRGlhbG9nUHJvcHMge1xuICAgIG9wZW46IGJvb2xlYW47XG4gICAgY2xvc2VDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBjb25maXJtQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgaGVhZGVyOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIGNhbmNlbEJ1dHRvblRpdGxlOiBzdHJpbmc7XG4gICAgY29uZmlybUJ1dHRvblRpdGxlOiBzdHJpbmc7XG59XG5cbmNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29uZmlybURpYWxvZ1Byb3BzLCB7fT4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGhlYWRlcjogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1JyxcbiAgICAgICAgY29udGVudDogJ9CS0Ysg0YPQstC10YDQtdC90Ysg0YfRgtC+INGF0L7RgtC40YLQtSDRgdC+0LLQtdGA0YjQuNGC0Ywg0LTQsNC90L3QvtC1INC00LXQudGB0YLQstC40LU/JyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGl0bGU6ICfQndC10YInLFxuICAgICAgICBjb25maXJtQnV0dG9uVGl0bGU6ICfQlNCwJ1xuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgb3BlbjogdGhpcy5wcm9wcy5vcGVuIHx8IGZhbHNlXG4gICAgfTtcblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLm9wZW4gIT0gdGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcGVuOiBuZXh0UHJvcHMub3BlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGhhbmRsZUNvbmZpcm0gPSAoZSwgaXRlbSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maXJtQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybUNhbGxiYWNrKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBoZWFkZXIsIGNvbnRlbnQsIGNhbmNlbEJ1dHRvblRpdGxlLCBjb25maXJtQnV0dG9uVGl0bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb25maXJtXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbj17Y2FuY2VsQnV0dG9uVGl0bGV9XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbj17Y29uZmlybUJ1dHRvblRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURpYWxvZzsiXX0=