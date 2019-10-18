//Crear cuenta
export const newAccount= (newEmail, newPassword) =>{
    
    firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("Error " + errorMessage);
    });
  }

//Iniciar sesion 
export const loginUser = (getEmail, getPassword)=>{
  
    firebase.auth().signInWithEmailAndPassword(getEmail, getPassword).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     window.alert("Error: "+ errorMessage)
     // ...
   });
 }
 
 //Iniciar sesion con google
export const googleLogin= ()=>{
    // if (!firebase.auth().currentUser){
    
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
  // }

