//Crear cuenta
export const newAccount= (newEmail, newPassword) =>{
    
    firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
    .then(function(){
      sendVerification()
    })
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

    .catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     window.alert("Error: "+ errorMessage)
     // ...
   });
 }

 //Enviar correo de verificacion
 const sendVerification = () =>{
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    console.log("enviando correo")
  }).catch(function(error) {
    // An error happened.
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

 //Olvide mi contraseña
export function sendPassword (emailPassword){
var auth = firebase.auth();
var emailAddress = emailPassword;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  console.log("correo enviado")
}).catch(function(error) {
  // An error happened.
});

}


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