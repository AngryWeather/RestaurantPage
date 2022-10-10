function addHeader() {
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.classList.toggle("header");
    
    content.appendChild(header);
 
    const headerText = document.createElement("h1");
    headerText.textContent = "Family Restaurant";
    header.appendChild(headerText);

    for (let i = 0; i < 3; i++) {
        const button = document.createElement("button");
        header.appendChild(button);
    }

    const homeButton = document.querySelector(".header button:nth-of-type(1)");
    homeButton.value = "Home";
    homeButton.textContent = "Home";

    const menuButton = document.querySelector(".header button:nth-of-type(2)");
    menuButton.value = "Menu";
    menuButton.textContent = "Menu";

    const contactButton = document.querySelector(".header button:nth-of-type(3)");
    contactButton.value = "Contact";
    contactButton.textContent = "Contact";
}


export {addHeader};