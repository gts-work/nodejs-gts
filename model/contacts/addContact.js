const listContacts = require("./listContacts");
const getRandomInt = require("../../services/randomId");

const addContact = async (body) => {
    const contacts = await listContacts();
    const { name, email, phone } = body;
    const newContact = {
        name,
        email,
        phone,
        id: getRandomInt((min = contacts.length)),
    };
    contacts.push(newContact);
    await updateDataContacts(contacts);

    return newContact;
};

module.exports = addContact;
