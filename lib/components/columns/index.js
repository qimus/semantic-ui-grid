"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factory;
exports.registerColumnTypes = exports.ACTION_COLUMN = exports.SERIAL_COLUMN = exports.SIMPLE_COLUMN = void 0;

var _simple = _interopRequireDefault(require("./simple"));

var _serial = _interopRequireDefault(require("./serial"));

var _action = _interopRequireDefault(require("./action"));

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
var columnTypes = (_columnTypes = {}, _defineProperty(_columnTypes, SIMPLE_COLUMN, _simple.default), _defineProperty(_columnTypes, ACTION_COLUMN, _action.default), _defineProperty(_columnTypes, SERIAL_COLUMN, _serial.default), _columnTypes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNJTVBMRV9DT0xVTU4iLCJTRVJJQUxfQ09MVU1OIiwiQUNUSU9OX0NPTFVNTiIsImNvbHVtblR5cGVzIiwiU2ltcGxlQ29sdW1uIiwiQWN0aW9uQ29sdW1uIiwiU2VyaWFsQ29sdW1uIiwicmVnaXN0ZXJDb2x1bW5UeXBlcyIsIm1hcCIsImZhY3RvcnkiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsYUFBYSxHQUFHLFFBQXRCOztBQUNBLElBQU1DLGFBQWEsR0FBRyxRQUF0Qjs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsUUFBdEI7O0FBRVAsSUFBSUMsV0FBVyxxREFDVkgsYUFEVSxFQUNNSSxlQUROLGlDQUVWRixhQUZVLEVBRU1HLGVBRk4saUNBR1ZKLGFBSFUsRUFHTUssZUFITixnQkFBZjs7QUFNTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEdBQUQsRUFBUztBQUN4Q0wsRUFBQUEsV0FBVyxxQkFBUUEsV0FBUixFQUF5QkssR0FBekIsQ0FBWDtBQUNILENBRk07Ozs7QUFJUSxTQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNsQyxNQUFJLE9BQU9QLFdBQVcsQ0FBQ08sSUFBRCxDQUFsQixLQUE2QixXQUFqQyxFQUE4QztBQUMxQyxXQUFPUCxXQUFXLENBQUNPLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxTQUFPTixlQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2ltcGxlQ29sdW1uIGZyb20gJy4vc2ltcGxlJ1xuaW1wb3J0IFNlcmlhbENvbHVtbiBmcm9tICcuL3NlcmlhbCdcbmltcG9ydCBBY3Rpb25Db2x1bW4gZnJvbSAnLi9hY3Rpb24nXG5cbmV4cG9ydCBjb25zdCBTSU1QTEVfQ09MVU1OID0gJ3NpbXBsZSc7XG5leHBvcnQgY29uc3QgU0VSSUFMX0NPTFVNTiA9ICdzZXJpYWwnO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9DT0xVTU4gPSAnYWN0aW9uJztcblxubGV0IGNvbHVtblR5cGVzID0ge1xuICAgIFtTSU1QTEVfQ09MVU1OXTogU2ltcGxlQ29sdW1uLFxuICAgIFtBQ1RJT05fQ09MVU1OXTogQWN0aW9uQ29sdW1uLFxuICAgIFtTRVJJQUxfQ09MVU1OXTogU2VyaWFsQ29sdW1uXG59O1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJDb2x1bW5UeXBlcyA9IChtYXApID0+IHtcbiAgICBjb2x1bW5UeXBlcyA9IHsgLi4uY29sdW1uVHlwZXMsIC4uLiBtYXB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmFjdG9yeSh0eXBlKSB7XG4gICAgaWYgKHR5cGVvZiBjb2x1bW5UeXBlc1t0eXBlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtblR5cGVzW3R5cGVdXG4gICAgfVxuXG4gICAgcmV0dXJuIFNpbXBsZUNvbHVtblxufVxuIl19