const getContactsControler = require("./getContactsControler");
const getContactByIdControler = require("./getContactByIdControler");
const addContactByIdControler = require("./addContactByIdControler");
const putContactByIdControler = require("./putContactByIdControler");
const patchContactByIdControler = require("./patchContactByIdControler");
const deleteContactByIdControler = require("./deleteContactByIdControler");

module.exports = {
    getContactsControler,
    getContactByIdControler,
    addContactByIdControler,
    putContactByIdControler,
    patchContactByIdControler,
    deleteContactByIdControler,
};
