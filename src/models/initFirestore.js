export const addNewUser = () => { 
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


  export const addNewPost = () => { 
    let getPost = document.getElementById("newPost").value;

    var db = firebase.firestore();

    db.collection("Posts").add({
      newComment: getPost,

  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("newPost").value = '';
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

}
export const showAllPost = () => {
var db = firebase.firestore();

let showPost = document.getElementById("publishPost")
db.collection("Posts").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        
        console.log(`${doc.id} => ${doc.data().newComment}`);
        showPost.innerHTML += `
        <!--<p id="postId">${doc.id}</p>-->
        <textarea rows="10" cols="70" readonly>${doc.data().newComment}</textarea>
        <button id=deletePost>Borrar</button>
        <button id=editPost>Editar</button>
        `
    let getPostId = doc.id
    const deleteBtn = document.getElementById("deletePost");
    deleteBtn.addEventListener('click', () => {
    deletePost(getPostId);
    console.log("boton funciona")
})
    });
});

}
function deletePost (id){
    var db = firebase.firestore();

    db.collection("Posts").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

