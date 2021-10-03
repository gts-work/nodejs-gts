const contactsOperation = require("../../services/contacts");

const getContactsControler = async (req, res) => {
    console.log("getContactsControler ~ getContactsControler");

    const contacts = await contactsOperation.listContacts();
    return res.json({ status: "success", message: contacts });
};

module.exports = getContactsControler;
