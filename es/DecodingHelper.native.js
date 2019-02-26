import { Buffer } from 'buffer';

export var decode = str => Buffer.from(str, 'base64').toString('utf8');