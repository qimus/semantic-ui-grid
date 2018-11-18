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
        var dir;

        if (sort === 'desc') {
          dir = null;
        } else {
          dir = sort === 'asc' ? 'desc' : 'asc';
        }

        provider.setSortField(item.field, dir);
      }
    });

    return _this;
  }

  _createClass(HeaderCell, [{
    key: "getSortPositionNumber",
    value: function getSortPositionNumber(name) {
      var provider = this.props.provider;
      var sortParams = (provider.getSearchParam('sort') || '').split(',').map(function (item) {
        if (/^[+-]/.test(item)) {
          return item.substr(1);
        }
      });
      var positionSort = sortParams.indexOf(name);
      return positionSort > -1 && React.createElement(_semanticUiReact.Label, {
        circular: true,
        size: 'mini'
      }, positionSort + 1);
    }
  }, {
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
      }, item.title || '', item.field && this.getSortPositionNumber(item.field));
    }
  }]);

  return HeaderCell;
}(React.Component);

exports.default = HeaderCell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlYWRlci9jZWxsLnRzeCJdLCJuYW1lcyI6WyJzb3J0TWFwIiwiSGVhZGVyQ2VsbCIsInByb3BzIiwicHJvdmlkZXIiLCJpdGVtIiwic29ydCIsInNvcnRhYmxlIiwiZGlyIiwic2V0U29ydEZpZWxkIiwiZmllbGQiLCJuYW1lIiwic29ydFBhcmFtcyIsImdldFNlYXJjaFBhcmFtIiwic3BsaXQiLCJtYXAiLCJ0ZXN0Iiwic3Vic3RyIiwicG9zaXRpb25Tb3J0IiwiaW5kZXhPZiIsInNvcnRlZCIsImhhbmRsZVNvcnQiLCJ0aXRsZSIsImdldFNvcnRQb3NpdGlvbk51bWJlciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU1BLE9BQU8sR0FBRztBQUNaLFNBQU8sV0FESztBQUVaLFVBQVE7QUFGSSxDQUFoQjs7SUFXcUJDLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5RkFDSixZQUFNO0FBQUEsd0JBQ2tCLE1BQUtDLEtBRHZCO0FBQUEsVUFDUEMsUUFETyxlQUNQQSxRQURPO0FBQUEsVUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsVUFDU0MsSUFEVCxlQUNTQSxJQURUOztBQUVmLFVBQUlELElBQUksQ0FBQ0UsUUFBVCxFQUFtQjtBQUNmLFlBQUlDLEdBQUo7O0FBQ0EsWUFBSUYsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDakJFLFVBQUFBLEdBQUcsR0FBRyxJQUFOO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLFVBQUFBLEdBQUcsR0FBSUYsSUFBSSxLQUFLLEtBQVYsR0FBbUIsTUFBbkIsR0FBNEIsS0FBbEM7QUFDSDs7QUFDREYsUUFBQUEsUUFBUSxDQUFDSyxZQUFULENBQXNCSixJQUFJLENBQUNLLEtBQTNCLEVBQWtDRixHQUFsQztBQUNIO0FBQ0osSzs7Ozs7OzswQ0FFcUJHLEksRUFBTTtBQUFBLFVBQ2hCUCxRQURnQixHQUNILEtBQUtELEtBREYsQ0FDaEJDLFFBRGdCO0FBRXhCLFVBQU1RLFVBQVUsR0FBRyxDQUFDUixRQUFRLENBQUNTLGNBQVQsQ0FBd0IsTUFBeEIsS0FBbUMsRUFBcEMsRUFDZEMsS0FEYyxDQUNSLEdBRFEsRUFFZEMsR0FGYyxDQUVWLFVBQUFWLElBQUksRUFBSTtBQUNULFlBQUksUUFBUVcsSUFBUixDQUFhWCxJQUFiLENBQUosRUFBd0I7QUFDcEIsaUJBQU9BLElBQUksQ0FBQ1ksTUFBTCxDQUFZLENBQVosQ0FBUDtBQUNIO0FBQ0osT0FOYyxDQUFuQjtBQVFBLFVBQUlDLFlBQVksR0FBR04sVUFBVSxDQUFDTyxPQUFYLENBQW1CUixJQUFuQixDQUFuQjtBQUVBLGFBQU9PLFlBQVksR0FBRyxDQUFDLENBQWhCLElBQ0gsb0JBQUMsc0JBQUQ7QUFBTyxRQUFBLFFBQVEsTUFBZjtBQUFnQixRQUFBLElBQUksRUFBRTtBQUF0QixTQUErQkEsWUFBWSxHQUFHLENBQTlDLENBREo7QUFHSDs7OzZCQUVRO0FBQUEseUJBQ2tCLEtBQUtmLEtBRHZCO0FBQUEsVUFDR0UsSUFESCxnQkFDR0EsSUFESDtBQUFBLFVBQ1NDLElBRFQsZ0JBQ1NBLElBRFQ7QUFFTCxVQUFJYyxNQUFKOztBQUVBLFVBQUlkLElBQUosRUFBVTtBQUNOYyxRQUFBQSxNQUFNLEdBQUduQixPQUFPLENBQUNLLElBQUQsQ0FBaEI7QUFDSDs7QUFFRCxhQUNJLG9CQUFDLHNCQUFELENBQU8sVUFBUDtBQUNJLFFBQUEsTUFBTSxFQUFFYyxNQURaO0FBRUksUUFBQSxPQUFPLEVBQUUsS0FBS0M7QUFGbEIsU0FHRWhCLElBQUksQ0FBQ2lCLEtBQUwsSUFBYyxFQUhoQixFQUdvQmpCLElBQUksQ0FBQ0ssS0FBTCxJQUFjLEtBQUthLHFCQUFMLENBQTJCbEIsSUFBSSxDQUFDSyxLQUFoQyxDQUhsQyxDQURKO0FBTUg7Ozs7RUE3Q21DYyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgTGFiZWxcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXJcIjtcblxuY29uc3Qgc29ydE1hcCA9IHtcbiAgICAnYXNjJzogJ2FzY2VuZGluZycsXG4gICAgJ2Rlc2MnOiAnZGVzY2VuZGluZydcbn07XG5cbmludGVyZmFjZSBIZWFkZXJDZWxsUHJvcHMge1xuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyLFxuICAgIGl0ZW06IGFueSxcbiAgICBzb3J0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SGVhZGVyQ2VsbFByb3BzLCB7fT4ge1xuICAgIGhhbmRsZVNvcnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcHJvdmlkZXIsIGl0ZW0sIHNvcnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChpdGVtLnNvcnRhYmxlKSB7XG4gICAgICAgICAgICBsZXQgZGlyO1xuICAgICAgICAgICAgaWYgKHNvcnQgPT09ICdkZXNjJykge1xuICAgICAgICAgICAgICAgIGRpciA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpciA9IChzb3J0ID09PSAnYXNjJykgPyAnZGVzYycgOiAnYXNjJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3ZpZGVyLnNldFNvcnRGaWVsZChpdGVtLmZpZWxkLCBkaXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldFNvcnRQb3NpdGlvbk51bWJlcihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHNvcnRQYXJhbXMgPSAocHJvdmlkZXIuZ2V0U2VhcmNoUGFyYW0oJ3NvcnQnKSB8fCAnJylcbiAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICgvXlsrLV0vLnRlc3QoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwb3NpdGlvblNvcnQgPSBzb3J0UGFyYW1zLmluZGV4T2YobmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uU29ydCA+IC0xICYmIChcbiAgICAgICAgICAgIDxMYWJlbCBjaXJjdWxhciBzaXplPXsnbWluaSd9Pntwb3NpdGlvblNvcnQgKyAxfTwvTGFiZWw+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXRlbSwgc29ydCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHNvcnRlZDtcblxuICAgICAgICBpZiAoc29ydCkge1xuICAgICAgICAgICAgc29ydGVkID0gc29ydE1hcFtzb3J0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbFxuICAgICAgICAgICAgICAgIHNvcnRlZD17c29ydGVkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU29ydH1cbiAgICAgICAgICAgID57aXRlbS50aXRsZSB8fCAnJ317aXRlbS5maWVsZCAmJiB0aGlzLmdldFNvcnRQb3NpdGlvbk51bWJlcihpdGVtLmZpZWxkKX08L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=