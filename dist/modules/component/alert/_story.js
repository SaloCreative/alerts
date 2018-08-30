'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stories = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// FEATURED COMPONENT //


var _templateObject = _taggedTemplateLiteral(['\n  height: 300vh;\n'], ['\n  height: 300vh;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonInfo = require('@storybook/addon-info');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _addonKnobs = require('@storybook/addon-knobs');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// START OF CONTAINER
var stories = exports.stories = (0, _react3.storiesOf)('Alert', module);
stories.addDecorator((0, _withReadme2.default)(_README2.default));
stories.addDecorator(_addonKnobs.withKnobs);
var id = Math.floor(Math.random() * 9999 + 1000);

// Dummy data
var alert = {
  message: 'My alert message text',
  type: 'success',
  dismissible: false,
  time: 10,
  id: id
};

stories.add('Implementation', (0, _addonInfo.withInfo)({ text: 'Dropdown with knobs for testing various permutations and combinations' })(function () {
  var type = (0, _addonKnobs.select)('Type', {
    'success': 'success',
    'error': 'error',
    'info': 'info',
    'warning': 'warning'
  }, 'success');

  var dismissible = (0, _addonKnobs.boolean)('Dismissible', false);

  var time = (0, _addonKnobs.number)('Time', 10);

  var newAlert = _extends({}, alert, {
    type: type,
    dismissible: dismissible,
    time: time
  });
  return _react2.default.createElement(_index.Alert, {
    alert: newAlert,
    alertStyleString: 'padding: 10px;',
    alertStyle: { outline: '2px solid #bada55' }
  });
}));

var Tall = _styledComponents2.default.div(_templateObject);

stories.add('Behaviour', (0, _addonInfo.withInfo)({ text: 'Tall page so you can scroll 🤖' })(function () {
  var type = (0, _addonKnobs.select)('Type', {
    'success': 'success',
    'error': 'error',
    'info': 'info',
    'warning': 'warning'
  }, 'success');

  var dismissible = (0, _addonKnobs.boolean)('Dismissible', false);

  var time = (0, _addonKnobs.number)('Time', 10);

  var newAlert = _extends({}, alert, {
    type: type,
    dismissible: dismissible,
    time: time
  });
  return _react2.default.createElement(
    Tall,
    null,
    _react2.default.createElement(_index.Alert, {
      alert: newAlert
    })
  );
}));