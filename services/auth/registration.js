const { v4: uuidv4 } = require("uuid");

const { User } = require("../../model");
const { ValidationEmailError } = require("../../helpers/responseError");
const { sendEmail } = require("../emailApi");

const registration = async (email, password) => {
    const checkUser = await User.findOne({ email });

    if (checkUser) {
        throw new ValidationEmailError("Email in use");
    }

    const verifyToken = uuidv4();

    const user = new User({
        email,
        password,
        verifyToken,
    });
    await user.save();

    const msg = `Please, confirm your email address: http://localhost:3000/api/users/verify/${verifyToken}`;
    await sendEmail(email, "registration", msg);
};

module.exports = registration;
