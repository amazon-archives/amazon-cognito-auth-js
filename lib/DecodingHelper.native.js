'use strict';

exports.__esModule = true;
exports.decode = undefined;

var _buffer = require('buffer');

var decode = exports.decode = function decode(str) {
  return _buffer.Buffer.from(str, 'base64').toString('utf8');
};