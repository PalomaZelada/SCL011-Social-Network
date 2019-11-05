export const addNewUser = ()=> { 
    let getName = document.getElementById("name").value;
    let getEmail = document.getElementById("newEmail").value;
    let getPassword = document.getElementById("newPassword").value;
    var db = firebase.firestore();

    db.collection("users").add({
      userName: getName,
      userEmail: getEmail,
      userPassword: getPassword,
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });}


  