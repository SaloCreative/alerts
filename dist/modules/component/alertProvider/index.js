'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// COMPONENTS


var id = Math.floor(Math.random() * 9999 + 1000);

var AlertProvider = function (_React$Component) {
  _inherits(AlertProvider, _React$Component);

  function AlertProvider() {
    _classCallCheck(this, AlertProvider);

    var _this = _possibleConstructorReturn(this, (AlertProvider.__proto__ || Object.getPrototypeOf(AlertProvider)).call(this));

    _this.deleteAlert = function (alertID) {
      _this.setState({ alerts: (0, _index.removeAlert)(alertID, _this.state.alerts) });
    };
    _this.insertAlert = function (alert) {
      _this.setState({ alerts: (0, _index.addAlert)(alert, _this.state.alerts) });
    };
    _this.timoutAlert = function (alertID, time) {
      setTimeout(function () {
        _this.setState({ alerts: (0, _index.removeAlert)(alertID, _this.state.alerts) });
      }, time * 1000);
    };
    _this.state = {
      alerts: [],
      deleteAlert: _this.deleteAlert,
      insertAlert: _this.insertAlert,
      timoutAlert: _this.timoutAlert
    };
    return _this;
  }

  _createClass(AlertProvider, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          alerts = _state.alerts,
          deleteAlert = _state.deleteAlert,
          insertAlert = _state.insertAlert,
          timoutAlert = _state.timoutAlert;

      return _react2.default.createElement(
        _index.Provider,
        { value: { alerts: alerts, deleteAlert: deleteAlert, insertAlert: insertAlert, timoutAlert: timoutAlert } },
        children
      );
    }
  }]);

  return AlertProvider;
}(_react2.default.Component);

exports.default = AlertProvider;


AlertProvider.propTypes = { children: _propTypes2.default.any.isRequired };