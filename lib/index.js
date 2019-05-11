"use strict";
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
    window.crypto = window.msCrypto;
  }*/
/*
import * as enhancements from './src';

export * from './src';

// The version of crypto-browserify included by aws-sdk only
// checks for window.crypto, not window.msCrypto as used by
// IE 11 – so we set it explicitly here
if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
  window.crypto = window.msCrypto;
}*/
if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
    window.crypto = window.msCrypto;
}
var CognitoToken_1 = require("./CognitoToken");
exports.CognitoToken = CognitoToken_1.default;
var CognitoRefreshToken_1 = require("./CognitoRefreshToken");
exports.CognitoRefreshToken = CognitoRefreshToken_1.default;
var CognitoTokenScopes_1 = require("./CognitoTokenScopes");
exports.CognitoTokenScopes = CognitoTokenScopes_1.default;
var CognitoAuth_1 = require("./CognitoAuth");
exports.CognitoAuth = CognitoAuth_1.default;
var CognitoAuthSession_1 = require("./CognitoAuthSession");
exports.CognitoAuthSession = CognitoAuthSession_1.default;
var DateHelper_1 = require("./DateHelper");
exports.DateHelper = DateHelper_1.default;
var StorageHelper_1 = require("./StorageHelper");
exports.StorageHelper = StorageHelper_1.default;
var CookieStorage_1 = require("./CookieStorage");
exports.CookieStorage = CookieStorage_1.default;
var CognitoConstants_1 = require("./CognitoConstants");
exports.CognitoConstants = CognitoConstants_1.default;
