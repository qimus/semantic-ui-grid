"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var SimpleColumn = function SimpleColumn(props) {
  return React.createElement(_semanticUiReact.Table.Cell, null, props.value);
};

var _default = SimpleColumn;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvc2ltcGxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTaW1wbGVDb2x1bW4iLCJwcm9wcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFJQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQTJCO0FBQzVDLFNBQ0ksb0JBQUMsc0JBQUQsQ0FBTyxJQUFQLFFBQWFBLEtBQUssQ0FBQ0MsS0FBbkIsQ0FESjtBQUdILENBSkQ7O2VBTWVGLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgVGFibGVcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IFNpbXBsZUNvbHVtbiA9IChwcm9wczogeyB2YWx1ZTogYW55IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGFibGUuQ2VsbD57cHJvcHMudmFsdWV9PC9UYWJsZS5DZWxsPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZUNvbHVtbjtcbiJdfQ==