//Initialize Firebase
var config = {
    apiKey: "AIzaSyBHk95-lubVI3oVjkYiWihfYzcL3e5eX8g",
    authDomain: "bc-project1.firebaseapp.com",
    databaseURL: "https://bc-project1.firebaseio.com",
    projectId: "bc-project1",
    storageBucket: "bc-project1.appspot.com",
    messagingSenderId: "947495581665"
  };

  firebase.initializeApp(config);

  var uiConfig = {
    signInSuccessUrl: 'home.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

  $("#btnLogout").on("click", function(){
      firebase.auth().signOut();
  })

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log("Welcome"+user.displayName)
    } else{
        console.log("Not Logged in")
    }
});