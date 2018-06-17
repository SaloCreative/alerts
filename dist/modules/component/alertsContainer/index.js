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

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// COMPONENTS


var AlertsContainer = function (_React$Component) {
  _inherits(AlertsContainer, _React$Component);

  function AlertsContainer() {
    _classCallCheck(this, AlertsContainer);

    return _possibleConstructorReturn(this, (AlertsContainer.__proto__ || Object.getPrototypeOf(AlertsContainer)).apply(this, arguments));
  }

  _createClass(AlertsContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alerts = _props.alerts,
          topOffset = _props.topOffset,
          _clearAlert = _props.clearAlert,
          _setAlertClear = _props.setAlertClear,
          closeIcon = _props.closeIcon,
          colours = _props.colours;

      if (alerts.length > 0) {
        return _react2.default.createElement(
          _styles.Container,
          { topOffset: topOffset },
          alerts.map(function (alert, i) {
            return _react2.default.createElement(_index.Alert, {
              key: alert.id,
              i: i,
              alert: alert,
              closeIcon: closeIcon,
              colours: colours,
              clearAlert: function clearAlert(id) {
                return _clearAlert(id);
              },
              setAlertClear: function setAlertClear(id, time) {
                return _setAlertClear(id, time);
              }
            });
          })
        );
      }
      return null;
    }
  }]);

  return AlertsContainer;
}(_react2.default.Component);

exports.default = AlertsContainer;


AlertsContainer.propTypes = {
  alerts: _propTypes2.default.array,
  closeIcon: _propTypes2.default.any,
  colours: _propTypes2.default.object,
  topOffset: _propTypes2.default.number,
  setAlertClear: _propTypes2.default.func,
  clearAlert: _propTypes2.default.func
};

AlertsContainer.defaultProps = {
  alerts: [],
  closeIcon: _react2.default.createElement(
    'span',
    null,
    'X'
  ),
  colours: {
    error: '#D0021B',
    warning: '#F6A623',
    info: '#8F8F8F',
    success: '#00A44C'
  },
  topOffset: 0,
  clearAlert: function clearAlert(id) {
    return console.log('Clear alert from container ' + id);
  },
  setAlertClear: function setAlertClear(id, time) {
    return console.log('Alert ' + id + ' will clear from container in ' + time + ' seconds');
  }
};