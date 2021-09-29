const Contact = require("../../model/contacts/contactsModel");

const listContacts = async () => {
    const contacts = await Contact.find();
    return contacts;
};

module.exports = listContacts;
