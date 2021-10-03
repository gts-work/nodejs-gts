const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sha256 = require("sha256");

const { User } = require("../../model");
// const { Verification } = require("../db/verificationModel");

const registration = async (email, password) => {
    const user = new User({
        email,
        password,
    });
    await user.save();
};

module.exports = registration;
