const Contact = require("../../model/contacts/contactsModel");
const getContactById = require("./getContactById");

const patchContact = async (contactId, body, owner) => {
    const { favorite } = body;

    await Contact.findOneAndUpdate(
        { _id: contactId, owner },
        { $set: { favorite } }
    );

    return getContactById(contactId);
};

module.exports = patchContact;
