'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    this.payload = this.decodePayload();
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
    if (this.jwtToken === null) {
      return undefined;
    }
    var jwtPayload = this.jwtToken.split('.')[1];
    return JSON.parse(atob(jwtPayload)).exp;
  };

  /**
   * @returns {string} the username from payload.
   */


  CognitoAccessToken.prototype.getUsername = function getUsername() {
    if (this.jwtToken === null) {
      return undefined;
    }
    var jwtPayload = this.jwtToken.split('.')[1];
    return JSON.parse(atob(jwtPayload)).username;
  };

  /**
   * @returns {object} the token's payload.
   */


  CognitoAccessToken.prototype.decodePayload = function decodePayload() {
    var jwtPayload = this.jwtToken.split('.')[1];
    try {
      return JSON.parse(atob(jwtPayload));
    } catch (err) {
      return {};
    }
  };

  return CognitoAccessToken;
}();

exports.default = CognitoAccessToken;