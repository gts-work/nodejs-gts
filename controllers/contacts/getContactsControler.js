const { listContacts } = require("../../services/contacts");

const getContactsControler = async (req, res) => {
    const userId = req.user._id;
    const { favorite = -1 } = req.query;

    const contacts = await listContacts(userId, favorite);
    return res.json({ status: "success", message: contacts });
};

module.exports = getContactsControler;
