const contactsOperation = require("../../model/contacts");
const helpersError = require("../../helpers/responseData");

const putContactByIdControler = async (req, res) => {
    const contactId = req.params.contactId;

    if (!contactId) {
        return res
            .status(400)
            .json(
                helpersError.badRequestError(
                    "contactId is a required parameter"
                )
            );
    }

    const updateContact = await contactsOperation.putContact(
        contactId,
        req.body
    );

    return res.json({ status: "success", message: updateContact });
};

module.exports = putContactByIdControler;
