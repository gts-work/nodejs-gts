const contactsOperation = require("../../services/contacts");
const { WrongParametersError } = require("../../helpers/responseError");

const addContactByIdControler = async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        throw new WrongParametersError(
            "name, email, phone is are required parameters"
        );
    }

    const newContact = await contactsOperation.addContact(req.body);

    if (!newContact) {
        throw new WrongParametersError("Contact not added");
    }

    return res.json({ status: "success", message: newContact });
};

module.exports = addContactByIdControler;
