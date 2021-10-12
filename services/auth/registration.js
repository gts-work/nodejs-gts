const { User } = require("../../model");
const { ValidationEmailError } = require("../../helpers/responseError");
const { sendEmail } = require("../email");

const registration = async (email, password) => {
    const checkUser = await User.findOne({ email });

    if (checkUser) {
        throw new ValidationEmailError("Email in use");
    }

    const user = new User({
        email,
        password,
    });
    await user.save();

    const code = "123";
    const msg = `Please, confirm your email address POST http://localhost:8083/api/auth/registration_confirmation/${code}`;
    await sendEmail(email, "registration", msg);
};

module.exports = registration;
