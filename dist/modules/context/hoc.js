'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withAlerts;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// context


// display name
function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

// hoc
function withAlerts(WrappedComponent) {
  var AlertContext = function (_React$Component) {
    _inherits(AlertContext, _React$Component);

    function AlertContext() {
      _classCallCheck(this, AlertContext);

      return _possibleConstructorReturn(this, (AlertContext.__proto__ || Object.getPrototypeOf(AlertContext)).apply(this, arguments));
    }

    _createClass(AlertContext, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return AlertContext;
  }(_react2.default.Component);

  var displayName = getDisplayName(WrappedComponent);

  AlertContext.displayName = 'withAlerts(' + displayName + ')';

  var ForwardRef = _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(
      _index.Consumer,
      null,
      function (_ref) {
        var alerts = _ref.alerts,
            deleteAlert = _ref.deleteAlert,
            insertAlert = _ref.insertAlert,
            clearAll = _ref.clearAll;

        return _react2.default.createElement(AlertContext, _extends({}, props, {
          alerts: alerts,
          deleteAlert: deleteAlert,
          clearAll: clearAll,
          insertAlert: insertAlert,
          ref: ref
        }));
      }
    );
  });

  (0, _hoistNonReactStatics2.default)(ForwardRef, WrappedComponent);
  return ForwardRef;
}