var SELF = '_self';

export var launchUri = function (url) {
  return window.open(url, SELF);
};