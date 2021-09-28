const Contact = require("../../model/contacts/contactsModel");

const addContact = async (body) => {
    const { name, email, phone } = body;
    // const newContact = {
    //     name,
    //     email,
    //     phone,
    //     id: getRandomInt((min = contacts.length)),
    // };
    // contacts.push(newContact);
    // await updateDataContacts(contacts);

    const contact = new Contact({ name, email, phone });
    await contact.save();
    console.log("addContact ~ contact: ", contact);

    return contact;
};

module.exports = addContact;
