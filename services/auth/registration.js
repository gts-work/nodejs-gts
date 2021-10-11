const { User } = require("../../model");
const { ValidationEmailError } = require("../../helpers/responseError");

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
};

module.exports = registration;
