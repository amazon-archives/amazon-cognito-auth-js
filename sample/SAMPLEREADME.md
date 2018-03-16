# Sample for Amazon Cognito Auth SDK for JavaScript
This web page is a sample of using our SDK. It will initialize a CognitoAuth object and initiate the sign up / sign in flow. You will need to substitute your own Cognito User Pool configuration values to make it work.  

# Steps to try this sample

To add our SDK, you need to include the following two files:

```
<script src="dist/amazon-cognito-auth.min.js"></script>
```

And make sure the "dist" folder is located in the sample directory. 
Inside the function "initCognitoSDK()",
add your app client ID, app web domain, scope array, the redirect url when signed in and the redirect url when signed out.

And you can also add the optional value "IdentityProvider" to automatically trigger social provider authentication flow.

You can add the optional values "UserPoolId" and "AdvancedSecurityDataCollectionFlag" to enable advanced security feature. 
Also, to enable the advanced security feature, you need to include one JS source file(e.g. https://amazon-cognito-assets.us-east-1.amazoncognito.com/amazon-cognito-advanced-security-data.min.js) for collecting data. Please see our index.html source code for reference. 

And also define your onSuccess and onFailure callbacks in this function. 

The default response_type is token. To try the token flow, make sure you enabled "Implicit grant" in your app client settings. 

After you added all the values mentioned above, you can open the html page. And you can try the sign-up, sign-in and sign-out flows.

If you want to set the response_type as code, you can simply uncomment 
```
auth.useCodeGrantFlow();
```
in this html file source code (make sure you also enabled "Authorization code grant" in your app client settings) and refresh the page. Then you can try the code grant flow. 
