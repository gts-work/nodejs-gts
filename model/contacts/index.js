const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const putContact = require("./putContact");
const patchContact = require("./patchContact");

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    putContact,
    patchContact,
};
