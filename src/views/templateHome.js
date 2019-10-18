
export const templateHome = () =>{
    const containerHome = document.createElement("div");

    const contentHome = `<h3>HOME</h3>`;
    console.log("HOME");
    
    containerHome.innerHTML = contentHome;
    document.getElementById("root").appendChild(containerHome).innerHTML;
}