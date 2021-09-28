const contactsOperation = require("../../model/contacts");
const helpersError = require("../../helpers/responseData");

const getContactByIdControler = async (req, res) => {
    const contactItem = await contactsOperation.getContactById(
        req.params.contactId
    );

    if (!contactItem) {
        return res
            .status(400)
            .json(helpersError.badRequestError("Contact does not exists"));
    }
    return res.json({ status: "success", message: contactItem });
};

module.exports = getContactByIdControler;
