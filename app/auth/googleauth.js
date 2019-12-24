var queryString = require('querystringify');

function getGoogleLoginURL(){
  const stringifiedParams = queryString.stringify({
    client_id: "838217518906-a20tds5gkrjr21pl028djn3adfu7m2h3.apps.googleusercontent.com",
    redirect_uri: 'http://localhost:3000/auth/google/callback',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '), // space seperated string
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });
  
  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

  return googleLoginUrl;
}


{/* <script>
(function () {
  var auth2 = gapi.auth2.getAuthInstance();
  if (auth2.isSignedIn.get()) {
    var profile = auth2.currentUser.get().getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }
})();
</script> */}



// var google = require('googleapis');
// const OAuth2Client = google.auth.OAuth2;

// /*******************/
// /** CONFIGURATION **/
// /*******************/

// const googleConfig = {
//   clientId: "838217518906-a20tds5gkrjr21pl028djn3adfu7m2h3.apps.googleusercontent.com", // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
//   clientSecret: "CjkIvF1BaoKemmyrt0Qj0bBR", // e.g. _ASDFA%DFASDFASDFASD#FAD-
//   redirect: "http://localhost:3000/auth/google/callback", // this must match your google api settings
// };

// const defaultScope = [
//   'https://www.googleapis.com/auth/plus.me',
//   'https://www.googleapis.com/auth/userinfo.email',
// ];

// /*************/
// /** HELPERS **/
// /*************/

// function createConnection() {
//   return new OAuth2Client(
//     googleConfig.clientId,
//     googleConfig.clientSecret,
//     googleConfig.redirect
//   );
// }

// function getConnectionUrl(auth) {
//   return auth.generateAuthUrl({
//     access_type: 'offline',
//     prompt: 'consent',
//     scope: defaultScope
//   });
// }

// function getGooglePlusApi(auth) {
//   return google.plus({ version: 'v1', auth });
// }

// /**********/
// /** MAIN **/
// /**********/

// /**
//  * Part 1: Create a Google URL and send to the client to log in the user.
//  */
// function urlGoogle() {
//   const auth = createConnection();
//   const url = getConnectionUrl(auth);
//   return url;
// }

// /**
//  * Part 2: Take the "code" parameter which Google gives us once when the user logs in, then get the user's email and id.
//  */
// async function getGoogleAccountFromCode(code) {
//   const data = await auth.getToken(code);
//   const tokens = data.tokens;
//   const auth = createConnection();
//   auth.setCredentials(tokens);
//   const plus = getGooglePlusApi(auth);
//   const me = await plus.people.get({ userId: 'me' });
//   const userGoogleId = me.data.id;
//   const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
//   return {
//     id: userGoogleId,
//     email: userGoogleEmail,
//     tokens: tokens,
//   };
// }

module.exports = {
  googleUrl: getGoogleLoginURL
};