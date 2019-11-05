import { googleLogin } from "../models/user.js";

export const templateGoogle = () => {
    const containerGoogle = document.createElement("div");

    // const contentGoogle = `<button id="googleBtn">Inicia Sesión con Google</button>`;
    // containerGoogle.innerHTML = contentGoogle;
    // document.getElementById("root").appendChild(containerGoogle).innerHTML;

    let btnGoogle = document.getElementById("loginWithGoogle");
    btnGoogle.addEventListener('click', () =>{
        googleLogin();
    })
return containerGoogle;
}