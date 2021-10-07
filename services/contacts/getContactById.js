const Contact = require("../../model/contacts/contactsModel");
const { WrongParametersError } = require("../../helpers/responseError");

const getContactById = async (contactId, owner) => {
    const contact = await Contact.findOne({ _id: contactId, owner }).select({
        __v: 0,
    });

    if (!contact) {
        throw new WrongParametersError(
            `Failure, no contact with id '${contactId}' found!`
        );
    }

    return contact;
};

module.exports = getContactById;
