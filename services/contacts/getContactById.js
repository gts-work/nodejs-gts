const Contact = require("../../model/contacts/contactsModel");
const { badRequestError } = require("../../helpers/responseData");

const getContactById = async (contactId) => {
    const contact = await Contact.findOne({ _id: contactId });

    if (!contact) {
        return null;
    }

    return contact;
};

module.exports = getContactById;
