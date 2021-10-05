const contactsOperation = require("../../services/contacts");

const getContactsControler = async (req, res) => {
    const userId = req.user._id;

    const contacts = await contactsOperation.listContacts(userId);
    return res.json({ status: "success", message: contacts });
};

module.exports = getContactsControler;
