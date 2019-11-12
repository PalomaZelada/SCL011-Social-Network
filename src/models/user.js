//Crear cuenta
export const newAccount= (newEmail, newPassword) =>{
    
    firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
    // .then(function(){
    //   templateHome()
    // })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("Error " + errorMessage);
    });
  }

//Iniciar sesion 
export const loginUser = (getEmail, getPassword)=>{
  
    firebase.auth().signInWithEmailAndPassword(getEmail, getPassword)
    // .then(function(){
    //   templateHome()
    //})
    .catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     window.alert("Error: "+ errorMessage)
     // ...
   });
 }
 
 //Iniciar sesion con google
export const googleLogin= ()=>{
  //  if (!firebase.auth().currentUser){
    
      var provider = new firebase.auth.GoogleAuthProvider();
  
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
 //}

//Cerrar sesion
export const logOut = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Sesion cerrada")
  }).catch(function(error) {
    // An error happened.
    console.log("Error")
  });
  
}

//Observador
const observerMode = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location.hash = "#/home";
            console.log("Usuario activo")
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      //console.log(displayName, email, uid)
      // ...
    } else {
      // User is signed out.
      // ...
      window.location.hash = "#/login";
            console.log("No hay usuario activo");
    }
  });
}
observerMode()