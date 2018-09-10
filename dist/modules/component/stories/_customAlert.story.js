'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stories = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonInfo = require('@storybook/addon-info');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _index = require('../../index');

var _customAlertReadme = require('./_customAlert.readme.md');

var _customAlertReadme2 = _interopRequireDefault(_customAlertReadme);

var _customAlert = require('./_customAlert.component');

var _customAlert2 = _interopRequireDefault(_customAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// START OF CONTAINER
var stories = exports.stories = (0, _react3.storiesOf)('Alert Custom', module);

// other components


// FEATURED COMPONENT //

stories.addDecorator((0, _withReadme2.default)(_customAlertReadme2.default));

stories.add('example', (0, _addonInfo.withInfo)({ text: '' })(function () {
  return _react2.default.createElement(
    _index.AlertProvider,
    null,
    _react2.default.createElement(_customAlert2.default, null)
  );
}));