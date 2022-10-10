const content = document.querySelector("#content");

function addFooter() {
    const footer = document.createElement("footer");
    footer.classList.toggle("footer");
    content.appendChild(footer);
}

export{addFooter};