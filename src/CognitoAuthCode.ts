import CognitoAuthPromisesCode from "./CognitoAuthPromisesCode";
import CognitoConstants from './CognitoConstants';
import CognitoAuthSession from "./CognitoAuthSession";

export default class CognitoAuthCode extends CognitoAuthPromisesCode {

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
            this.getUserhandler().onSuccess(data);
        }).catch(e => this.getUserhandler().onFailure(e));
        return undefined;
    }


}