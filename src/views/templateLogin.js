import { loginUser } from "../models/user.js";

export const templateLogin = ()=>{
    const containerLogin = document.createElement("div");

    const contentLogin = `<input id="getEmail" type="email" placeholder="Correo"/>
    <input id="getPassword" type="password" placeholder="Contraseña"/>
    <button id="button-login" type="button">Iniciar Sesión</button>
    <a href="#/forgotPassword">Olvide mi contraseña </a>
`

containerLogin.innerHTML = contentLogin;
    document.getElementById("root").appendChild(containerLogin).innerHTML;
    document.getElementById("root2").innerHTML = '';

    let btnLogin = document.getElementById("button-login");
    btnLogin.addEventListener('click', () => {
        let getEmail= document.getElementById("getEmail").value;
        let getPassword= document.getElementById("getPassword").value;
        loginUser(getEmail, getPassword);  
        console.log(getEmail, getPassword);

    } )        
    
    let btnGoogle = document.getElementById("loginWithGoogle");
btnGoogle.addEventListener('click', () =>{
   googleLogin();
})
    return containerLogin;
} 
