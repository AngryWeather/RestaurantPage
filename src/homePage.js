function createHomePage() {
    const main = document.querySelector(".main");
    const homeDiv = document.createElement("div");
    homeDiv.classList.toggle("home-div");
    main.appendChild(homeDiv);

    // orderNow section
    const orderDiv = document.createElement("div");
    orderDiv.classList.toggle("order-div");
    homeDiv.appendChild(orderDiv);
    const orderNow = document.createElement("h2");
    orderNow.textContent = "Order NOW";
    orderDiv.appendChild(orderNow);
    const divLine = document.createElement("div");
    divLine.classList.toggle("div-line");
    orderDiv.appendChild(divLine);
    const orderParagraph = document.createElement("p");
    orderParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam dolore at repellendus unde quisquam, necessitatibus voluptatum doloribus sapiente, cum temporibus ducimus! Eveniet recusandae placeat qui odit quis id quasi?";
    orderDiv.appendChild(orderParagraph);
}

export{createHomePage};