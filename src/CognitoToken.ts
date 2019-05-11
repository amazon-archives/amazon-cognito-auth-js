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
import { decode } from './DecodingHelper';

export interface CognitoTokenInterface {
    jwtToken: string;
    payload: object; 
  }
  
  /** @class */
  export default class CognitoToken implements CognitoTokenInterface{
    /**
     * Constructs a new CognitoAccessToken object
     * @param {string=} AccessToken The JWT access token.
     */
    jwtToken: string;
    payload: object;
  
    constructor(token:string = '') {
      // Assign object
      this.jwtToken = token;
      this.payload = this.decodePayload();
    }
    
  
    /**
     * @returns {string} the record's token.
     */
    getJwtToken() {
      return this.jwtToken;
    }
  
    /**
     * Sets new value for access token.
     * @param {string=} accessToken The JWT access token.
     * @returns {void}
     */
    setJwtToken(token) {
      this.jwtToken = token;
    }
  
    /**
     * @returns {int} the token's expiration (exp member).
     */
    getExpiration():number {
      if (this.jwtToken === null) {
        return undefined;
      }
      return (this.decodePayload() as any).exp;
    }
  
    /**
     * @returns {string} the username from payload.
     */
    getUsername(): string {
      if (this.jwtToken === null) {
        return undefined;
      }
      return (this.decodePayload() as any).username;
    }
  
    /**
     * @returns {object} the token's payload.
     */
    decodePayload(): object {
      const jwtPayload = this.jwtToken.split('.')[1];
      try {
        return JSON.parse(decode(jwtPayload));
      } catch (err) {
        return {};
      }
    }
  }
  