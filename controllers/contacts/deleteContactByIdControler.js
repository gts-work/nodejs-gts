const contactsOperation = require("../../services/contacts");
const { WrongParametersError } = require("../../helpers/responseError");

const deleteContactByIdControler = async (req, res) => {
    const contactId = req.params.contactId;
    const delContact = await contactsOperation.removeContact(contactId);

    if (!delContact) {
        throw new WrongParametersError(
            `Contact by id: ${contactId} not deleted`
        );
    }

    return res
        .status(204)
        .json({ status: "success", message: "deleted comtact" });
};

module.exports = deleteContactByIdControler;
