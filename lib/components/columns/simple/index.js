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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvc2ltcGxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTaW1wbGVDb2x1bW4iLCJwcm9wcyIsImNvbHVtbk9wdGlvbnMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBS0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUF5RDtBQUMxRSxTQUNJLG9CQUFDLHNCQUFELENBQU8sSUFBUCxFQUFpQkEsS0FBSyxDQUFDQyxhQUFOLElBQXVCLEVBQXhDLEVBQThDRCxLQUFLLENBQUNFLEtBQXBELENBREo7QUFHSCxDQUpEOztlQU1lSCxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRhYmxlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHsgQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5jb25zdCBTaW1wbGVDb2x1bW4gPSAocHJvcHM6IHsgdmFsdWU6IGFueSwgY29sdW1uT3B0aW9uczogQ29sdW1uT3B0aW9ucyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhYmxlLkNlbGwgey4uLihwcm9wcy5jb2x1bW5PcHRpb25zIHx8IHt9KX0+e3Byb3BzLnZhbHVlfTwvVGFibGUuQ2VsbD5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVDb2x1bW47XG4iXX0=