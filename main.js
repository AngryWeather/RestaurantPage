(()=>{"use strict";const e=document.querySelector("#content"),t=document.querySelector("#content");function n(e){let t=e.target;alert(t)}!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.toggle("header"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Family Restaurant",t.appendChild(n);for(let e=0;e<3;e++){const e=document.createElement("button");t.appendChild(e)}const o=document.querySelector(".header button:nth-of-type(1)");o.value="Home",o.textContent="Home";const c=document.querySelector(".header button:nth-of-type(2)");c.value="Menu",c.textContent="Menu";const u=document.querySelector(".header button:nth-of-type(3)");u.value="Contact",u.textContent="Contact"}(),function(){const t=document.createElement("div");t.classList.toggle("main"),e.appendChild(t)}(),document.querySelectorAll(".header button").forEach((e=>{e.addEventListener("click",n)})),function(){const e=document.createElement("footer");e.classList.toggle("footer"),t.appendChild(e)}()})();