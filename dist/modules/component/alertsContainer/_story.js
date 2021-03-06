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

var _addonKnobs = require('@storybook/addon-knobs');

var _index = require('../../index');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// START OF CONTAINER


// FEATURED COMPONENT //
var stories = exports.stories = (0, _react3.storiesOf)('Alert Container', module);
stories.addDecorator((0, _withReadme2.default)(_README2.default));
stories.addDecorator(_addonKnobs.withKnobs);
var id = Math.floor(Math.random() * 9999 + 1000);

// Dummy data
var alerts = [{
  message: 'My alert message text',
  type: 'success',
  dismissible: true,
  time: 10,
  id: id
}];

stories.add('Implementation', (0, _addonInfo.withInfo)({ text: 'Dropdown with knobs for testing various permutations and combinations' })(function () {
  var topOffset = (0, _addonKnobs.number)('Top offset', 125);

  return _react2.default.createElement(_index.AlertsContainer, {
    topOffset: topOffset,
    alerts: alerts
  });
}));