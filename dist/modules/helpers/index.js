'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAlert = exports.removeAlert = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.guidGenerator = guidGenerator;

var _lodash = require('lodash');

function guidGenerator() {
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

var removeAlert = exports.removeAlert = function removeAlert(alertID, alerts) {
  return (0, _lodash.filter)(alerts, function (item) {
    return item.id !== alertID;
  });
};

var addAlert = exports.addAlert = function addAlert(alert, alerts) {
  var newAlerts = (0, _lodash.clone)(alerts);
  newAlerts.push(_extends({}, alert, { id: guidGenerator() }));
  return newAlerts;
};