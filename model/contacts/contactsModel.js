const mongoose = require("mongoose");

const { validateEmail, validatePhone } = require("../../helpers/validator");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"],
    },
    email: {
        type: String,
        lowercase: true,
        validate: [validateEmail, "Please fill a valid email address"],
        unique: true,
        // dropDups: true,
    },
    phone: {
        type: String,
        validate: [validatePhone, "Please fill a valid phone number"],
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
