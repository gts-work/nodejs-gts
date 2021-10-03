const contactsOperation = require("../../services/contacts");
const { WrongParametersError } = require("../../helpers/responseError");

const getContactByIdControler = async (req, res) => {
    const contactItem = await contactsOperation.getContactById(
        req.params.contactId
    );

    return res.json({ status: "success", message: contactItem });
};

module.exports = getContactByIdControler;
