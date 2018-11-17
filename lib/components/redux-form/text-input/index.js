"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextInput = function TextInput(_ref) {
  var label = _ref.label,
      formatter = _ref.formatter,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      help = _ref.help,
      meta = _ref.meta,
      input = _ref.input,
      _ref$handleChange = _ref.handleChange,
      handleChange = _ref$handleChange === void 0 ? null : _ref$handleChange,
      rest = _objectWithoutProperties(_ref, ["label", "formatter", "required", "help", "meta", "input", "handleChange"]);

  var _meta$touched = meta.touched,
      touched = _meta$touched === void 0 ? false : _meta$touched,
      _meta$error = meta.error,
      error = _meta$error === void 0 ? '' : _meta$error;
  var hasError = !!(touched && error);

  var handleOnChange = function handleOnChange(e, _ref2) {
    var value = _ref2.value;

    if (formatter) {
      value = formatter(value);
    }

    if (handleChange) {
      handleChange(value);
    }

    input.onChange(value);
  };

  return React.createElement(_semanticUiReact.Form.Input, _extends({
    placeholder: label
  }, rest, input, {
    error: hasError,
    label: React.createElement("label", null, label),
    onChange: handleOnChange
  }));
};

var _default = TextInput;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlZHV4LWZvcm0vdGV4dC1pbnB1dC9pbmRleC50c3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibGFiZWwiLCJmb3JtYXR0ZXIiLCJyZXF1aXJlZCIsImhlbHAiLCJtZXRhIiwiaW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJyZXN0IiwidG91Y2hlZCIsImVycm9yIiwiaGFzRXJyb3IiLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVNPO0FBQUEsTUFSRkMsS0FRRSxRQVJGQSxLQVFFO0FBQUEsTUFQRkMsU0FPRSxRQVBGQSxTQU9FO0FBQUEsMkJBTkZDLFFBTUU7QUFBQSxNQU5GQSxRQU1FLDhCQU5TLEtBTVQ7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUpGQyxJQUlFLFFBSkZBLElBSUU7QUFBQSxNQUhGQyxLQUdFLFFBSEZBLEtBR0U7QUFBQSwrQkFGRkMsWUFFRTtBQUFBLE1BRkZBLFlBRUUsa0NBRmEsSUFFYjtBQUFBLE1BRENDLElBQ0Q7O0FBQUEsc0JBQ21CSCxJQURuQixDQUNiSSxPQURhO0FBQUEsTUFDYkEsT0FEYSw4QkFDSCxLQURHO0FBQUEsb0JBQ21CSixJQURuQixDQUNJSyxLQURKO0FBQUEsTUFDSUEsS0FESiw0QkFDWSxFQURaO0FBRXJCLE1BQU1DLFFBQVEsR0FBRyxDQUFDLEVBQUVGLE9BQU8sSUFBSUMsS0FBYixDQUFsQjs7QUFFQSxNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsU0FBa0I7QUFBQSxRQUFaQyxLQUFZLFNBQVpBLEtBQVk7O0FBQ3JDLFFBQUlaLFNBQUosRUFBZTtBQUNYWSxNQUFBQSxLQUFLLEdBQUdaLFNBQVMsQ0FBQ1ksS0FBRCxDQUFqQjtBQUNIOztBQUVELFFBQUlQLFlBQUosRUFBa0I7QUFDZEEsTUFBQUEsWUFBWSxDQUFDTyxLQUFELENBQVo7QUFDSDs7QUFFRFIsSUFBQUEsS0FBSyxDQUFDUyxRQUFOLENBQWVELEtBQWY7QUFDSCxHQVZEOztBQVlBLFNBQ0ksb0JBQUMscUJBQUQsQ0FBTSxLQUFOO0FBQ0ksSUFBQSxXQUFXLEVBQUViO0FBRGpCLEtBRVFPLElBRlIsRUFHUUYsS0FIUjtBQUlJLElBQUEsS0FBSyxFQUFFSyxRQUpYO0FBS0ksSUFBQSxLQUFLLEVBQUUsbUNBQVFWLEtBQVIsQ0FMWDtBQU1JLElBQUEsUUFBUSxFQUFFVztBQU5kLEtBREo7QUFTSCxDQWxDRDs7ZUFvQ2VaLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgRm9ybSxcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IFRleHRJbnB1dCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgIGhlbHAsXG4gICAgICAgICAgICAgICAgICAgICAgIG1ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgIGNvbnN0IHsgdG91Y2hlZCA9IGZhbHNlLCBlcnJvciA9ICcnIH0gPSBtZXRhO1xuICAgIGNvbnN0IGhhc0Vycm9yID0gISEodG91Y2hlZCAmJiBlcnJvcik7XG5cbiAgICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmFsdWUgPSBmb3JtYXR0ZXIodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhbmRsZUNoYW5nZSkge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQub25DaGFuZ2UodmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xhYmVsfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgICAgICBlcnJvcj17aGFzRXJyb3J9XG4gICAgICAgICAgICBsYWJlbD17PGxhYmVsPntsYWJlbH08L2xhYmVsPn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX0vPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDsiXX0=