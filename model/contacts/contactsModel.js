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

contactSchema.pre("validate", function () {
    console.log("this gets printed first");
});
contactSchema.post("validate", function () {
    console.log("this gets printed second");
});
contactSchema.pre("save", function () {
    console.log("this gets printed third");
});
contactSchema.post("save", function () {
    console.log("this gets printed fourth");
});

// contactSchema.pre("save", function (next) {
//     const err = new Error("something went wrong ==>> ");
//     // If you call `next()` with an argument, that argument is assumed to be
//     // an error.
//     next(err);
//     process.exitCode = 1;
// });

// contactSchema.post("update", function (error, res, next)

// The same E11000 error can occur when you call `update()`
// This function **must** take 3 parameters. If you use the
// `passRawResult` function, this function **must** take 4
// parameters
// contactSchema.post("save", function (error, doc, next) {
//     console.log("error.name: ... ", error.name);
//     console.log("error.code: ... ", error.code);
//     console.log("DOC: ... ", doc);

//     if (error.name === "MongoServerError" && error.code === 11000) {
//         // return res
//         //     .status(400)
//         //     .json(
//         //         helpersError.badRequestError(
//         //             "There was a duplicate key error ===>>> "
//         //         )
//         //     );
//         next(new Error(`There was a duplicate key error in  ===>>>  ${doc}`));
//     } else {
//         next(); // The `update()` call will still error out.
//     }
// });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
