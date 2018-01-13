export interface CognitoAuthOptions {
  ClientId: string;
  AppWebDomain: string;
  RedirectUriSignIn: string;
  RedirectUriSignOut: string;
  TokenScopesArray?: string[];
  IdentityProvider?: string;
  userPoolId?: string;
  AdvancedSecurityDataCollectionFlag?: boolean;
}

export class CognitoAuth {
  constructor(options: CognitoAuthOptions);
  getCognitoConstants(): any;
  getClientId(): string;
  getAppWebDomain(): string;
  getCurrentUser(): any;
  setUser(username: string): void;
  useCodeGrantFlow(): void;
  useImplicitFlow(): void;
  getSignInUserSession(): any;
  getUsername(): string;
  setUsername(Username: string): void;
  getSession(): void;
  parseCognitoWebResponse(httpRequestResponse: string): void;
  getCodeQueryParameter(httpRequestResponse: string): void;
  getTokenQueryParameter(httpRequestResponse: string): void;
  getCachedSession(): any;
  getLastUser(): string;
  cacheTokenScopes(): void;
  compareSets(set1: any, set2: any): boolean;
  getHostName(url: string): string;
  getQueryParameters(url: string, splitMark: string): any;
  generateRandomString(length: number, chars: string): string;
  clearCachedTokensScopes(): void;
  refreshSession(refreshToken: any): void;
  makePOSTRequest(header: any, body: any, url: string, onSuccess: any, onFailure: any): void;
  createCORSRequest(method: string, url: string): any;
  onFailure(err: any): any;
  onSuccessRefreshToken(jsonData: any): void;
  onSuccessExchangeForToken(jsonData: any): void;
  launchUri(URL: string): void;
  getSpaceSeperatedScopeString(): string;
  getFQDNSignIn(): string;
  signOut(): void;
  getFQDNSignOut(): string;
  getUserContextData(): any;
}
