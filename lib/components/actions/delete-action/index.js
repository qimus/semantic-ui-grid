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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjdGlvbnMvZGVsZXRlLWFjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiRGVsZXRlQWN0aW9uIiwib3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwicHJvcHMiLCJyb3ciLCJhY3Rpb24iLCJoZWFkZXIiLCJjb250ZW50Iiwic3RhdGUiLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZVNob3dNb2RhbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBVXFCQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0ZBQ1Q7QUFDSkMsTUFBQUEsSUFBSSxFQUFFO0FBREYsSzs7OEZBSVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JCQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUVILFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQWQ7QUFDSCxLOzsrRkFFa0IsWUFBTTtBQUNyQixZQUFLRyxRQUFMLENBQWM7QUFBRUgsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNILEs7OzRGQUVlLFlBQU07QUFBQSx3QkFDTSxNQUFLSSxLQURYO0FBQUEsVUFDVkMsR0FEVSxlQUNWQSxHQURVO0FBQUEsVUFDTEMsTUFESyxlQUNMQSxNQURLO0FBRWxCQSxNQUFBQSxNQUFNLENBQUNELEdBQUQsQ0FBTjtBQUNILEs7Ozs7Ozs7NkJBRVE7QUFBQSx5QkFDdUIsS0FBS0QsS0FENUI7QUFBQSxVQUNHRyxNQURILGdCQUNHQSxNQURIO0FBQUEsVUFDV0MsT0FEWCxnQkFDV0EsT0FEWDtBQUdMLGFBQ0ksa0NBQ0ksb0JBQUMsc0JBQUQ7QUFDSSxRQUFBLElBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdULElBRHJCO0FBRUksUUFBQSxlQUFlLEVBQUUsS0FBS1UsYUFGMUI7QUFHSSxRQUFBLE1BQU0sRUFBRUgsTUFIWjtBQUlJLFFBQUEsT0FBTyxFQUFFQyxPQUpiO0FBS0ksUUFBQSxhQUFhLEVBQUUsS0FBS0c7QUFMeEIsUUFESixFQU9JLG9CQUFDLHVCQUFEO0FBQ0ksUUFBQSxJQUFJLEVBQUUsUUFEVjtBQUVJLFFBQUEsS0FBSyxFQUFFLEtBRlg7QUFHSSxRQUFBLElBQUksRUFBRSxPQUhWO0FBSUksUUFBQSxPQUFPLEVBQUUsS0FBS0M7QUFKbEIsUUFQSixDQURKO0FBZUg7Ozs7RUFyQ3FDQyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7XG4gICAgQnV0dG9uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tICcuLi8uLi9tb2RhbHMvY29uZmlybS1kaWFsb2cnXG5cbmludGVyZmFjZSBEZWxldGVBY3Rpb25Qcm9wcyB7XG4gICAgcm93OiBhbnk7XG4gICAgYWN0aW9uKHJvdzogYW55KToge307XG4gICAgZGlzcGF0Y2goKToge307XG4gICAgaGVhZGVyPzogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlQWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERlbGV0ZUFjdGlvblByb3BzLCB7fT4ge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBvcGVuOiBmYWxzZVxuICAgIH07XG5cbiAgICBoYW5kbGVTaG93TW9kYWwgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcm93LCBhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGFjdGlvbihyb3cpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaGVhZGVyLCBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8Q29uZmlybURpYWxvZ1xuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1DYWxsYmFjaz17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VDYWxsYmFjaz17dGhpcy5oYW5kbGVDbG9zZU1vZGFsfS8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpY29uPXsnZGVsZXRlJ31cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9eydyZWQnfVxuICAgICAgICAgICAgICAgICAgICBzaXplPXsnc21hbGwnfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dNb2RhbH0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==