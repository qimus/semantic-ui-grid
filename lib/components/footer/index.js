"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  perPageContainer: {
    float: 'right'
  },
  perPage: {
    display: 'inline-block',
    width: 80,
    marginLeft: 10,
    marginRight: 20
  }
};

var TableFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableFooter, _React$Component);

  function TableFooter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableFooter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangePerPage", function (e, _ref) {
      var value = _ref.value;
      e.preventDefault();
      var provider = _this.props.provider;
      provider.setActivePage(1, +value);

      _this.setState({
        perPage: provider.getPerPage()
      });

      provider.fetch();
    });

    return _this;
  }

  _createClass(TableFooter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          provider = _this$props.provider,
          colSpan = _this$props.colSpan,
          handlePaginate = _this$props.handlePaginate;
      var perPage = provider.getPerPage();
      var limitOptions = [];
      provider.pageLimits.forEach(function (value) {
        limitOptions.push({
          key: value,
          text: value,
          value: value
        });
      });

      if (!provider.pageLimits.includes(perPage)) {
        limitOptions.push({
          key: perPage,
          text: perPage,
          value: perPage
        });
      }

      var toRecord = provider.getStartIndex() + provider.getPerPage();

      if (toRecord > provider.getTotalCount()) {
        toRecord = provider.getTotalCount();
      }

      return React.createElement(_semanticUiReact.Table.Footer, null, React.createElement(_semanticUiReact.Table.Row, null, React.createElement(_semanticUiReact.Table.HeaderCell, {
        colSpan: colSpan,
        verticalAlign: 'middle'
      }, React.createElement(_semanticUiReact.Grid, {
        columns: 2
      }, React.createElement(_semanticUiReact.Grid.Row, null, React.createElement(_semanticUiReact.Grid.Column, {
        verticalAlign: 'middle'
      }, provider.getTotalCount() > 0 && React.createElement(React.Fragment, null, React.createElement("span", null, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0437\u0430\u043F\u0438\u0441\u0438 "), React.createElement("span", {
        style: {
          fontWeight: 'bold'
        }
      }, "".concat(provider.getStartIndex() + 1, " - ").concat(toRecord)), React.createElement("span", null, " \u0438\u0437 "), React.createElement("span", {
        style: {
          fontWeight: 'bold'
        }
      }, provider.getTotalCount()))), React.createElement(_semanticUiReact.Grid.Column, null, provider.getTotalCount() > provider.getPerPage() && React.createElement(_semanticUiReact.Pagination, {
        floated: 'right',
        totalPages: provider.getTotalPages(),
        activePage: provider.getActivePage(),
        onPageChange: handlePaginate
      }), React.createElement("div", {
        style: styles.perPageContainer
      }, "\u0417\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435", React.createElement("div", {
        style: styles.perPage
      }, React.createElement(_semanticUiReact.Dropdown, {
        fluid: true,
        selection: true,
        options: limitOptions,
        value: perPage,
        onChange: this.handleChangePerPage
      })))))))));
    }
  }]);

  return TableFooter;
}(React.Component);

exports.default = TableFooter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50c3giXSwibmFtZXMiOlsic3R5bGVzIiwicGVyUGFnZUNvbnRhaW5lciIsImZsb2F0IiwicGVyUGFnZSIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIlRhYmxlRm9vdGVyIiwiZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwcm92aWRlciIsInByb3BzIiwic2V0QWN0aXZlUGFnZSIsInNldFN0YXRlIiwiZ2V0UGVyUGFnZSIsImZldGNoIiwiY29sU3BhbiIsImhhbmRsZVBhZ2luYXRlIiwibGltaXRPcHRpb25zIiwicGFnZUxpbWl0cyIsImZvckVhY2giLCJwdXNoIiwia2V5IiwidGV4dCIsImluY2x1ZGVzIiwidG9SZWNvcmQiLCJnZXRTdGFydEluZGV4IiwiZ2V0VG90YWxDb3VudCIsImZvbnRXZWlnaHQiLCJnZXRUb3RhbFBhZ2VzIiwiZ2V0QWN0aXZlUGFnZSIsImhhbmRsZUNoYW5nZVBlclBhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsZ0JBQWdCLEVBQUU7QUFDZEMsSUFBQUEsS0FBSyxFQUFFO0FBRE8sR0FEUDtBQUlYQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLGNBREo7QUFFTEMsSUFBQUEsS0FBSyxFQUFFLEVBRkY7QUFHTEMsSUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFJTEMsSUFBQUEsV0FBVyxFQUFFO0FBSlI7QUFKRSxDQUFmOztJQWtCcUJDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FDSyxVQUFDQyxDQUFELFFBQWtCO0FBQUEsVUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3BDRCxNQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFEb0MsVUFFNUJDLFFBRjRC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LEVBQUVuQixNQUFNLENBQUNDO0FBQW5CLHFIQUVJO0FBQUssUUFBQSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0c7QUFBbkIsU0FDSSxvQkFBQyx5QkFBRDtBQUNJLFFBQUEsS0FBSyxNQURUO0FBRUksUUFBQSxTQUFTLE1BRmI7QUFHSSxRQUFBLE9BQU8sRUFBRWlCLFlBSGI7QUFJSSxRQUFBLEtBQUssRUFBRWpCLE9BSlg7QUFLSSxRQUFBLFFBQVEsRUFBRSxLQUFLOEI7QUFMbkIsUUFESixDQUZKLENBUEosQ0FYSixDQURKLENBREosQ0FESixDQURKLENBREo7QUF5Q0g7Ozs7RUFwRW9DQyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgUGFnaW5hdGlvbixcbiAgICBUYWJsZSxcbiAgICBHcmlkLFxuICAgIERyb3Bkb3duXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgQWJzdHJhY3RQcm92aWRlciBmcm9tICcuLi9wcm92aWRlcnMvQWJzdHJhY3RQcm92aWRlcidcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHBlclBhZ2VDb250YWluZXI6IHtcbiAgICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICB9LFxuICAgIHBlclBhZ2U6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHdpZHRoOiA4MCxcbiAgICAgICAgbWFyZ2luTGVmdDogMTAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAyMFxuICAgIH1cbn07XG5cbmludGVyZmFjZSBUYWJsZUZvb3RlclByb3BzIHtcbiAgICBwcm92aWRlcjogQWJzdHJhY3RQcm92aWRlcjtcbiAgICBjb2xTcGFuOiBudW1iZXI7XG4gICAgaGFuZGxlUGFnaW5hdGU6IChldmVudCwgZGF0YSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFibGVGb290ZXJQcm9wcywge30+IHtcbiAgICBoYW5kbGVDaGFuZ2VQZXJQYWdlID0gKGUsIHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHsgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHByb3ZpZGVyLnNldEFjdGl2ZVBhZ2UoMSwgK3ZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlclBhZ2U6IHByb3ZpZGVyLmdldFBlclBhZ2UoKSB9KTtcbiAgICAgICAgcHJvdmlkZXIuZmV0Y2goKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb3ZpZGVyLCBjb2xTcGFuLCBoYW5kbGVQYWdpbmF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcGVyUGFnZSA9IHByb3ZpZGVyLmdldFBlclBhZ2UoKTtcblxuICAgICAgICBsZXQgbGltaXRPcHRpb25zID0gW107XG4gICAgICAgIHByb3ZpZGVyLnBhZ2VMaW1pdHMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBsaW1pdE9wdGlvbnMucHVzaCh7IGtleTogdmFsdWUsIHRleHQ6IHZhbHVlLCB2YWx1ZSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFwcm92aWRlci5wYWdlTGltaXRzLmluY2x1ZGVzKHBlclBhZ2UpKSB7XG4gICAgICAgICAgICBsaW1pdE9wdGlvbnMucHVzaCh7IGtleTogcGVyUGFnZSwgdGV4dDogcGVyUGFnZSwgdmFsdWU6IHBlclBhZ2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9SZWNvcmQgPSBwcm92aWRlci5nZXRTdGFydEluZGV4KCkgKyBwcm92aWRlci5nZXRQZXJQYWdlKCk7XG4gICAgICAgIGlmICh0b1JlY29yZCA+IHByb3ZpZGVyLmdldFRvdGFsQ291bnQoKSkge1xuICAgICAgICAgICAgdG9SZWNvcmQgPSBwcm92aWRlci5nZXRUb3RhbENvdW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCBjb2xTcGFuPXtjb2xTcGFufSB2ZXJ0aWNhbEFsaWduPXsnbWlkZGxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB2ZXJ0aWNhbEFsaWduPXsnbWlkZGxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZXIuZ2V0VG90YWxDb3VudCgpID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qn9C+0LrQsNC30LDQvdGLINC30LDQv9C40YHQuCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57YCR7cHJvdmlkZXIuZ2V0U3RhcnRJbmRleCgpICsgMX0gLSAke3RvUmVjb3JkfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4g0LjQtyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57cHJvdmlkZXIuZ2V0VG90YWxDb3VudCgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVyLmdldFRvdGFsQ291bnQoKSA+IHByb3ZpZGVyLmdldFBlclBhZ2UoKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gZmxvYXRlZD17J3JpZ2h0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXtwcm92aWRlci5nZXRUb3RhbFBhZ2VzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17cHJvdmlkZXIuZ2V0QWN0aXZlUGFnZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnaW5hdGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGVyUGFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNC/0LjRgdC10Lkg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBlclBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xpbWl0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUGVyUGFnZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgPC9UYWJsZS5Gb290ZXI+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=