const Contact = require("../../model/contacts/contactsModel");

const listContacts = async (owner) => {
    const contacts = await Contact.find({ owner }).select({ __v: 0 });
    return contacts;
};

module.exports = listContacts;
