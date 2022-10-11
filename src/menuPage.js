function createMenuPage() {
    const main = document.querySelector(".main");
    const menuDiv = document.createElement("div");
    menuDiv.classList.toggle(".menu-div");
    main.appendChild(menuDiv);
}

export {createMenuPage};