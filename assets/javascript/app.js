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

// //   Add login event
// $("#btnLogin").on("click", function(){
//     // Get email and password
//     var email = $("#txtEmail").val().trim();
//     var pass = $("#txtPassword").val().trim();
//     var auth = firebase.auth();
//     //Sign In
//     var promise = auth.signInWithEmailAndPassword(email, pass);
//     console.log("pressed")
//     promise.catch(e => console.log(e.message));
// })

// $("#btnSignUp").on("click", function(){
//     // Get email and password
//     var email = $("#txtEmail").val().trim();
//     var pass = $("#txtPassword").val().trim();
//     var auth = firebase.auth();
//     //Sign In
//     var promise = auth.createUserWithEmailAndPassword(email, pass);
//     console.log("pressed")
//     promise.catch(e => console.log(e.message));
//     auth.createUserWithEmailAndPassword(email, pass);
// })
// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        location.href = "home.html";
        console.log("Welcome"+user.displayName)
    } else{
        console.log("Not Logged in")
    }
});