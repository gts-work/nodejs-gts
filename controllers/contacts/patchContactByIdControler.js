const contactsOperation = require("../../services/contacts");
const helpersError = require("../../helpers/responseData");

const patchContactByIdControler = async (req, res) => {
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

    if (!req.body) {
        return res
            .status(400)
            .json(helpersError.badRequestError("missing field favorite"));
    }

    for (const itemsFromBody in req.body) {
        if (itemsFromBody === "favorite") {
            const updateContact = await contactsOperation.patchContact(
                contactId,
                req.body
            );

            if (!updateContact) {
                return res
                    .status(404)
                    .json(helpersError.badRequestError("Not found"));
            }

            return res.json({ status: "success", message: updateContact });
        }
    }

    return res
        .status(400)
        .json(helpersError.badRequestError("missing field favorite"));
};

module.exports = patchContactByIdControler;
