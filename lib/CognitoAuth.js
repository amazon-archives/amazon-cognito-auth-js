"use strict";
/*!
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CognitoTokenScopes_1 = __importDefault(require("./CognitoTokenScopes"));
var CognitoToken_1 = __importDefault(require("./CognitoToken"));
var CognitoRefreshToken_1 = __importDefault(require("./CognitoRefreshToken"));
var CognitoAuthSession_1 = __importDefault(require("./CognitoAuthSession"));
var StorageHelper_1 = __importDefault(require("./StorageHelper"));
var CognitoConstants_1 = __importDefault(require("./CognitoConstants"));
var UriHelper_1 = require("./UriHelper");
/** @class */
var CognitoAuth = /** @class */ (function () {
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
    function CognitoAuth(data, implicitFlow) {
        if (implicitFlow === void 0) { implicitFlow = true; }
        var ClientId = data.ClientId, AppWebDomain = data.AppWebDomain, TokenScopesArray = data.TokenScopesArray, RedirectUriSignIn = data.RedirectUriSignIn, RedirectUriSignOut = data.RedirectUriSignOut, IdentityProvider = data.IdentityProvider, UserPoolId = data.UserPoolId, AdvancedSecurityDataCollectionFlag = data.AdvancedSecurityDataCollectionFlag, Storage = data.Storage, LaunchUri = data.LaunchUri;
        if (data == null || !ClientId || !AppWebDomain || !RedirectUriSignIn || !RedirectUriSignOut) {
            throw new Error(CognitoConstants_1.default.PARAMETERERROR);
        }
        this.clientId = ClientId;
        this.appWebDomain = AppWebDomain;
        this.tokenScopesArray = TokenScopesArray || [];
        if (!Array.isArray(TokenScopesArray)) {
            throw new Error(CognitoConstants_1.default.SCOPETYPEERROR);
        }
        var tokenScopes = new CognitoTokenScopes_1.default(this.tokenScopesArray);
        this.redirectUriSignIn = RedirectUriSignIn;
        this.redirectUriSignOut = RedirectUriSignOut;
        this.identityProvider = IdentityProvider;
        this.responseType = implicitFlow ? CognitoConstants_1.default.TOKEN : CognitoConstants_1.default.CODE;
        this.storage = Storage || new StorageHelper_1.default().getStorage();
        this.launchUri = typeof LaunchUri === 'function' ? LaunchUri : UriHelper_1.launchUri;
        this.username = this.getLastUser();
        this.userPoolId = UserPoolId;
        this.signInUserSession = this.getCachedSession();
        +this.signInUserSession.setTokenScopes(tokenScopes);
        /**
         * By default, AdvancedSecurityDataCollectionFlag is set to true, if no input value is provided.
         */
        this.advancedSecurityDataCollectionFlag = Boolean(AdvancedSecurityDataCollectionFlag);
    }
    CognitoAuth.prototype.getUserhandler = function () {
        return this.userhandler;
    };
    CognitoAuth.prototype.getRedirectUriSignIn = function () {
        return this.redirectUriSignIn;
    };
    /**
     * @returns {string} the client id
     */
    CognitoAuth.prototype.getClientId = function () {
        return this.clientId;
    };
    /**
     * @returns {string} the app web domain
     */
    CognitoAuth.prototype.getAppWebDomain = function () {
        return this.appWebDomain;
    };
    /**
     * method for getting the current user of the application from the local storage
     *
     * @returns {CognitoAuth} the user retrieved from storage
     */
    CognitoAuth.prototype.getCurrentUser = function () {
        var lastUserKey = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser";
        var lastAuthUser = this.storage.getItem(lastUserKey);
        return lastAuthUser;
    };
    /**
     * @param {string} Username the user's name
     * method for setting the current user's name
     * @returns {void}
     */
    CognitoAuth.prototype.setUser = function (username) {
        this.username = username;
    };
    /**
     * sets response type to 'code'
     * @returns {void}
     */
    CognitoAuth.prototype.useCodeGrantFlow = function () {
        this.responseType = CognitoConstants_1.default.CODE;
    };
    /**
     * sets response type to 'token'
     * @returns {void}
     */
    CognitoAuth.prototype.useImplicitFlow = function () {
        this.responseType = CognitoConstants_1.default.TOKEN;
    };
    CognitoAuth.prototype.setIdentityProvider = function (identityProvider) {
        this.identityProvider = identityProvider;
    };
    /**
     * @returns {CognitoAuthSession} the current session for this user
     */
    CognitoAuth.prototype.getSignInUserSession = function () {
        return this.signInUserSession;
    };
    /**
     * @returns {string} the user's username
     */
    CognitoAuth.prototype.getUsername = function () {
        return this.username;
    };
    /**
     * @param {string} Username the user's username
     * @returns {void}
     */
    CognitoAuth.prototype.setUsername = function (username) {
        this.username = username;
    };
    /**
     * @returns {string} the user's state
     */
    CognitoAuth.prototype.getState = function () {
        return this.state;
    };
    /**
     * @param {string} State the user's state
     * @returns {void}
     */
    CognitoAuth.prototype.setState = function (state) {
        this.state = state;
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
    CognitoAuth.prototype.getSession = function () {
        var _this = this;
        var tokenScopesInputSet = new Set(this.tokenScopesArray);
        var cachedScopesSet = new Set(this.signInUserSession.tokenScopes.getScopes()); //TODO why here?
        var URL = this.getFQDNSignIn();
        if (this.signInUserSession != null && this.signInUserSession.isValid()) {
            if (this.userhandler) {
                this.userhandler.onSuccess(this.signInUserSession);
            }
            return Promise.resolve(this.signInUserSession);
        }
        this.signInUserSession = this.getCachedSession(); //TODO? const cachedScopesSet = new Set(this.signInUserSession.tokenScopes.getScopes());
        // compare scopes
        if (!this.compareSets(tokenScopesInputSet, cachedScopesSet)) {
            var tokenScopes = new CognitoTokenScopes_1.default(this.tokenScopesArray);
            var idToken = new CognitoToken_1.default();
            var accessToken = new CognitoToken_1.default();
            var refreshToken = new CognitoRefreshToken_1.default();
            this.signInUserSession.setTokenScopes(tokenScopes);
            this.signInUserSession.setIdToken(idToken);
            this.signInUserSession.setAccessToken(accessToken);
            this.signInUserSession.setRefreshToken(refreshToken);
            this.launchUri(URL);
        }
        else if (this.signInUserSession.isValid()) {
            if (this.userhandler) {
                this.userhandler.onSuccess(this.signInUserSession);
            }
            return Promise.resolve(this.signInUserSession);
        }
        else if (!this.signInUserSession.getRefreshToken()
            || !this.signInUserSession.getRefreshToken().getToken()) {
            this.launchUri(URL);
        }
        else {
            return this.refreshSession(this.signInUserSession.getRefreshToken().getToken()).then(function (data) {
                if (_this.userhandler) {
                    _this.userhandler.onSuccess(_this.signInUserSession);
                }
                return _this.signInUserSession;
            });
        }
        if (this.userhandler) {
            this.userhandler.onSuccess(undefined);
        }
        return Promise.resolve(undefined);
    };
    /**
     * @param {string} httpRequestResponse the http request response
     * @returns {void}
     * Parse the http request response and proceed according to different response types.
     */
    CognitoAuth.prototype.parseCognitoWebResponse = function (httpRequestResponse) {
        var _this = this;
        var parsePromise = this.responseType === CognitoConstants_1.default.TOKEN ?
            this.parseCognitoToken(httpRequestResponse) : this.parseCognitoCode(httpRequestResponse);
        return parsePromise.then(function (data) {
            var result = _this.resolveCognitoAuthSession(data);
            if (_this.userhandler)
                _this.userhandler.onSuccess(result);
            return result;
        }).catch(function (e) {
            if (_this.userhandler) {
                _this.userhandler.onFailure(e);
                return undefined;
            }
            else {
                throw e;
            }
        });
    };
    CognitoAuth.prototype.parseCognitoToken = function (httpRequestResponse) {
        var map = this.getQueryParameters(httpRequestResponse, CognitoConstants_1.default.QUERYPARAMETERREGEX1);
        return Promise.resolve(map);
    };
    CognitoAuth.prototype.parseCognitoCode = function (httpRequestResponse) {
        // this is to avoid a bug exists when sign in with Google or facebook
        // Sometimes the code will contain a poundsign in the end which breaks the parsing
        var response = (httpRequestResponse.split(CognitoConstants_1.default.POUNDSIGN))[0];
        var map = this.getQueryParameters(response, CognitoConstants_1.default.QUESTIONMARK);
        if (map.has(CognitoConstants_1.default.ERROR)) {
            throw new Error(CognitoConstants_1.default.PARSETYPEERROR);
        }
        if (map.has(CognitoConstants_1.default.STATE)) {
            this.signInUserSession.setState(map.get(CognitoConstants_1.default.STATE));
        }
        else {
            this.signInUserSession.setState(null);
        }
        if (map.has(CognitoConstants_1.default.CODE)) {
            // if the response contains code
            // To parse the response and get the code value.
            var codeParameter = map.get(CognitoConstants_1.default.CODE);
            var body = {
                grant_type: CognitoConstants_1.default.AUTHORIZATIONCODE,
                code: codeParameter
            };
            return this.makePostCode(body);
        }
    };
    CognitoAuth.prototype.makePostCode = function (bodyOption) {
        var url = this.getUrlToken();
        var header = CognitoConstants_1.default.HEADER;
        var body = __assign({}, bodyOption, { client_id: this.getClientId(), redirect_uri: this.getRedirectUriSignIn() });
        return this.makePOSTRequest(header, body, url).then(function (data) {
            return new Map(Object.entries(JSON.parse(data)));
        });
    };
    CognitoAuth.prototype.getUrlToken = function () {
        return CognitoConstants_1.default.DOMAIN_SCHEME.concat(CognitoConstants_1.default.COLONDOUBLESLASH, this.getAppWebDomain(), CognitoConstants_1.default.SLASH, CognitoConstants_1.default.DOMAIN_PATH_TOKEN);
    };
    CognitoAuth.prototype.resolveCognitoAuthSession = function (map) {
        var idToken = new CognitoToken_1.default();
        var accessToken = new CognitoToken_1.default();
        var refreshToken = new CognitoRefreshToken_1.default();
        if (map.has(CognitoConstants_1.default.ERROR)) {
            throw new Error(CognitoConstants_1.default.PARSETYPEERROR);
        }
        if (map.has(CognitoConstants_1.default.IDTOKEN)) {
            this.signInUserSession.setIdToken(new CognitoToken_1.default(map.get(CognitoConstants_1.default.IDTOKEN)));
        }
        else {
            this.signInUserSession.setIdToken(idToken);
        }
        if (map.has(CognitoConstants_1.default.ACCESSTOKEN)) {
            this.signInUserSession.setAccessToken(new CognitoToken_1.default(map.get(CognitoConstants_1.default.ACCESSTOKEN)));
        }
        else {
            this.signInUserSession.setAccessToken(accessToken);
        }
        if (map.has(CognitoConstants_1.default.STATE)) {
            this.signInUserSession.setState(map.get(CognitoConstants_1.default.STATE));
        }
        else {
            this.signInUserSession.setState(null);
        }
        if (map.has(CognitoConstants_1.default.REFRESHTOKEN)) {
            this.signInUserSession.setRefreshToken(new CognitoRefreshToken_1.default(map.get(CognitoConstants_1.default.REFRESHTOKEN)));
        }
        else {
            this.signInUserSession.setRefreshToken(refreshToken);
        }
        this.cacheTokensScopes();
        return this.signInUserSession;
        //this.userhandler.onSuccess(this.signInUserSession);
    };
    /**
     * Get cached tokens and scopes and return a new session using all the cached data.
     * @returns {CognitoAuthSession} the auth session
     */
    CognitoAuth.prototype.getCachedSession = function () {
        if (!this.username) {
            return new CognitoAuthSession_1.default();
        }
        var keyPrefix = "CognitoIdentityServiceProvider." + this.getClientId() + "." + this.username;
        var idTokenKey = keyPrefix + ".idToken";
        var accessTokenKey = keyPrefix + ".accessToken";
        var refreshTokenKey = keyPrefix + ".refreshToken";
        var scopeKey = keyPrefix + ".tokenScopesString";
        var scopesString = this.storage.getItem(scopeKey);
        var scopesArray = [];
        if (scopesString) {
            scopesArray = scopesString.split(' ');
        }
        var tokenScopes = new CognitoTokenScopes_1.default(scopesArray);
        var idToken = new CognitoToken_1.default(this.storage.getItem(idTokenKey));
        var accessToken = new CognitoToken_1.default(this.storage.getItem(accessTokenKey));
        var refreshToken = new CognitoRefreshToken_1.default(this.storage.getItem(refreshTokenKey));
        var sessionData = {
            IdToken: idToken,
            AccessToken: accessToken,
            RefreshToken: refreshToken,
            TokenScopes: tokenScopes,
        };
        var cachedSession = new CognitoAuthSession_1.default(sessionData);
        return cachedSession;
    };
    /**
     * This is used to get last signed in user from local storage
     * @returns {string} the last user name
     */
    CognitoAuth.prototype.getLastUser = function () {
        var keyPrefix = "CognitoIdentityServiceProvider." + this.getClientId();
        var lastUserKey = keyPrefix + ".LastAuthUser";
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
    CognitoAuth.prototype.cacheTokensScopes = function () {
        var keyPrefix = "CognitoIdentityServiceProvider." + this.getClientId();
        var tokenUserName = this.signInUserSession.getAccessToken().getUsername();
        this.username = tokenUserName;
        var idTokenKey = keyPrefix + "." + tokenUserName + ".idToken";
        var accessTokenKey = keyPrefix + "." + tokenUserName + ".accessToken";
        var refreshTokenKey = keyPrefix + "." + tokenUserName + ".refreshToken";
        var lastUserKey = keyPrefix + ".LastAuthUser";
        var scopeKey = keyPrefix + "." + tokenUserName + ".tokenScopesString";
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
    CognitoAuth.prototype.compareSets = function (set1, set2) {
        if (set1.size !== set2.size) {
            return false;
        }
        for (var _i = 0, set1_1 = set1; _i < set1_1.length; _i++) {
            var item = set1_1[_i];
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
    CognitoAuth.prototype.getHostName = function (url) {
        var match = url.match(CognitoConstants_1.default.HOSTNAMEREGEX);
        if (match != null && match.length > 2 && typeof match[2] ===
            CognitoConstants_1.default.STRINGTYPE && match[2].length > 0) {
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
    CognitoAuth.prototype.getQueryParameters = function (url, splitMark) {
        var str = String(url).split(splitMark);
        var url2 = str[1];
        var str1 = String(url2).split(CognitoConstants_1.default.AMPERSAND);
        var num = str1.length;
        var map = new Map();
        var i;
        for (i = 0; i < num; i++) {
            str1[i] = String(str1[i]).split(CognitoConstants_1.default.QUERYPARAMETERREGEX2);
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
    CognitoAuth.prototype.generateRandomString = function (length, chars) {
        var result = '';
        var i = length;
        for (; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    /**
     * This is used to clear the session tokens and scopes from local storage
     * @returns {void}
     */
    CognitoAuth.prototype.clearCachedTokensScopes = function () {
        var keyPrefix = "CognitoIdentityServiceProvider." + this.getClientId();
        var idTokenKey = keyPrefix + "." + this.username + ".idToken";
        var accessTokenKey = keyPrefix + "." + this.username + ".accessToken";
        var refreshTokenKey = keyPrefix + "." + this.username + ".refreshToken";
        var lastUserKey = keyPrefix + ".LastAuthUser";
        var scopeKey = keyPrefix + "." + this.username + ".tokenScopesString";
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
    CognitoAuth.prototype.refreshSession = function (refreshToken) {
        /*const refreshPromise = this.responseType === CognitoConstants.TOKEN
            ? Promise.reject(CognitoConstants.REFRESHTYPEERROR) //TODO Login again?
            : this.makePostCode({
                grant_type: CognitoConstants.REFRESHTOKEN,
                refresh_token: refreshToken
            });*/
        var _this = this;
        return this.makePostCode({
            grant_type: CognitoConstants_1.default.REFRESHTOKEN,
            refresh_token: refreshToken
        }).then(function (map) {
            if (map.has(CognitoConstants_1.default.ERROR)) {
                var URL_1 = _this.getFQDNSignIn();
                _this.launchUri(URL_1);
                throw new Error(CognitoConstants_1.default.REFRESHTYPEERROR);
            }
            else {
                if (map.has(CognitoConstants_1.default.IDTOKEN)) {
                    _this.signInUserSession.setIdToken(new CognitoToken_1.default(map.get(CognitoConstants_1.default.IDTOKEN)));
                }
                if (map.has(CognitoConstants_1.default.ACCESSTOKEN)) {
                    _this.signInUserSession.setAccessToken(new CognitoToken_1.default(map.get(CognitoConstants_1.default.ACCESSTOKEN)));
                }
                _this.cacheTokensScopes();
                if (_this.userhandler) {
                    _this.userhandler.onSuccess(_this.signInUserSession);
                }
                return _this.signInUserSession;
            }
        }).catch(function (e) {
            if (_this.userhandler) {
                _this.userhandler.onFailure(e);
                return undefined;
            }
            else {
                throw e;
            }
        });
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
    CognitoAuth.prototype.makePOSTRequest = function (header, body, url) {
        var _this = this;
        // This is a sample server that supports CORS.
        return new Promise(function (resolve, reject) {
            var xhr = _this.createCORSRequest(CognitoConstants_1.default.POST, url);
            var bodyString = '';
            if (!xhr) {
                return;
            }
            // set header
            for (var key in header) {
                xhr.setRequestHeader(key, header[key]);
            }
            for (var key in body) {
                bodyString = bodyString.concat(key, CognitoConstants_1.default.EQUALSIGN, body[key], CognitoConstants_1.default.AMPERSAND);
            }
            bodyString = bodyString.substring(0, bodyString.length - 1);
            xhr.send(bodyString);
            xhr.onreadystatechange = function addressState() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    }
                    else {
                        reject(xhr.responseText);
                    }
                }
            };
        });
    };
    /**
     * Create the XHR object
     * @param {string} method which method to call
     * @param {string} url the url string
     * @returns {object} xhr
     */
    CognitoAuth.prototype.createCORSRequest = function (method, url) {
        var xhr = new XMLHttpRequest();
        //xhr.open(method, url, true);
        if (CognitoConstants_1.default.WITHCREDENTIALS in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open(method, url, true);
        }
        else if (typeof XDomainRequest !== CognitoConstants_1.default.UNDEFINED) {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open(method, url);
        }
        else {
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
    CognitoAuth.prototype.onFailure = function (err) {
        this.userhandler.onFailure(err);
    };
    /**
     * The http POST request onSuccess callback when refreshing tokens.
     * @param {JSON} jsonData tokens
     */
    CognitoAuth.prototype.onSuccessRefreshToken = function (jsonData) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonDataObject, URL_2;
            return __generator(this, function (_a) {
                jsonDataObject = JSON.parse(jsonData);
                if (Object.prototype.hasOwnProperty.call(jsonDataObject, CognitoConstants_1.default.ERROR)) {
                    URL_2 = this.getFQDNSignIn();
                    this.launchUri(URL_2);
                }
                else {
                    if (Object.prototype.hasOwnProperty.call(jsonDataObject, CognitoConstants_1.default.IDTOKEN)) {
                        this.signInUserSession.setIdToken(new CognitoToken_1.default(jsonDataObject.id_token));
                    }
                    if (Object.prototype.hasOwnProperty.call(jsonDataObject, CognitoConstants_1.default.ACCESSTOKEN)) {
                        this.signInUserSession.setAccessToken(new CognitoToken_1.default(jsonDataObject.access_token));
                    }
                    this.cacheTokensScopes();
                    return [2 /*return*/, this.signInUserSession];
                    //this.userhandler.onSuccess(this.signInUserSession);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Launch Cognito Auth UI page.
     * @param {string} URL the url to launch
     * @returns {void}
     */
    CognitoAuth.prototype.launchUri = function (URL) { };
    /**
     * @returns {string} scopes string
     */
    CognitoAuth.prototype.getSpaceSeperatedScopeString = function () {
        var tokenScopes = this.signInUserSession.getTokenScopes().getScopes();
        var tokenScopesString = tokenScopes.join(CognitoConstants_1.default.SPACE);
        return encodeURIComponent(tokenScopesString);
    };
    /**
     * Create the FQDN(fully qualified domain name) for authorization endpoint.
     * @returns {string} url
     */
    CognitoAuth.prototype.getFQDNSignIn = function () {
        if (this.state == null) {
            this.state = this.generateRandomString(CognitoConstants_1.default.STATELENGTH, CognitoConstants_1.default.STATEORIGINSTRING);
        }
        var identityProviderParam = this.identityProvider
            ? CognitoConstants_1.default.AMPERSAND.concat(CognitoConstants_1.default.DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER, CognitoConstants_1.default.EQUALSIGN, this.identityProvider)
            : '';
        var tokenScopesString = this.getSpaceSeperatedScopeString();
        var userContextDataParam = '';
        var userContextData = this.getUserContextData();
        if (userContextData) {
            userContextDataParam = CognitoConstants_1.default.AMPERSAND + CognitoConstants_1.default.DOMAIN_QUERY_PARAM_USERCONTEXTDATA +
                CognitoConstants_1.default.EQUALSIGN + this.getUserContextData();
        }
        // Build the complete web domain to launch the login screen
        var uri = CognitoConstants_1.default.DOMAIN_SCHEME.concat(CognitoConstants_1.default.COLONDOUBLESLASH, this.getAppWebDomain(), CognitoConstants_1.default.SLASH, CognitoConstants_1.default.DOMAIN_PATH_SIGNIN, CognitoConstants_1.default.QUESTIONMARK, CognitoConstants_1.default.DOMAIN_QUERY_PARAM_REDIRECT_URI, CognitoConstants_1.default.EQUALSIGN, encodeURIComponent(this.redirectUriSignIn), CognitoConstants_1.default.AMPERSAND, CognitoConstants_1.default.DOMAIN_QUERY_PARAM_RESPONSE_TYPE, CognitoConstants_1.default.EQUALSIGN, this.responseType, CognitoConstants_1.default.AMPERSAND, CognitoConstants_1.default.CLIENT_ID, CognitoConstants_1.default.EQUALSIGN, this.getClientId(), CognitoConstants_1.default.AMPERSAND, CognitoConstants_1.default.STATE, CognitoConstants_1.default.EQUALSIGN, this.state, CognitoConstants_1.default.AMPERSAND, CognitoConstants_1.default.SCOPE, CognitoConstants_1.default.EQUALSIGN, tokenScopesString, identityProviderParam, userContextDataParam);
        return uri;
    };
    /**
     * Sign out the user.
     * @returns {void}
     */
    CognitoAuth.prototype.signOut = function () {
        var URL = this.getFQDNSignOut();
        this.signInUserSession = null;
        this.clearCachedTokensScopes();
        this.launchUri(URL);
    };
    /**
     * Create the FQDN(fully qualified domain name) for signout endpoint.
     * @returns {string} url
     */
    CognitoAuth.prototype.getFQDNSignOut = function () {
        var uri = CognitoConstants_1.default.DOMAIN_SCHEME.concat(CognitoConstants_1.default.COLONDOUBLESLASH, this.getAppWebDomain(), CognitoConstants_1.default.SLASH, CognitoConstants_1.default.DOMAIN_PATH_SIGNOUT, CognitoConstants_1.default.QUESTIONMARK, CognitoConstants_1.default.DOMAIN_QUERY_PARAM_SIGNOUT_URI, CognitoConstants_1.default.EQUALSIGN, encodeURIComponent(this.redirectUriSignOut), CognitoConstants_1.default.AMPERSAND, CognitoConstants_1.default.CLIENT_ID, CognitoConstants_1.default.EQUALSIGN, this.getClientId());
        return uri;
    };
    /**
     * This method returns the encoded data string used for cognito advanced security feature.
     * This would be generated only when developer has included the JS used for collecting the
     * data on their client. Please refer to documentation to know more about using AdvancedSecurity
     * features
     **/
    CognitoAuth.prototype.getUserContextData = function () {
        if (typeof AmazonCognitoAdvancedSecurityData === "undefined") {
            return;
        }
        var _username = "";
        if (this.username) {
            _username = this.username;
        }
        var _userpoolId = "";
        if (this.userPoolId) {
            _userpoolId = this.userPoolId;
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
    CognitoAuth.prototype.isUserSignedIn = function () {
        return (this.signInUserSession != null && this.signInUserSession.isValid()) ||
            (this.getCachedSession() != null && this.getCachedSession().isValid());
    };
    return CognitoAuth;
}());
exports.default = CognitoAuth;
