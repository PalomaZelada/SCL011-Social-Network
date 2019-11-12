import { loginUser } from "../models/user.js";

export const templateLogin = ()=>{
    const containerLogin = document.createElement("div");

    const contentLogin = `<h1 id="welcomeMessage"> Iniciar Sección</div>
    <input id="getEmail" type="email" placeholder="Correo"/>
    <input id="getPassword" type="password" placeholder="Contraseña"/>
    <button id="button-login" type="button">Iniciar Sesión</button></h1>
    <h4 id="nav" class="nav-bar">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
        <button id="loginWithGoogle"><a href=""class="nav-link">Iniciar Sesión con Google</a></button>
        </li>
        <li class="nav-item">
        <button><a href="#/register" class="nav-link disabled">Crear Cuenta</a></button>
        </li>
      </ul>
    </div>
  </div>  
</h4>`;

containerLogin.innerHTML = contentLogin;
    document.getElementById("root").appendChild(containerLogin).innerHTML;

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
