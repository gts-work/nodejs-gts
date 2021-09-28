const listContacts = require("./listContacts");
const getContactById = require("./getContactById");

const patchContact = async (contactId, body) => {
    const contacts = await listContacts();
    const { name, email, phone } = body;

    contacts.forEach((contact) => {
        if (contact.id === contactId) {
            if (name) {
                contact.name = name;
            }
            if (email) {
                contact.email = email;
            }
            if (phone) {
                contact.phone = phone;
            }
        }
    });

    return getContactById(contactId);
};

module.exports = patchContact;
