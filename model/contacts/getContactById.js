const Contact = require("./contactsModel");
const { badRequestError } = require("../../helpers/responseData");

const getContactById = async (contactId) => {
    // const contacts = await listContacts();
    // const idx = await contacts.findIndex((item) => item.id === contactId);

    // if (idx === -1) {
    //     return null;
    // }

    // return contacts[idx];

    console.log("getContactById ~ contactId: ", contactId);

    if (!contactId) {
        throw badRequestError(`Failure, '${contactId}' is error!`);
    }

    const contact = await Contact.findOne({ _id: contactId });

    if (!contact) {
        throw badRequestError(
            `Failure, no contact with id '${contactId}' found!`
        );
    }

    return contact;
};

module.exports = getContactById;
