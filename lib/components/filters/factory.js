"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTypes = registerTypes;
exports.factory = exports.TYPE_SUGGEST = exports.TYPE_TEXT = void 0;

var _reduxForm = require("../redux-form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmFjdG9yeS50cyJdLCJuYW1lcyI6WyJUWVBFX1RFWFQiLCJUWVBFX1NVR0dFU1QiLCJ0eXBlTWFwcGluZyIsIlRleHRJbnB1dCIsIlN1Z2dlc3QiLCJyZWdpc3RlclR5cGVzIiwidHlwZXMiLCJmYWN0b3J5IiwidHlwZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztBQUtPLElBQU1BLFNBQVMsR0FBRyxNQUFsQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsU0FBckI7O0FBRVAsSUFBSUMsV0FBbUIscURBQ2xCRixTQURrQixFQUNORyxvQkFETSxpQ0FFbEJGLFlBRmtCLEVBRUhHLGtCQUZHLGdCQUF2Qjs7QUFLQSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUFzQztBQUNsQ0osRUFBQUEsV0FBVyxxQkFBUUEsV0FBUixFQUF3QkksS0FBeEIsQ0FBWDtBQUNIOztBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBVTtBQUN0QixNQUFJLE9BQU9OLFdBQVcsQ0FBQ00sSUFBRCxDQUFsQixLQUE2QixXQUFqQyxFQUE4QztBQUMxQyxVQUFNLElBQUlDLEtBQUosbUNBQW9DRCxJQUFwQyxRQUFOO0FBQ0g7O0FBRUQsU0FBT04sV0FBVyxDQUFDTSxJQUFELENBQWxCO0FBQ0gsQ0FORCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGV4dElucHV0LFxuICAgIFN1Z2dlc3Rcbn0gZnJvbSAnLi4vcmVkdXgtZm9ybSdcblxuZXhwb3J0IGNvbnN0IFRZUEVfVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCBjb25zdCBUWVBFX1NVR0dFU1QgPSAnc3VnZ2VzdCc7XG5cbmxldCB0eXBlTWFwcGluZzogb2JqZWN0ID0ge1xuICAgIFtUWVBFX1RFWFRdOiBUZXh0SW5wdXQsXG4gICAgW1RZUEVfU1VHR0VTVF06IFN1Z2dlc3Rcbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVHlwZXModHlwZXM6IG9iamVjdCkge1xuICAgIHR5cGVNYXBwaW5nID0geyAuLi50eXBlTWFwcGluZywgLi4udHlwZXMgfTtcbn1cblxuY29uc3QgZmFjdG9yeSA9ICh0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0eXBlTWFwcGluZ1t0eXBlXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGZpbHRlciB0eXBlIC0gXCIke3R5cGV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZU1hcHBpbmdbdHlwZV1cbn07XG5cbmV4cG9ydCB7XG4gICAgZmFjdG9yeSxcbiAgICByZWdpc3RlclR5cGVzXG59OyJdfQ==