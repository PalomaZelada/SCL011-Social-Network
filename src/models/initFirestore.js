import { printPost } from "../views/templateHome.js"
//Crear post
  export const addNewPost = () => { 
    let getPost = document.getElementById("newPost").value;

    var db = firebase.firestore();

    db.collection("Posts").add({
        userId: firebase.auth().currentUser.email,    
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
//Mostrar posts
export const showAllPost = () => {
var db = firebase.firestore();

db.collection("Posts").onSnapshot((querySnapshot) => {
    document.getElementById("root2").innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().newComment}`);
        printPost(doc);
    
    console.log("boton funciona")
})
    });
};

export function deletePost (id){
    var db = firebase.firestore();
    db.collection("Posts").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

