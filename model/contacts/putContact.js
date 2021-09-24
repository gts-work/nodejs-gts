const listContacts = require("./listContacts");
const getContactById = require("./getContactById");

const putContact = async (contactId, body) => {
    const contacts = await listContacts();
    const { name, email, phone } = body;

    contacts.forEach((contact) => {
        if (contact.id === contactId) {
            contact.name = name;
            contact.email = email;
            contact.phone = phone;
        }
    });

    return getContactById(contactId);
};

module.exports = putContact;
