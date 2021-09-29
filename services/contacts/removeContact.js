const Contact = require("../../model/contacts/contactsModel");

const removeContact = async (contactId) => {
    await Contact.findOneAndRemove({ _id: contactId });
    return true;
};

module.exports = removeContact;
