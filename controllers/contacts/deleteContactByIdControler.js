const { removeContact } = require("../../services/contacts");
const { WrongParametersError } = require("../../helpers/responseError");

const deleteContactByIdControler = async (req, res) => {
    const contactId = req.params.contactId;
    const userId = req.user._id;
    const delContact = await removeContact(contactId, userId);

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
