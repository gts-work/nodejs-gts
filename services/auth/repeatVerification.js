const { User } = require("../../model");
const { ValidationVerificationError } = require("../../helpers/responseError");
const { sendEmail } = require("../emailApi");

const repeatVerificationService = async (email) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new ValidationVerificationError(
            `Failure, no contact with email '${email}' found!`
        );
    }

    if (user.verify) {
        throw new ValidationVerificationError(
            "Verification has already been passed"
        );
    }

    const msg = `Please, confirm your email address: http://localhost:3000/api/users/verify/${user.verifyToken}`;
    await sendEmail(email, "registration", msg);

    return "Verification email sent";
};

module.exports = repeatVerificationService;
