"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var SimpleColumn = function SimpleColumn(props) {
  return React.createElement(_semanticUiReact.Table.Cell, props.columnOptions || {}, props.value);
};

var _default = SimpleColumn;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvc2ltcGxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTaW1wbGVDb2x1bW4iLCJwcm9wcyIsImNvbHVtbk9wdGlvbnMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBSUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFtRTtBQUNwRixTQUNJLG9CQUFDLHNCQUFELENBQU8sSUFBUCxFQUFpQkEsS0FBSyxDQUFDQyxhQUFOLElBQXVCLEVBQXhDLEVBQThDRCxLQUFLLENBQUNFLEtBQXBELENBREo7QUFHSCxDQUpEOztlQU1lSCxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRhYmxlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBTaW1wbGVDb2x1bW4gPSAocHJvcHM6IHsgdmFsdWU6IGFueSwgY29sdW1uT3B0aW9uczogeyBbcHJvcDogc3RyaW5nXTogYW55IH0gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZS5DZWxsIHsuLi4ocHJvcHMuY29sdW1uT3B0aW9ucyB8fCB7fSl9Pntwcm9wcy52YWx1ZX08L1RhYmxlLkNlbGw+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQ29sdW1uO1xuIl19