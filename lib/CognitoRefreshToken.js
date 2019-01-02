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
var CognitoRefreshToken = /** @class */ (function () {
    /**
     * Constructs a new CognitoRefreshToken object
     * @param {string=} RefreshToken The JWT refresh token.
     */
    function CognitoRefreshToken(RefreshToken) {
        if (RefreshToken === void 0) { RefreshToken = ''; }
        // Assign object
        this.refreshToken = RefreshToken;
    }
    /**
     * @returns {string} the record's token.
     */
    CognitoRefreshToken.prototype.getToken = function () {
        return this.refreshToken;
    };
    /**
     * Sets new value for refresh token.
     * @param {string=} refreshToken The JWT refresh token.
     * @returns {void}
     */
    CognitoRefreshToken.prototype.setToken = function (refreshToken) {
        this.refreshToken = refreshToken;
    };
    return CognitoRefreshToken;
}());
exports.default = CognitoRefreshToken;
