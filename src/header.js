function addHeader() {
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.classList.toggle("header");
    
    content.appendChild(header);
 
    const headerText = document.createElement("h1");
    headerText.textContent = "Family Restaurant";
    header.appendChild(headerText);
}

export {addHeader};