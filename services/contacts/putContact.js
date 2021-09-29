const getContactById = require("./getContactById");
const Contact = require("../../model/contacts/contactsModel");

const putContact = async (contactId, body) => {
    const { name, email, phone } = body;

    await Contact.findOneAndUpdate(
        { _id: contactId },
        { $set: { name, email, phone } }
    );

    return getContactById(contactId);
};

module.exports = putContact;
