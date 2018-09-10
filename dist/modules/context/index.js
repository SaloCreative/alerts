'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = undefined;

var _react = require('react');

var _createContext = (0, _react.createContext)({
  alerts: [],
  deleteAlert: function deleteAlert() {},
  insertAlert: function insertAlert() {},
  timoutAlert: function timoutAlert() {},
  clearAll: function clearAll() {}
}),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

exports.Provider = Provider;
exports.Consumer = Consumer;