const getContactById = require("./getContactById");
const Contact = require("../../model/contacts/contactsModel");

const putContact = async (contactId, body, owner) => {
    const { name, email, phone } = body;

    await Contact.findOneAndUpdate(
        { _id: contactId, owner },
        { $set: { name, email, phone } }
    );

    return getContactById(contactId);
};

module.exports = putContact;
