"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var SerialColumn = function SerialColumn(props) {
  return React.createElement(_semanticUiReact.Table.Cell, props.columnOptions || {}, props.provider.getStartIndex() + props.numRow + 1);
};

var _default = SerialColumn;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvc2VyaWFsL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTZXJpYWxDb2x1bW4iLCJwcm9wcyIsImNvbHVtbk9wdGlvbnMiLCJwcm92aWRlciIsImdldFN0YXJ0SW5kZXgiLCJudW1Sb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQU9BLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBeUY7QUFDMUcsU0FDSSxvQkFBQyxzQkFBRCxDQUFPLElBQVAsRUFBaUJBLEtBQUssQ0FBQ0MsYUFBTixJQUF1QixFQUF4QyxFQUE4Q0QsS0FBSyxDQUFDRSxRQUFOLENBQWVDLGFBQWYsS0FBaUNILEtBQUssQ0FBQ0ksTUFBdkMsR0FBZ0QsQ0FBOUYsQ0FESjtBQUdILENBSkQ7O2VBTWVMLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGVcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gJy4uLy4uL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyJ1xuaW1wb3J0IHsgQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5jb25zdCBTZXJpYWxDb2x1bW4gPSAocHJvcHM6IHsgbnVtUm93OiBudW1iZXIsIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyLCBjb2x1bW5PcHRpb25zOiBDb2x1bW5PcHRpb25zIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGFibGUuQ2VsbCB7Li4uKHByb3BzLmNvbHVtbk9wdGlvbnMgfHwge30pfT57cHJvcHMucHJvdmlkZXIuZ2V0U3RhcnRJbmRleCgpICsgcHJvcHMubnVtUm93ICsgMX08L1RhYmxlLkNlbGw+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VyaWFsQ29sdW1uOyJdfQ==