"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factory;
exports.registerColumnTypes = exports.CHECKBOX_COLUMN = exports.ACTION_COLUMN = exports.SERIAL_COLUMN = exports.SIMPLE_COLUMN = void 0;

var _simple = _interopRequireDefault(require("./simple"));

var _serial = _interopRequireDefault(require("./serial"));

var _action = _interopRequireDefault(require("./action"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _columnTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SIMPLE_COLUMN = 'simple';
exports.SIMPLE_COLUMN = SIMPLE_COLUMN;
var SERIAL_COLUMN = 'serial';
exports.SERIAL_COLUMN = SERIAL_COLUMN;
var ACTION_COLUMN = 'action';
exports.ACTION_COLUMN = ACTION_COLUMN;
var CHECKBOX_COLUMN = 'checkbox';
exports.CHECKBOX_COLUMN = CHECKBOX_COLUMN;
var columnTypes = (_columnTypes = {}, _defineProperty(_columnTypes, SIMPLE_COLUMN, _simple.default), _defineProperty(_columnTypes, ACTION_COLUMN, _action.default), _defineProperty(_columnTypes, SERIAL_COLUMN, _serial.default), _defineProperty(_columnTypes, CHECKBOX_COLUMN, _checkbox.default), _columnTypes);

var registerColumnTypes = function registerColumnTypes(map) {
  columnTypes = _objectSpread({}, columnTypes, map);
};

exports.registerColumnTypes = registerColumnTypes;

function factory(type) {
  if (typeof columnTypes[type] !== 'undefined') {
    return columnTypes[type];
  }

  return _simple.default;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNJTVBMRV9DT0xVTU4iLCJTRVJJQUxfQ09MVU1OIiwiQUNUSU9OX0NPTFVNTiIsIkNIRUNLQk9YX0NPTFVNTiIsImNvbHVtblR5cGVzIiwiU2ltcGxlQ29sdW1uIiwiQWN0aW9uQ29sdW1uIiwiU2VyaWFsQ29sdW1uIiwiQ2hlY2tib3hDb2x1bW4iLCJyZWdpc3RlckNvbHVtblR5cGVzIiwibWFwIiwiZmFjdG9yeSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxhQUFhLEdBQUcsUUFBdEI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFFBQXRCOztBQUNBLElBQU1DLGFBQWEsR0FBRyxRQUF0Qjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsVUFBeEI7O0FBRVAsSUFBSUMsV0FBVyxxREFDVkosYUFEVSxFQUNNSyxlQUROLGlDQUVWSCxhQUZVLEVBRU1JLGVBRk4saUNBR1ZMLGFBSFUsRUFHTU0sZUFITixpQ0FJVkosZUFKVSxFQUlRSyxpQkFKUixnQkFBZjs7QUFPTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEdBQUQsRUFBUztBQUN4Q04sRUFBQUEsV0FBVyxxQkFBUUEsV0FBUixFQUF5Qk0sR0FBekIsQ0FBWDtBQUNILENBRk07Ozs7QUFJUSxTQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNsQyxNQUFJLE9BQU9SLFdBQVcsQ0FBQ1EsSUFBRCxDQUFsQixLQUE2QixXQUFqQyxFQUE4QztBQUMxQyxXQUFPUixXQUFXLENBQUNRLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxTQUFPUCxlQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2ltcGxlQ29sdW1uIGZyb20gJy4vc2ltcGxlJ1xuaW1wb3J0IFNlcmlhbENvbHVtbiBmcm9tICcuL3NlcmlhbCdcbmltcG9ydCBBY3Rpb25Db2x1bW4gZnJvbSAnLi9hY3Rpb24nXG5pbXBvcnQgQ2hlY2tib3hDb2x1bW4gZnJvbSAnLi9jaGVja2JveCdcblxuZXhwb3J0IGNvbnN0IFNJTVBMRV9DT0xVTU4gPSAnc2ltcGxlJztcbmV4cG9ydCBjb25zdCBTRVJJQUxfQ09MVU1OID0gJ3NlcmlhbCc7XG5leHBvcnQgY29uc3QgQUNUSU9OX0NPTFVNTiA9ICdhY3Rpb24nO1xuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTFVNTiA9ICdjaGVja2JveCc7XG5cbmxldCBjb2x1bW5UeXBlcyA9IHtcbiAgICBbU0lNUExFX0NPTFVNTl06IFNpbXBsZUNvbHVtbixcbiAgICBbQUNUSU9OX0NPTFVNTl06IEFjdGlvbkNvbHVtbixcbiAgICBbU0VSSUFMX0NPTFVNTl06IFNlcmlhbENvbHVtbixcbiAgICBbQ0hFQ0tCT1hfQ09MVU1OXTogQ2hlY2tib3hDb2x1bW4sXG59O1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJDb2x1bW5UeXBlcyA9IChtYXApID0+IHtcbiAgICBjb2x1bW5UeXBlcyA9IHsgLi4uY29sdW1uVHlwZXMsIC4uLiBtYXB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmFjdG9yeSh0eXBlKSB7XG4gICAgaWYgKHR5cGVvZiBjb2x1bW5UeXBlc1t0eXBlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtblR5cGVzW3R5cGVdXG4gICAgfVxuXG4gICAgcmV0dXJuIFNpbXBsZUNvbHVtblxufVxuIl19