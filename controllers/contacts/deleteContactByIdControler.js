const contactsOperation = require("../../model/contacts");
const helpersError = require("../../helpers/responseData");

const deleteContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);
    const delContact = await contactsOperation.removeContact(contactId);

    if (!delContact) {
        res.json(400, helpersError.badRequestError("Contact not deleted"));
    }

    res.json(204, { status: "success", message: "deleted comtact" });
};

module.exports = deleteContactByIdControler;
