'use strict';

exports.__esModule = true;
var SELF = '_self';

var launchUri = exports.launchUri = function launchUri(url) {
  return window.open(url, SELF);
};