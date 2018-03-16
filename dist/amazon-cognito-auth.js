/*!
 * Copyright 2017 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 * 
 *      http://aws.amazon.com/apache2.0/
 * 
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License. 
 */


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AmazonCognitoIdentity"] = factory();
	else
		root["AmazonCognitoIdentity"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _src = __webpack_require__(10);

	Object.keys(_src).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _src[key];
	    }
	  });
	});

	var enhancements = _interopRequireWildcard(_src);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// The version of crypto-browserify included by aws-sdk only
	// checks for window.crypto, not window.msCrypto as used by
	// IE 11 – so we set it explicitly here
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

	if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
	  window.crypto = window.msCrypto;
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

	var _buffer = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/** @class */
	var CognitoAccessToken = function () {
	  /**
	   * Constructs a new CognitoAccessToken object
	   * @param {string=} AccessToken The JWT access token.
	   */
	  function CognitoAccessToken(AccessToken) {
	    _classCallCheck(this, CognitoAccessToken);

	    // Assign object
	    this.jwtToken = AccessToken || '';
	    this.payload = this.decodePayload();
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  _createClass(CognitoAccessToken, [{
	    key: 'getJwtToken',
	    value: function getJwtToken() {
	      return this.jwtToken;
	    }

	    /**
	     * Sets new value for access token.
	     * @param {string=} accessToken The JWT access token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setJwtToken',
	    value: function setJwtToken(accessToken) {
	      this.jwtToken = accessToken;
	    }

	    /**
	     * @returns {int} the token's expiration (exp member).
	     */

	  }, {
	    key: 'getExpiration',
	    value: function getExpiration() {
	      return this.payload.exp;
	    }

	    /**
	     * @returns {string} the username from payload.
	     */

	  }, {
	    key: 'getUsername',
	    value: function getUsername() {
	      if (this.jwtToken === null) {
	        return undefined;
	      }
	      return this.payload.username;
	    }

	    /**
	     * @returns {object} the token's payload.
	     */

	  }, {
	    key: 'decodePayload',
	    value: function decodePayload() {
	      var payload = this.jwtToken.split('.')[1];
	      try {
	        return JSON.parse(_buffer.Buffer.from(payload, 'base64').toString('utf8'));
	      } catch (err) {
	        return {};
	      }
	    }
	  }]);

	  return CognitoAccessToken;
	}();

	exports.default = CognitoAccessToken;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

	var _buffer = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


	  _createClass(CognitoIdToken, [{
	    key: 'getJwtToken',
	    value: function getJwtToken() {
	      return this.jwtToken;
	    }

	    /**
	     * Sets new value for id token.
	     * @param {string=} idToken The JWT Id token
	     * @returns {void}
	     */

	  }, {
	    key: 'setJwtToken',
	    value: function setJwtToken(idToken) {
	      this.jwtToken = idToken;
	    }

	    /**
	     * @returns {int} the token's expiration (exp member).
	     */

	  }, {
	    key: 'getExpiration',
	    value: function getExpiration() {
	      return this.payload.exp;
	    }

	    /**
	     * @returns {object} the token's payload.
	     */

	  }, {
	    key: 'decodePayload',
	    value: function decodePayload() {
	      var payload = this.jwtToken.split('.')[1];
	      try {
	        return JSON.parse(_buffer.Buffer.from(payload, 'base64').toString('utf8'));
	      } catch (err) {
	        return {};
	      }
	    }
	  }]);

	  return CognitoIdToken;
	}();

	exports.default = CognitoIdToken;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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


	  _createClass(CognitoRefreshToken, [{
	    key: 'getToken',
	    value: function getToken() {
	      return this.refreshToken;
	    }

	    /**
	     * Sets new value for refresh token.
	     * @param {string=} refreshToken The JWT refresh token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setToken',
	    value: function setToken(refreshToken) {
	      this.refreshToken = refreshToken;
	    }
	  }]);

	  return CognitoRefreshToken;
	}();

	exports.default = CognitoRefreshToken;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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


	  _createClass(CognitoTokenScopes, [{
	    key: "getScopes",
	    value: function getScopes() {
	      return this.tokenScopes;
	    }

	    /**
	     * Sets new value for token scopes.
	     * @param {array=} tokenScopes The token scopes
	     * @returns {void}
	     */

	  }, {
	    key: "setTokenScopes",
	    value: function setTokenScopes(tokenScopes) {
	      this.tokenScopes = tokenScopes;
	    }
	  }]);

	  return CognitoTokenScopes;
	}();

	exports.default = CognitoTokenScopes;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

	var _CognitoTokenScopes = __webpack_require__(4);

	var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

	var _CognitoAccessToken = __webpack_require__(1);

	var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

	var _CognitoIdToken = __webpack_require__(2);

	var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

	var _CognitoRefreshToken = __webpack_require__(3);

	var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/** @class */
	var CognitoAuthSession = function () {
	  /**
	   * Constructs a new CognitoUserSession object
	   * @param {CognitoIdToken} IdToken The session's Id token.
	   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	   * @param {CognitoAccessToken} AccessToken The session's access token.
	   * @param {array}  TokenScopes  The session's token scopes.
	    * @param {string} State The session's state. 
	   */
	  function CognitoAuthSession() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        IdToken = _ref.IdToken,
	        RefreshToken = _ref.RefreshToken,
	        AccessToken = _ref.AccessToken,
	        TokenScopes = _ref.TokenScopes,
	        State = _ref.State;

	    _classCallCheck(this, CognitoAuthSession);

	    if (IdToken) {
	      this.idToken = IdToken;
	    } else {
	      this.idToken = new _CognitoIdToken2.default();
	    }
	    if (RefreshToken) {
	      this.refreshToken = RefreshToken;
	    } else {
	      this.refreshToken = new _CognitoRefreshToken2.default();
	    }
	    if (AccessToken) {
	      this.accessToken = AccessToken;
	    } else {
	      this.accessToken = new _CognitoAccessToken2.default();
	    }
	    if (TokenScopes) {
	      this.tokenScopes = TokenScopes;
	    } else {
	      this.tokenScopes = new _CognitoTokenScopes2.default();
	    }
	    if (State) {
	      this.state = State;
	    } else {
	      this.state = null;
	    }
	  }

	  /**
	   * @returns {CognitoIdToken} the session's Id token
	   */


	  _createClass(CognitoAuthSession, [{
	    key: 'getIdToken',
	    value: function getIdToken() {
	      return this.idToken;
	    }

	    /**
	     * Set a new Id token
	     * @param {CognitoIdToken} IdToken The session's Id token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setIdToken',
	    value: function setIdToken(IdToken) {
	      this.idToken = IdToken;
	    }

	    /**
	     * @returns {CognitoRefreshToken} the session's refresh token
	     */

	  }, {
	    key: 'getRefreshToken',
	    value: function getRefreshToken() {
	      return this.refreshToken;
	    }

	    /**
	     * Set a new Refresh token
	     * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setRefreshToken',
	    value: function setRefreshToken(RefreshToken) {
	      this.refreshToken = RefreshToken;
	    }

	    /**
	     * @returns {CognitoAccessToken} the session's access token
	     */

	  }, {
	    key: 'getAccessToken',
	    value: function getAccessToken() {
	      return this.accessToken;
	    }

	    /**
	     * Set a new Access token
	     * @param {CognitoAccessToken} AccessToken The session's access token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setAccessToken',
	    value: function setAccessToken(AccessToken) {
	      this.accessToken = AccessToken;
	    }

	    /**
	     * @returns {CognitoTokenScopes} the session's token scopes
	     */

	  }, {
	    key: 'getTokenScopes',
	    value: function getTokenScopes() {
	      return this.tokenScopes;
	    }

	    /**
	     * Set new token scopes
	     * @param {array}  tokenScopes  The session's token scopes.
	     * @returns {void}
	     */

	  }, {
	    key: 'setTokenScopes',
	    value: function setTokenScopes(tokenScopes) {
	      this.tokenScopes = tokenScopes;
	    }

	    /**
	     * @returns {string} the session's state
	     */

	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    }

	    /**
	     * Set new state
	     * @param {string}  state  The session's state.
	     * @returns {void}
	     */

	  }, {
	    key: 'setState',
	    value: function setState(State) {
	      this.state = State;
	    }

	    /**
	     * Checks to see if the session is still valid based on session expiry information found
	     * in Access and Id Tokens and the current time
	     * @returns {boolean} if the session is still valid
	     */

	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      var now = Math.floor(new Date() / 1000);
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
	  }]);

	  return CognitoAuthSession;
	}();

	exports.default = CognitoAuthSession;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
	var dataMemory = {};

	/** @class */

	var MemoryStorage = function () {
	  function MemoryStorage() {
	    _classCallCheck(this, MemoryStorage);
	  }

	  _createClass(MemoryStorage, null, [{
	    key: 'setItem',


	    /**
	     * This is used to set a specific item in storage
	     * @param {string} key - the key for the item
	     * @param {object} value - the value
	     * @returns {string} value that was set
	     */
	    value: function setItem(key, value) {
	      dataMemory[key] = value;
	      return dataMemory[key];
	    }

	    /**
	     * This is used to get a specific key from storage
	     * @param {string} key - the key for the item
	     * This is used to clear the storage
	     * @returns {string} the data item
	     */

	  }, {
	    key: 'getItem',
	    value: function getItem(key) {
	      return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
	    }

	    /**
	     * This is used to remove an item from storage
	     * @param {string} key - the key being set
	     * @returns {string} value - value that was deleted
	     */

	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      return delete dataMemory[key];
	    }

	    /**
	     * This is used to clear the storage
	     * @returns {string} nothing
	     */

	  }, {
	    key: 'clear',
	    value: function clear() {
	      dataMemory = {};
	      return dataMemory;
	    }
	  }]);

	  return MemoryStorage;
	}();

	/** @class */


	var StorageHelper = function () {

	  /**
	   * This is used to get a storage object
	   * @returns {object} the storage
	   */
	  function StorageHelper() {
	    _classCallCheck(this, StorageHelper);

	    try {
	      this.storageWindow = window.localStorage;
	      this.storageWindow.setItem('aws.cognito.test-ls', 1);
	      this.storageWindow.removeItem('aws.cognito.test-ls');
	    } catch (exception) {
	      this.storageWindow = MemoryStorage;
	    }
	  }

	  /**
	   * This is used to return the storage
	   * @returns {object} the storage
	   */


	  _createClass(StorageHelper, [{
	    key: 'getStorage',
	    value: function getStorage() {
	      return this.storageWindow;
	    }
	  }]);

	  return StorageHelper;
	}();

	exports.default = StorageHelper;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(11)
	var ieee754 = __webpack_require__(12)
	var isArray = __webpack_require__(13)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

	var _CognitoTokenScopes = __webpack_require__(4);

	var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

	var _CognitoAccessToken = __webpack_require__(1);

	var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

	var _CognitoIdToken = __webpack_require__(2);

	var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

	var _CognitoRefreshToken = __webpack_require__(3);

	var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

	var _CognitoAuthSession = __webpack_require__(5);

	var _CognitoAuthSession2 = _interopRequireDefault(_CognitoAuthSession);

	var _StorageHelper = __webpack_require__(6);

	var _StorageHelper2 = _interopRequireDefault(_StorageHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	    this.signInUserSession = new _CognitoAuthSession2.default();
	    this.responseType = this.getCognitoConstants().TOKEN;
	    this.storage = new _StorageHelper2.default().getStorage();
	    this.signInUserSession.setTokenScopes(tokenScopes);
	    this.username = this.getLastUser();
	    this.userPoolId = UserPoolId;

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


	  _createClass(CognitoAuth, [{
	    key: 'getCognitoConstants',
	    value: function getCognitoConstants() {
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
	    }

	    /**
	     * @returns {string} the client id
	     */

	  }, {
	    key: 'getClientId',
	    value: function getClientId() {
	      return this.clientId;
	    }

	    /**
	     * @returns {string} the app web domain
	     */

	  }, {
	    key: 'getAppWebDomain',
	    value: function getAppWebDomain() {
	      return this.appWebDomain;
	    }

	    /**
	     * method for getting the current user of the application from the local storage
	     *
	     * @returns {CognitoAuth} the user retrieved from storage
	     */

	  }, {
	    key: 'getCurrentUser',
	    value: function getCurrentUser() {
	      var lastUserKey = 'CognitoIdentityServiceProvider.' + this.clientId + '.LastAuthUser';

	      var lastAuthUser = this.storage.getItem(lastUserKey);
	      return lastAuthUser;
	    }

	    /**
	     * @param {string} Username the user's name
	     * method for setting the current user's name
	     * @returns {void}
	     */

	  }, {
	    key: 'setUser',
	    value: function setUser(Username) {
	      this.username = Username;
	    }

	    /**
	     * sets response type to 'code'
	     * @returns {void}
	     */

	  }, {
	    key: 'useCodeGrantFlow',
	    value: function useCodeGrantFlow() {
	      this.responseType = this.getCognitoConstants().CODE;
	    }

	    /**
	     * sets response type to 'token'
	     * @returns {void}
	     */

	  }, {
	    key: 'useImplicitFlow',
	    value: function useImplicitFlow() {
	      this.responseType = this.getCognitoConstants().TOKEN;
	    }

	    /**
	     * @returns {CognitoAuthSession} the current session for this user
	     */

	  }, {
	    key: 'getSignInUserSession',
	    value: function getSignInUserSession() {
	      return this.signInUserSession;
	    }

	    /**
	     * @returns {string} the user's username
	     */

	  }, {
	    key: 'getUsername',
	    value: function getUsername() {
	      return this.username;
	    }

	    /**
	     * @param {string} Username the user's username
	     * @returns {void}
	     */

	  }, {
	    key: 'setUsername',
	    value: function setUsername(Username) {
	      this.username = Username;
	    }

	    /**
	     * @returns {string} the user's state
	     */

	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    }

	    /**
	     * @param {string} State the user's state
	     * @returns {void}
	     */

	  }, {
	    key: 'setState',
	    value: function setState(State) {
	      this.state = State;
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

	  }, {
	    key: 'getSession',
	    value: function getSession() {
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
	    }

	    /**
	     * @param {string} httpRequestResponse the http request response
	     * @returns {void}
	     * Parse the http request response and proceed according to different response types.
	     */

	  }, {
	    key: 'parseCognitoWebResponse',
	    value: function parseCognitoWebResponse(httpRequestResponse) {
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

	  }, {
	    key: 'getCodeQueryParameter',
	    value: function getCodeQueryParameter(httpRequestResponse) {
	      var map = this.getQueryParameters(httpRequestResponse, this.getCognitoConstants().QUESTIONMARK);
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
	    }

	    /**
	     * Parse the http request response and proceed according to token response type.
	     * @param {string} httpRequestResponse the http request response
	     * @returns {void}
	     */

	  }, {
	    key: 'getTokenQueryParameter',
	    value: function getTokenQueryParameter(httpRequestResponse) {
	      var map = this.getQueryParameters(httpRequestResponse, this.getCognitoConstants().QUERYPARAMETERREGEX1);
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
	      if (map.has(this.getCognitoConstants().REFRESHTOKEN)) {
	        refreshToken.setToken(map.get(this.getCognitoConstants().REFRESHTOKEN));
	        this.signInUserSession.setRefreshToken(refreshToken);
	      } else {
	        this.signInUserSession.setRefreshToken(refreshToken);
	      }
	      if (map.has(this.getCognitoConstants().STATE)) {
	        this.signInUserSession.setState(map.get(this.getCognitoConstants().STATE));
	      } else {
	        this.signInUserSession.setState(state);
	      }
	      this.cacheTokensScopes();
	      return this.userhandler.onSuccess(this.signInUserSession);
	    }

	    /**
	     * Get cached tokens and scopes and return a new session using all the cached data.
	     * @returns {CognitoAuthSession} the auth session
	     */

	  }, {
	    key: 'getCachedSession',
	    value: function getCachedSession() {
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
	    }

	    /**
	     * This is used to get last signed in user from local storage
	     * @returns {string} the last user name
	     */

	  }, {
	    key: 'getLastUser',
	    value: function getLastUser() {
	      var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
	      var lastUserKey = keyPrefix + '.LastAuthUser';
	      var lastUserName = this.storage.getItem(lastUserKey);
	      if (lastUserName) {
	        return lastUserName;
	      }
	      return undefined;
	    }

	    /**
	     * This is used to save the session tokens and scopes to local storage
	     * Input parameter is a set of strings.
	     * @returns {void}
	     */

	  }, {
	    key: 'cacheTokensScopes',
	    value: function cacheTokensScopes() {
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
	    }

	    /**
	     * Compare two sets if they are identical.
	     * @param {set} set1 one set
	     * @param {set} set2 the other set
	     * @returns {boolean} boolean value is true if two sets are identical
	     */

	  }, {
	    key: 'compareSets',
	    value: function compareSets(set1, set2) {
	      if (set1.size !== set2.size) {
	        return false;
	      }
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = set1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;

	          if (!set2.has(item)) {
	            return false;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return true;
	    }

	    /**
	     * @param {string} url the url string
	     * Get the hostname from url.
	     * @returns {string} hostname string
	     */

	  }, {
	    key: 'getHostName',
	    value: function getHostName(url) {
	      var match = url.match(this.getCognitoConstants().HOSTNAMEREGEX);
	      if (match != null && match.length > 2 && _typeof(match[2]) === this.getCognitoConstants().STRINGTYPE && match[2].length > 0) {
	        return match[2];
	      }
	      return undefined;
	    }

	    /**
	     * Get http query parameters and return them as a map.
	     * @param {string} url the url string
	     * @param {string} splitMark query parameters split mark (prefix)
	     * @returns {map} map
	     */

	  }, {
	    key: 'getQueryParameters',
	    value: function getQueryParameters(url, splitMark) {
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
	    }

	    /**
	     * helper function to generate a random string
	     * @param {int} length the length of string
	     * @param {string} chars a original string
	     * @returns {string} a random value.
	     */

	  }, {
	    key: 'generateRandomString',
	    value: function generateRandomString(length, chars) {
	      var result = '';
	      var i = length;
	      for (; i > 0; --i) {
	        result += chars[Math.round(Math.random() * (chars.length - 1))];
	      }return result;
	    }

	    /**
	     * This is used to clear the session tokens and scopes from local storage
	     * @returns {void}
	     */

	  }, {
	    key: 'clearCachedTokensScopes',
	    value: function clearCachedTokensScopes() {
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
	    }

	    /**
	     * This is used to build a user session from tokens retrieved in the authentication result
	     * @param {object} refreshToken authResult Successful auth response from server.
	     * @returns {void}
	     */

	  }, {
	    key: 'refreshSession',
	    value: function refreshSession(refreshToken) {
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

	  }, {
	    key: 'makePOSTRequest',
	    value: function makePOSTRequest(header, body, url, onSuccess, onFailure) {
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
	    }

	    /**
	     * Create the XHR object
	     * @param {string} method which method to call
	     * @param {string} url the url string
	     * @returns {object} xhr
	     */

	  }, {
	    key: 'createCORSRequest',
	    value: function createCORSRequest(method, url) {
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
	    }

	    /**
	     * The http POST request onFailure callback.
	     * @param {object} err the error object
	     * @returns {function} onFailure
	     */

	  }, {
	    key: 'onFailure',
	    value: function onFailure(err) {
	      this.userhandler.onFailure(err);
	    }

	    /**
	     * The http POST request onSuccess callback when refreshing tokens.
	     * @param {JSON} jsonData tokens
	     */

	  }, {
	    key: 'onSuccessRefreshToken',
	    value: function onSuccessRefreshToken(jsonData) {
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
	    }

	    /**
	     * The http POST request onSuccess callback when exchanging code for tokens.
	     * @param {JSON} jsonData tokens
	     */

	  }, {
	    key: 'onSuccessExchangeForToken',
	    value: function onSuccessExchangeForToken(jsonData) {
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
	    }

	    /**
	     * Launch Cognito Auth UI page.
	     * @param {string} URL the url to launch
	     * @returns {void}
	     */

	  }, {
	    key: 'launchUri',
	    value: function launchUri(URL) {
	      window.open(URL, this.getCognitoConstants().SELF);
	    }

	    /**
	     * @returns {string} scopes string
	     */

	  }, {
	    key: 'getSpaceSeperatedScopeString',
	    value: function getSpaceSeperatedScopeString() {
	      var tokenScopesString = this.signInUserSession.getTokenScopes().getScopes();
	      tokenScopesString = tokenScopesString.join(this.getCognitoConstants().SPACE);
	      return encodeURIComponent(tokenScopesString);
	    }

	    /**
	     * Create the FQDN(fully qualified domain name) for authorization endpoint.
	     * @returns {string} url
	     */

	  }, {
	    key: 'getFQDNSignIn',
	    value: function getFQDNSignIn() {
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
	    }

	    /**
	     * Sign out the user.
	     * @returns {void}
	     */

	  }, {
	    key: 'signOut',
	    value: function signOut() {
	      var URL = this.getFQDNSignOut();
	      this.signInUserSession = null;
	      this.clearCachedTokensScopes();
	      this.launchUri(URL);
	    }

	    /**
	     * Create the FQDN(fully qualified domain name) for signout endpoint.
	     * @returns {string} url
	     */

	  }, {
	    key: 'getFQDNSignOut',
	    value: function getFQDNSignOut() {
	      var uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNOUT, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_SIGNOUT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignOut), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId());
	      return uri;
	    }

	    /**
	     * This method returns the encoded data string used for cognito advanced security feature.
	     * This would be generated only when developer has included the JS used for collecting the
	     * data on their client. Please refer to documentation to know more about using AdvancedSecurity
	     * features
	     **/

	  }, {
	    key: 'getUserContextData',
	    value: function getUserContextData() {
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
	    }

	    /**
	     * Helper method to let the user know if he has either a valid cached session 
	     * or a valid authenticated session from the app integration callback.
	     * @returns {boolean} userSignedIn 
	     */

	  }, {
	    key: 'isUserSignedIn',
	    value: function isUserSignedIn() {
	      return this.getCachedSession() != null && this.getCachedSession().isValid() || this.signInUserSession != null && this.signInUserSession.isValid();
	    }
	  }]);

	  return CognitoAuth;
	}();

	exports.default = CognitoAuth;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
	var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	/** @class */

	var DateHelper = function () {
	  function DateHelper() {
	    _classCallCheck(this, DateHelper);
	  }

	  _createClass(DateHelper, [{
	    key: 'getNowString',

	    /**
	     * @returns {string} The current time in "ddd MMM D HH:mm:ss UTC YYYY" format.
	     */
	    value: function getNowString() {
	      var now = new Date();

	      var weekDay = weekNames[now.getUTCDay()];
	      var month = monthNames[now.getUTCMonth()];
	      var day = now.getUTCDate();

	      var hours = now.getUTCHours();
	      if (hours < 10) {
	        hours = '0' + hours;
	      }

	      var minutes = now.getUTCMinutes();
	      if (minutes < 10) {
	        minutes = '0' + minutes;
	      }

	      var seconds = now.getUTCSeconds();
	      if (seconds < 10) {
	        seconds = '0' + seconds;
	      }

	      var year = now.getUTCFullYear();

	      // ddd MMM D HH:mm:ss UTC YYYY
	      var dateNow = weekDay + ' ' + month + ' ' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' UTC ' + year;

	      return dateNow;
	    }
	  }]);

	  return DateHelper;
	}();

	exports.default = DateHelper;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CognitoAccessToken = __webpack_require__(1);

	Object.defineProperty(exports, 'CognitoAccessToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAccessToken).default;
	  }
	});

	var _CognitoIdToken = __webpack_require__(2);

	Object.defineProperty(exports, 'CognitoIdToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoIdToken).default;
	  }
	});

	var _CognitoRefreshToken = __webpack_require__(3);

	Object.defineProperty(exports, 'CognitoRefreshToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoRefreshToken).default;
	  }
	});

	var _CognitoTokenScopes = __webpack_require__(4);

	Object.defineProperty(exports, 'CognitoTokenScopes', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoTokenScopes).default;
	  }
	});

	var _CognitoAuth = __webpack_require__(8);

	Object.defineProperty(exports, 'CognitoAuth', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuth).default;
	  }
	});

	var _CognitoAuthSession = __webpack_require__(5);

	Object.defineProperty(exports, 'CognitoAuthSession', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuthSession).default;
	  }
	});

	var _DateHelper = __webpack_require__(9);

	Object.defineProperty(exports, 'DateHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DateHelper).default;
	  }
	});

	var _StorageHelper = __webpack_require__(6);

	Object.defineProperty(exports, 'StorageHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StorageHelper).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ })
/******/ ])
});
;