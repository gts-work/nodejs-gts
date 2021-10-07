const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { validateEmail, validatePassword } = require("../../helpers/validator");

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        // validate: [validatePassword, "Please fill a valid password"],
        required: [true, "Password is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validateEmail, "Please fill a valid email address"],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: {
        type: String,
        default: null,
    },
});

userSchema.pre("save", async function () {
    if (this.isNew || this.isModified) {
        this.password = await bcrypt.hash(this.password, 10);

        const token = jwt.sign(
            {
                _id: this._id,
            },
            process.env.JWT_SECRET
        );

        this.token = token;
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
