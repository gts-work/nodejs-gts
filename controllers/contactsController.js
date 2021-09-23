const contactsOperation = require("../model");
const helpersError = require("../helpers/responseData");

const getContactControler = async (req, res) => {
    const contacts = await contactsOperation.listContacts();
    res.json(200, { status: "success", message: contacts });
};

const getContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);
    const contactItem = await contactsOperation.getContactById(contactId);

    if (!contactItem) {
        res.json(400, helpersError.badRequestError("Contact does not exists"));
    }
    res.json(200, { status: "success", message: contactItem });
};

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

const putContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);

    if (!contactId) {
        res.json(
            400,
            helpersError.badRequestError("contactId is a required parameter")
        );
    }

    const updateContact = await contactsOperation.putContact(
        contactId,
        req.body
    );

    res.json(200, { status: "success", message: updateContact });
};

const patchContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);

    if (!contactId) {
        res.json(
            400,
            helpersError.badRequestError("contactId is a required parameter")
        );
    }

    const updateContact = await contactsOperation.patchContact(
        contactId,
        req.body
    );

    res.json(200, { status: "success", message: updateContact });
};

const deleteContactByIdControler = async (req, res) => {
    const contactId = Number(req.params.contactId);
    const delContact = await contactsOperation.removeContact(contactId);

    if (!delContact) {
        res.json(400, helpersError.badRequestError("Contact not deleted"));
    }

    res.json(204, { status: "success", message: "deleted comtact" });
};

module.exports = {
    getContactControler,
    getContactByIdControler,
    addContactByIdControler,
    putContactByIdControler,
    patchContactByIdControler,
    deleteContactByIdControler,
};
