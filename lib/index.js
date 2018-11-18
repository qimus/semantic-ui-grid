"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "registerFilterTypes", {
  enumerable: true,
  get: function get() {
    return _factory.registerTypes;
  }
});
Object.defineProperty(exports, "ExtTable", {
  enumerable: true,
  get: function get() {
    return _components.default;
  }
});
exports.Column = exports.Action = exports.Provider = void 0;

var _factory = require("components/filters/factory");

var _components = _interopRequireDefault(require("./components"));

var _AbstractProvider = _interopRequireDefault(require("./components/providers/AbstractProvider"));

var _ApiDataProvider = _interopRequireDefault(require("./components/providers/ApiDataProvider"));

var _ArrayDataProvider = _interopRequireDefault(require("./components/providers/ArrayDataProvider"));

var _actions = require("components/actions");

var _columns = require("./components/columns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Action = {
  DeleteAction: _actions.DeleteAction,
  EditAction: _actions.EditAction
};
exports.Action = Action;
var Provider = {
  AbstractProvider: _AbstractProvider.default,
  ApiDataProvider: _ApiDataProvider.default,
  ArrayDataProvider: _ArrayDataProvider.default
};
exports.Provider = Provider;
var Column = {
  ACTION_COLUMN: _columns.ACTION_COLUMN,
  SIMPLE_COLUMN: _columns.SIMPLE_COLUMN,
  SERIAL_COLUMN: _columns.SERIAL_COLUMN
};
exports.Column = Column;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJBY3Rpb24iLCJEZWxldGVBY3Rpb24iLCJFZGl0QWN0aW9uIiwiUHJvdmlkZXIiLCJBYnN0cmFjdFByb3ZpZGVyIiwiQXBpRGF0YVByb3ZpZGVyIiwiQXJyYXlEYXRhUHJvdmlkZXIiLCJDb2x1bW4iLCJBQ1RJT05fQ09MVU1OIiwiU0lNUExFX0NPTFVNTiIsIlNFUklBTF9DT0xVTU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFLQTs7OztBQU1BLElBQU1BLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxZQUFZLEVBQVpBLHFCQURXO0FBRVhDLEVBQUFBLFVBQVUsRUFBVkE7QUFGVyxDQUFmOztBQUtBLElBQU1DLFFBQVEsR0FBRztBQUNiQyxFQUFBQSxnQkFBZ0IsRUFBaEJBLHlCQURhO0FBRWJDLEVBQUFBLGVBQWUsRUFBZkEsd0JBRmE7QUFHYkMsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQUhhLENBQWpCOztBQU1BLElBQU1DLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxhQUFhLEVBQWJBLHNCQURXO0FBRVhDLEVBQUFBLGFBQWEsRUFBYkEsc0JBRlc7QUFHWEMsRUFBQUEsYUFBYSxFQUFiQTtBQUhXLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlclR5cGVzIGFzIHJlZ2lzdGVyRmlsdGVyVHlwZXMgfSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvZmFjdG9yeSdcblxuaW1wb3J0IEV4dFRhYmxlIGZyb20gJy4vY29tcG9uZW50cydcblxuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyJ1xuaW1wb3J0IEFwaURhdGFQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvcHJvdmlkZXJzL0FwaURhdGFQcm92aWRlcidcbmltcG9ydCBBcnJheURhdGFQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvcHJvdmlkZXJzL0FycmF5RGF0YVByb3ZpZGVyJ1xuXG5pbXBvcnQge1xuICAgIERlbGV0ZUFjdGlvbixcbiAgICBFZGl0QWN0aW9uXG59IGZyb20gJ2NvbXBvbmVudHMvYWN0aW9ucydcblxuaW1wb3J0IHtcbiAgICBBQ1RJT05fQ09MVU1OLFxuICAgIFNFUklBTF9DT0xVTU4sXG4gICAgU0lNUExFX0NPTFVNTlxufSBmcm9tICcuL2NvbXBvbmVudHMvY29sdW1ucydcblxuY29uc3QgQWN0aW9uID0ge1xuICAgIERlbGV0ZUFjdGlvbixcbiAgICBFZGl0QWN0aW9uXG59O1xuXG5jb25zdCBQcm92aWRlciA9IHtcbiAgICBBYnN0cmFjdFByb3ZpZGVyLFxuICAgIEFwaURhdGFQcm92aWRlcixcbiAgICBBcnJheURhdGFQcm92aWRlclxufTtcblxuY29uc3QgQ29sdW1uID0ge1xuICAgIEFDVElPTl9DT0xVTU4sXG4gICAgU0lNUExFX0NPTFVNTixcbiAgICBTRVJJQUxfQ09MVU1OXG59O1xuXG5leHBvcnQge1xuICAgIHJlZ2lzdGVyRmlsdGVyVHlwZXMsXG4gICAgRXh0VGFibGUsXG4gICAgUHJvdmlkZXIsXG4gICAgQWN0aW9uLFxuICAgIENvbHVtblxufSJdfQ==