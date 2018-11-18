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
          content = _this$props2.content;
      return React.createElement("span", null, React.createElement(_confirmDialog.default, {
        open: this.state.open,
        confirmCallback: this.handleConfirm,
        header: header,
        content: content,
        closeCallback: this.handleCloseModal
      }), React.createElement(_semanticUiReact.Button, {
        icon: 'delete',
        color: 'red',
        size: 'small',
        onClick: this.handleShowModal
      }));
    }
  }]);

  return DeleteAction;
}(React.Component);

exports.default = DeleteAction;

_defineProperty(DeleteAction, "defaultProps", {
  header: 'Удаление записи',
  message: 'Вы уверены что хотите совершить данное действие?'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjdGlvbnMvZGVsZXRlLWFjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiRGVsZXRlQWN0aW9uIiwib3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwicHJvcHMiLCJyb3ciLCJhY3Rpb24iLCJoZWFkZXIiLCJjb250ZW50Iiwic3RhdGUiLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZVNob3dNb2RhbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29GQU1UO0FBQ0pDLE1BQUFBLElBQUksRUFBRTtBQURGLEs7OzhGQUlVLFVBQUNDLENBQUQsRUFBTztBQUNyQkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFFSCxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0gsSzs7K0ZBRWtCLFlBQU07QUFDckIsWUFBS0csUUFBTCxDQUFjO0FBQUVILFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQWQ7QUFDSCxLOzs0RkFFZSxZQUFNO0FBQUEsd0JBQ00sTUFBS0ksS0FEWDtBQUFBLFVBQ1ZDLEdBRFUsZUFDVkEsR0FEVTtBQUFBLFVBQ0xDLE1BREssZUFDTEEsTUFESztBQUVsQkEsTUFBQUEsTUFBTSxDQUFDRCxHQUFELENBQU47QUFDSCxLOzs7Ozs7OzZCQUVRO0FBQUEseUJBQ3VCLEtBQUtELEtBRDVCO0FBQUEsVUFDR0csTUFESCxnQkFDR0EsTUFESDtBQUFBLFVBQ1dDLE9BRFgsZ0JBQ1dBLE9BRFg7QUFHTCxhQUNJLGtDQUNJLG9CQUFDLHNCQUFEO0FBQ0ksUUFBQSxJQUFJLEVBQUUsS0FBS0MsS0FBTCxDQUFXVCxJQURyQjtBQUVJLFFBQUEsZUFBZSxFQUFFLEtBQUtVLGFBRjFCO0FBR0ksUUFBQSxNQUFNLEVBQUVILE1BSFo7QUFJSSxRQUFBLE9BQU8sRUFBRUMsT0FKYjtBQUtJLFFBQUEsYUFBYSxFQUFFLEtBQUtHO0FBTHhCLFFBREosRUFPSSxvQkFBQyx1QkFBRDtBQUNJLFFBQUEsSUFBSSxFQUFFLFFBRFY7QUFFSSxRQUFBLEtBQUssRUFBRSxLQUZYO0FBR0ksUUFBQSxJQUFJLEVBQUUsT0FIVjtBQUlJLFFBQUEsT0FBTyxFQUFFLEtBQUtDO0FBSmxCLFFBUEosQ0FESjtBQWVIOzs7O0VBMUNxQ0MsS0FBSyxDQUFDQyxTOzs7O2dCQUEzQmYsWSxrQkFDSztBQUNsQlEsRUFBQUEsTUFBTSxFQUFFLGlCQURVO0FBRWxCUSxFQUFBQSxPQUFPLEVBQUU7QUFGUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1xuICAgIEJ1dHRvblxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAnLi4vLi4vbW9kYWxzL2NvbmZpcm0tZGlhbG9nJ1xuXG5pbnRlcmZhY2UgRGVsZXRlQWN0aW9uUHJvcHMge1xuICAgIHJvdzogYW55O1xuICAgIGFjdGlvbihyb3c6IGFueSk6IHt9O1xuICAgIGRpc3BhdGNoKCk6IHt9O1xuICAgIGhlYWRlcj86IHN0cmluZztcbiAgICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZUFjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEZWxldGVBY3Rpb25Qcm9wcywge30+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBoZWFkZXI6ICfQo9C00LDQu9C10L3QuNC1INC30LDQv9C40YHQuCcsXG4gICAgICAgIG1lc3NhZ2U6ICfQktGLINGD0LLQtdGA0LXQvdGLINGH0YLQviDRhdC+0YLQuNGC0LUg0YHQvtCy0LXRgNGI0LjRgtGMINC00LDQvdC90L7QtSDQtNC10LnRgdGC0LLQuNC1PydcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgfTtcblxuICAgIGhhbmRsZVNob3dNb2RhbCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyByb3csIGFjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgYWN0aW9uKHJvdyk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoZWFkZXIsIGNvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxDb25maXJtRGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNhbGxiYWNrPXt0aGlzLmhhbmRsZUNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGxiYWNrPXt0aGlzLmhhbmRsZUNsb3NlTW9kYWx9Lz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGljb249eydkZWxldGUnfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3JlZCd9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd01vZGFsfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgfVxufVxuIl19