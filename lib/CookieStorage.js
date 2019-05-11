"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cookies = __importStar(require("js-cookie"));
/** @class */
var CookieStorage = /** @class */ (function () {
    /**
     * Constructs a new CookieStorage object
     * @param {object} data Creation options.
     * @param {string} data.domain Cookies domain (mandatory).
     * @param {string} data.path Cookies path (default: '/')
     * @param {integer} data.expires Cookie expiration (in days, default: 365)
     * @param {boolean} data.secure Cookie secure flag (default: true)
     */
    function CookieStorage(data) {
        if (data === void 0) { data = {
            domain: '/',
            path: '/',
            expires: 365,
            secure: true
        }; }
        this.domain = data.domain;
        this.path = data.path;
        this.expires = data.expires;
        this.secure = data.secure;
    }
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    CookieStorage.prototype.setItem = function (key, value) {
        Cookies.set(key, value, {
            path: this.path,
            expires: this.expires,
            domain: this.domain,
            secure: this.secure,
        });
        return Cookies.get(key);
    };
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    CookieStorage.prototype.getItem = function (key) {
        return Cookies.get(key);
    };
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    CookieStorage.prototype.removeItem = function (key) {
        return Cookies.remove(key, {
            path: this.path,
            domain: this.domain,
            secure: this.secure,
        });
    };
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    CookieStorage.prototype.clear = function () {
        var cookies = Cookies.get();
        var index;
        for (index = 0; index < cookies.length; ++index) {
            Cookies.remove(cookies[index]);
        }
        return {};
    };
    return CookieStorage;
}());
exports.default = CookieStorage;
