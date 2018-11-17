"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTypes = registerTypes;
exports.factory = exports.TYPE_SUGGEST = exports.TYPE_TEXT = void 0;

var _reduxForm = require("components/redux-form");

var _typeMapping;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TYPE_TEXT = 'text';
exports.TYPE_TEXT = TYPE_TEXT;
var TYPE_SUGGEST = 'suggest';
exports.TYPE_SUGGEST = TYPE_SUGGEST;
var typeMapping = (_typeMapping = {}, _defineProperty(_typeMapping, TYPE_TEXT, _reduxForm.TextInput), _defineProperty(_typeMapping, TYPE_SUGGEST, _reduxForm.Suggest), _typeMapping);

function registerTypes(types) {
  typeMapping = _objectSpread({}, typeMapping, types);
}

var factory = function factory(type) {
  if (typeof typeMapping[type] === 'undefined') {
    throw new Error("Unknown filter type - \"".concat(type, "\""));
  }

  return typeMapping[type];
};

exports.factory = factory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmFjdG9yeS50cyJdLCJuYW1lcyI6WyJUWVBFX1RFWFQiLCJUWVBFX1NVR0dFU1QiLCJ0eXBlTWFwcGluZyIsIlRleHRJbnB1dCIsIlN1Z2dlc3QiLCJyZWdpc3RlclR5cGVzIiwidHlwZXMiLCJmYWN0b3J5IiwidHlwZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztBQUtPLElBQU1BLFNBQVMsR0FBRyxNQUFsQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsU0FBckI7O0FBRVAsSUFBSUMsV0FBbUIscURBQ2xCRixTQURrQixFQUNORyxvQkFETSxpQ0FFbEJGLFlBRmtCLEVBRUhHLGtCQUZHLGdCQUF2Qjs7QUFLQSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUFzQztBQUNsQ0osRUFBQUEsV0FBVyxxQkFBUUEsV0FBUixFQUF3QkksS0FBeEIsQ0FBWDtBQUNIOztBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBVTtBQUN0QixNQUFJLE9BQU9OLFdBQVcsQ0FBQ00sSUFBRCxDQUFsQixLQUE2QixXQUFqQyxFQUE4QztBQUMxQyxVQUFNLElBQUlDLEtBQUosbUNBQW9DRCxJQUFwQyxRQUFOO0FBQ0g7O0FBRUQsU0FBT04sV0FBVyxDQUFDTSxJQUFELENBQWxCO0FBQ0gsQ0FORCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGV4dElucHV0LFxuICAgIFN1Z2dlc3Rcbn0gZnJvbSAnY29tcG9uZW50cy9yZWR1eC1mb3JtJ1xuXG5leHBvcnQgY29uc3QgVFlQRV9URVhUID0gJ3RleHQnO1xuZXhwb3J0IGNvbnN0IFRZUEVfU1VHR0VTVCA9ICdzdWdnZXN0JztcblxubGV0IHR5cGVNYXBwaW5nOiBvYmplY3QgPSB7XG4gICAgW1RZUEVfVEVYVF06IFRleHRJbnB1dCxcbiAgICBbVFlQRV9TVUdHRVNUXTogU3VnZ2VzdFxufTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJUeXBlcyh0eXBlczogb2JqZWN0KSB7XG4gICAgdHlwZU1hcHBpbmcgPSB7IC4uLnR5cGVNYXBwaW5nLCAuLi50eXBlcyB9O1xufVxuXG5jb25zdCBmYWN0b3J5ID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHR5cGVNYXBwaW5nW3R5cGVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZmlsdGVyIHR5cGUgLSBcIiR7dHlwZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlTWFwcGluZ1t0eXBlXVxufTtcblxuZXhwb3J0IHtcbiAgICBmYWN0b3J5LFxuICAgIHJlZ2lzdGVyVHlwZXNcbn07Il19