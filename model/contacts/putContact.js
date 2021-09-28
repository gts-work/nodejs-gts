const getContactById = require("./getContactById");
const Contact = require("./contactsModel");

const putContact = async (contactId, body) => {
    const { name, email, phone } = body;

    const contact = await Contact.findOneAndUpdate(
        { _id: contactId },
        { $set: { name, email, phone } }
    );

    return getContactById(contactId);
};

module.exports = putContact;
