const mongoose = require("mongoose");

const { validateEmail, validatePhone } = require("../../helpers/validator");
const { badRequestError } = require("../../helpers/responseData");

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
        dropDups: true,
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

// contactSchema.pre("save", function (next) {
//     // Unless you comment out the `return` above, 'after next' will print
//     console.log("after next");
//     next(badRequestError("something went wrong"));
// });

// contactSchema.pre("save", async function (next) {
//     await Promise.resolve();
//     // You can also throw an error in an `async` function
//     throw new Error("something went wrong");
//     next();
// });

contactSchema.pre("save", async function (next) {
    // this.password = await bcrypt.hash(this.password, 12);
    // this.passwordConfirm = undefined;
    next();
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
