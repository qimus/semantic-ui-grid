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
exports.Provider = void 0;

var _factory = require("components/filters/factory");

var _components = _interopRequireDefault(require("./components"));

var _AbstractProvider = _interopRequireDefault(require("./components/providers/AbstractProvider"));

var _ApiDataProvider = _interopRequireDefault(require("./components/providers/ApiDataProvider"));

var _ArrayDataProvider = _interopRequireDefault(require("./components/providers/ArrayDataProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = {
  AbstractProvider: _AbstractProvider.default,
  ApiDataProvider: _ApiDataProvider.default,
  ArrayDataProvider: _ArrayDataProvider.default
};
exports.Provider = Provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJQcm92aWRlciIsIkFic3RyYWN0UHJvdmlkZXIiLCJBcGlEYXRhUHJvdmlkZXIiLCJBcnJheURhdGFQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLEVBQUFBLGdCQUFnQixFQUFoQkEseUJBRGE7QUFFYkMsRUFBQUEsZUFBZSxFQUFmQSx3QkFGYTtBQUdiQyxFQUFBQSxpQkFBaUIsRUFBakJBO0FBSGEsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlclR5cGVzIGFzIHJlZ2lzdGVyRmlsdGVyVHlwZXMgfSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvZmFjdG9yeSdcbmltcG9ydCBFeHRUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvcHJvdmlkZXJzL0Fic3RyYWN0UHJvdmlkZXInXG5pbXBvcnQgQXBpRGF0YVByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9wcm92aWRlcnMvQXBpRGF0YVByb3ZpZGVyJ1xuaW1wb3J0IEFycmF5RGF0YVByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9wcm92aWRlcnMvQXJyYXlEYXRhUHJvdmlkZXInXG5cbmNvbnN0IFByb3ZpZGVyID0ge1xuICAgIEFic3RyYWN0UHJvdmlkZXIsXG4gICAgQXBpRGF0YVByb3ZpZGVyLFxuICAgIEFycmF5RGF0YVByb3ZpZGVyXG59O1xuXG5leHBvcnQge1xuICAgIHJlZ2lzdGVyRmlsdGVyVHlwZXMsXG4gICAgRXh0VGFibGUsXG4gICAgUHJvdmlkZXJcbn0iXX0=