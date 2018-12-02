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
Object.defineProperty(exports, "registerColumnTypes", {
  enumerable: true,
  get: function get() {
    return _columns.registerColumnTypes;
  }
});
Object.defineProperty(exports, "ExtTable", {
  enumerable: true,
  get: function get() {
    return _components.default;
  }
});
exports.setHistory = exports.history = exports.Column = exports.Action = exports.Provider = void 0;

var _factory = require("./components/filters/factory");

var _columns = require("./components/columns");

var _components = _interopRequireDefault(require("./components"));

var _AbstractProvider = _interopRequireDefault(require("./components/providers/AbstractProvider"));

var _ApiDataProvider = _interopRequireDefault(require("./components/providers/ApiDataProvider"));

var _ArrayDataProvider = _interopRequireDefault(require("./components/providers/ArrayDataProvider"));

var _actions = require("./components/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = {
  location: window.location,
  push: function push(route) {}
};
exports.history = history;

var setHistory = function setHistory(newHistory) {
  return exports.history = history = newHistory;
};

exports.setHistory = setHistory;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJoaXN0b3J5IiwibG9jYXRpb24iLCJ3aW5kb3ciLCJwdXNoIiwicm91dGUiLCJzZXRIaXN0b3J5IiwibmV3SGlzdG9yeSIsIkFjdGlvbiIsIkRlbGV0ZUFjdGlvbiIsIkVkaXRBY3Rpb24iLCJQcm92aWRlciIsIkFic3RyYWN0UHJvdmlkZXIiLCJBcGlEYXRhUHJvdmlkZXIiLCJBcnJheURhdGFQcm92aWRlciIsIkNvbHVtbiIsIkFDVElPTl9DT0xVTU4iLCJTSU1QTEVfQ09MVU1OIiwiU0VSSUFMX0NPTFVNTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQWNBOzs7O0FBUEEsSUFBSUEsT0FBeUIsR0FBRztBQUM1QkMsRUFBQUEsUUFBUSxFQUFFQyxNQUFNLENBQUNELFFBRFc7QUFFNUJFLEVBQUFBLElBRjRCLGdCQUV2QkMsS0FGdUIsRUFFUixDQUFFO0FBRk0sQ0FBaEM7OztBQUtBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFVBQUQ7QUFBQSwyQkFBZ0JOLE9BQU8sR0FBR00sVUFBMUI7QUFBQSxDQUFuQjs7O0FBYUEsSUFBTUMsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLFlBQVksRUFBWkEscUJBRFc7QUFFWEMsRUFBQUEsVUFBVSxFQUFWQTtBQUZXLENBQWY7O0FBS0EsSUFBTUMsUUFBUSxHQUFHO0FBQ2JDLEVBQUFBLGdCQUFnQixFQUFoQkEseUJBRGE7QUFFYkMsRUFBQUEsZUFBZSxFQUFmQSx3QkFGYTtBQUdiQyxFQUFBQSxpQkFBaUIsRUFBakJBO0FBSGEsQ0FBakI7O0FBTUEsSUFBTUMsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLGFBQWEsRUFBYkEsc0JBRFc7QUFFWEMsRUFBQUEsYUFBYSxFQUFiQSxzQkFGVztBQUdYQyxFQUFBQSxhQUFhLEVBQWJBO0FBSFcsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyVHlwZXMgYXMgcmVnaXN0ZXJGaWx0ZXJUeXBlcyB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXJzL2ZhY3RvcnknXG5pbXBvcnQgeyByZWdpc3RlckNvbHVtblR5cGVzIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbHVtbnMnXG5cbmltcG9ydCBFeHRUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlcidcbmltcG9ydCBBcGlEYXRhUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3Byb3ZpZGVycy9BcGlEYXRhUHJvdmlkZXInXG5pbXBvcnQgQXJyYXlEYXRhUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3Byb3ZpZGVycy9BcnJheURhdGFQcm92aWRlcidcblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5SW50ZXJmYWNlIHtcbiAgICBsb2NhdGlvbjogYW55O1xuICAgIHB1c2gocm91dGU6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmxldCBoaXN0b3J5OiBIaXN0b3J5SW50ZXJmYWNlID0ge1xuICAgIGxvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24sXG4gICAgcHVzaChyb3V0ZTogc3RyaW5nKSB7fVxufTtcblxuY29uc3Qgc2V0SGlzdG9yeSA9IChuZXdIaXN0b3J5KSA9PiBoaXN0b3J5ID0gbmV3SGlzdG9yeTtcblxuaW1wb3J0IHtcbiAgICBEZWxldGVBY3Rpb24sXG4gICAgRWRpdEFjdGlvblxufSBmcm9tICcuL2NvbXBvbmVudHMvYWN0aW9ucydcblxuaW1wb3J0IHtcbiAgICBBQ1RJT05fQ09MVU1OLFxuICAgIFNFUklBTF9DT0xVTU4sXG4gICAgU0lNUExFX0NPTFVNTlxufSBmcm9tICcuL2NvbXBvbmVudHMvY29sdW1ucydcblxuY29uc3QgQWN0aW9uID0ge1xuICAgIERlbGV0ZUFjdGlvbixcbiAgICBFZGl0QWN0aW9uXG59O1xuXG5jb25zdCBQcm92aWRlciA9IHtcbiAgICBBYnN0cmFjdFByb3ZpZGVyLFxuICAgIEFwaURhdGFQcm92aWRlcixcbiAgICBBcnJheURhdGFQcm92aWRlclxufTtcblxuY29uc3QgQ29sdW1uID0ge1xuICAgIEFDVElPTl9DT0xVTU4sXG4gICAgU0lNUExFX0NPTFVNTixcbiAgICBTRVJJQUxfQ09MVU1OXG59O1xuXG5leHBvcnQge1xuICAgIHJlZ2lzdGVyRmlsdGVyVHlwZXMsXG4gICAgcmVnaXN0ZXJDb2x1bW5UeXBlcyxcbiAgICBFeHRUYWJsZSxcbiAgICBQcm92aWRlcixcbiAgICBBY3Rpb24sXG4gICAgQ29sdW1uLFxuICAgIGhpc3RvcnksXG4gICAgc2V0SGlzdG9yeVxufSJdfQ==