const contactsOperation = require("../../model/contacts");
const helpersError = require("../../helpers/responseData");

const patchContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);

    if (!contactId) {
        res.json(
            400,
            helpersError.badRequestError("contactId is a required parameter")
        );
    }

    const updateContact = await contactsOperation.patchContact(
        contactId,
        req.body
    );

    res.json(200, { status: "success", message: updateContact });
};

module.exports = patchContactByIdControler;
