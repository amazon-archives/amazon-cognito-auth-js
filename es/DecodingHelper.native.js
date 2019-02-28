import { Buffer } from 'buffer';

export var decode = function (str) {
  return Buffer.from(str, 'base64').toString('utf8');
};