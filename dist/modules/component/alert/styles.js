'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Close = exports.AlertWrapper = exports.loadSwipe = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    width: 0\n  },\n  to {\n    width: 100%\n  }\n'], ['\n  from {\n    width: 0\n  },\n  to {\n    width: 100%\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  background: ', ';\n  color: #fff;\n  padding: 5px 10px;\n  font-size: 12px;\n  text-align: left;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &.error {\n    background: ', ';\n  }\n\n  &.warning {\n    background: ', ';\n  }\n\n  &.info {\n    background: ', ';\n  }\n\n  ', ';\n'], ['\n  width: 100%;\n  background: ', ';\n  color: #fff;\n  padding: 5px 10px;\n  font-size: 12px;\n  text-align: left;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &.error {\n    background: ', ';\n  }\n\n  &.warning {\n    background: ', ';\n  }\n\n  &.info {\n    background: ', ';\n  }\n\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n  min-width: 30px;\n  height: 100%;\n  opacity: 0.6;\n  cursor: pointer;\n  transition: opacity 0.3s linear;\n\n  &:hover {\n    opacity: 1;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n  min-width: 30px;\n  height: 100%;\n  opacity: 0.6;\n  cursor: pointer;\n  transition: opacity 0.3s linear;\n\n  &:hover {\n    opacity: 1;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loadSwipe = exports.loadSwipe = (0, _styledComponents.keyframes)(_templateObject);

var AlertWrapper = exports.AlertWrapper = _styledComponents2.default.div(_templateObject2, function (_ref) {
  var colours = _ref.colours;
  return colours.success;
}, function (_ref2) {
  var colours = _ref2.colours;
  return colours.error;
}, function (_ref3) {
  var colours = _ref3.colours;
  return colours.warning;
}, function (_ref4) {
  var colours = _ref4.colours;
  return colours.info;
}, function (_ref5) {
  var dismissible = _ref5.dismissible,
      time = _ref5.time;
  return dismissible ? '\n    &:after {\n      display: block;\n      content: "";\n      width: 100%;\n      left: 0;\n      top: 0;\n      position: absolute;\n      height: 0.4em;\n      background: rgba(255,255,255,0.3);\n      webkit-animation-fill-mode: both;\n      animation-fill-mode: both;\n      webkit-animation: ' + loadSwipe + ' ' + (time || 5) + 's linear;\n      animation: ' + loadSwipe + ' ' + (time || 5) + 's linear infinite;\n    }\n  ' : '';
});

var Close = exports.Close = _styledComponents2.default.a(_templateObject3);