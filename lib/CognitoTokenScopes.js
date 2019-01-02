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
/** @class */
var CognitoTokenScopes = /** @class */ (function () {
    /**
     * Constructs a new CognitoTokenScopes object
     * @param {array=} TokenScopesArray The token scopes
     */
    function CognitoTokenScopes(TokenScopesArray) {
        if (TokenScopesArray === void 0) { TokenScopesArray = []; }
        // Assign object
        this.tokenScopes = TokenScopesArray;
    }
    /**
     * @returns {Array} the token scopes.
     */
    CognitoTokenScopes.prototype.getScopes = function () {
        return this.tokenScopes;
    };
    /**
     * Sets new value for token scopes.
     * @param {array=} tokenScopes The token scopes
     * @returns {void}
     */
    CognitoTokenScopes.prototype.setTokenScopes = function (tokenScopes) {
        this.tokenScopes = tokenScopes;
    };
    return CognitoTokenScopes;
}());
exports.default = CognitoTokenScopes;
