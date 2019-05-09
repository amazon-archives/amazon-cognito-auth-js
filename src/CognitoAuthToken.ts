import CognitoAuthPromisesToken from "./CognitoAuthPromisesToken";
import CognitoAuthSession from "./CognitoAuthSession";

export default class CognitoAuthToken extends CognitoAuthPromisesToken {

    constructor(config) {
        super(config);
    }

    parseCognitoWebResponse(httpRequestResponse: string): Promise<CognitoAuthSession> {
        super.parseCognitoWebResponse(httpRequestResponse).then(data => {
            this.getUserhandler().onSuccess(data);
        }).catch(e => this.getUserhandler().onFailure(e));
        return undefined;
    }

    getSession(): Promise<CognitoAuthSession> {
        super.getSession().then(data => {
            if (data) {
                this.getUserhandler().onSuccess(data);
            }
        });
        return undefined;
    }

    refreshSession(refreshToken): Promise<CognitoAuthSession> {
        super.refreshSession(refreshToken).then(data => {
            this.getUserhandler().onSuccess(data); //TODO Login again
        }).catch(e => this.getUserhandler().onFailure(e));
        return undefined;
    }


}