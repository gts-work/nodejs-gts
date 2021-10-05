const contactsOperation = require("../../services/contacts");
const { WrongParametersError } = require("../../helpers/responseError");

const putContactByIdControler = async (req, res) => {
    const contactId = req.params.contactId;
    const userId = req.user._id;

    if (!contactId) {
        throw new WrongParametersError("contactId is a required parameter");
    }

    const updateContact = await contactsOperation.putContact(
        contactId,
        req.body,
        userId
    );

    return res.json({ status: "success", message: updateContact });
};

module.exports = putContactByIdControler;
