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
var CognitoIdToken = function () {
  /**
   * Constructs a new CognitoIdToken object
   * @param {string=} IdToken The JWT Id token
   */
  function CognitoIdToken(IdToken) {
    _classCallCheck(this, CognitoIdToken);

    // Assign object
    this.jwtToken = IdToken || '';
    this.payload = this.decodePayload();
  }

  /**
   * @returns {string} the record's token.
   */


  CognitoIdToken.prototype.getJwtToken = function getJwtToken() {
    return this.jwtToken;
  };

  /**
   * Sets new value for id token.
   * @param {string=} idToken The JWT Id token
   * @returns {void}
   */


  CognitoIdToken.prototype.setJwtToken = function setJwtToken(idToken) {
    this.jwtToken = idToken;
  };

  /**
   * @returns {int} the token's expiration (exp member).
   */


  CognitoIdToken.prototype.getExpiration = function getExpiration() {
    if (this.jwtToken === null) {
      return undefined;
    }
    var jwtPayload = this.jwtToken.split('.')[1];
    return JSON.parse(atob(jwtPayload)).exp;
  };

  /**
   * @returns {object} the token's payload.
   */


  CognitoIdToken.prototype.decodePayload = function decodePayload() {
    var jwtPayload = this.jwtToken.split('.')[1];
    try {
      return JSON.parse(atob(jwtPayload));
    } catch (err) {
      return {};
    }
  };

  return CognitoIdToken;
}();

export default CognitoIdToken;