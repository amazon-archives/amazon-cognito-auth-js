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
var CognitoRefreshToken = function () {
  /**
   * Constructs a new CognitoRefreshToken object
   * @param {string=} RefreshToken The JWT refresh token.
   */
  function CognitoRefreshToken(RefreshToken) {
    _classCallCheck(this, CognitoRefreshToken);

    // Assign object
    this.refreshToken = RefreshToken || '';
  }

  /**
   * @returns {string} the record's token.
   */


  CognitoRefreshToken.prototype.getToken = function getToken() {
    return this.refreshToken;
  };

  /**
   * Sets new value for refresh token.
   * @param {string=} refreshToken The JWT refresh token.
   * @returns {void}
   */


  CognitoRefreshToken.prototype.setToken = function setToken(refreshToken) {
    this.refreshToken = refreshToken;
  };

  return CognitoRefreshToken;
}();

export default CognitoRefreshToken;