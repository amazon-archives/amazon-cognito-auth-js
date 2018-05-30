'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _CognitoTokenScopes = require('./CognitoTokenScopes');

var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

var _CognitoAccessToken = require('./CognitoAccessToken');

var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

var _CognitoIdToken = require('./CognitoIdToken');

var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

var _CognitoRefreshToken = require('./CognitoRefreshToken');

var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

var _CognitoAuthSession = require('./CognitoAuthSession');

var _CognitoAuthSession2 = _interopRequireDefault(_CognitoAuthSession);

var _StorageHelper = require('./StorageHelper');

var _StorageHelper2 = _interopRequireDefault(_StorageHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*!
                                                                                                                                                            * Amazon Cognito Auth SDK for JavaScript
                                                                                                                                                            * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
                                                                                                                                                            *
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
var CognitoAuth = function () {
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
   * @param {string} data.IdentityProvider Optional: Pre-selected identity provider (this allows to
   * automatically trigger social provider authentication flow).
   * @param {string} data.UserPoolId Optional: UserPoolId for the configured cognito userPool.
   * @param {boolean} data.AdvancedSecurityDataCollectionFlag Optional: boolean flag indicating if the
   *        data collection is enabled to support cognito advanced security features. By default, this
   *        flag is set to true.
   * @param {nodeCallback<CognitoAuthSession>} Optional: userhandler Called on success or error.
   */
  function CognitoAuth(data) {
    _classCallCheck(this, CognitoAuth);

    var _ref = data || {},
        ClientId = _ref.ClientId,
        AppWebDomain = _ref.AppWebDomain,
        TokenScopesArray = _ref.TokenScopesArray,
        RedirectUriSignIn = _ref.RedirectUriSignIn,
        RedirectUriSignOut = _ref.RedirectUriSignOut,
        IdentityProvider = _ref.IdentityProvider,
        UserPoolId = _ref.UserPoolId,
        AdvancedSecurityDataCollectionFlag = _ref.AdvancedSecurityDataCollectionFlag;

    if (data == null || !ClientId || !AppWebDomain || !RedirectUriSignIn || !RedirectUriSignOut) {
      throw new Error(this.getCognitoConstants().PARAMETERERROR);
    }

    this.clientId = ClientId;
    this.appWebDomain = AppWebDomain;
    this.TokenScopesArray = TokenScopesArray || [];
    if (!Array.isArray(TokenScopesArray)) {
      throw new Error(this.getCognitoConstants().SCOPETYPEERROR);
    }
    var tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
    this.RedirectUriSignIn = RedirectUriSignIn;
    this.RedirectUriSignOut = RedirectUriSignOut;
    this.IdentityProvider = IdentityProvider;
    this.responseType = this.getCognitoConstants().TOKEN;
    this.storage = new _StorageHelper2.default().getStorage();
    this.username = this.getLastUser();
    this.userPoolId = UserPoolId;
    this.signInUserSession = this.getCachedSession();
    +this.signInUserSession.setTokenScopes(tokenScopes);

    /**
     * By default, AdvancedSecurityDataCollectionFlag is set to true, if no input value is provided.
     */
    this.advancedSecurityDataCollectionFlag = true;
    if (AdvancedSecurityDataCollectionFlag) {
      this.advancedSecurityDataCollectionFlag = AdvancedSecurityDataCollectionFlag;
    }
  }

  /**
   * @returns {JSON} the constants
   */


  CognitoAuth.prototype.getCognitoConstants = function getCognitoConstants() {
    var CognitoConstants = {
      DOMAIN_SCHEME: 'https',
      DOMAIN_PATH_SIGNIN: 'oauth2/authorize',
      DOMAIN_PATH_TOKEN: 'oauth2/token',
      DOMAIN_PATH_SIGNOUT: 'logout',
      DOMAIN_QUERY_PARAM_REDIRECT_URI: 'redirect_uri',
      DOMAIN_QUERY_PARAM_SIGNOUT_URI: 'logout_uri',
      DOMAIN_QUERY_PARAM_RESPONSE_TYPE: 'response_type',
      DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER: 'identity_provider',
      DOMAIN_QUERY_PARAM_USERCONTEXTDATA: 'userContextData',
      CLIENT_ID: 'client_id',
      STATE: 'state',
      SCOPE: 'scope',
      TOKEN: 'token',
      CODE: 'code',
      POST: 'POST',
      PARAMETERERROR: 'The parameters: App client Id, App web domain' + ', the redirect URL when you are signed in and the ' + 'redirect URL when you are signed out are required.',
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
      ERROR_DESCRIPTION: 'error_description',
      STRINGTYPE: 'string',
      STATELENGTH: 32,
      STATEORIGINSTRING: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      WITHCREDENTIALS: 'withCredentials',
      UNDEFINED: 'undefined',
      SELF: '_self',
      HOSTNAMEREGEX: /:\/\/([0-9]?\.)?(.[^/:]+)/i,
      QUERYPARAMETERREGEX1: /#(.+)/,
      QUERYPARAMETERREGEX2: /=(.+)/,
      HEADER: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    return CognitoConstants;
  };

  /**
   * @returns {string} the client id
   */


  CognitoAuth.prototype.getClientId = function getClientId() {
    return this.clientId;
  };

  /**
   * @returns {string} the app web domain
   */


  CognitoAuth.prototype.getAppWebDomain = function getAppWebDomain() {
    return this.appWebDomain;
  };

  /**
   * method for getting the current user of the application from the local storage
   *
   * @returns {CognitoAuth} the user retrieved from storage
   */


  CognitoAuth.prototype.getCurrentUser = function getCurrentUser() {
    var lastUserKey = 'CognitoIdentityServiceProvider.' + this.clientId + '.LastAuthUser';

    var lastAuthUser = this.storage.getItem(lastUserKey);
    return lastAuthUser;
  };

  /**
   * @param {string} Username the user's name
   * method for setting the current user's name
   * @returns {void}
   */


  CognitoAuth.prototype.setUser = function setUser(Username) {
    this.username = Username;
  };

  /**
   * sets response type to 'code'
   * @returns {void}
   */


  CognitoAuth.prototype.useCodeGrantFlow = function useCodeGrantFlow() {
    this.responseType = this.getCognitoConstants().CODE;
  };

  /**
   * sets response type to 'token'
   * @returns {void}
   */


  CognitoAuth.prototype.useImplicitFlow = function useImplicitFlow() {
    this.responseType = this.getCognitoConstants().TOKEN;
  };

  /**
   * @returns {CognitoAuthSession} the current session for this user
   */


  CognitoAuth.prototype.getSignInUserSession = function getSignInUserSession() {
    return this.signInUserSession;
  };

  /**
   * @returns {string} the user's username
   */


  CognitoAuth.prototype.getUsername = function getUsername() {
    return this.username;
  };

  /**
   * @param {string} Username the user's username
   * @returns {void}
   */


  CognitoAuth.prototype.setUsername = function setUsername(Username) {
    this.username = Username;
  };

  /**
   * @returns {string} the user's state
   */


  CognitoAuth.prototype.getState = function getState() {
    return this.state;
  };

  /**
   * @param {string} State the user's state
   * @returns {void}
   */


  CognitoAuth.prototype.setState = function setState(State) {
    this.state = State;
  };

  /**
   * This is used to get a session, either from the session object
   * or from the local storage, or by using a refresh token
   * @param {string} RedirectUriSignIn Required: The redirect Uri,
   * which will be launched after authentication.
   * @param {array} TokenScopesArray Required: The token scopes, it is an
   * array of strings specifying all scopes for the tokens.
   * @returns {void}
   */


  CognitoAuth.prototype.getSession = function getSession() {
    var tokenScopesInputSet = new Set(this.TokenScopesArray);
    var cachedScopesSet = new Set(this.signInUserSession.tokenScopes.getScopes());
    var URL = this.getFQDNSignIn();
    if (this.signInUserSession != null && this.signInUserSession.isValid()) {
      return this.userhandler.onSuccess(this.signInUserSession);
    }
    this.signInUserSession = this.getCachedSession();
    // compare scopes
    if (!this.compareSets(tokenScopesInputSet, cachedScopesSet)) {
      var tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
      var idToken = new _CognitoIdToken2.default();
      var accessToken = new _CognitoAccessToken2.default();
      var refreshToken = new _CognitoRefreshToken2.default();
      this.signInUserSession.setTokenScopes(tokenScopes);
      this.signInUserSession.setIdToken(idToken);
      this.signInUserSession.setAccessToken(accessToken);
      this.signInUserSession.setRefreshToken(refreshToken);
      this.launchUri(URL);
    } else if (this.signInUserSession.isValid()) {
      return this.userhandler.onSuccess(this.signInUserSession);
    } else if (!this.signInUserSession.getRefreshToken() || !this.signInUserSession.getRefreshToken().getToken()) {
      this.launchUri(URL);
    } else {
      this.refreshSession(this.signInUserSession.getRefreshToken().getToken());
    }
    return undefined;
  };

  /**
   * @param {string} httpRequestResponse the http request response
   * @returns {void}
   * Parse the http request response and proceed according to different response types.
   */


  CognitoAuth.prototype.parseCognitoWebResponse = function parseCognitoWebResponse(httpRequestResponse) {
    var map = void 0;
    if (httpRequestResponse.indexOf(this.getCognitoConstants().QUESTIONMARK) > -1) {
      // for code type
      // this is to avoid a bug exists when sign in with Google or facebook
      // Sometimes the code will contain a poundsign in the end which breaks the parsing
      var response = httpRequestResponse.split(this.getCognitoConstants().POUNDSIGN)[0];
      map = this.getQueryParameters(response, this.getCognitoConstants().QUESTIONMARK);
      this.getCodeQueryParameter(map);
    } else if (httpRequestResponse.indexOf(this.getCognitoConstants().POUNDSIGN) > -1) {
      // for token type
      map = this.getQueryParameters(httpRequestResponse, this.getCognitoConstants().QUERYPARAMETERREGEX1);
      if (map.has(this.getCognitoConstants().ERROR)) {
        return this.userhandler.onFailure(map.get(this.getCognitoConstants().ERROR_DESCRIPTION));
      }
      // To use the map to get tokens
      this.getTokenQueryParameter(map);
    }
  };

  /**
   * @param {map} Query parameter map 
   * @returns {void}
   * Get the query parameter map and proceed according to code response type.
   */


  CognitoAuth.prototype.getCodeQueryParameter = function getCodeQueryParameter(map) {
    var state = null;
    if (map.has(this.getCognitoConstants().STATE)) {
      this.signInUserSession.setState(map.get(this.getCognitoConstants().STATE));
    } else {
      this.signInUserSession.setState(state);
    }

    if (map.has(this.getCognitoConstants().CODE)) {
      // if the response contains code
      // To parse the response and get the code value.
      var codeParameter = map.get(this.getCognitoConstants().CODE);
      var url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_TOKEN);
      var header = this.getCognitoConstants().HEADER;
      var body = { grant_type: this.getCognitoConstants().AUTHORIZATIONCODE,
        client_id: this.getClientId(),
        redirect_uri: this.RedirectUriSignIn,
        code: codeParameter };
      var boundOnSuccess = this.onSuccessExchangeForToken.bind(this);
      var boundOnFailure = this.onFailure.bind(this);
      this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
    }
  };

  /**
   * Get the query parameter map and proceed according to token response type.
   * @param {map} Query parameter map 
   * @returns {void}
   */


  CognitoAuth.prototype.getTokenQueryParameter = function getTokenQueryParameter(map) {
    var idToken = new _CognitoIdToken2.default();
    var accessToken = new _CognitoAccessToken2.default();
    var refreshToken = new _CognitoRefreshToken2.default();
    var state = null;
    if (map.has(this.getCognitoConstants().IDTOKEN)) {
      idToken.setJwtToken(map.get(this.getCognitoConstants().IDTOKEN));
      this.signInUserSession.setIdToken(idToken);
    } else {
      this.signInUserSession.setIdToken(idToken);
    }
    if (map.has(this.getCognitoConstants().ACCESSTOKEN)) {
      accessToken.setJwtToken(map.get(this.getCognitoConstants().ACCESSTOKEN));
      this.signInUserSession.setAccessToken(accessToken);
    } else {
      this.signInUserSession.setAccessToken(accessToken);
    }
    if (map.has(this.getCognitoConstants().STATE)) {
      this.signInUserSession.setState(map.get(this.getCognitoConstants().STATE));
    } else {
      this.signInUserSession.setState(state);
    }
    this.cacheTokensScopes();
    this.userhandler.onSuccess(this.signInUserSession);
  };

  /**
   * Get cached tokens and scopes and return a new session using all the cached data.
   * @returns {CognitoAuthSession} the auth session
   */


  CognitoAuth.prototype.getCachedSession = function getCachedSession() {
    if (!this.username) {
      return new _CognitoAuthSession2.default();
    }
    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId() + '.' + this.username;
    var idTokenKey = keyPrefix + '.idToken';
    var accessTokenKey = keyPrefix + '.accessToken';
    var refreshTokenKey = keyPrefix + '.refreshToken';
    var scopeKey = keyPrefix + '.tokenScopesString';

    var scopesString = this.storage.getItem(scopeKey);
    var scopesArray = [];
    if (scopesString) {
      scopesArray = scopesString.split(' ');
    }
    var tokenScopes = new _CognitoTokenScopes2.default(scopesArray);
    var idToken = new _CognitoIdToken2.default(this.storage.getItem(idTokenKey));
    var accessToken = new _CognitoAccessToken2.default(this.storage.getItem(accessTokenKey));
    var refreshToken = new _CognitoRefreshToken2.default(this.storage.getItem(refreshTokenKey));

    var sessionData = {
      IdToken: idToken,
      AccessToken: accessToken,
      RefreshToken: refreshToken,
      TokenScopes: tokenScopes
    };
    var cachedSession = new _CognitoAuthSession2.default(sessionData);
    return cachedSession;
  };

  /**
   * This is used to get last signed in user from local storage
   * @returns {string} the last user name
   */


  CognitoAuth.prototype.getLastUser = function getLastUser() {
    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
    var lastUserKey = keyPrefix + '.LastAuthUser';
    var lastUserName = this.storage.getItem(lastUserKey);
    if (lastUserName) {
      return lastUserName;
    }
    return undefined;
  };

  /**
   * This is used to save the session tokens and scopes to local storage
   * Input parameter is a set of strings.
   * @returns {void}
   */


  CognitoAuth.prototype.cacheTokensScopes = function cacheTokensScopes() {
    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
    var tokenUserName = this.signInUserSession.getAccessToken().getUsername();
    this.username = tokenUserName;
    var idTokenKey = keyPrefix + '.' + tokenUserName + '.idToken';
    var accessTokenKey = keyPrefix + '.' + tokenUserName + '.accessToken';
    var refreshTokenKey = keyPrefix + '.' + tokenUserName + '.refreshToken';
    var lastUserKey = keyPrefix + '.LastAuthUser';
    var scopeKey = keyPrefix + '.' + tokenUserName + '.tokenScopesString';
    var scopesArray = this.signInUserSession.getTokenScopes().getScopes();
    var scopesString = scopesArray.join(' ');
    this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken());
    this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken());
    this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken());
    this.storage.setItem(lastUserKey, tokenUserName);
    this.storage.setItem(scopeKey, scopesString);
  };

  /**
   * Compare two sets if they are identical.
   * @param {set} set1 one set
   * @param {set} set2 the other set
   * @returns {boolean} boolean value is true if two sets are identical
   */


  CognitoAuth.prototype.compareSets = function compareSets(set1, set2) {
    if (set1.size !== set2.size) {
      return false;
    }
    for (var _iterator = set1, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var item = _ref2;

      if (!set2.has(item)) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {string} url the url string
   * Get the hostname from url.
   * @returns {string} hostname string
   */


  CognitoAuth.prototype.getHostName = function getHostName(url) {
    var match = url.match(this.getCognitoConstants().HOSTNAMEREGEX);
    if (match != null && match.length > 2 && _typeof(match[2]) === this.getCognitoConstants().STRINGTYPE && match[2].length > 0) {
      return match[2];
    }
    return undefined;
  };

  /**
   * Get http query parameters and return them as a map.
   * @param {string} url the url string
   * @param {string} splitMark query parameters split mark (prefix)
   * @returns {map} map
   */


  CognitoAuth.prototype.getQueryParameters = function getQueryParameters(url, splitMark) {
    var str = String(url).split(splitMark);
    var url2 = str[1];
    var str1 = String(url2).split(this.getCognitoConstants().AMPERSAND);
    var num = str1.length;
    var map = new Map();
    var i = void 0;
    for (i = 0; i < num; i++) {
      str1[i] = String(str1[i]).split(this.getCognitoConstants().QUERYPARAMETERREGEX2);
      map.set(str1[i][0], str1[i][1]);
    }
    return map;
  };

  /**
   * helper function to generate a random string
   * @param {int} length the length of string
   * @param {string} chars a original string
   * @returns {string} a random value.
   */


  CognitoAuth.prototype.generateRandomString = function generateRandomString(length, chars) {
    var result = '';
    var i = length;
    for (; i > 0; --i) {
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    }return result;
  };

  /**
   * This is used to clear the session tokens and scopes from local storage
   * @returns {void}
   */


  CognitoAuth.prototype.clearCachedTokensScopes = function clearCachedTokensScopes() {
    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
    var idTokenKey = keyPrefix + '.' + this.username + '.idToken';
    var accessTokenKey = keyPrefix + '.' + this.username + '.accessToken';
    var refreshTokenKey = keyPrefix + '.' + this.username + '.refreshToken';
    var lastUserKey = keyPrefix + '.LastAuthUser';
    var scopeKey = keyPrefix + '.' + this.username + '.tokenScopesString';

    this.storage.removeItem(idTokenKey);
    this.storage.removeItem(accessTokenKey);
    this.storage.removeItem(refreshTokenKey);
    this.storage.removeItem(lastUserKey);
    this.storage.removeItem(scopeKey);
  };

  /**
   * This is used to build a user session from tokens retrieved in the authentication result
   * @param {object} refreshToken authResult Successful auth response from server.
   * @returns {void}
   */


  CognitoAuth.prototype.refreshSession = function refreshSession(refreshToken) {
    // https POST call for refreshing token
    var url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_TOKEN);
    var header = this.getCognitoConstants().HEADER;
    var body = { grant_type: this.getCognitoConstants().REFRESHTOKEN,
      client_id: this.getClientId(),
      redirect_uri: this.RedirectUriSignIn,
      refresh_token: refreshToken };
    var boundOnSuccess = this.onSuccessRefreshToken.bind(this);
    var boundOnFailure = this.onFailure.bind(this);
    this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
  };

  /**
   * Make the http POST request.
   * @param {JSON} header header JSON object
   * @param {JSON} body body JSON object
   * @param {string} url string
   * @param {function} onSuccess callback
   * @param {function} onFailure callback
   * @returns {void}
   */


  CognitoAuth.prototype.makePOSTRequest = function makePOSTRequest(header, body, url, onSuccess, onFailure) {
    // This is a sample server that supports CORS.
    var xhr = this.createCORSRequest(this.getCognitoConstants().POST, url);
    var bodyString = '';
    if (!xhr) {
      return;
    }
    // set header
    for (var key in header) {
      xhr.setRequestHeader(key, header[key]);
    }
    for (var _key in body) {
      bodyString = bodyString.concat(_key, this.getCognitoConstants().EQUALSIGN, body[_key], this.getCognitoConstants().AMPERSAND);
    }
    bodyString = bodyString.substring(0, bodyString.length - 1);
    xhr.send(bodyString);
    xhr.onreadystatechange = function addressState() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          onSuccess(xhr.responseText);
        } else {
          onFailure(xhr.responseText);
        }
      }
    };
  };

  /**
   * Create the XHR object
   * @param {string} method which method to call
   * @param {string} url the url string
   * @returns {object} xhr
   */


  CognitoAuth.prototype.createCORSRequest = function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (this.getCognitoConstants().WITHCREDENTIALS in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if ((typeof XDomainRequest === 'undefined' ? 'undefined' : _typeof(XDomainRequest)) !== this.getCognitoConstants().UNDEFINED) {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  };

  /**
   * The http POST request onFailure callback.
   * @param {object} err the error object
   * @returns {function} onFailure
   */


  CognitoAuth.prototype.onFailure = function onFailure(err) {
    this.userhandler.onFailure(err);
  };

  /**
   * The http POST request onSuccess callback when refreshing tokens.
   * @param {JSON} jsonData tokens
   */


  CognitoAuth.prototype.onSuccessRefreshToken = function onSuccessRefreshToken(jsonData) {
    var jsonDataObject = JSON.parse(jsonData);
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
      var URL = this.getFQDNSignIn();
      this.launchUri(URL);
    } else {
      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
        this.signInUserSession.setIdToken(new _CognitoIdToken2.default(jsonDataObject.id_token));
      }
      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
        this.signInUserSession.setAccessToken(new _CognitoAccessToken2.default(jsonDataObject.access_token));
      }
      this.cacheTokensScopes();
      this.userhandler.onSuccess(this.signInUserSession);
    }
  };

  /**
   * The http POST request onSuccess callback when exchanging code for tokens.
   * @param {JSON} jsonData tokens
   */


  CognitoAuth.prototype.onSuccessExchangeForToken = function onSuccessExchangeForToken(jsonData) {
    var jsonDataObject = JSON.parse(jsonData);
    var refreshToken = new _CognitoRefreshToken2.default();
    var accessToken = new _CognitoAccessToken2.default();
    var idToken = new _CognitoIdToken2.default();
    var state = null;
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
      return this.userhandler.onFailure(jsonData);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
      this.signInUserSession.setIdToken(new _CognitoIdToken2.default(jsonDataObject.id_token));
    } else {
      this.signInUserSession.setIdToken(idToken);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
      this.signInUserSession.setAccessToken(new _CognitoAccessToken2.default(jsonDataObject.access_token));
    } else {
      this.signInUserSession.setAccessToken(accessToken);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().REFRESHTOKEN)) {
      this.signInUserSession.setRefreshToken(new _CognitoRefreshToken2.default(jsonDataObject.refresh_token));
    } else {
      this.signInUserSession.setRefreshToken(refreshToken);
    }
    this.cacheTokensScopes();
    this.userhandler.onSuccess(this.signInUserSession);
  };

  /**
   * Launch Cognito Auth UI page.
   * @param {string} URL the url to launch
   * @returns {void}
   */


  CognitoAuth.prototype.launchUri = function launchUri(URL) {
    window.open(URL, this.getCognitoConstants().SELF);
  };

  /**
   * @returns {string} scopes string
   */


  CognitoAuth.prototype.getSpaceSeperatedScopeString = function getSpaceSeperatedScopeString() {
    var tokenScopesString = this.signInUserSession.getTokenScopes().getScopes();
    tokenScopesString = tokenScopesString.join(this.getCognitoConstants().SPACE);
    return encodeURIComponent(tokenScopesString);
  };

  /**
   * Create the FQDN(fully qualified domain name) for authorization endpoint.
   * @returns {string} url
   */


  CognitoAuth.prototype.getFQDNSignIn = function getFQDNSignIn() {
    if (this.state == null) {
      this.state = this.generateRandomString(this.getCognitoConstants().STATELENGTH, this.getCognitoConstants().STATEORIGINSTRING);
    }

    var identityProviderParam = this.IdentityProvider ? this.getCognitoConstants().AMPERSAND.concat(this.getCognitoConstants().DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER, this.getCognitoConstants().EQUALSIGN, this.IdentityProvider) : '';
    var tokenScopesString = this.getSpaceSeperatedScopeString();

    var userContextDataParam = '';
    var userContextData = this.getUserContextData();
    if (userContextData) {
      userContextDataParam = this.getCognitoConstants().AMPERSAND + this.getCognitoConstants().DOMAIN_QUERY_PARAM_USERCONTEXTDATA + this.getCognitoConstants().EQUALSIGN + this.getUserContextData();
    }

    // Build the complete web domain to launch the login screen
    var uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNIN, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_REDIRECT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignIn), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().DOMAIN_QUERY_PARAM_RESPONSE_TYPE, this.getCognitoConstants().EQUALSIGN, this.responseType, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId(), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().STATE, this.getCognitoConstants().EQUALSIGN, this.state, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().SCOPE, this.getCognitoConstants().EQUALSIGN, tokenScopesString, identityProviderParam, userContextDataParam);

    return uri;
  };

  /**
   * Sign out the user.
   * @returns {void}
   */


  CognitoAuth.prototype.signOut = function signOut() {
    var URL = this.getFQDNSignOut();
    this.signInUserSession = null;
    this.clearCachedTokensScopes();
    this.launchUri(URL);
  };

  /**
   * Create the FQDN(fully qualified domain name) for signout endpoint.
   * @returns {string} url
   */


  CognitoAuth.prototype.getFQDNSignOut = function getFQDNSignOut() {
    var uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNOUT, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_SIGNOUT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignOut), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId());
    return uri;
  };

  /**
   * This method returns the encoded data string used for cognito advanced security feature.
   * This would be generated only when developer has included the JS used for collecting the
   * data on their client. Please refer to documentation to know more about using AdvancedSecurity
   * features
   **/


  CognitoAuth.prototype.getUserContextData = function getUserContextData() {
    if (typeof AmazonCognitoAdvancedSecurityData === "undefined") {
      return;
    }

    var _username = "";
    if (this.username) {
      _username = this.username;
    }

    var _userpoolId = "";
    if (this.userpoolId) {
      _userpoolId = this.userpoolId;
    }

    if (this.advancedSecurityDataCollectionFlag) {
      return AmazonCognitoAdvancedSecurityData.getData(_username, _userpoolId, this.clientId);
    }
  };

  /**
   * Helper method to let the user know if he has either a valid cached session 
   * or a valid authenticated session from the app integration callback.
   * @returns {boolean} userSignedIn 
   */


  CognitoAuth.prototype.isUserSignedIn = function isUserSignedIn() {
    return this.signInUserSession != null && this.signInUserSession.isValid() || this.getCachedSession() != null && this.getCachedSession().isValid();
  };

  return CognitoAuth;
}();

exports.default = CognitoAuth;