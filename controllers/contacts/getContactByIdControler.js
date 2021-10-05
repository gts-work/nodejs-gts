const contactsOperation = require("../../services/contacts");
const { WrongParametersError } = require("../../helpers/responseError");

const getContactByIdControler = async (req, res) => {
    const contactItem = await contactsOperation.getContactById(
        req.params.contactId,
        req.user._id
    );

    return res.json({ status: "success", message: contactItem });
};

module.exports = getContactByIdControler;
