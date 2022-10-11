import { addHeader } from "./header";
import {mainContent} from "./mainContent";
import {addFooter} from "./footer";
import { createHomePage } from "./homePage";


addHeader();
mainContent();
createHomePage();
const homeButton = document.querySelector("button");
homeButton.style.backgroundColor = "#e6e6e6";
homeButton.style.color = "#808080";


function buttonListener() {
    const buttons = document.querySelectorAll(".header button")
    .forEach(button => {
        button.addEventListener("click", setActiveTab);
    })
}

function setActiveTab(e) {
    let activeTab = e.target.value;
    e.target.style.backgroundColor = "#e6e6e6";
    e.target.style.color = "#808080";
    clearMain();
    
    switch(activeTab) {
        case "Home":
            createHomePage();
            break;      
    }
}

function clearMain() {
    const main = document.querySelector(".main");
    const content = document.querySelector(".main > div");
    main.removeChild(content);
}

buttonListener();
addFooter();