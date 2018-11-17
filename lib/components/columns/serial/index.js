"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var SerialColumn = function SerialColumn(props) {
  return React.createElement(_semanticUiReact.Table.Cell, null, props.provider.getStartIndex() + props.numRow + 1);
};

var _default = SerialColumn;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvc2VyaWFsL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTZXJpYWxDb2x1bW4iLCJwcm9wcyIsInByb3ZpZGVyIiwiZ2V0U3RhcnRJbmRleCIsIm51bVJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBTUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUEyRDtBQUM1RSxTQUNJLG9CQUFDLHNCQUFELENBQU8sSUFBUCxRQUFhQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsYUFBZixLQUFpQ0YsS0FBSyxDQUFDRyxNQUF2QyxHQUFnRCxDQUE3RCxDQURKO0FBR0gsQ0FKRDs7ZUFNZUosWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUYWJsZVxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSAnLi4vLi4vcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXInXG5cbmNvbnN0IFNlcmlhbENvbHVtbiA9IChwcm9wczogeyBudW1Sb3c6IG51bWJlciwgcHJvdmlkZXI6IEFic3RyYWN0UHJvdmlkZXIgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZS5DZWxsPntwcm9wcy5wcm92aWRlci5nZXRTdGFydEluZGV4KCkgKyBwcm9wcy5udW1Sb3cgKyAxfTwvVGFibGUuQ2VsbD5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJpYWxDb2x1bW47Il19