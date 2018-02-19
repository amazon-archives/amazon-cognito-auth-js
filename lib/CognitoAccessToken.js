'use strict';

exports.__esModule = true;

var _global = require('aws-sdk/global');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*!
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

/** @class */
var CognitoAccessToken = function () {
  /**
   * Constructs a new CognitoAccessToken object
   * @param {string=} AccessToken The JWT access token.
   */
  function CognitoAccessToken(AccessToken) {
    _classCallCheck(this, CognitoAccessToken);

    // Assign object
    this.jwtToken = AccessToken || '';
  }

  /**
   * @returns {string} the record's token.
   */


  CognitoAccessToken.prototype.getJwtToken = function getJwtToken() {
    return this.jwtToken;
  };

  /**
   * Sets new value for access token.
   * @param {string=} accessToken The JWT access token.
   * @returns {void}
   */


  CognitoAccessToken.prototype.setJwtToken = function setJwtToken(accessToken) {
    this.jwtToken = accessToken;
  };

  /**
   * @returns {int} the token's expiration (exp member).
   */


  CognitoAccessToken.prototype.getExpiration = function getExpiration() {
    var payload = this.jwtToken.split('.')[1];
    var expiration = JSON.parse(_global.util.base64.decode(payload).toString('utf8'));
    return expiration.exp;
  };

  /**
   * @returns {string} the username from payload.
   */


  CognitoAccessToken.prototype.getUsername = function getUsername() {
    if (this.jwtToken === null) {
      return undefined;
    }
    var payload = this.jwtToken.split('.')[1];
    var usernameSource = JSON.parse(_global.util.base64.decode(payload).toString('utf8'));
    return usernameSource.username;
  };

  return CognitoAccessToken;
}();

exports.default = CognitoAccessToken;