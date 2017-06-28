# Sample for Amazon Cognito Auth SDK for JavaScript
This web page is a sample of using our SDK. It will initialize a CognitoAuth object and initiate the sign up / sign in flow. You will need to substitute your own Cognito User Pool configuration values to make it work.  

# Steps to try this sample

To add our SDK, you need to include the following two files:

```
<script src="dist/aws-cognito-sdk.js"></script>
<script src="dist/amazon-cognito-auth.min.js"></script>
```

And make sure the "dist" folder is located in the sample directory. 
Inside the function "initCognitoSDK()",
add your app client ID, app web domain, scope array, the redirect url when signed in and the redirect url when signed out. 

And also define your onSuccess and onFailure callbacks in this function. 

The default response_type is token. 

After you added all the values mentioned above, you can open the html page. And you can try the sign-up, sign-in and sign-out flows.

If you want to set the response_type as code, you can simply uncomment line 181 in this html file source code and refresh the page. Then you can try all the workflows. 
