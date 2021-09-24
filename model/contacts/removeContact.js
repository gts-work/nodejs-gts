const listContacts = require("./listContacts");
const updateDataContacts = require("./updateDataContacts");

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = await contacts.findIndex((item) => item.id === contactId);

    if (idx === -1) {
        return null;
    }

    contacts.splice(idx, 1);
    updateDataContacts(contacts);

    return true;
};

module.exports = removeContact;
