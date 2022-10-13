function createContactPage() {
    const main = document.querySelector(".main");
    const contactDiv = document.createElement("div");
    contactDiv.classList.toggle("contact-div");
    main.appendChild(contactDiv);

    // create contact objects and add them to the contact page
    const contacts = createContacts();
    for (let i = 0; i < contacts.length; i++) {
        const person = document.createElement("div");
        person.classList.toggle("person");
        contactDiv.appendChild(person);

        const name = document.createElement("p");
        name.textContent = contacts[i].name;
        person.appendChild(name);

        const position = document.createElement("p");
        position.textContent = contacts[i].position;
        person.appendChild(position);

        const phone = document.createElement("p");
        phone.textContent = contacts[i].phoneNumber;
        person.appendChild(phone);
    }

}

function createContacts() {
    const contacts = [new Contact("John Smith", "Manager", "100-1000"),
                        new Contact("Martin Smith", "chef", "100-1001"),
                        new Contact("Amy Smith", "waitress", "100-1002")];
    return contacts;
}

class Contact {
    constructor(name, position, phoneNumber) {
        this.name = name;
        this.position = position;
        this.phoneNumber = phoneNumber;
    }
}

export{createContactPage};