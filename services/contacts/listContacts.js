const Contact = require("../../model/contacts/contactsModel");

const listContacts = async (owner) => {
    const contacts = await Contact.find({ owner });
    return contacts;
};

module.exports = listContacts;
