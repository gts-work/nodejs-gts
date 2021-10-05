const Contact = require("../../model/contacts/contactsModel");

const listContacts = async (owner, query) => {
    if (query === -1) {
        return await Contact.find({ owner }).select({
            __v: 0,
        });
    } else {
        return await Contact.find({ owner, favorite: query }).select({
            __v: 0,
        });
    }
};

module.exports = listContacts;
