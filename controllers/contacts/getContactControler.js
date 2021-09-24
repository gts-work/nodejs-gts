const contactsOperation = require("../../model/contacts");

const getContactControler = async (req, res) => {
    const contacts = await contactsOperation.listContacts();
    return res.json(200, { status: "success", message: contacts });
};

module.exports = getContactControler;
