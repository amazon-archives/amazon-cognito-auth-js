'use strict';

exports.__esModule = true;
exports.launchUri = undefined;

var _reactNative = require('react-native');

var launchUri = exports.launchUri = function launchUri(url) {
  return _reactNative.Linking.openURL(url);
};