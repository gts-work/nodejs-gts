const contactsOperation = require("../../services/contacts");
const { WrongParametersError } = require("../../helpers/responseError");

const putContactByIdControler = async (req, res) => {
    const contactId = req.params.contactId;

    if (!contactId) {
        return res
            .status(400)
            .json(WrongParametersError("contactId is a required parameter"));
    }

    const updateContact = await contactsOperation.putContact(
        contactId,
        req.body
    );

    return res.json({ status: "success", message: updateContact });
};

module.exports = putContactByIdControler;
