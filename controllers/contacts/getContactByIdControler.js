const contactsOperation = require("../../model/contacts");

const getContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);
    const contactItem = await contactsOperation.getContactById(contactId);

    if (!contactItem) {
        res.json(400, helpersError.badRequestError("Contact does not exists"));
    }
    res.json(200, { status: "success", message: contactItem });
};

module.exports = getContactByIdControler;
