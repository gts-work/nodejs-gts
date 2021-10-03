const contactsOperation = require("../../services/contacts");
const {
    WrongParametersError,
    ValidationError,
} = require("../../helpers/responseError");

const patchContactByIdControler = async (req, res) => {
    const contactId = req.params.contactId;

    if (!contactId) {
        throw new WrongParametersError("contactId is a required parameter");
    }

    if (!req.body) {
        throw new WrongParametersError("missing field favorite");
    }

    for (const itemsFromBody in req.body) {
        if (itemsFromBody === "favorite") {
            const updateContact = await contactsOperation.patchContact(
                contactId,
                req.body
            );

            if (!updateContact) {
                throw new WrongParametersError("not found");
            }

            return res.json({ status: "success", message: updateContact });
        }
    }

    throw new WrongParametersError("missing field favorite");
};

module.exports = patchContactByIdControler;
