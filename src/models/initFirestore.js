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
  });
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
}


  export const addNewPost = ()=> { 
    let getPost = document.getElementById("newPost").value;

    var db = firebase.firestore();

    db.collection("Posts").add({
      newComment: getPost,

  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

}
export const showAllPost = () =>{
var db = firebase.firestore();

let showPost = document.getElementById("publishPost")
db.collection("Posts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().newComment}`);
        showPost.innerHTML += `
        <div>${doc.data().newComment}</div>
        `
    });
}); 
}