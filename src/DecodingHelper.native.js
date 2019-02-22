import { Buffer } from 'buffer';

export const decode = (str) => Buffer.from(str, 'base64').toString('utf8');
