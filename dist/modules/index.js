'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = exports.guidGenerator = exports.addAlert = exports.removeAlert = exports.AlertContainer = exports.Alert = undefined;

var _alert = require('./component/alert');

Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alert).default;
  }
});

var _alertsContainer = require('./component/alertsContainer');

Object.defineProperty(exports, 'AlertContainer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alertsContainer).default;
  }
});

var _helpers = require('./helpers');

var _context = require('./context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.removeAlert = _helpers.removeAlert;
exports.addAlert = _helpers.addAlert;
exports.guidGenerator = _helpers.guidGenerator;
exports.Provider = _context.Provider;
exports.Consumer = _context.Consumer;