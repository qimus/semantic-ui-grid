"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultMessages = {
  'confirm_dialog.confirm_header': 'Confirm',
  'confirm_dialog.message': 'Are you sure you want to take this action?',
  'confirm_dialog.yes': 'Yes',
  'confirm_dialog.no': 'No',
  'suggest.noResultMessage': 'Nothing found',
  'suggest.prompt': 'Enter value...'
};

var i18n =
/*#__PURE__*/
function () {
  function i18n() {
    _classCallCheck(this, i18n);

    _defineProperty(this, "messages", defaultMessages);
  }

  _createClass(i18n, [{
    key: "getMessage",
    value: function getMessage(code) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return this.messages[code] || defaultValue;
    }
  }, {
    key: "setMessages",
    value: function setMessages(messages) {
      this.messages = messages;
    }
  }]);

  return i18n;
}();

var _default = new i18n();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2kxOG4udHMiXSwibmFtZXMiOlsiZGVmYXVsdE1lc3NhZ2VzIiwiaTE4biIsImNvZGUiLCJkZWZhdWx0VmFsdWUiLCJtZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3BCLG1DQUFpQyxTQURiO0FBRXBCLDRCQUEwQiw0Q0FGTjtBQUdwQix3QkFBc0IsS0FIRjtBQUlwQix1QkFBcUIsSUFKRDtBQUtwQiw2QkFBMkIsZUFMUDtBQU1wQixvQkFBa0I7QUFORSxDQUF4Qjs7SUFTTUMsSTs7Ozs7O3NDQUNpQkQsZTs7Ozs7K0JBRVJFLEksRUFBeUI7QUFBQSxVQUFuQkMsWUFBbUIsdUVBQUosRUFBSTtBQUNoQyxhQUFPLEtBQUtDLFFBQUwsQ0FBY0YsSUFBZCxLQUF1QkMsWUFBOUI7QUFDSDs7O2dDQUVXQyxRLEVBQVU7QUFDbEIsV0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7Ozs7O2VBR1UsSUFBSUgsSUFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdE1lc3NhZ2VzID0ge1xuICAgICdjb25maXJtX2RpYWxvZy5jb25maXJtX2hlYWRlcic6ICdDb25maXJtJyxcbiAgICAnY29uZmlybV9kaWFsb2cubWVzc2FnZSc6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdGFrZSB0aGlzIGFjdGlvbj8nLFxuICAgICdjb25maXJtX2RpYWxvZy55ZXMnOiAnWWVzJyxcbiAgICAnY29uZmlybV9kaWFsb2cubm8nOiAnTm8nLFxuICAgICdzdWdnZXN0Lm5vUmVzdWx0TWVzc2FnZSc6ICdOb3RoaW5nIGZvdW5kJyxcbiAgICAnc3VnZ2VzdC5wcm9tcHQnOiAnRW50ZXIgdmFsdWUuLi4nXG59O1xuXG5jbGFzcyBpMThuIHtcbiAgICBwcml2YXRlIG1lc3NhZ2VzID0gZGVmYXVsdE1lc3NhZ2VzO1xuXG4gICAgZ2V0TWVzc2FnZShjb2RlLCBkZWZhdWx0VmFsdWUgPSAnJykge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1tjb2RlXSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgc2V0TWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IGkxOG4oKTsiXX0=