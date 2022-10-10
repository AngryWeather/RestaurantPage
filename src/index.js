import { addHeader } from "./header";
import {mainContent} from "./mainContent";
import {addFooter} from "./footer";
import { createHomePage } from "./homePage";


const tabs = ["home", "menu", "contact"];
// let activeTab = tabs[0];

addHeader();
mainContent();

function buttonListener() {
    const buttons = document.querySelectorAll(".header button")
    .forEach(button => {
        button.addEventListener("click", setActiveTab);
    })
}

function setActiveTab(e) {
    let activeTab = e.target.value;
    if (activeTab === "Home") {
        alert(true);
        createHomePage();
    }
}

buttonListener();
addFooter();