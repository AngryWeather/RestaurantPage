import { addHeader } from "./header";
import {mainContent} from "./mainContent";
import {addFooter} from "./footer";
import { createHomePage } from "./homePage";


// const tabs = ["home", "menu", "contact"];
// let activeTab = tabs[0];

addHeader();
mainContent();
createHomePage();

function buttonListener() {
    const buttons = document.querySelectorAll(".header button")
    .forEach(button => {
        button.addEventListener("click", setActiveTab);
    })
}

function setActiveTab(e) {
    let activeTab = e.target.value;
    clearMain();
    if (activeTab === "Home") {
        createHomePage();
    }
}

function clearMain() {
    const main = document.querySelector(".main");
    const content = document.querySelector(".main > div");
    main.removeChild(content);
}

buttonListener();
addFooter();