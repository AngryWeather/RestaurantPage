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

    const orderParagraphTwo = document.createElement("p");
    orderParagraphTwo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit laboriosam ut saepe, repellat explicabo, fugit architecto iste dolores vel earum illum, delectus quidem quaerat soluta. Saepe eveniet nostrum illo?";
    orderDiv.appendChild(orderParagraphTwo);
    
    const divLineTwo = document.createElement("div");
    divLineTwo.classList.toggle("div-line");
    orderDiv.appendChild(divLineTwo);

    // order button
    const orderButton = document.createElement("button");
    orderButton.textContent = "Order";  
    orderDiv.appendChild(orderButton);

    ingredients();
}

function ingredients() {
    const homeDiv = document.querySelector(".home-div");
    const ingredientsDiv = document.createElement("div");
    ingredientsDiv.classList.toggle("ingredients-div");
    homeDiv.appendChild(ingredientsDiv);

    const ingredientsHeading = document.createElement("h2");
    ingredientsHeading.textContent = "Healthy Ingredients";
    ingredientsDiv.appendChild(ingredientsHeading);

    const divLine = document.createElement("div");
    divLine.classList.toggle("div-line");
    ingredientsDiv.appendChild(divLine);

    const orderParagraph = document.createElement("p");
    orderParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam dolore at repellendus unde quisquam, necessitatibus voluptatum doloribus sapiente, cum temporibus ducimus! Eveniet recusandae placeat qui odit quis id quasi?";
    ingredientsDiv.appendChild(orderParagraph);

    const orderParagraphTwo = document.createElement("p");
    orderParagraphTwo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit laboriosam ut saepe, repellat explicabo, fugit architecto iste dolores vel earum illum, delectus quidem quaerat soluta. Saepe eveniet nostrum illo?";
    ingredientsDiv.appendChild(orderParagraphTwo);
}

export{createHomePage};