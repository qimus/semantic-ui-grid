"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _columns = _interopRequireDefault(require("../columns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableBody, _React$Component);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableBody).apply(this, arguments));
  }

  _createClass(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          provider = _this$props.provider,
          columns = _this$props.columns;
      return React.createElement(_semanticUiReact.Table.Body, null, provider.getItems().map(function (item, i) {
        var items = columns.map(function (column, j) {
          var type = column.type,
              field = column.field,
              value = column.value;
          var columnValue;

          if (value) {
            if (typeof value === 'function') {
              columnValue = value(item, i);
            } else {
              columnValue = value;
            }
          } else if (field) {
            columnValue = item[field] || '';
          }

          var Column;

          if (column.component) {
            Column = column.component;
          } else {
            Column = (0, _columns.default)(type);
          }

          return React.createElement(Column, _extends({}, column, {
            value: columnValue,
            row: item,
            provider: provider,
            numRow: i,
            key: "".concat(provider.getActivePage(), ".").concat(i, ".").concat(j)
          }));
        });
        return React.createElement(_semanticUiReact.Table.Row, {
          key: i
        }, items);
      }));
    }
  }]);

  return TableBody;
}(React.Component);

exports.default = TableBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwicHJvdmlkZXIiLCJjb2x1bW5zIiwiZ2V0SXRlbXMiLCJtYXAiLCJpdGVtIiwiaSIsIml0ZW1zIiwiY29sdW1uIiwiaiIsInR5cGUiLCJmaWVsZCIsInZhbHVlIiwiY29sdW1uVmFsdWUiLCJDb2x1bW4iLCJjb21wb25lbnQiLCJnZXRBY3RpdmVQYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFVcUJBLFM7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFBQSx3QkFDeUIsS0FBS0MsS0FEOUI7QUFBQSxVQUNHQyxRQURILGVBQ0dBLFFBREg7QUFBQSxVQUNhQyxPQURiLGVBQ2FBLE9BRGI7QUFHTCxhQUNJLG9CQUFDLHNCQUFELENBQU8sSUFBUCxRQUNLRCxRQUFRLENBQUNFLFFBQVQsR0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ2xDLFlBQUlDLEtBQUssR0FBR0wsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0ksTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFBQSxjQUMzQkMsSUFEMkIsR0FDSkYsTUFESSxDQUMzQkUsSUFEMkI7QUFBQSxjQUNyQkMsS0FEcUIsR0FDSkgsTUFESSxDQUNyQkcsS0FEcUI7QUFBQSxjQUNkQyxLQURjLEdBQ0pKLE1BREksQ0FDZEksS0FEYztBQUVuQyxjQUFJQyxXQUFKOztBQUVBLGNBQUlELEtBQUosRUFBVztBQUNQLGdCQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDN0JDLGNBQUFBLFdBQVcsR0FBR0QsS0FBSyxDQUFDUCxJQUFELEVBQU9DLENBQVAsQ0FBbkI7QUFDSCxhQUZELE1BRU87QUFDSE8sY0FBQUEsV0FBVyxHQUFHRCxLQUFkO0FBQ0g7QUFDSixXQU5ELE1BTU8sSUFBSUQsS0FBSixFQUFXO0FBQ2RFLFlBQUFBLFdBQVcsR0FBR1IsSUFBSSxDQUFDTSxLQUFELENBQUosSUFBZSxFQUE3QjtBQUNIOztBQUVELGNBQUlHLE1BQUo7O0FBQ0EsY0FBSU4sTUFBTSxDQUFDTyxTQUFYLEVBQXNCO0FBQ2xCRCxZQUFBQSxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sU0FBaEI7QUFDSCxXQUZELE1BRU87QUFDSEQsWUFBQUEsTUFBTSxHQUFHLHNCQUFjSixJQUFkLENBQVQ7QUFDSDs7QUFFRCxpQkFBTyxvQkFBQyxNQUFELGVBQWFGLE1BQWI7QUFDUSxZQUFBLEtBQUssRUFBRUssV0FEZjtBQUVRLFlBQUEsR0FBRyxFQUFFUixJQUZiO0FBR1EsWUFBQSxRQUFRLEVBQUVKLFFBSGxCO0FBSVEsWUFBQSxNQUFNLEVBQUVLLENBSmhCO0FBS1EsWUFBQSxHQUFHLFlBQUtMLFFBQVEsQ0FBQ2UsYUFBVCxFQUFMLGNBQWlDVixDQUFqQyxjQUFzQ0csQ0FBdEM7QUFMWCxhQUFQO0FBTUgsU0EzQlcsQ0FBWjtBQTZCQSxlQUFPLG9CQUFDLHNCQUFELENBQU8sR0FBUDtBQUFXLFVBQUEsR0FBRyxFQUFFSDtBQUFoQixXQUFvQkMsS0FBcEIsQ0FBUDtBQUNILE9BL0JBLENBREwsQ0FESjtBQW9DSDs7OztFQXhDa0NVLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUYWJsZVxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IGNvbHVtbkZhY3RvcnkgZnJvbSAnLi4vY29sdW1ucydcbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gJy4uL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyJ1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmludGVyZmFjZSBUYWJsZUJvZHlQcm9wcyB7XG4gICAgcHJvdmlkZXI6IEFic3RyYWN0UHJvdmlkZXI7XG4gICAgY29sdW1uczogQ29sdW1uW10sXG4gICAgYWN0aXZlUGFnZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFibGVCb2R5UHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb3ZpZGVyLCBjb2x1bW5zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICB7cHJvdmlkZXIuZ2V0SXRlbXMoKS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gY29sdW1ucy5tYXAoKGNvbHVtbiwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBmaWVsZCwgdmFsdWUgfSA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHZhbHVlKGl0ZW0sIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gaXRlbVtmaWVsZF0gfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBDb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbiA9IGNvbHVtbi5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbiA9IGNvbHVtbkZhY3RvcnkodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sdW1uIHsgLi4uY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2x1bW5WYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdz17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVJvdz17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7cHJvdmlkZXIuZ2V0QWN0aXZlUGFnZSgpfS4ke2l9LiR7an1gfS8+XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGUuUm93IGtleT17aX0+e2l0ZW1zfTwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgICApXG4gICAgfVxufVxuIl19