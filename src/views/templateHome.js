import { googleLogin } from "../models/user.js";

 
export const templateHome = () =>{
    const containerHome = document.createElement("nav");

    const contentHome = `<h3 id="nav" class="nav-bar">
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
</h3>`;
containerHome.innerHTML = contentHome;
document.getElementById("root").appendChild(containerHome).innerHTML;

let btnGoogle = document.getElementById("loginWithGoogle");
btnGoogle.addEventListener('click', () =>{
   googleLogin();
})
let menubar = new menubar ({
    blur:true,
    overlay:true
});

    console.log("HOME");
    

return containerHome;
}





