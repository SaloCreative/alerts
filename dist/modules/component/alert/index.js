'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// STYLES


var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          alert = _props.alert,
          setAlertClear = _props.setAlertClear;

      if (this.isDismissible() && this.hasAutoTimeout()) {
        setAlertClear(alert.id, alert.time);
      }
    }
  }, {
    key: 'isDismissible',
    value: function isDismissible() {
      var alert = this.props.alert;

      return typeof alert.dismissible === 'undefined' || alert.dismissible;
    }
  }, {
    key: 'hasAutoTimeout',
    value: function hasAutoTimeout() {
      var alert = this.props.alert;

      return typeof alert.time === 'undefined' || alert.time;
    }
  }, {
    key: 'renderClose',
    value: function renderClose() {
      var _props2 = this.props,
          alert = _props2.alert,
          closeIcon = _props2.closeIcon,
          clearAlert = _props2.clearAlert;

      if (this.isDismissible()) {
        return _react2.default.createElement(
          _styles.Close,
          { className: 'alert__close', onClick: function onClick() {
              return clearAlert(alert.id);
            }, role: 'button', tabIndex: '-1' },
          closeIcon
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          alert = _props3.alert,
          colours = _props3.colours;

      if (alert) {
        return _react2.default.createElement(
          _styles.AlertWrapper,
          { className: 'alert ' + alert.type, colours: colours, time: alert.time, dismissible: this.isDismissible() && this.hasAutoTimeout() },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'cell' },
              alert.message,
              this.renderClose()
            )
          )
        );
      }
      return null;
    }
  }]);

  return Alert;
}(_react2.default.Component);

Alert.defaultProps = {
  colours: {
    error: '#D0021B',
    warning: '#F6A623',
    info: '#8F8F8F',
    success: '#00A44C'
  },
  closeIcon: _react2.default.createElement(
    'span',
    null,
    'X'
  ),
  clearAlert: function clearAlert(id) {
    return console.log('Clear alert ' + id);
  },
  setAlertClear: function setAlertClear(id, time) {
    return console.log('Alert ' + id + ' will clear in ' + time + ' seconds');
  }
};

Alert.propTypes = {
  alert: _propTypes2.default.any.isRequired,
  setAlertClear: _propTypes2.default.func,
  clearAlert: _propTypes2.default.func,
  colours: _propTypes2.default.object,
  closeIcon: _propTypes2.default.any
};

exports.default = Alert;