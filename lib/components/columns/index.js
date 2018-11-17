"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factory;
exports.ACTION_COLUMN = exports.SERIAL_COLUMN = exports.SIMPLE_COLUMN = void 0;

var _simple = _interopRequireDefault(require("./simple"));

var _serial = _interopRequireDefault(require("./serial"));

var _action = _interopRequireDefault(require("./action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIMPLE_COLUMN = 'simple';
exports.SIMPLE_COLUMN = SIMPLE_COLUMN;
var SERIAL_COLUMN = 'serial';
exports.SERIAL_COLUMN = SERIAL_COLUMN;
var ACTION_COLUMN = 'action';
exports.ACTION_COLUMN = ACTION_COLUMN;

function factory(type) {
  switch (type) {
    case SERIAL_COLUMN:
      return _serial.default;

    case ACTION_COLUMN:
      return _action.default;

    default:
      return _simple.default;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbHVtbnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNJTVBMRV9DT0xVTU4iLCJTRVJJQUxfQ09MVU1OIiwiQUNUSU9OX0NPTFVNTiIsImZhY3RvcnkiLCJ0eXBlIiwiU2VyaWFsQ29sdW1uIiwiQWN0aW9uQ29sdW1uIiwiU2ltcGxlQ29sdW1uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsYUFBYSxHQUFHLFFBQXRCOztBQUNBLElBQU1DLGFBQWEsR0FBRyxRQUF0Qjs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsUUFBdEI7OztBQUVRLFNBQVNDLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ2xDLFVBQVFBLElBQVI7QUFDSSxTQUFLSCxhQUFMO0FBQ0ksYUFBT0ksZUFBUDs7QUFDSixTQUFLSCxhQUFMO0FBQ0ksYUFBT0ksZUFBUDs7QUFDSjtBQUNJLGFBQU9DLGVBQVA7QUFOUjtBQVFIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbXBsZUNvbHVtbiBmcm9tICcuL3NpbXBsZSdcbmltcG9ydCBTZXJpYWxDb2x1bW4gZnJvbSAnLi9zZXJpYWwnXG5pbXBvcnQgQWN0aW9uQ29sdW1uIGZyb20gJy4vYWN0aW9uJ1xuXG5leHBvcnQgY29uc3QgU0lNUExFX0NPTFVNTiA9ICdzaW1wbGUnO1xuZXhwb3J0IGNvbnN0IFNFUklBTF9DT0xVTU4gPSAnc2VyaWFsJztcbmV4cG9ydCBjb25zdCBBQ1RJT05fQ09MVU1OID0gJ2FjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZhY3RvcnkodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFNFUklBTF9DT0xVTU46XG4gICAgICAgICAgICByZXR1cm4gU2VyaWFsQ29sdW1uO1xuICAgICAgICBjYXNlIEFDVElPTl9DT0xVTU46XG4gICAgICAgICAgICByZXR1cm4gQWN0aW9uQ29sdW1uO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFNpbXBsZUNvbHVtblxuICAgIH1cbn1cbiJdfQ==