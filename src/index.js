import { addHeader } from "./header";
import {mainContent} from "./mainContent";
import {addFooter} from "./footer";
import { createHomePage } from "./homePage";
import {createMenuPage} from "./menuPage";


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
    resetTabColor();
    let activeTab = e.target.value;
    e.target.style.backgroundColor = "#e6e6e6";
    e.target.style.color = "#808080";
    clearMain();
    
    switch(activeTab) {
        case "Home":
            createHomePage();
            break;  
        case "Menu":
            createMenuPage();
            break;    
    }
}

function resetTabColor() {
    let tabs = document.querySelectorAll(".button-container > button");
    tabs.forEach((tab) => {
        tab.style.backgroundColor = "#808080";
        tab.style.color = "#e6e6e6";
    });
}

function clearMain() {
    const main = document.querySelector(".main");
    const content = document.querySelector(".main > div");
    main.removeChild(content);
}

buttonListener();
addFooter();