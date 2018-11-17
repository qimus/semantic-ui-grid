"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DeleteAction = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

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
          action = _this$props.action,
          dispatch = _this$props.dispatch;
      action(row, dispatch);
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

exports.DeleteAction = DeleteAction;

_defineProperty(DeleteAction, "defaultProps", {
  header: 'Удаление записи',
  message: 'Вы уверены что хотите совершить данное действие?'
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(DeleteAction);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjdGlvbnMvZGVsZXRlLWFjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiRGVsZXRlQWN0aW9uIiwib3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwicHJvcHMiLCJyb3ciLCJhY3Rpb24iLCJkaXNwYXRjaCIsImhlYWRlciIsImNvbnRlbnQiLCJzdGF0ZSIsImhhbmRsZUNvbmZpcm0iLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlU2hvd01vZGFsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtZXNzYWdlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBVWFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFNRDtBQUNKQyxNQUFBQSxJQUFJLEVBQUU7QUFERixLOzs4RkFJVSxVQUFDQyxDQUFELEVBQU87QUFDckJBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxZQUFLQyxRQUFMLENBQWM7QUFBRUgsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNILEs7OytGQUVrQixZQUFNO0FBQ3JCLFlBQUtHLFFBQUwsQ0FBYztBQUFFSCxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0gsSzs7NEZBRWUsWUFBTTtBQUFBLHdCQUNnQixNQUFLSSxLQURyQjtBQUFBLFVBQ1ZDLEdBRFUsZUFDVkEsR0FEVTtBQUFBLFVBQ0xDLE1BREssZUFDTEEsTUFESztBQUFBLFVBQ0dDLFFBREgsZUFDR0EsUUFESDtBQUVsQkQsTUFBQUEsTUFBTSxDQUFDRCxHQUFELEVBQU1FLFFBQU4sQ0FBTjtBQUNILEs7Ozs7Ozs7NkJBRVE7QUFBQSx5QkFDdUIsS0FBS0gsS0FENUI7QUFBQSxVQUNHSSxNQURILGdCQUNHQSxNQURIO0FBQUEsVUFDV0MsT0FEWCxnQkFDV0EsT0FEWDtBQUdMLGFBQ0ksa0NBQ0ksb0JBQUMsc0JBQUQ7QUFDSSxRQUFBLElBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdWLElBRHJCO0FBRUksUUFBQSxlQUFlLEVBQUUsS0FBS1csYUFGMUI7QUFHSSxRQUFBLE1BQU0sRUFBRUgsTUFIWjtBQUlJLFFBQUEsT0FBTyxFQUFFQyxPQUpiO0FBS0ksUUFBQSxhQUFhLEVBQUUsS0FBS0c7QUFMeEIsUUFESixFQU9JLG9CQUFDLHVCQUFEO0FBQ0ksUUFBQSxJQUFJLEVBQUUsUUFEVjtBQUVJLFFBQUEsS0FBSyxFQUFFLEtBRlg7QUFHSSxRQUFBLElBQUksRUFBRSxPQUhWO0FBSUksUUFBQSxPQUFPLEVBQUUsS0FBS0M7QUFKbEIsUUFQSixDQURKO0FBZUg7Ozs7RUExQzZCQyxLQUFLLENBQUNDLFM7Ozs7Z0JBQTNCaEIsWSxrQkFDYTtBQUNsQlMsRUFBQUEsTUFBTSxFQUFFLGlCQURVO0FBRWxCUSxFQUFBQSxPQUFPLEVBQUU7QUFGUyxDOztBQTRDMUIsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDVixRQUFEO0FBQUEsU0FBZTtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBZjtBQUFBLENBQTNCOztlQUVlLHlCQUFRLElBQVIsRUFBY1Usa0JBQWQsRUFBa0NsQixZQUFsQyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1xuICAgIEJ1dHRvblxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAnLi4vLi4vbW9kYWxzL2NvbmZpcm0tZGlhbG9nJ1xuXG5pbnRlcmZhY2UgRGVsZXRlQWN0aW9uUHJvcHMge1xuICAgIHJvdzogYW55O1xuICAgIGFjdGlvbihyb3c6IGFueSwgZGlzcGF0Y2g6IGFueSk6IHt9O1xuICAgIGRpc3BhdGNoKCk6IHt9O1xuICAgIGhlYWRlcj86IHN0cmluZztcbiAgICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RGVsZXRlQWN0aW9uUHJvcHMsIHt9PiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaGVhZGVyOiAn0KPQtNCw0LvQtdC90LjQtSDQt9Cw0L/QuNGB0LgnLFxuICAgICAgICBtZXNzYWdlOiAn0JLRiyDRg9Cy0LXRgNC10L3RiyDRh9GC0L4g0YXQvtGC0LjRgtC1INGB0L7QstC10YDRiNC40YLRjCDQtNCw0L3QvdC+0LUg0LTQtdC50YHRgtCy0LjQtT8nXG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBvcGVuOiBmYWxzZVxuICAgIH07XG5cbiAgICBoYW5kbGVTaG93TW9kYWwgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcm93LCBhY3Rpb24sIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBhY3Rpb24ocm93LCBkaXNwYXRjaCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoZWFkZXIsIGNvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxDb25maXJtRGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNhbGxiYWNrPXt0aGlzLmhhbmRsZUNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGxiYWNrPXt0aGlzLmhhbmRsZUNsb3NlTW9kYWx9Lz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGljb249eydkZWxldGUnfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3JlZCd9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd01vZGFsfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7IGRpc3BhdGNoIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGVsZXRlQWN0aW9uKTsiXX0=