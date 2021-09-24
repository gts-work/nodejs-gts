const getContactControler = require("./getContactControler");
const getContactByIdControler = require("./getContactByIdControler");
const addContactByIdControler = require("./addContactByIdControler");
const putContactByIdControler = require("./putContactByIdControler");
const patchContactByIdControler = require("./patchContactByIdControler");
const deleteContactByIdControler = require("./deleteContactByIdControler");

module.exports = {
    getContactControler,
    getContactByIdControler,
    addContactByIdControler,
    putContactByIdControler,
    patchContactByIdControler,
    deleteContactByIdControler,
};
