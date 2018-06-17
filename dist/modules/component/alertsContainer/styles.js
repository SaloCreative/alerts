'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  position: fixed;\n  top: ', 'px;\n  left: 0;\n  z-index: 9999;\n'], ['\n  width: 100%;\n  position: fixed;\n  top: ', 'px;\n  left: 0;\n  z-index: 9999;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.topOffset;
});