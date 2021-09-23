const fs = require("fs/promises");

const getRandomInt = require("../services/randomId");
const contacts = require("./contacts.json");

const listContacts = async () => contacts;

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const idx = await contacts.findIndex((item) => item.id === contactId);

    if (idx === -1) {
        return null;
    }

    return contacts[idx];
};

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

const updateDataContacts = async (contacts) => {
    await fs.writeFile(process.env.CONTACTS_PATH, JSON.stringify(contacts));
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    putContact,
    patchContact,
};
