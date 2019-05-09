
export default class CognitoConstants {
public static readonly DOMAIN_SCHEME= 'https';
public static readonly DOMAIN_PATH_SIGNIN= 'oauth2/authorize';
public static readonly DOMAIN_PATH_TOKEN= 'oauth2/token';
public static readonly DOMAIN_PATH_SIGNOUT= 'logout';
public static readonly DOMAIN_QUERY_PARAM_REDIRECT_URI= 'redirect_uri';
public static readonly DOMAIN_QUERY_PARAM_SIGNOUT_URI= 'logout_uri';
public static readonly DOMAIN_QUERY_PARAM_RESPONSE_TYPE= 'response_type';
public static readonly DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER= 'identity_provider';
public static readonly DOMAIN_QUERY_PARAM_USERCONTEXTDATA= 'userContextData';
public static readonly CLIENT_ID= 'client_id';
public static readonly STATE= 'state';
public static readonly SCOPE= 'scope';
public static readonly TOKEN= 'token';
public static readonly CODE= 'code';
public static readonly POST= 'POST';
public static readonly PARAMETERERROR= 'The parameters= App client Id; App web domain' +
                                        '; the redirect URL when you are signed in and the ' +
                                        'redirect URL when you are signed out are required.';
public static readonly SCOPETYPEERROR= 'Scopes have to be array type. ';
public static readonly PARSETYPEERROR= 'Parse response error ';
public static readonly REFRESHTYPEERROR= 'Refresh error: login again ';
public static readonly QUESTIONMARK= '?';
public static readonly POUNDSIGN= '#';
public static readonly COLONDOUBLESLASH= '://';
public static readonly SLASH= '/';
public static readonly AMPERSAND= '&';
public static readonly EQUALSIGN= '=';
public static readonly SPACE= ' ';
public static readonly CONTENTTYPE= 'Content-Type';
public static readonly CONTENTTYPEVALUE= 'application/x-www-form-urlencoded';
public static readonly AUTHORIZATIONCODE= 'authorization_code';
public static readonly IDTOKEN= 'id_token';
public static readonly ACCESSTOKEN= 'access_token';
public static readonly REFRESHTOKEN= 'refresh_token';
public static readonly ERROR= 'error';
public static readonly ERROR_DESCRIPTION= 'error_description';
public static readonly STRINGTYPE= 'string';
public static readonly STATELENGTH= 32;
public static readonly STATEORIGINSTRING= '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
public static readonly WITHCREDENTIALS= 'withCredentials';
public static readonly UNDEFINED= 'undefined';
public static readonly SELF= '_self';
public static readonly HOSTNAMEREGEX= /:\/\/([0-9]?\.)?(.[^/:]+)/i;
public static readonly QUERYPARAMETERREGEX1= /#(.+)/;
public static readonly QUERYPARAMETERREGEX2= /=(.+)/;
public static readonly HEADER= { 'Content-Type': 'application/x-www-form-urlencoded' };


}

