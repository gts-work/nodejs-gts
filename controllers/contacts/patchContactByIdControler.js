const contactsOperation = require("../../model/contacts");
const helpersError = require("../../helpers/responseData");

const patchContactByIdControler = async (req, res) => {
    const contactId = req.params.contactId;

    if (!contactId) {
        return res.sattus9400.json(
            helpersError.badRequestError("contactId is a required parameter")
        );
    }

    const updateContact = await contactsOperation.patchContact(
        contactId,
        req.body
    );

    return res.json({ status: "success", message: updateContact });
};

module.exports = patchContactByIdControler;
