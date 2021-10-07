const Contact = require("../../model/contacts/contactsModel");

const removeContact = async (contactId, owner) => {
    await Contact.findOneAndRemove({ _id: contactId, owner });
    return true;
};

module.exports = removeContact;
