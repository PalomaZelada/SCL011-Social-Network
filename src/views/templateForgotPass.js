import { sendPassword } from "../models/user.js";

export const templateForgotPass = ()=>{
    const containerForgotPass = document.createElement("div");

    const contentForgotPass = `<h3>Olvidaste tu contraseña?</h3>
    <p>Ingresa tu email a continuacion para recuperar tu contraseña</p>
    <input id="forgotPass" type="email" placeholder="Correo"/>
    <button id="button-forgot" type="button">Enviar</button>
`
containerForgotPass.innerHTML = contentForgotPass;
    document.getElementById("root").appendChild(containerForgotPass).innerHTML;

    let btnForgotPass = document.getElementById("button-forgot");
    btnForgotPass.addEventListener('click', () => {
        let forgotPass= document.getElementById("forgotPass").value;
        sendPassword(forgotPass);

    } )         
    return containerForgotPass;
} 