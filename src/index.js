import { addHeader } from "./header";
import {mainContent} from "./mainContent";
import {addFooter} from "./footer";


const tabs = ["home", "menu", "contact"];
let activeTab = tabs[0];

addHeader();
mainContent();
addFooter();