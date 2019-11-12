import { newAccount } from "../models/user.js";
import { addNewUser } from "../models/initFirestore.js";

export const templateRegister = ()=>{
    const containerRegister = document.createElement("div");

    const contentRegister = `<h2 id="name" type="text" placeholder="Nombre"/>
    <input id="newEmail" type="email" placeholder="Correo"/>
    <input id="newPassword" type="password" placeholder="Contraseña"/>
    <button id="button-create" type="button">Crear Cuenta</button>
    <button id="button-forget" type="button>olvide clave</button>
`   

containerRegister.innerHTML = contentRegister;
    document.getElementById("root").appendChild(containerRegister).innerHTML;

    let btnCreate = document.getElementById("button-create");
    btnCreate.addEventListener('click', () => {
        let newEmail= document.getElementById("newEmail").value;
        let newPassword= document.getElementById("newPassword").value;
        newAccount(newEmail, newPassword);  
        addNewUser();
        console.log(name, newEmail, newPassword);

    } )         
    return containerRegister;
} 
