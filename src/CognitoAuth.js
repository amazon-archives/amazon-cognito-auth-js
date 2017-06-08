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
import CognitoAccessToken from './CognitoAccessToken';
import CognitoIdToken from './CognitoIdToken';
import CognitoRefreshToken from './CognitoRefreshToken';
import CognitoAuthSession from './CognitoAuthSession';
import StorageHelper from './StorageHelper';

/** @class */
export default class CognitoAuth {
	/**
	 * Constructs a new CognitoAuth object
	 * @param {object} data Creation options
	 * @param {string} data.ClientId Required: User pool application client id.
	 * @param {string} data.AppWebDomain Required: The application/user-pools Cognito web hostname,
	 *                     this is set at the Cognito console.
	 * @param {array} data.TokenScopesArray Optional: The token scopes
	 * @param {string} data.RedirectUriSignIn Required: The redirect Uri,
	 * which will be launched after authentication as signed in.
	 * @param {string} data.RedirectUriSignOut Required:
	 * The redirect Uri, which will be launched when signed out.
	 * @param {nodeCallback<CognitoAuthSession>} Optional: userhandler Called on success or error.
	 */
  constructor(data) {
    const { ClientId, AppWebDomain, TokenScopesArray,
    RedirectUriSignIn, RedirectUriSignOut } = data || { };
    if (data == null || !ClientId || !AppWebDomain || !RedirectUriSignIn || !RedirectUriSignOut) {
      throw new Error(this.getCognitoConstants().PARAMETERERROR);
    }

    this.clientId = ClientId;
    this.appWebDomain = AppWebDomain;
    this.TokenScopesArray = TokenScopesArray || [];
    if (!Array.isArray(TokenScopesArray)) {
      throw new Error(this.getCognitoConstants().SCOPETYPEERROR);
    }
    const tokenScopes = new CognitoTokenScopes(this.TokenScopesArray);
    this.RedirectUriSignIn = RedirectUriSignIn;
    this.RedirectUriSignOut = RedirectUriSignOut;
    this.signInUserSession = new CognitoAuthSession();
    this.responseType = this.getCognitoConstants().TOKEN;
    this.storage = new StorageHelper().getStorage();
    this.signInUserSession.setTokenScopes(tokenScopes);
    this.username = this.getLastUser();
  }

  /**
   * @returns {JSON} the constants
   */
  getCognitoConstants() {
    const CognitoConstants = {
      DOMAIN_SCHEME: 'https',
      DOMAIN_PATH_SIGNIN: 'authorize',
      DOMAIN_PATH_SIGNOUT: 'logout',
      DOMAIN_QUERY_PARAM_REDIRECT_URI: 'redirect_uri',
      DOMAIN_QUERY_PARAM_SIGNOUT_URI: 'logout_uri',
      DOMAIN_QUERY_PARAM_RESPONSE_TYPE: 'response_type',
      CLIENT_ID: 'client_id',
      STATE: 'state',
      SCOPE: 'scope',
      TOKEN: 'token',
      CODE: 'code',
      POST: 'POST',
      PARAMETERERROR: 'The parameters: App client Id, App web domain' +
                      ', the redirect URL when you are signed in and the ' + 
	              'redirect URL when you are signed out are required.',
      SCOPETYPEERROR: 'Scopes have to be array type. ',
      QUESTIONMARK: '?',
      POUNDSIGN: '#',
      COLONDOUBLESLASH: '://',
      SLASH: '/',
      AMPERSAND: '&',
      EQUALSIGN: '=',
      SPACE: ' ',
      CONTENTTYPE: 'Content-Type',
      CONTENTTYPEVALUE: 'application/x-www-form-urlencoded',
      AUTHORIZATIONCODE: 'authorization_code',
      IDTOKEN: 'id_token',
      ACCESSTOKEN: 'access_token',
      REFRESHTOKEN: 'refresh_token',
      ERROR: 'error',
      STRINGTYPE: 'string',
      STATELENGTH: 32,
      STATEORIGINSTRING: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      WITHCREDENTIALS: 'withCredentials',
      UNDEFINED: 'undefined',
      SELF: '_self',
      HOSTNAMEREGEX: /:\/\/([0-9]?\.)?(.[^/:]+)/i,
      QUERYPARAMETERREGEX1: /#(.+)/,
      QUERYPARAMETERREGEX2: /=(.+)/,
      HEADER: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };
    return CognitoConstants;
  }

  /**
   * @returns {string} the client id
   */
  getClientId() {
    return this.clientId;
  }

  /**
   * @returns {string} the app web domain
   */
  getAppWebDomain() {
    return this.appWebDomain;
  }

  /**
   * method for getting the current user of the application from the local storage
   *
   * @returns {CognitoAuth} the user retrieved from storage
   */
  getCurrentUser() {
    const lastUserKey = `CognitoIdentityServiceProvider.${this.clientId}.LastAuthUser`;

    const lastAuthUser = this.storage.getItem(lastUserKey);
    return lastAuthUser;
  }

  /**
   * @param {string} Username the user's name
   * method for setting the current user's name
   * @returns {void}
   */
  setUser(Username) {
    this.username = Username;
  }

  /**
   * sets response type to 'code'
   * @returns {void}
   */
  useCodeGrantFlow() {
    this.responseType = this.getCognitoConstants().CODE;
  }

  /**
   * sets response type to 'token'
   * @returns {void}
   */
  useImplicitFlow() {
    this.responseType = this.getCognitoConstants().TOKEN;
  }

  /**
   * @returns {CognitoAuthSession} the current session for this user
   */
  getSignInUserSession() {
    return this.signInUserSession;
  }

  /**
   * @returns {string} the user's username
   */
  getUsername() {
    return this.username;
  }

  /**
   * @param {string} Username the user's username
   * @returns {void}
   */
  setUsername(Username) {
    this.username = Username;
  }

  /**
   * This is used to get a session, either from the session object
   * or from the local storage, or by using a refresh token
   * @param {string} RedirectUriSignIn Required: The redirect Uri,
   * which will be launched after authentication.
   * @param {array} TokenScopesArray Required: The token scopes, it is an
   * array of strings specifying all scopes for the tokens.
   * @returns {void}
   */
  getSession() {
    const tokenScopesInputSet = new Set(this.TokenScopesArray);
    const cachedScopesSet = new Set(this.signInUserSession.tokenScopes.getScopes());
    const URL = this.getFQDNSignIn();
    if (this.signInUserSession != null && this.signInUserSession.isValid()) {
      return this.userhandler.onSuccess(this.signInUserSession);
    }
    this.signInUserSession = this.getCachedSession();
    // compare scopes
    if (!this.compareSets(tokenScopesInputSet, cachedScopesSet)) {
      const tokenScopes = new CognitoTokenScopes(this.TokenScopesArray);
      const idToken = new CognitoIdToken();
      const accessToken = new CognitoAccessToken();
      const refreshToken = new CognitoRefreshToken();
      this.signInUserSession.setTokenScopes(tokenScopes);
      this.signInUserSession.setIdToken(idToken);
      this.signInUserSession.setAccessToken(accessToken);
      this.signInUserSession.setRefreshToken(refreshToken);
      this.launchUri(URL);
    } else if (this.signInUserSession.isValid()) {
      return this.userhandler.onSuccess(this.signInUserSession);
    } else if (!this.signInUserSession.getRefreshToken()
    || !this.signInUserSession.getRefreshToken().getToken()) {
      this.launchUri(URL);
    } else {
      this.refreshSession(this.signInUserSession.getRefreshToken().getToken());
    }
    return undefined;
  }

  /**
   * @param {string} httpRequestResponse the http request response
   * @returns {void}
   * Parse the http request response and proceed according to different response types.
   */
  parseCognitoWebResponse(httpRequestResponse) {
    if (httpRequestResponse.indexOf(this.getCognitoConstants().QUESTIONMARK) > -1) {
      this.getCodeQueryParameter(httpRequestResponse);
    } else if (httpRequestResponse.indexOf(this.getCognitoConstants().POUNDSIGN) > -1) {
      // To parse the response to get tokens
      this.getTokenQueryParameter(httpRequestResponse);
    }
  }

  /**
   * @param {string} httpRequestResponse the http request response
   * @returns {void}
   * Parse the http request response and proceed according to code response type.
   */
  getCodeQueryParameter(httpRequestResponse) {
    let mapSecond = new Map();
    mapSecond = this.getQueryParameters(httpRequestResponse, mapSecond);
    if (mapSecond.has(this.getCognitoConstants().CODE)) {
      // if the response contains code
      // To parse the response and get the code value.
      const codeParameter = this.getCodeParameter(httpRequestResponse);
      const url = this.getCognitoConstants().DOMAIN_SCHEME.concat(
      this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(),
      this.getCognitoConstants().SLASH, this.getCognitoConstants().TOKEN);
      const header = this.getCognitoConstants().HEADER;
      const body = { grant_type: this.getCognitoConstants().AUTHORIZATIONCODE,
        client_id: this.getClientId(),
        redirect_uri: this.RedirectUriSignIn,
        code: codeParameter };
      const boundOnSuccess = (this.onSuccessExchangeForToken).bind(this);
      const boundOnFailure = (this.onFailure).bind(this);
      this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
    }
  }

  /**
   * Parse the http request response and proceed according to token response type.
   * @param {string} httpRequestResponse the http request response
   * @returns {void}
   */
  getTokenQueryParameter(httpRequestResponse) {
    let map = new Map();
    map = this.getQueryParameters(httpRequestResponse, map);
    const idToken = new CognitoIdToken();
    const accessToken = new CognitoAccessToken();
    const refreshToken = new CognitoRefreshToken();
    if (httpRequestResponse.indexOf(this.getCognitoConstants().IDTOKEN) > -1) {
      idToken.setJwtToken(map.get(this.getCognitoConstants().IDTOKEN));
      this.signInUserSession.setIdToken(idToken);
    } else {
      this.signInUserSession.setIdToken(idToken);
    }
    if (httpRequestResponse.indexOf(this.getCognitoConstants().ACCESSTOKEN) > -1) {
      accessToken.setJwtToken(map.get(this.getCognitoConstants().ACCESSTOKEN));
      this.signInUserSession.setAccessToken(accessToken);
    } else {
      this.signInUserSession.setAccessToken(accessToken);
    }
    if (httpRequestResponse.indexOf(this.getCognitoConstants().REFRESHTOKEN) > -1) {
      refreshToken.setToken(map.get(this.getCognitoConstants().REFRESHTOKEN));
      this.signInUserSession.setRefreshToken(refreshToken);
    } else {
      this.signInUserSession.setRefreshToken(refreshToken);
    }
    this.cacheTokensScopes();
    return this.userhandler.onSuccess(this.signInUserSession);
  }

  /**
   * Get cached tokens and scopes and return a new session using all the cached data.
   * @returns {CognitoAuthSession} the auth session
   */
  getCachedSession() {
    if (!this.username) {
      return new CognitoAuthSession();
    }
    const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}.${this.username}`;
    const idTokenKey = `${keyPrefix}.idToken`;
    const accessTokenKey = `${keyPrefix}.accessToken`;
    const refreshTokenKey = `${keyPrefix}.refreshToken`;
    const scopeKey = `${keyPrefix}.tokenScopesString`;

    const scopesString = this.storage.getItem(scopeKey);
    let scopesArray = [];
    if (scopesString) {
      scopesArray = scopesString.split(' ');
    }
    const tokenScopes = new CognitoTokenScopes(scopesArray);
    const idToken = new CognitoIdToken(this.storage.getItem(idTokenKey));
    const accessToken = new CognitoAccessToken(this.storage.getItem(accessTokenKey));
    const refreshToken = new CognitoRefreshToken(this.storage.getItem(refreshTokenKey));

    const sessionData = {
      IdToken: idToken,
      AccessToken: accessToken,
      RefreshToken: refreshToken,
      TokenScopes: tokenScopes,
    };
    const cachedSession = new CognitoAuthSession(sessionData);
    return cachedSession;
  }

  /**
   * This is used to get last signed in user from local storage
   * @returns {string} the last user name
   */
  getLastUser() {
    const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
    const lastUserKey = `${keyPrefix}.LastAuthUser`;
    const lastUserName = this.storage.getItem(lastUserKey);
    if (lastUserName) {
      return lastUserName;
    }
    return undefined;
  }

  /**
   * This is used to save the session tokens, scope and state to local storage
   * Input parameter is a set of strings.
   * @returns {void}
   */
  cacheTokensScopes() {
    const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
    const tokenUserName = this.signInUserSession.getAccessToken().getUsername();
    const idTokenKey = `${keyPrefix}.${tokenUserName}.idToken`;
    const accessTokenKey = `${keyPrefix}.${tokenUserName}.accessToken`;
    const refreshTokenKey = `${keyPrefix}.${tokenUserName}.refreshToken`;
    const lastUserKey = `${keyPrefix}.LastAuthUser`;
    const scopeKey = `${keyPrefix}.${tokenUserName}.tokenScopesString`;
    const scopesArray = this.signInUserSession.getTokenScopes().getScopes();
    const scopesString = scopesArray.join(' ');
    this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken());
    this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken());
    this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken());
    this.storage.setItem(lastUserKey, tokenUserName);
    this.storage.setItem(scopeKey, scopesString);
  }

  /**
   * Compare two sets if they are identical.
   * @param {set} set1 one set
   * @param {set} set2 the other set
   * @returns {boolean} boolean value is true if two sets are identical
   */
  compareSets(set1, set2) {
    if (set1.size !== set2.size) {
      return false;
    }
    for (const item of set1) {
      if (!set2.has(item)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param {string} url the url string
   * Get the hostname from url.
   * @returns {string} hostname string
   */
  getHostName(url) {
    const match = url.match(this.getCognitoConstants().HOSTNAMEREGEX);
    if (match != null && match.length > 2 && typeof match[2] ===
    this.getCognitoConstants().STRINGTYPE && match[2].length > 0) {
      return match[2];
    }
    return undefined;
  }

  /**
   * Get http query parameters and store them into a map.
   * @param {string} url the url string
   * @param {map} map the query parameter map
   * @returns {map} map
   */
  getQueryParameters(url, map) {
    const str = String(url).split(this.getCognitoConstants().QUERYPARAMETERREGEX1);
    const url2 = str[1];
    const str1 = String(url2).split(this.getCognitoConstants().AMPERSAND);
    const num = str1.length;
    let i;
    for (i = 0; i < num; i++) {
      str1[i] = String(str1[i]).split(this.getCognitoConstants().QUERYPARAMETERREGEX2);
      map.set(str1[i][0], str1[i][1]);
    }
    return map;
  }

  /**
   * Get the code parameter from the url.
   * @param {string} url the url string
   * @returns {string} code
   */
  getCodeParameter(url) {
    const urlEdit = String(url).split(this.getCognitoConstants().QUESTIONMARK);
    const url1 = urlEdit[1];
    const urlStr = String(url1).split(this.getCognitoConstants().EQUALSIGN);
    const code = urlStr[1];
    return code;
  }

  /**
   * helper function to generate a random string
   * @param {int} length the length of string
   * @param {string} chars a original string
   * @returns {string} a random value.
   */
  generateRandomString(length, chars) {
    let result = '';
    let i = length;
    for (; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  /**
   * This is used to clear the session tokens, scopes and state from local storage
   * @returns {void}
   */
  clearCachedTokensScopes() {
    const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
    const idTokenKey = `${keyPrefix}.${this.username}.idToken`;
    const accessTokenKey = `${keyPrefix}.${this.username}.accessToken`;
    const refreshTokenKey = `${keyPrefix}.${this.username}.refreshToken`;
    const lastUserKey = `${keyPrefix}.LastAuthUser`;
    const scopeKey = `${keyPrefix}.${this.username}.tokenScopesString`;

    this.storage.removeItem(idTokenKey);
    this.storage.removeItem(accessTokenKey);
    this.storage.removeItem(refreshTokenKey);
    this.storage.removeItem(lastUserKey);
    this.storage.removeItem(scopeKey);
  }

  /**
   * This is used to build a user session from tokens retrieved in the authentication result
   * @param {object} refreshToken authResult Successful auth response from server.
   * @returns {void}
   */
  refreshSession(refreshToken) {
    // https POST call for refreshing token
    const url = this.getCognitoConstants().DOMAIN_SCHEME.concat(
    this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(),
    this.getCognitoConstants().SLASH, this.getCognitoConstants().TOKEN);
    const header = this.getCognitoConstants().HEADER;
    const body = { grant_type: this.getCognitoConstants().REFRESHTOKEN,
      client_id: this.getClientId(),
      redirect_uri: this.RedirectUriSignIn,
      refresh_token: refreshToken };
    const boundOnSuccess = (this.onSuccessRefreshToken).bind(this);
    const boundOnFailure = (this.onFailure).bind(this);
    this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
  }

  /**
   * Make the http POST request.
   * @param {JSON} header header JSON object
   * @param {JSON} body body JSON object
   * @param {string} url string
   * @param {function} onSuccess callback
   * @param {function} onFailure callback
   * @returns {void}
   */
  makePOSTRequest(header, body, url, onSuccess, onFailure) {
    // This is a sample server that supports CORS.
    const xhr = this.createCORSRequest(this.getCognitoConstants().POST, url);
    let bodyString = '';
    let i = 0;
    let j = 0;
    const jsonData = xhr.responseText;
    if (!xhr) {
      return;
    }
    // set header
    for (; j < header.length; j++) {
      xhr.setRequestHeader(j, header[j]);
    }
    for (; i < body.length; i++) {
      bodyString = bodyString.concat(i, this.getCognitoConstants().EQUALSIGN,
      body[i], this.getCognitoConstants().AMPERSAND);
    }
    bodyString = bodyString.substring(0, bodyString.length - 1);
    xhr.send(bodyString);
    xhr.onreadystatechange = function addressState() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          xhr.onload = onSuccess(jsonData);
        } else {
          xhr.onerror = onFailure(jsonData);
        }
      }
    };
  }

  /**
   * Create the XHR object
   * @param {string} method which method to call
   * @param {string} url the url string
   * @returns {object} xhr
   */
  createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (this.getCognitoConstants().WITHCREDENTIALS in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest !== this.getCognitoConstants().UNDEFINED) {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }

  /**
   * The http POST request onFailure callback.
   * @param {object} err the error object
   * @returns {function} onFailure
   */
  onFailure(err) {
    this.userhandler.onFailure(err);
  }

  /**
   * The http POST request onSuccess callback when refreshing tokens.
   * @param {JSON} jsonData tokens
   * @returns {function} onSuccess
   */
  onSuccessRefreshToken(jsonData) {
    const jsonDataObject = JSON.parse(jsonData);
    if (Object.prototype.hasOwnProperty.call(jsonDataObject,
    this.getCognitoConstants().ERROR)) {
      const URL = this.getFQDNSignIn();
      this.launchUri(URL);
    } else {
      if (Object.prototype.hasOwnProperty.call(jsonDataObject,
      this.getCognitoConstants().IDTOKEN)) {
        this.signInUserSession.setIdToken(new
        CognitoIdToken(jsonDataObject.id_token));
      }
      if (Object.prototype.hasOwnProperty.call(jsonDataObject,
      this.getCognitoConstants().ACCESSTOKEN)) {
        this.signInUserSession.setAccessToken(new
        CognitoAccessToken(jsonDataObject.access_token));
      }
      this.cacheTokensScopes();
      return this.userhandler.onSuccess(this.signInUserSession);
    }
    return undefined;
  }

  /**
   * The http POST request onSuccess callback when exchanging code for tokens.
   * @param {JSON} jsonData tokens
   * @returns {function} onSuccess
   */
  onSuccessExchangeForToken(jsonData) {
    const jsonDataObject = JSON.parse(jsonData);
    const refreshToken = new CognitoRefreshToken();
    const accessToken = new CognitoAccessToken();
    const idToken = new CognitoIdToken();
    if (Object.prototype.hasOwnProperty.call(jsonDataObject,
    this.getCognitoConstants().ERROR)) {
      return this.userhandler.onFailure(jsonData);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject,
    this.getCognitoConstants().IDTOKEN)) {
      this.signInUserSession.setIdToken(
      new CognitoIdToken(jsonDataObject.id_token));
    } else {
      this.signInUserSession.setIdToken(idToken);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject,
    this.getCognitoConstants().ACCESSTOKEN)) {
      this.signInUserSession.setAccessToken(new
      CognitoAccessToken(jsonDataObject.access_token));
    } else {
      this.signInUserSession.setAccessToken(accessToken);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject,
    this.getCognitoConstants().REFRESHTOKEN)) {
      this.signInUserSession.setRefreshToken(new
      CognitoRefreshToken(jsonDataObject.refresh_token));
    } else {
      this.signInUserSession.setRefreshToken(refreshToken);
    }
    this.cacheTokensScopes();
    return this.userhandler.onSuccess(this.signInUserSession);
  }

  /**
   * Launch Cognito Auth UI page.
   * @param {string} URL the url to launch
   * @returns {void}
   */
  launchUri(URL) {
    window.open(URL, this.getCognitoConstants().SELF);
  }

  /**
   * @returns {string} scopes string
   */
  getSpaceSeperatedScopeString() {
    let tokenScopesString = this.signInUserSession.getTokenScopes().getScopes();
    tokenScopesString = tokenScopesString.join(this.getCognitoConstants().SPACE);
    return encodeURIComponent(tokenScopesString);
  }

  /**
   * Create the FQDN(fully qualified domain name) for authorization endpoint.
   * @returns {string} url
   */
  getFQDNSignIn() {
    const state = this.generateRandomString(this.getCognitoConstants().STATELENGTH,
    this.getCognitoConstants().STATEORIGINSTRING);
    const tokenScopesString = this.getSpaceSeperatedScopeString();
    // Build the complete web domain to launch the login screen
    const uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(
    this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(),
    this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNIN,
    this.getCognitoConstants().QUESTIONMARK,
    this.getCognitoConstants().DOMAIN_QUERY_PARAM_REDIRECT_URI,
    this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignIn),
    this.getCognitoConstants().AMPERSAND,
    this.getCognitoConstants().DOMAIN_QUERY_PARAM_RESPONSE_TYPE,
    this.getCognitoConstants().EQUALSIGN,
    this.responseType, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID,
    this.getCognitoConstants().EQUALSIGN, this.getClientId(),
    this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().STATE,
    this.getCognitoConstants().EQUALSIGN, state, this.getCognitoConstants().AMPERSAND,
    this.getCognitoConstants().SCOPE, this.getCognitoConstants().EQUALSIGN, tokenScopesString);
    return uri;
  }

  /**
   * Sign out the user.
   * @returns {void}
   */
  signOut() {
    const URL = this.getFQDNSignOut();
    this.signInUserSession = null;
    this.clearCachedTokensScopes();
    this.launchUri(URL);
  }

  /**
   * Create the FQDN(fully qualified domain name) for signout endpoint.
   * @returns {string} url
   */
  getFQDNSignOut() {
    const uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(
    this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(),
    this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNOUT,
    this.getCognitoConstants().QUESTIONMARK,
    this.getCognitoConstants().DOMAIN_QUERY_PARAM_SIGNOUT_URI,
    this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignOut),
    this.getCognitoConstants().AMPERSAND,
    this.getCognitoConstants().CLIENT_ID,
    this.getCognitoConstants().EQUALSIGN, this.getClientId());
    return uri;
  }
}
