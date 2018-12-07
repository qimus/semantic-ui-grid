"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _confirmDialog = _interopRequireDefault(require("../../modals/confirm-dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DeleteAction =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeleteAction, _React$Component);

  function DeleteAction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteAction)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleShowModal", function (e) {
      e.preventDefault();

      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseModal", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleConfirm", function () {
      var _this$props = _this.props,
          row = _this$props.row,
          action = _this$props.action;
      action(row);
    });

    return _this;
  }

  _createClass(DeleteAction, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          header = _this$props2.header,
          content = _this$props2.content,
          icon = _this$props2.icon,
          _this$props2$options = _this$props2.options,
          options = _this$props2$options === void 0 ? {} : _this$props2$options;
      return React.createElement("span", null, React.createElement(_confirmDialog.default, {
        open: this.state.open,
        confirmCallback: this.handleConfirm,
        header: header,
        content: content,
        closeCallback: this.handleCloseModal
      }), React.createElement(_semanticUiReact.Button, _extends({
        icon: icon,
        color: 'red',
        size: 'small'
      }, options, {
        onClick: this.handleShowModal
      })));
    }
  }]);

  return DeleteAction;
}(React.Component);

exports.default = DeleteAction;

_defineProperty(DeleteAction, "defaultProps", {
  icon: 'delete'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjdGlvbnMvZGVsZXRlLWFjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiRGVsZXRlQWN0aW9uIiwib3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwicHJvcHMiLCJyb3ciLCJhY3Rpb24iLCJoZWFkZXIiLCJjb250ZW50IiwiaWNvbiIsIm9wdGlvbnMiLCJzdGF0ZSIsImhhbmRsZUNvbmZpcm0iLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlU2hvd01vZGFsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQkEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29GQUtUO0FBQ0pDLE1BQUFBLElBQUksRUFBRTtBQURGLEs7OzhGQUlVLFVBQUNDLENBQUQsRUFBTztBQUNyQkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFFSCxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0gsSzs7K0ZBRWtCLFlBQU07QUFDckIsWUFBS0csUUFBTCxDQUFjO0FBQUVILFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQWQ7QUFDSCxLOzs0RkFFZSxZQUFNO0FBQUEsd0JBQ00sTUFBS0ksS0FEWDtBQUFBLFVBQ1ZDLEdBRFUsZUFDVkEsR0FEVTtBQUFBLFVBQ0xDLE1BREssZUFDTEEsTUFESztBQUVsQkEsTUFBQUEsTUFBTSxDQUFDRCxHQUFELENBQU47QUFDSCxLOzs7Ozs7OzZCQUVRO0FBQUEseUJBQzJDLEtBQUtELEtBRGhEO0FBQUEsVUFDR0csTUFESCxnQkFDR0EsTUFESDtBQUFBLFVBQ1dDLE9BRFgsZ0JBQ1dBLE9BRFg7QUFBQSxVQUNvQkMsSUFEcEIsZ0JBQ29CQSxJQURwQjtBQUFBLDhDQUMwQkMsT0FEMUI7QUFBQSxVQUMwQkEsT0FEMUIscUNBQ29DLEVBRHBDO0FBR0wsYUFDSSxrQ0FDSSxvQkFBQyxzQkFBRDtBQUNJLFFBQUEsSUFBSSxFQUFFLEtBQUtDLEtBQUwsQ0FBV1gsSUFEckI7QUFFSSxRQUFBLGVBQWUsRUFBRSxLQUFLWSxhQUYxQjtBQUdJLFFBQUEsTUFBTSxFQUFFTCxNQUhaO0FBSUksUUFBQSxPQUFPLEVBQUVDLE9BSmI7QUFLSSxRQUFBLGFBQWEsRUFBRSxLQUFLSztBQUx4QixRQURKLEVBT0ksb0JBQUMsdUJBQUQ7QUFDSSxRQUFBLElBQUksRUFBRUosSUFEVjtBQUVJLFFBQUEsS0FBSyxFQUFFLEtBRlg7QUFHSSxRQUFBLElBQUksRUFBRTtBQUhWLFNBSVFDLE9BSlI7QUFLSSxRQUFBLE9BQU8sRUFBRSxLQUFLSTtBQUxsQixTQVBKLENBREo7QUFnQkg7Ozs7RUExQ3FDQyxLQUFLLENBQUNDLFM7Ozs7Z0JBQTNCakIsWSxrQkFDSztBQUNsQlUsRUFBQUEsSUFBSSxFQUFFO0FBRFksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtcbiAgICBCdXR0b25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJy4uLy4uL21vZGFscy9jb25maXJtLWRpYWxvZydcblxuaW50ZXJmYWNlIERlbGV0ZUFjdGlvblByb3BzIHtcbiAgICByb3c6IGFueTtcbiAgICBhY3Rpb24ocm93OiBhbnkpOiB7fTtcbiAgICBkaXNwYXRjaCgpOiB7fTtcbiAgICBoZWFkZXI/OiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIGljb246IHN0cmluZztcbiAgICBvcHRpb25zOiB7IFtwcm9wOiBzdHJpbmddOiBhbnkgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxldGVBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RGVsZXRlQWN0aW9uUHJvcHMsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgfTtcblxuICAgIGhhbmRsZVNob3dNb2RhbCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyByb3csIGFjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgYWN0aW9uKHJvdyk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoZWFkZXIsIGNvbnRlbnQsIGljb24sIG9wdGlvbnMgPSB7fSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPENvbmZpcm1EaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2FsbGJhY2s9e3RoaXMuaGFuZGxlQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2s9e3RoaXMuaGFuZGxlQ2xvc2VNb2RhbH0vPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9eydyZWQnfVxuICAgICAgICAgICAgICAgICAgICBzaXplPXsnc21hbGwnfVxuICAgICAgICAgICAgICAgICAgICB7Li4ub3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93TW9kYWx9IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=