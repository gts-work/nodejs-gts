const contactsOperation = require("../../model/contacts");
const helpersError = require("../../helpers/responseData");

const getContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);
    const contactItem = await contactsOperation.getContactById(contactId);

    if (!contactItem) {
        return res.json(
            400,
            helpersError.badRequestError("Contact does not exists")
        );
    }
    return res.json(200, { status: "success", message: contactItem });
};

module.exports = getContactByIdControler;
