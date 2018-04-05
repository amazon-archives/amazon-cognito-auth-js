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

  /**
   * @returns {string} The current time in "ddd MMM D HH:mm:ss UTC YYYY" format.
   */
  DateHelper.prototype.getNowString = function getNowString() {
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
  };

  return DateHelper;
}();

export default DateHelper;