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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      perPage: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangePerPage", function (e, _ref) {
      var value = _ref.value;
      e.preventDefault();
      var provider = _this.props.provider;
      provider.setPerPage(+value);
      provider.setActivePage(1);

      _this.setState({
        perPage: provider.getPerPage()
      });

      provider.fetch();
    });

    return _this;
  }

  _createClass(TableFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var provider = this.props.provider;
      this.setState({
        perPage: provider.getPerPage()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          provider = _this$props.provider,
          colSpan = _this$props.colSpan,
          handlePaginate = _this$props.handlePaginate;
      var limitOptions = [];
      provider.pageLimits.forEach(function (value) {
        limitOptions.push({
          key: value,
          text: value,
          value: value
        });
      });

      if (!provider.pageLimits.includes(this.state.perPage)) {
        limitOptions.push({
          key: this.state.perPage,
          text: this.state.perPage,
          value: this.state.perPage
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
        value: this.state.perPage,
        onChange: this.handleChangePerPage
      })))))))));
    }
  }]);

  return TableFooter;
}(React.Component);

exports.default = TableFooter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50c3giXSwibmFtZXMiOlsic3R5bGVzIiwicGVyUGFnZUNvbnRhaW5lciIsImZsb2F0IiwicGVyUGFnZSIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIlRhYmxlRm9vdGVyIiwiZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwcm92aWRlciIsInByb3BzIiwic2V0UGVyUGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJzZXRTdGF0ZSIsImdldFBlclBhZ2UiLCJmZXRjaCIsImNvbFNwYW4iLCJoYW5kbGVQYWdpbmF0ZSIsImxpbWl0T3B0aW9ucyIsInBhZ2VMaW1pdHMiLCJmb3JFYWNoIiwicHVzaCIsImtleSIsInRleHQiLCJpbmNsdWRlcyIsInN0YXRlIiwidG9SZWNvcmQiLCJnZXRTdGFydEluZGV4IiwiZ2V0VG90YWxDb3VudCIsImZvbnRXZWlnaHQiLCJnZXRUb3RhbFBhZ2VzIiwiZ2V0QWN0aXZlUGFnZSIsImhhbmRsZUNoYW5nZVBlclBhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsZ0JBQWdCLEVBQUU7QUFDZEMsSUFBQUEsS0FBSyxFQUFFO0FBRE8sR0FEUDtBQUlYQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLGNBREo7QUFFTEMsSUFBQUEsS0FBSyxFQUFFLEVBRkY7QUFHTEMsSUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFJTEMsSUFBQUEsV0FBVyxFQUFFO0FBSlI7QUFKRSxDQUFmOztJQWtCcUJDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFDVDtBQUNKTCxNQUFBQSxPQUFPLEVBQUU7QUFETCxLOztrR0FXYyxVQUFDTSxDQUFELFFBQWtCO0FBQUEsVUFBWkMsS0FBWSxR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QU4sUUFDS25CLFFBQVEsQ0FBQ21CLGFBQVQsS0FBMkJuQixRQUFRLENBQUNLLFVBQVQsRUFBM0IsSUFDRyxvQkFBQywyQkFBRDtBQUFZLFFBQUEsT0FBTyxFQUFFLE9BQXJCO0FBQ1ksUUFBQSxVQUFVLEVBQUVMLFFBQVEsQ0FBQ3FCLGFBQVQsRUFEeEI7QUFFWSxRQUFBLFVBQVUsRUFBRXJCLFFBQVEsQ0FBQ3NCLGFBQVQsRUFGeEI7QUFHWSxRQUFBLFlBQVksRUFBRWQ7QUFIMUIsUUFGUixFQU9JO0FBQUssUUFBQSxLQUFLLEVBQUVwQixNQUFNLENBQUNDO0FBQW5CLHFIQUVJO0FBQUssUUFBQSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0c7QUFBbkIsU0FDSSxvQkFBQyx5QkFBRDtBQUNJLFFBQUEsS0FBSyxNQURUO0FBRUksUUFBQSxTQUFTLE1BRmI7QUFHSSxRQUFBLE9BQU8sRUFBRWtCLFlBSGI7QUFJSSxRQUFBLEtBQUssRUFBRSxLQUFLTyxLQUFMLENBQVd6QixPQUp0QjtBQUtJLFFBQUEsUUFBUSxFQUFFLEtBQUtnQztBQUxuQixRQURKLENBRkosQ0FQSixDQVhKLENBREosQ0FESixDQURKLENBREosQ0FESjtBQXlDSDs7OztFQS9Fb0NDLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBQYWdpbmF0aW9uLFxuICAgIFRhYmxlLFxuICAgIEdyaWQsXG4gICAgRHJvcGRvd25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBBYnN0cmFjdFByb3ZpZGVyIGZyb20gJy4uL3Byb3ZpZGVycy9BYnN0cmFjdFByb3ZpZGVyJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgcGVyUGFnZUNvbnRhaW5lcjoge1xuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xuICAgIH0sXG4gICAgcGVyUGFnZToge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgd2lkdGg6IDgwLFxuICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDIwXG4gICAgfVxufTtcblxuaW50ZXJmYWNlIFRhYmxlRm9vdGVyUHJvcHMge1xuICAgIHByb3ZpZGVyOiBBYnN0cmFjdFByb3ZpZGVyO1xuICAgIGNvbFNwYW46IG51bWJlcjtcbiAgICBoYW5kbGVQYWdpbmF0ZTogKGV2ZW50LCBkYXRhKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJsZUZvb3RlclByb3BzLCB7fT4ge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBwZXJQYWdlOiBudWxsXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IHByb3ZpZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBlclBhZ2U6IHByb3ZpZGVyLmdldFBlclBhZ2UoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VQZXJQYWdlID0gKGUsIHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHsgcHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHByb3ZpZGVyLnNldFBlclBhZ2UoK3ZhbHVlKTtcbiAgICAgICAgcHJvdmlkZXIuc2V0QWN0aXZlUGFnZSgxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlclBhZ2U6IHByb3ZpZGVyLmdldFBlclBhZ2UoKSB9KTtcbiAgICAgICAgcHJvdmlkZXIuZmV0Y2goKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb3ZpZGVyLCBjb2xTcGFuLCBoYW5kbGVQYWdpbmF0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgbGltaXRPcHRpb25zID0gW107XG4gICAgICAgIHByb3ZpZGVyLnBhZ2VMaW1pdHMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBsaW1pdE9wdGlvbnMucHVzaCh7IGtleTogdmFsdWUsIHRleHQ6IHZhbHVlLCB2YWx1ZSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFwcm92aWRlci5wYWdlTGltaXRzLmluY2x1ZGVzKHRoaXMuc3RhdGUucGVyUGFnZSkpIHtcbiAgICAgICAgICAgIGxpbWl0T3B0aW9ucy5wdXNoKHsga2V5OiB0aGlzLnN0YXRlLnBlclBhZ2UsIHRleHQ6IHRoaXMuc3RhdGUucGVyUGFnZSwgdmFsdWU6IHRoaXMuc3RhdGUucGVyUGFnZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b1JlY29yZCA9IHByb3ZpZGVyLmdldFN0YXJ0SW5kZXgoKSArIHByb3ZpZGVyLmdldFBlclBhZ2UoKTtcbiAgICAgICAgaWYgKHRvUmVjb3JkID4gcHJvdmlkZXIuZ2V0VG90YWxDb3VudCgpKSB7XG4gICAgICAgICAgICB0b1JlY29yZCA9IHByb3ZpZGVyLmdldFRvdGFsQ291bnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsIGNvbFNwYW49e2NvbFNwYW59IHZlcnRpY2FsQWxpZ249eydtaWRkbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHZlcnRpY2FsQWxpZ249eydtaWRkbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlci5nZXRUb3RhbENvdW50KCkgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCf0L7QutCw0LfQsNC90Ysg0LfQsNC/0LjRgdC4IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PntgJHtwcm92aWRlci5nZXRTdGFydEluZGV4KCkgKyAxfSAtICR7dG9SZWNvcmR9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiDQuNC3IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pntwcm92aWRlci5nZXRUb3RhbENvdW50KCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZXIuZ2V0VG90YWxDb3VudCgpID4gcHJvdmlkZXIuZ2V0UGVyUGFnZSgpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBmbG9hdGVkPXsncmlnaHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM9e3Byb3ZpZGVyLmdldFRvdGFsUGFnZXMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXtwcm92aWRlci5nZXRBY3RpdmVQYWdlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdpbmF0ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wZXJQYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0L/QuNGB0LXQuSDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGVyUGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bGltaXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBlclBhZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgIDwvVGFibGUuRm9vdGVyPlxuICAgICAgICApXG4gICAgfVxufVxuIl19