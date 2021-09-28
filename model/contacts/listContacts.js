const Contact = require("./contactsModel");

const listContacts = async () => {
    const contacts = await Contact.find();
    console.log("listContacts ~ contacts: ", contacts);
    return contacts;
};

module.exports = listContacts;
