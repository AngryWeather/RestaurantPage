function createMenuPage() {
    const main = document.querySelector(".main");
    const menuDiv = document.createElement("div");
    menuDiv.classList.toggle(".menu-div");
    main.appendChild(menuDiv);
    menuDiv.appendChild(createTable());
}

function getMenuDiv() {
    return document.querySelector(".menu-div");
}

function createTable() {
    const menuDiv = getMenuDiv();
    const table = document.createElement("table");
    const row = document.createElement("tr");
    table.appendChild(row);

    const pizza = document.createElement("th");
    pizza.textContent = "PIZZA";
    row.appendChild(pizza);

    const price = document.createElement("th");
    price.textContent = "PRICE";
    row.appendChild(price);

    
    return table;
}

export {createMenuPage};