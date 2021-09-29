const contactsOperation = require("../../services/contacts");
const helpersError = require("../../helpers/responseData");

const addContactByIdControler = async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res
            .status(400)
            .json(
                helpersError.badRequestError(
                    "name, email, phone is are required parameters"
                )
            );
    }

    const newContact = await contactsOperation.addContact(req.body);

    if (!newContact) {
        return res
            .status(400)
            .json(helpersError.badRequestError("Contact not added"));
    }

    return res.json({ status: "success", message: newContact });
};

module.exports = addContactByIdControler;
