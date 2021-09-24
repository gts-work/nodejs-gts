const contactsOperation = require("../../model/contacts");
const helpersError = require("../../helpers/responseData");

const addContactByIdControler = async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.json(
            400,
            helpersError.badRequestError(
                "name, email, phone is are required parameters"
            )
        );
    }

    const newContact = await contactsOperation.addContact(req.body);

    if (!newContact) {
        res.json(400, helpersError.badRequestError("Contact not added"));
    }

    res.json(200, { status: "success", message: newContact });
};

module.exports = addContactByIdControler;
