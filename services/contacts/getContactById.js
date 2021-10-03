const Contact = require("../../model/contacts/contactsModel");
const { WrongParametersError } = require("../../helpers/responseError");

const getContactById = async (contactId) => {
    const contact = await Contact.findOne({ _id: contactId });

    if (!contact) {
        throw new WrongParametersError(
            `Failure, no contact with id '${contactId}' found!`
        );
    }

    return contact;
};

module.exports = getContactById;
