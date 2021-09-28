const connectMongo = require("./contactsConnection");
const Contact = require("./contactsModel");
const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const putContact = require("./putContact");
const patchContact = require("./patchContact");

module.exports = {
    connectMongo,
    Contact,
    listContacts,
    getContactById,
    removeContact,
    addContact,
    putContact,
    patchContact,
};
