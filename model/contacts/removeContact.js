const Contact = require("./contactsModel");

const removeContact = async (contactId) => {
    await Contact.findOneAndRemove({ _id: contactId });
    return true;
};

module.exports = removeContact;
