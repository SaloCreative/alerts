'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = undefined;

var _react = require('react');

var _createContext = (0, _react.createContext)({
  alerts: [],
  removeAlert: function removeAlert() {},
  addAlert: function addAlert() {}
}),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

exports.Provider = Provider;
exports.Consumer = Consumer;