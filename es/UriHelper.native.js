import { Linking } from 'react-native';

export var launchUri = function (url) {
  return Linking.openURL(url);
};