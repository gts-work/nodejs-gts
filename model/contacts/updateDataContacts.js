const fs = require("fs/promises");

const updateDataContacts = async (contacts) => {
    await fs.writeFile(process.env.CONTACTS_PATH, JSON.stringify(contacts));
};

module.exports = updateDataContacts;
