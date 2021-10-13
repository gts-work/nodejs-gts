const { getContactById } = require("../../services/contacts");

const getContactByIdControler = async (req, res) => {
    const contactItem = await getContactById(
        req.params.contactId,
        req.user._id
    );

    return res.json({ status: "success", message: contactItem });
};

module.exports = getContactByIdControler;
