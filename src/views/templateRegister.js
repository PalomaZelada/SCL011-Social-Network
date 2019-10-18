import { newAccount } from "../models/user.js";

export const templateRegister = ()=>{
    const containerRegister = document.createElement("div");

    const contentRegister = `<input id="name" type="text" placeholder="Nombre"/>
    <input id="newEmail" type="email" placeholder="Correo"/>
    <input id="newPassword" type="password" placeholder="Contraseña"/>
    <button id="button-create" type="button">Crear Cuenta</button>
`
containerRegister.innerHTML = contentRegister;
    document.getElementById("root").appendChild(containerRegister).innerHTML;

    let btnCreate = document.getElementById("button-create");
    btnCreate.addEventListener('click', () => {
        let newEmail= document.getElementById("newEmail").value;
        let newPassword= document.getElementById("newPassword").value;
        newAccount(newEmail, newPassword);  
        console.log(name, newEmail, newPassword);

    } )         
    return containerRegister;
} 
