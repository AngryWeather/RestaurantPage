function createMenuPage() {
    const main = document.querySelector(".main");
    const menuDiv = document.createElement("div");
    menuDiv.classList.toggle(".menu-div");
    main.appendChild(menuDiv);
    menuDiv.appendChild(createTable());
}

function getMenuDiv() {
    return document.querySelector(".menu-div");
}

function createTable() {
    const menuDiv = getMenuDiv();
    const table = document.createElement("table");
    return table;
}

export {createMenuPage};