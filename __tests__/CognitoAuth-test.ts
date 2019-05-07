import CognitoAuth from '../src/CognitoAuth';
import CognitoConstants from '../src/CognitoConstants';

const authData: any = { 
    ClientId: "ClientId",
    AppWebDomain: "localhost:3000",
    TokenScopesArray: ['email', 'profile', 'openid'],
    RedirectUriSignIn: "http://localhost:3000",
    RedirectUriSignOut: "http://localhost:3000",
    IdentityProvider: "facebook",
    UserPoolId: "UserPoolId",
};
const cognitoAuth = new CognitoAuth(authData);
const urlParse = "http://localhost:3000/?code=code&state=state"



const payload = { username: 'prova', exp: 1557244927 };

const jwtToken = btoa(JSON.stringify({ "kid": "kid", "alg": "alg" })) + "." + btoa(JSON.stringify(payload))

const response = {
    id_token: jwtToken,
    access_token: jwtToken,
    refresh_token: jwtToken,
}

const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    onreadystatechange: jest.fn(),
    readyState: 4,
    responseText: JSON.stringify(response),
    statusText: "OK",
    status: 200,
    setRequestHeader: jest.fn(),
    [CognitoConstants.WITHCREDENTIALS]: CognitoConstants.WITHCREDENTIALS
};
const oldXMLHttpRequest = (window as any).XMLHttpRequest;
(window as any).XMLHttpRequest = jest.fn(() => mockXHR);

it('test parseCognitoWebResponse', function (done) {

    const result = cognitoAuth.parseCognitoWebResponse(urlParse);
    (mockXHR as any).onreadystatechange();
    return result.then((data) => {
        expect(data.accessToken).toEqual({
            payload: payload,
            jwtToken: jwtToken,
        })
        done();
    }
    );
});