function createContactPage() {
    const main = document.querySelector(".main");
    const contactDiv = document.createElement("div");
    contactDiv.classList.toggle("contact-div");
    main.appendChild(contactDiv);

    // create contact objects and add them to the contact page
    const contacts = createContacts();
    for (let contact in contacts) {
        const contactDiv = document.createElement("div");
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