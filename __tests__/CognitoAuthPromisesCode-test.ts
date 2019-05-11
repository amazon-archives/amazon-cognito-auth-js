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
const cognitoAuth: CognitoAuth = new CognitoAuth(authData, false);


(global as any).open = jest.fn();

const payload = { username: 'prova', exp: (Date.now() + 100) };

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

//(window as any).open = jest.fn();
//const open = jest.fn()
Object.defineProperty(window, 'open', jest.fn());

it('test getSession login', function (done) {

    cognitoAuth.getSession();
    (mockXHR as any).onreadystatechange();
    expect((global as any).open).toBeCalled();
    done();
});


it('test parseCognitoWebResponse code', function (done) {
    const urlParse = "http://localhost:3000/?code=code&state=state";
    const result = cognitoAuth.parseCognitoWebResponse(urlParse);
    (mockXHR as any).onreadystatechange();
    return result.then((data) => {
        expect(data.accessToken).toEqual({
            payload: payload,
            jwtToken: jwtToken,
        })
        done();
    }
    ).catch(e => {
        throw e;}
    );;
});

it('test getSession exist', function (done) {

    const result = cognitoAuth.getSession();
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

it('test refresh exist', function (done) {

    const result = cognitoAuth.refreshSession("token");
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



it('test signedin', function (done) {
    expect(cognitoAuth.isUserSignedIn()).toBeTruthy();
    done();
});


it('test signout', function (done) {
    cognitoAuth.signOut();
    expect(cognitoAuth.getSignInUserSession()).toBeNull();
    expect((global as any).open).toBeCalled();
    done();
});