import { Linking } from 'react-native';

export const launchUri = (url) => Linking.openURL(url);
