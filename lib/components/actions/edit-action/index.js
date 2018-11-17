"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EditAction =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditAction, _React$Component);

  function EditAction() {
    _classCallCheck(this, EditAction);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditAction).apply(this, arguments));
  }

  _createClass(EditAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          link = _this$props.link,
          row = _this$props.row;
      var href;

      if (typeof link === 'function') {
        href = link(row);
      } else {
        href = link;
      }

      return React.createElement(_semanticUiReact.Button, {
        as: _reactRouterDom.Link,
        icon: 'edit',
        positive: true,
        size: 'small',
        to: href
      });
    }
  }]);

  return EditAction;
}(React.Component);

exports.default = EditAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjdGlvbnMvZWRpdC1hY3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVkaXRBY3Rpb24iLCJwcm9wcyIsImxpbmsiLCJyb3ciLCJocmVmIiwiTGluayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPcUJBLFU7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFBQSx3QkFDaUIsS0FBS0MsS0FEdEI7QUFBQSxVQUNHQyxJQURILGVBQ0dBLElBREg7QUFBQSxVQUNTQyxHQURULGVBQ1NBLEdBRFQ7QUFFTCxVQUFJQyxJQUFKOztBQUVBLFVBQUksT0FBT0YsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM1QkUsUUFBQUEsSUFBSSxHQUFHRixJQUFJLENBQUNDLEdBQUQsQ0FBWDtBQUNILE9BRkQsTUFFTztBQUNIQyxRQUFBQSxJQUFJLEdBQUdGLElBQVA7QUFDSDs7QUFFRCxhQUNJLG9CQUFDLHVCQUFEO0FBQ0ksUUFBQSxFQUFFLEVBQUVHLG9CQURSO0FBRUksUUFBQSxJQUFJLEVBQUUsTUFGVjtBQUdJLFFBQUEsUUFBUSxNQUhaO0FBSUksUUFBQSxJQUFJLEVBQUUsT0FKVjtBQUtJLFFBQUEsRUFBRSxFQUFFRDtBQUxSLFFBREo7QUFRSDs7OztFQW5CbUNFLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBCdXR0b25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW50ZXJmYWNlIEVkaXRBY3Rpb25Qcm9wcyB7XG4gICAgbGluayhyb3c6IGFueSk6IHZvaWQ7XG4gICAgcm93OiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RWRpdEFjdGlvblByb3BzLCB7fT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBsaW5rLCByb3cgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBocmVmO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbGluayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaHJlZiA9IGxpbmsocm93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhyZWYgPSBsaW5rO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICBpY29uPXsnZWRpdCd9XG4gICAgICAgICAgICAgICAgcG9zaXRpdmVcbiAgICAgICAgICAgICAgICBzaXplPXsnc21hbGwnfVxuICAgICAgICAgICAgICAgIHRvPXtocmVmfS8+XG4gICAgICAgIClcbiAgICB9XG59Il19