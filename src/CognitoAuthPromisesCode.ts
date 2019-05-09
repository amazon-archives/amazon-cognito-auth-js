import CognitoAuthPromises from "./CognitoAuthPromises";
import CognitoConstants from './CognitoConstants';
import CognitoAuthSession from "./CognitoAuthSession";
import CognitoToken from "./CognitoToken";

export default class CognitoAuthPromisesCode extends CognitoAuthPromises {

    public constructor(config) {
        super(config, false);
    }

    _parseCognitoWebResponse(httpRequestResponse): Promise<Map<string, string>> {
        // this is to avoid a bug exists when sign in with Google or facebook
        // Sometimes the code will contain a poundsign in the end which breaks the parsing
        const response = (httpRequestResponse.split(CognitoConstants.POUNDSIGN))[0];
        const map = super.getQueryParameters(
            response,
            CognitoConstants.QUESTIONMARK
        );
        if (map.has(CognitoConstants.ERROR)) {
            throw new Error(CognitoConstants.PARSETYPEERROR);
        }
        if (map.has(CognitoConstants.STATE)) {
            super.getSignInUserSession().setState(map.get(CognitoConstants.STATE));
        } else {
            super.getSignInUserSession().setState(null);
        }

        if (map.has(CognitoConstants.CODE)) {
            // if the response contains code
            // To parse the response and get the code value.
            const codeParameter = map.get(CognitoConstants.CODE);
            const body = {
                grant_type: CognitoConstants.AUTHORIZATIONCODE,
                code: codeParameter
            };
            return this._makePostUserSession(body);
        }
    }

    refreshSession(refreshToken): Promise<CognitoAuthSession> {
        // https POST call for refreshing token
        const body = {
            grant_type: CognitoConstants.REFRESHTOKEN,
            refresh_token: refreshToken
        };
        return this._makePostUserSession(body).then(map => {
            if (map.has(CognitoConstants.ERROR)) {
                const URL = super.getFQDNSignIn();
                super.launchUri(URL);
                throw new Error(CognitoConstants.REFRESHTYPEERROR);
            } else {
                if (map.has(CognitoConstants.IDTOKEN)) {
                    super.getSignInUserSession().setIdToken(new CognitoToken(map.get(CognitoConstants.IDTOKEN)));
                }
                if (map.has(CognitoConstants.ACCESSTOKEN)) {
                    super.getSignInUserSession().setAccessToken(new CognitoToken(map.get(CognitoConstants.ACCESSTOKEN)));
                }
                super.cacheTokensScopes();
                return super.getSignInUserSession();
            }
        })
    }

    private _makePostUserSession(bodyOption: any): Promise<Map<string, string>> {

        const url = this._getUrlToken();
        const header = CognitoConstants.HEADER;
        const body = {
            ...bodyOption,
            client_id: super.getClientId(),
            redirect_uri: super.getRedirectUriSignIn(),
        };
        return super.makePOSTRequest(header, body, url).then(data => {
            return new Map(Object.entries(JSON.parse(data)));
            //return new Map(JSON.parse(data))
        });
    }

    private _getUrlToken() {
        return CognitoConstants.DOMAIN_SCHEME.concat(
            CognitoConstants.COLONDOUBLESLASH, super.getAppWebDomain(),
            CognitoConstants.SLASH, CognitoConstants.DOMAIN_PATH_TOKEN);
    }
}