import { addNewPost, showAllPost, deletePost } from "../models/initFirestore.js"
import { logOut } from "../models/user.js"

export const templateHome = () =>{
    const containerHome = document.createElement("div");

    const contentHome = `<h3>HOME</h3>
    <textarea id="newPost" rows="10" cols="70" placeholder="Deja tu opinion"></textarea>
    <button id="publish"> Publicar </button>    
    <button id="logOut">Cerrar Sesion</button>
    <div id="publishPost"></div>
    `
    showAllPost();
    
    containerHome.innerHTML = contentHome;
    document.getElementById("root").appendChild(containerHome).innerHTML;
    document.getElementById("loginButtons").style.display ="none";


//Boton para cerrar sesion    

    const logOutBtn = document.getElementById("logOut");
    logOutBtn.addEventListener('click', () => {
        logOut();
    });


//Boton para publicar
    const publishBtn = document.getElementById("publish");
    publishBtn.addEventListener('click',() => {
        addNewPost();

    });

    return containerHome;
}

//Imprimir post
export const printPost = (doc) => {
    document.getElementById("root2").innerHTML += `
     <div id="allPosts">${doc.data().newComment}</div>
     <p id=emailPost>${doc.data().userId}</p>
     <button id=editPost>Editar</button>
     <button id=deletePost${doc.id}>Borrar</button>
         `
const deleteBtn = document.getElementById("deletePost"+doc.id);
deleteBtn.addEventListener('click', () => {
    deletePost(doc.id);
    }); 
}
