const contactsOperation = require("../../services/contacts");
const helpersError = require("../../helpers/responseData");

const deleteContactByIdControler = async (req, res) => {
    const contactId = req.params.contactId;
    const delContact = await contactsOperation.removeContact(contactId);

    if (!delContact) {
        return res
            .status(400)
            .json(helpersError.badRequestError("Contact not deleted"));
    }

    return res
        .status(204)
        .json({ status: "success", message: "deleted comtact" });
};

module.exports = deleteContactByIdControler;
