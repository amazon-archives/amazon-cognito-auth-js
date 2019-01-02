"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @class */
var CognitoIdToken = /** @class */ (function () {
    /**
     * Constructs a new CognitoIdToken object
     * @param {string=} IdToken The JWT Id token
     */
    function CognitoIdToken(IdToken) {
        if (IdToken === void 0) { IdToken = ''; }
        // Assign object
        this.jwtToken = IdToken;
        this.payload = this.decodePayload();
    }
    /**
     * @returns {string} the record's token.
     */
    CognitoIdToken.prototype.getJwtToken = function () {
        return this.jwtToken;
    };
    /**
     * Sets new value for id token.
     * @param {string=} idToken The JWT Id token
     * @returns {void}
     */
    CognitoIdToken.prototype.setJwtToken = function (idToken) {
        this.jwtToken = idToken;
    };
    /**
     * @returns {int} the token's expiration (exp member).
     */
    CognitoIdToken.prototype.getExpiration = function () {
        if (this.jwtToken === null) {
            return undefined;
        }
        var jwtPayload = this.jwtToken.split('.')[1];
        return JSON.parse(atob(jwtPayload)).exp;
    };
    /**
     * @returns {object} the token's payload.
     */
    CognitoIdToken.prototype.decodePayload = function () {
        var jwtPayload = this.jwtToken.split('.')[1];
        try {
            return JSON.parse(atob(jwtPayload));
        }
        catch (err) {
            return {};
        }
    };
    return CognitoIdToken;
}());
exports.default = CognitoIdToken;
