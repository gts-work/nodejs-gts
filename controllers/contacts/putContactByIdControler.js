const contactsOperation = require("../../model/contacts");
const helpersError = require("../../helpers/responseData");

const putContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);

    if (!contactId) {
        return res.json(
            400,
            helpersError.badRequestError("contactId is a required parameter")
        );
    }

    const updateContact = await contactsOperation.putContact(
        contactId,
        req.body
    );

    return res.json(200, { status: "success", message: updateContact });
};

module.exports = putContactByIdControler;
