# Amazon Cognito Auth SDK for JavaScript
You can now use Amazon Cognito Auth to easily add sign-in and sign-out to your mobile and web apps. Your user pool in Amazon Cognito is a fully managed user directory that can scale to hundreds of millions of users, so you don't have to worry about building, securing, and scaling a solution to handle user management and authentication.

[For more information about this new feature, see Amazon Cognito User Pools App Integration and Federation GA Release.](http://docs.aws.amazon.com/cognito/latest/developerguide/getting-started.html)

We welcome developer feedback on this project. You can reach us by creating an issue on the GitHub repository or posting to the Amazon Cognito Identity forums:

* <https://github.com/aws/amazon-cognito-auth-js>
* <https://forums.aws.amazon.com/forum.jspa?forumID=173>

# Introduction
The Amazon Cognito Auth SDK for JavaScript simplifies adding sign-up, sign-in with user profile functionality to web apps.

Instead of implementing a UI for sign-up and sign-in, this SDK provides the UI via a hosted page.  It supports sign-up, sign-in, confirmation, multifactor authentication, and sign-out.


# Setup

There are two ways to install the Amazon Cognito Auth SDK for JavaScript and its dependencies, depending on your project setup and experience with modern JavaScript build tools:

* Download the JavaScript libraries and include them in your HTML, or

* Install the dependencies with npm and use a bundler like webpack.

### Install using separate JavaScript files

This method is simpler and does not require additional tools, but may have worse performance due to the browser having to download multiple files.

Download the following JavaScript file for the required library and place it in your project:
	
1. The Amazon Cognito Auth SDK for JavaScript, from `/dist/amazon-cognito-auth.min.js`

Optionally, to use other AWS services, include a build of the `AWS SDK for JavaScript`.

Include all of the files in your HTML page before calling any Amazon Cognito Auth SDK APIs:

```html
<script src="/path/to/amazon-cognito-auth.min.js"></script>
<!-- optional: only if you use other AWS services -->
<script src="/path/to/aws-sdk-2.6.10.js"></script>
```

### Using NPM and Webpack

The following is a quick setup guide with specific notes for using the Amazon Cognito Auth SDK for JavaScript with Webpack, but there are many more ways it can be used. See [the Webpack site](https://webpack.github.io/), and in particular the [configuration documentation](http://webpack.github.io/docs/configuration.html)

Note that webpack expects your source files to be structured as [CommonJS (Node.js-style) modules](https://webpack.github.io/docs/commonjs.html) (or [ECMAScript 2015 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) if you are using a transpiler such as [Babel](https://babeljs.io/).) If your project is not already using modules you may wish to use [Webpack's module shimming features](http://webpack.github.io/docs/shimming-modules.html) to ease migration.

* Install [Node.js](https://nodejs.org/en/) on your development machine (this will not be needed on your server.)
* In your project add a `package.json`, either use `npm init` or the minimal, which means your repository is private:

```json
{
"private" : true
}
```
*  Install the Amazon Cognito Auth SDK for JavaScript and the Webpack tool into your project with `npm` (the Node Package Manager, which is installed with Node.js):

```bash
> npm install --save-dev webpack json-loader
> npm install --save amazon-cognito-auth-js
```

* Create the configuration file for `webpack`, named `webpack.config.js`:

```js
module.exports = {
  // Example setup for your project:
  // The entry module that requires or imports the rest of your project.
  // Must start with `./`!
  entry: './src/entry',
  // Place output files in `./dist/my-app.js`
  output: {
    path: 'dist',
    filename: 'my-app.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
```
* Add the following into your `package.json`

```js
{
  "scripts": {
    "build": "webpack"
  }
}
```
* Build your application bundle with `npm run build`

### Configuration

The Amazon Cognito Auth SDK for JavaScript requires three configuration values from your AWS Account in order to access your Cognito User Pool:

* An User Pool App Client Id (required): e.g. `<TODO: add ClientId>` 
    * When creating the App, if the generate client secret box was **checked**, for /oauth2/token endpoint which gets the user's tokens, the client must pass its client_id and client_secret in the authorization header. For more info, please reference [here](http://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html).
* An App Web Domain (required): e.g. `<TODO: add App Web Domain>`
    * When you click the `Domain name` tab, you can create a domain name there and save it for record. 
* Scope Array (required): `['<TODO: your scope array here, try "phone", "email", ...>'],` e.g.`['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin']` (to get more info about scope, please reference ["scope" section of our doc](http://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html))
    * When you click the `App settings` tab, you can select the identity provider which you want to use on your App. 
    * In the `sign in and sign out URLs` tab, you can set the `Callback URLs` and `Sign out URLs`. (both are required)
    * Under the `OAuth2.0` tab, you can select the OAuth flows and scopes enabled for this app. (both are required)
* IdentityProvider (Optional): Pre-selected identity provider (this allows to automatically trigger social provider authentication flow).e.g. `Facebook`
* UserPoolId (Optional): e.g. `<TODO: add UserPoolId>` 
* AdvancedSecurityDataCollectionFlag (Optional): boolean flag indicating if the data collection is enabled to support cognito advanced security features. By default, this flag is set to true.

The [AWS Console for Cognito User Pools](https://console.aws.amazon.com/cognito/users/) can be used to get or create these values.

Note that the various errors returned by the service are valid JSON so one can access the different exception types (err.code) and status codes (err.statusCode).


### Usage

The usage examples below use the unqualified names for types in the Amazon Cognito Auth SDK for JavaScript. Remember to import or qualify access to any of these types:

```js
// When using loose Javascript files:
var CognitoAuth = AmazonCognitoIdentity.CognitoAuth;

// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require('amazon-cognito-auth-js');
var CognitoAuth = AmazonCognitoIdentity.CognitoAuth;

// ES Modules, e.g. transpiling with Babel
import {CognitoAuth} from 'amazon-cognito-auth-js';
```

**Use case 1.** Registering an auth with the application. You need to create a CognitoAuth object by providing a App client ID, a App web domain, a scope array, a sign-in redirect URL, and a sign-out redirect URL: (Identity Provider, UserPoolId and AdvancedSecurityDataCollectionFlag are optional values)

```js
/*
  TokenScopesArray
  Valid values are found under:
  AWS Console -> User Pools -> <Your user pool> -> App Integration -> App client settings
  Example values: ['profile', 'email', 'openid', 'aws.cognito.signin.user.admin', 'phone']

  RedirectUriSignOut 
  This value must match the value specified under:
  AWS Console -> User Pools -> <Your user pool> -> App Integration -> App client settings -> Sign out URL(s)
*/
var authData = {
	ClientId : '<TODO: add ClientId>', // Your client id here
	AppWebDomain : '<TODO: add App Web Domain>',
	TokenScopesArray : ['<TODO: add scope array>'], // e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
	RedirectUriSignIn : '<TODO: add redirect url when signed in>',
	RedirectUriSignOut : '<TODO: add redirect url when signed out>',
	IdentityProvider : '<TODO: add identity provider you want to specify>', // e.g. 'Facebook',
	UserPoolId : '<TODO: add UserPoolId>', // Your user pool id here
	AdvancedSecurityDataCollectionFlag : '<TODO: boolean value indicating whether you want to enable advanced security data collection>', // e.g. true
        Storage: '<TODO the storage object>' // OPTIONAL e.g. new CookieStorage(), to use the specified storage provided
};
var auth = new AmazonCognitoIdentity.CognitoAuth(authData);
```

Also you can provide onSuccess callback and onFailure callback:

```js
auth.userhandler = {
	onSuccess: function(result) {
		alert("Sign in success");
		showSignedIn(result);
	},
	onFailure: function(err) {
		alert("Error!");
	}
};
```
You can also set `state` parameter:

```js
auth.setState(<state parameter>);
```

**Use case 2.** Sign-in using `getSession()` API:

```js
auth.getSession();
```

For the cache tokens and scopes, use the `parseCognitoWebResponse(Response)` API, e.g. the response is the current window url:

```js
var curUrl = window.location.href;
auth.parseCognitoWebResponse(curUrl);
```
Typically, you can put this part of logic in the `onLoad()`, e.g.:

```js
function onLoad() {
	var auth = initCognitoSDK();
	var curUrl = window.location.href;
	auth.parseCognitoWebResponse(curUrl);
}
```

**Use case 3.** Sign-out using `signOut()`:

```js
auth.signOut();
```
**Important to know**

By default, the SDK uses implicit flow(token flow), if you want to enable authorization code grant flow, you need to call useCodeGrantFlow(). For example, please check our sample index.html, in that file, you need to uncomment "auth.useCodeGrantFlow()".  
Also, when you meet some problems using our SDK, please make sure you downloaded the lastest version directly from Github repo. 

### Change Log

**v1.2.4**

* To add newest /es and /lib folders.    

**v1.2.3**

* To add exporting cookieStorage in index.js. 

**v1.2.2**

* To update with dist/ build files from update of last version. 

**v1.2.1**

* To add Cookie storage and Storage as an option.    

**v1.2.0**

* To merge in fixing tokens being empty strings when refreshing the browser of a single page application.     


**v1.1.9**

* To sync with NPM version.  


**v1.1.8**

* Remove `parseCognitoWebResponse()` onFailure() callback to make sure sample APP works correctly. 


**v1.1.7**

* Merged in library files. 


**v1.1.6**

* Added support for avoiding a bug exists when sign in with Google or facebook and parse the web response. 


**v1.1.5**

* Added `parseCognitoWebResponse()` onFailure() callback and fixed the `CognitoAuth.getCurrentUser()` returning `undefined` when using implicit grant flow. 


**v1.1.4**

* Removed the dependency on the `CognitoIdentityServiceProvider` service from the AWS SDK for JavaScript. 


**v1.1.3**

* Updated doc and uploaded `es` folder.


**v1.1.2**

* Added `isUserSignedIn()` API method and support for developers to set state parameter. Also uploaded `lib` folder.      


**v1.1.1**

* Bug fix, username should be updated when caching tokens and scopes.

**v1.1.0**

* Added support for Cognito Advanced Security.  


**v1.0.1**

* With multiple bug fixes.


**v1.0.0**

* GA release. In this GA service launch, we made this feature generally available. 


**v0.9.0:** 

* Public beta release. Developer preview.
