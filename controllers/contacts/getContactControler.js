const contactsOperation = require("../../services/contacts");

const getContactControler = async (req, res) => {
    const contacts = await contactsOperation.listContacts();
    return res.json({ status: "success", message: contacts });
};

module.exports = getContactControler;
