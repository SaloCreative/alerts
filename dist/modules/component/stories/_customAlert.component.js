'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n  background: #00A44C;\n  color: #fff;\n  width: 100%;\n  padding: 25px 30px;\n  font-size: 11px;\n  line-height: 1.125;\n  min-height: 70px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  span {\n    font-size: 1.8em;\n    padding-right: 0.5em;\n  }\n\n  button {\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    cursor: pointer;\n    backface-visibility: hidden;\n    border: none;\n    background: transparent;\n    border-radius: 0;\n    font-size: 1.8em;\n    margin-left: 0.5em;\n    transition: all 0.3s;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n\n    &:hover {\n      transition: all 0.3s;\n      transform: scale(1.1);\n      opacity: 0.8;\n    }\n  }\n\n  @media(min-width: 620px) {\n    font-size: 17px;\n    min-height: 80px;\n  }\n'], ['\n  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n  background: #00A44C;\n  color: #fff;\n  width: 100%;\n  padding: 25px 30px;\n  font-size: 11px;\n  line-height: 1.125;\n  min-height: 70px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  span {\n    font-size: 1.8em;\n    padding-right: 0.5em;\n  }\n\n  button {\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    cursor: pointer;\n    backface-visibility: hidden;\n    border: none;\n    background: transparent;\n    border-radius: 0;\n    font-size: 1.8em;\n    margin-left: 0.5em;\n    transition: all 0.3s;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n\n    &:hover {\n      transition: all 0.3s;\n      transform: scale(1.1);\n      opacity: 0.8;\n    }\n  }\n\n  @media(min-width: 620px) {\n    font-size: 17px;\n    min-height: 80px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// components


// styled
var Alert = _styledComponents2.default.div(_templateObject);

// back component
var Fish = function Fish(props) {
  var alert = props.alert,
      clearAlert = props.clearAlert;


  return _react2.default.createElement(
    Alert,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { role: 'img', 'aria-label': 'thumbs up' },
        '\uD83D\uDC4D'
      ),
      ' ',
      alert.message
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return clearAlert(alert.id);
        }, 'aria-label': 'thumbs up' },
      '\uD83D\uDE48'
    )
  );
};

// component

var CustomAlert = function (_React$Component) {
  _inherits(CustomAlert, _React$Component);

  function CustomAlert() {
    _classCallCheck(this, CustomAlert);

    return _possibleConstructorReturn(this, (CustomAlert.__proto__ || Object.getPrototypeOf(CustomAlert)).apply(this, arguments));
  }

  _createClass(CustomAlert, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var insertAlert = this.props.insertAlert;


      insertAlert({
        type: 'success',
        message: 'Well done for finding me!',
        time: 5000,
        render: function render(props) {
          return _react2.default.createElement(Fish, _extends({ key: props.i }, props));
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_index.AlertConsumer, null),
        '☝️Auto on mount generating a alert using insertAlert'
      );
    }
  }]);

  return CustomAlert;
}(_react2.default.Component);

exports.default = (0, _index.withAlerts)(CustomAlert);