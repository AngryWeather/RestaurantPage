const content = document.querySelector("#content");

function mainContent() {
    const main = document.createElement("div")
    main.classList.toggle("main");
    content.appendChild(main);
}

export{mainContent};