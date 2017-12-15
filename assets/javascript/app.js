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
    signInSuccessUrl: 'profile.html',
    signInOptions: [
        //Google profile auth 
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

$("#btnLogout").on("click", function () {
    firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        console.log("Welcome " + firebaseUser.displayName)
    } else {
        console.log("User not Logged in")
    }
});