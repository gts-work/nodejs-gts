const Contact = require("../../model/contacts/contactsModel");

const addContact = async (body, owner) => {
    const { name, email, phone } = body;
    const contact = new Contact({ name, email, phone, owner });
    await contact.save();

    return contact;
};

module.exports = addContact;
