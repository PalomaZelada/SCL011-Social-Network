import {initRouter} from "./route.js"

const init = () => {
    initRouter();
};
 
 window.addEventListener('load', init);


//  firebase.initializeApp({
//     apiKey: "AIzaSyBY2inzo2Vof6LX5BAqryWZcQDd41LIdak",
//     authDomain: "feministpwr-d296b.firebaseapp.com",
//     projectId: "feministpwr-d296b",
//   });
  
//   var db = firebase.firestore();

//   db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });