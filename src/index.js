import { addHeader } from "./header";
import {mainContent} from "./mainContent";
import {addFooter} from "./footer";


const tabs = ["home", "menu", "contant"];
let activeTab = tabs[0];

addHeader();
mainContent();
addFooter();