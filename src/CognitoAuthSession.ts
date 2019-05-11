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

import CognitoTokenScopes from './CognitoTokenScopes';
import CognitoToken from './CognitoToken';
import CognitoRefreshToken from './CognitoRefreshToken';

export interface CognitoSessionData {
  /**
   * The session's Id token.
   */
  IdToken?: CognitoToken;

  /**
   * The session's refresh token.
   */
  RefreshToken?: CognitoRefreshToken;

  /**
   * The session's access token.
   */
  AccessToken?: CognitoToken;

  /**
   * The session's token scopes.
   */
  TokenScopes?: CognitoTokenScopes;

  /**
   * The session's state.
   */
  State?: string;
}

/** @class */
export default class CognitoAuthSession {

  idToken: CognitoToken;
  refreshToken: CognitoRefreshToken;
  accessToken: CognitoToken;
  state: string;
  tokenScopes: CognitoTokenScopes;
	/**
	 * Constructs a new CognitoUserSession object
	 * @param {CognitoIdToken} IdToken The session's Id token.
	 * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	 * @param {CognitoAccessToken} AccessToken The session's access token.
	 * @param {array}  AccessToken  The session's token scopes.
   * @param {string} State The session's state. 
	 */
  constructor({ IdToken,
    RefreshToken, AccessToken, TokenScopes, State }:CognitoSessionData = {
      IdToken: new CognitoToken(),
      RefreshToken: new CognitoRefreshToken(),
      AccessToken: new CognitoToken(),
      TokenScopes: new CognitoTokenScopes(),
      State: null
    }) {
    this.idToken = IdToken;
    this.refreshToken = RefreshToken;
    this.accessToken = AccessToken;
    this.tokenScopes = TokenScopes;
    this.state = State;
  }


  /**
   * @returns {CognitoIdToken} the session's Id token
   */
  getIdToken(): CognitoToken {
    return this.idToken;
  }

  /**
   * Set a new Id token
   * @param {CognitoIdToken} IdToken The session's Id token.
   * @returns {void}
   */
  setIdToken(IdToken: CognitoToken) {
    this.idToken = IdToken;
  }

  /**
   * @returns {CognitoRefreshToken} the session's refresh token
   */
  getRefreshToken(): CognitoRefreshToken {
    return this.refreshToken;
  }

  /**
   * Set a new Refresh token
   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
   * @returns {void}
   */
  setRefreshToken(RefreshToken: CognitoRefreshToken) {
    this.refreshToken = RefreshToken;
  }

  /**
   * @returns {CognitoAccessToken} the session's access token
   */
  getAccessToken(): CognitoToken {
    return this.accessToken;
  }

  /**
   * Set a new Access token
   * @param {CognitoAccessToken} AccessToken The session's access token.
   * @returns {void}
   */
  setAccessToken(AccessToken: CognitoToken) {
    this.accessToken = AccessToken;
  }

  /**
   * @returns {CognitoTokenScopes} the session's token scopes
   */
  getTokenScopes(): CognitoTokenScopes {
    return this.tokenScopes;
  }

  /**
   * Set new token scopes
   * @param {array}  tokenScopes  The session's token scopes.
   * @returns {void}
   */
  setTokenScopes(tokenScopes: CognitoTokenScopes) {
    this.tokenScopes = tokenScopes;
  }

  /**
   * @returns {string} the session's state
   */
  getState(): string {
    return this.state;
  }

  /**
   * Set new state
   * @param {string}  state  The session's state.
   * @returns {void}
   */
  setState(State: string) {
    this.state = State;
  }

  /**
   * Checks to see if the session is still valid based on session expiry information found
   * in Access and Id Tokens and the current time
   * @returns {boolean} if the session is still valid
   */
  isValid(): boolean {
    const now = Math.floor(new Date().getTime() / 1000);
    try {
      if (this.accessToken != null) {
        return now < this.accessToken.getExpiration();
      }
      if (this.idToken != null) {
        return now < this.idToken.getExpiration();
      }
      return false;
    } catch (e) {
      return false;
    }
  }
}
