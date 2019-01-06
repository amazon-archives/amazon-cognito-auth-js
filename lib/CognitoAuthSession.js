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
var CognitoTokenScopes_1 = require("./CognitoTokenScopes");
var CognitoToken_1 = require("./CognitoToken");
var CognitoRefreshToken_1 = require("./CognitoRefreshToken");
/** @class */
var CognitoAuthSession = /** @class */ (function () {
    /**
     * Constructs a new CognitoUserSession object
     * @param {CognitoIdToken} IdToken The session's Id token.
     * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
     * @param {CognitoAccessToken} AccessToken The session's access token.
     * @param {array}  AccessToken  The session's token scopes.
   * @param {string} State The session's state.
     */
    function CognitoAuthSession(_a) {
        var _b = _a === void 0 ? {
            IdToken: new CognitoToken_1.default(),
            RefreshToken: new CognitoRefreshToken_1.default(),
            AccessToken: new CognitoToken_1.default(),
            TokenScopes: new CognitoTokenScopes_1.default(),
            State: null
        } : _a, IdToken = _b.IdToken, RefreshToken = _b.RefreshToken, AccessToken = _b.AccessToken, TokenScopes = _b.TokenScopes, State = _b.State;
        this.idToken = IdToken;
        this.refreshToken = RefreshToken;
        this.accessToken = AccessToken;
        this.tokenScopes = TokenScopes;
        this.state = State;
    }
    /**
     * @returns {CognitoIdToken} the session's Id token
     */
    CognitoAuthSession.prototype.getIdToken = function () {
        return this.idToken;
    };
    /**
     * Set a new Id token
     * @param {CognitoIdToken} IdToken The session's Id token.
     * @returns {void}
     */
    CognitoAuthSession.prototype.setIdToken = function (IdToken) {
        this.idToken = IdToken;
    };
    /**
     * @returns {CognitoRefreshToken} the session's refresh token
     */
    CognitoAuthSession.prototype.getRefreshToken = function () {
        return this.refreshToken;
    };
    /**
     * Set a new Refresh token
     * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
     * @returns {void}
     */
    CognitoAuthSession.prototype.setRefreshToken = function (RefreshToken) {
        this.refreshToken = RefreshToken;
    };
    /**
     * @returns {CognitoAccessToken} the session's access token
     */
    CognitoAuthSession.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    /**
     * Set a new Access token
     * @param {CognitoAccessToken} AccessToken The session's access token.
     * @returns {void}
     */
    CognitoAuthSession.prototype.setAccessToken = function (AccessToken) {
        this.accessToken = AccessToken;
    };
    /**
     * @returns {CognitoTokenScopes} the session's token scopes
     */
    CognitoAuthSession.prototype.getTokenScopes = function () {
        return this.tokenScopes;
    };
    /**
     * Set new token scopes
     * @param {array}  tokenScopes  The session's token scopes.
     * @returns {void}
     */
    CognitoAuthSession.prototype.setTokenScopes = function (tokenScopes) {
        this.tokenScopes = tokenScopes;
    };
    /**
     * @returns {string} the session's state
     */
    CognitoAuthSession.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set new state
     * @param {string}  state  The session's state.
     * @returns {void}
     */
    CognitoAuthSession.prototype.setState = function (State) {
        this.state = State;
    };
    /**
     * Checks to see if the session is still valid based on session expiry information found
     * in Access and Id Tokens and the current time
     * @returns {boolean} if the session is still valid
     */
    CognitoAuthSession.prototype.isValid = function () {
        var now = Math.floor(new Date().getTime() / 1000);
        try {
            if (this.accessToken != null) {
                return now < this.accessToken.getExpiration();
            }
            if (this.idToken != null) {
                return now < this.idToken.getExpiration();
            }
            return false;
        }
        catch (e) {
            return false;
        }
    };
    return CognitoAuthSession;
}());
exports.default = CognitoAuthSession;
