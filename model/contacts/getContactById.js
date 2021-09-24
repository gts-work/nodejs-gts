const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const idx = await contacts.findIndex((item) => item.id === contactId);

    if (idx === -1) {
        return null;
    }

    return contacts[idx];
};

module.exports = getContactById;
