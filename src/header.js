function addHeader() {
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.classList.toggle(".header");
    
    content.appendChild(header);
}

export {addHeader};