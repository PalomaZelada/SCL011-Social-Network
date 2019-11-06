import { addNewPost } from "../models/initFirestore.js"
import { showAllPost } from "../models/initFirestore.js"

export const templateHome = () =>{
    const containerHome = document.createElement("div");

    const contentHome = `<h3>HOME</h3>
    <textarea id="newPost" rows="10" cols="70" placeholder="Deja tu opinion"></textarea>
    <button id="publish"> Publicar </button>
    <div id="publishPost"></div>
    `
    
    containerHome.innerHTML = contentHome;
    document.getElementById("root").appendChild(containerHome).innerHTML;

    const publishBtn = document.getElementById("publish");
    publishBtn.addEventListener('click',() => {
        addNewPost();
        showAllPost();
    })


    return containerHome;
}