const express = require("express");
const router = express.Router();
require("dotenv").config();

const contactsOperation = require("../../model");

router.get("/", async (req, res, next) => {
    const contacts = await contactsOperation.listContacts();
    res.json({ contacts: contacts });
});

router.get("/:contactId", async (req, res, next) => {
    const contactId = req.params.contactId;
    const contactItem = await contactsOperation.getContactById(contactId);
    res.json({ message: contactItem });
});

router.post("/", async (req, res, next) => {
    // if (!name || !email || !phone) {
    //     console.log("Be sure to include name, email and phone".red);
    //     break;
    // }

    console.log("router.post ~ req.body: ", req.body)

    const newContact = await contactsOperation.addContact(
        req.body
    );
    res.json({ message: "post comtact" });
});

router.delete("/:contactId", async (req, res, next) => {
    const contactId = req.params.contactId;
    const delContact = await contactsOperation.removeContact(contactId);
    res.json({ message: "delete comtact" });
});

router.patch("/:contactId", async (req, res, next) => {
    const contactId = req.params.contactId;
    const updateContact = await contactsOperation.updateContact(
        contactId,
        req.body
    );
    res.json({ message: updateContact });
});

module.exports = router;
