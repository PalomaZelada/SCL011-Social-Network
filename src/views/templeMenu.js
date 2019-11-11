import { newMenu } from "../models/user.js";

export const templateNav = ()=>{
    const contentMenu = document.createElement("nav");

    const contntMenu = `<h3 id="nav">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

`   

contentMenu.innerHTML = contntMenu;
    document.getElementById("nav").appendChild(contentMenu).innerHTML;

    let btnCreate = document.getElementById("button-create");
    btnCreate.addEventListener('click', () => {
        let newPass= document.getElementById("newPass").value;
        let newInitio= document.getElementById("newInitio").value;
        newMenu(newPass, newInitio);  
        console.log( newPass, newInitio);

    } )         
    return contentMenu;
} 

const HambMenu = headerDiv.querySelector('#hamb-menu');
const showHamb = headerDiv.querySelector('#show-hamb');
let modoMenu = 0;

HambMenu.addEventListener('click', () => {
  if (modoMenu === 0) {
    showHamb.classList.add('block');
    showHamb.classList.remove('hide');
    modoMenu = 1;
  } else {
    showHamb.classList.add('hide');
    showHamb.classList.remove('block');
    modoMenu = 0;
  }
});
return headerDiv;
};
