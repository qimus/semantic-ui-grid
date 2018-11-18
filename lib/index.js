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

var _factory = require("./components/filters/factory");

var _components = _interopRequireDefault(require("./components"));

var _AbstractProvider = _interopRequireDefault(require("./components/providers/AbstractProvider"));

var _ApiDataProvider = _interopRequireDefault(require("./components/providers/ApiDataProvider"));

var _ArrayDataProvider = _interopRequireDefault(require("./components/providers/ArrayDataProvider"));

var _actions = require("./components/actions");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJBY3Rpb24iLCJEZWxldGVBY3Rpb24iLCJFZGl0QWN0aW9uIiwiUHJvdmlkZXIiLCJBYnN0cmFjdFByb3ZpZGVyIiwiQXBpRGF0YVByb3ZpZGVyIiwiQXJyYXlEYXRhUHJvdmlkZXIiLCJDb2x1bW4iLCJBQ1RJT05fQ09MVU1OIiwiU0lNUExFX0NPTFVNTiIsIlNFUklBTF9DT0xVTU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFLQTs7OztBQU1BLElBQU1BLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxZQUFZLEVBQVpBLHFCQURXO0FBRVhDLEVBQUFBLFVBQVUsRUFBVkE7QUFGVyxDQUFmOztBQUtBLElBQU1DLFFBQVEsR0FBRztBQUNiQyxFQUFBQSxnQkFBZ0IsRUFBaEJBLHlCQURhO0FBRWJDLEVBQUFBLGVBQWUsRUFBZkEsd0JBRmE7QUFHYkMsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQUhhLENBQWpCOztBQU1BLElBQU1DLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxhQUFhLEVBQWJBLHNCQURXO0FBRVhDLEVBQUFBLGFBQWEsRUFBYkEsc0JBRlc7QUFHWEMsRUFBQUEsYUFBYSxFQUFiQTtBQUhXLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlclR5cGVzIGFzIHJlZ2lzdGVyRmlsdGVyVHlwZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVycy9mYWN0b3J5J1xuXG5pbXBvcnQgRXh0VGFibGUgZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXInXG5pbXBvcnQgQXBpRGF0YVByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9wcm92aWRlcnMvQXBpRGF0YVByb3ZpZGVyJ1xuaW1wb3J0IEFycmF5RGF0YVByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9wcm92aWRlcnMvQXJyYXlEYXRhUHJvdmlkZXInXG5cbmltcG9ydCB7XG4gICAgRGVsZXRlQWN0aW9uLFxuICAgIEVkaXRBY3Rpb25cbn0gZnJvbSAnLi9jb21wb25lbnRzL2FjdGlvbnMnXG5cbmltcG9ydCB7XG4gICAgQUNUSU9OX0NPTFVNTixcbiAgICBTRVJJQUxfQ09MVU1OLFxuICAgIFNJTVBMRV9DT0xVTU5cbn0gZnJvbSAnLi9jb21wb25lbnRzL2NvbHVtbnMnXG5cbmNvbnN0IEFjdGlvbiA9IHtcbiAgICBEZWxldGVBY3Rpb24sXG4gICAgRWRpdEFjdGlvblxufTtcblxuY29uc3QgUHJvdmlkZXIgPSB7XG4gICAgQWJzdHJhY3RQcm92aWRlcixcbiAgICBBcGlEYXRhUHJvdmlkZXIsXG4gICAgQXJyYXlEYXRhUHJvdmlkZXJcbn07XG5cbmNvbnN0IENvbHVtbiA9IHtcbiAgICBBQ1RJT05fQ09MVU1OLFxuICAgIFNJTVBMRV9DT0xVTU4sXG4gICAgU0VSSUFMX0NPTFVNTlxufTtcblxuZXhwb3J0IHtcbiAgICByZWdpc3RlckZpbHRlclR5cGVzLFxuICAgIEV4dFRhYmxlLFxuICAgIFByb3ZpZGVyLFxuICAgIEFjdGlvbixcbiAgICBDb2x1bW5cbn0iXX0=