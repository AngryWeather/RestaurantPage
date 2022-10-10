function createHomePage() {
    const main = document.querySelector(".main");
    const homeDiv = document.createElement("div");
    homeDiv.classList.toggle("home-div");
    main.appendChild(homeDiv);
}



export{createHomePage};