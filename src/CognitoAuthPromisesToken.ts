import CognitoAuthPromises from "./CognitoAuthPromises";
import CognitoConstants from './CognitoConstants';
import CognitoAuthSession from "./CognitoAuthSession";

export default class CognitoAuthPromisesToken extends CognitoAuthPromises {

    constructor(config) {
        super(config, true);
    }

    _parseCognitoWebResponse(httpRequestResponse): Promise<Map<string, string>> {
        const map = super.getQueryParameters(
            httpRequestResponse,
            CognitoConstants.QUERYPARAMETERREGEX1
        );
        return Promise.resolve(map);
    }

    refreshSession(refreshToken): Promise<CognitoAuthSession> {
      return Promise.reject(CognitoConstants.REFRESHTYPEERROR);
    }


}