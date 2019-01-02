
import * as Cookies from 'js-cookie';

interface CookieStorageInterface {
  domain: string;
  path: string;
  expires: number;
  secure: boolean;
}
/** @class */
export default class CookieStorage {
  domain: string;
  path: string;
  expires: number;
  secure: boolean;
  /**
   * Constructs a new CookieStorage object
   * @param {object} data Creation options.
   * @param {string} data.domain Cookies domain (mandatory).
   * @param {string} data.path Cookies path (default: '/')
   * @param {integer} data.expires Cookie expiration (in days, default: 365)
   * @param {boolean} data.secure Cookie secure flag (default: true)
   */
  constructor(data: CookieStorageInterface = {
    domain: '/',
    path: '/',
    expires: 365,
    secure: true
  }) {
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
  setItem(key, value) {
    Cookies.set(key, value, {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure,
    }
    );
    return Cookies.get(key);
  }

  /**
   * This is used to get a specific key from storage
   * @param {string} key - the key for the item
   * This is used to clear the storage
   * @returns {string} the data item
   */
  getItem(key) {
    return Cookies.get(key);
  }

  /**
   * This is used to remove an item from storage
   * @param {string} key - the key being set
   * @returns {string} value - value that was deleted
   */
  removeItem(key) {
    return Cookies.remove(key, {
      path: this.path,
      domain: this.domain,
      secure: this.secure,
    }
    );
  }

  /**
   * This is used to clear the storage
   * @returns {string} nothing
   */
  clear() {
    const cookies = Cookies.get();
    let index;
    for (index = 0; index < cookies.length; ++index) {
      Cookies.remove(cookies[index]);
    }
    return {};
  }
}
