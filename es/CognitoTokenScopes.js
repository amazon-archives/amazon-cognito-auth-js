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
var CognitoTokenScopes = function () {
  /**
   * Constructs a new CognitoTokenScopes object
   * @param {array=} TokenScopesArray The token scopes
   */
  function CognitoTokenScopes(TokenScopesArray) {
    _classCallCheck(this, CognitoTokenScopes);

    // Assign object
    this.tokenScopes = TokenScopesArray || [];
  }

  /**
   * @returns {Array} the token scopes.
   */


  CognitoTokenScopes.prototype.getScopes = function getScopes() {
    return this.tokenScopes;
  };

  /**
   * Sets new value for token scopes.
   * @param {array=} tokenScopes The token scopes
   * @returns {void}
   */


  CognitoTokenScopes.prototype.setTokenScopes = function setTokenScopes(tokenScopes) {
    this.tokenScopes = tokenScopes;
  };

  return CognitoTokenScopes;
}();

export default CognitoTokenScopes;