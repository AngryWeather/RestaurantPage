(()=>{"use strict";const e=document.querySelector("#content"),t=document.querySelector("#content");function n(e){let t=e.target.value;alert(t)}!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.toggle("header"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Family Restaurant",t.appendChild(n);const o=document.createElement("div");o.classList.toggle(".buttonContainer"),t.appendChild(o);for(let e=0;e<3;e++){const e=document.createElement("button");o.appendChild(e)}const c=document.querySelector(".header button:nth-of-type(1)");c.value="Home",c.textContent="Home";const l=document.querySelector(".header button:nth-of-type(2)");l.value="Menu",l.textContent="Menu";const u=document.querySelector(".header button:nth-of-type(3)");u.value="Contact",u.textContent="Contact"}(),function(){const t=document.createElement("div");t.classList.toggle("main"),e.appendChild(t)}(),document.querySelectorAll(".header button").forEach((e=>{e.addEventListener("click",n)})),function(){const e=document.createElement("footer");e.classList.toggle("footer"),t.appendChild(e)}()})();