const { User } = require("../../model");
const { ValidationVerificationError } = require("../../helpers/responseError");

const verificationService = async (verifyToken) => {
    console.log("verifyToken ==>> ", verifyToken);

    const user = await User.findOne({ verifyToken });

    if (!user) {
        throw new ValidationVerificationError("User not found");
    }

    await User.findOneAndUpdate({ verifyToken }, { $set: { verify: true } });

    return "Verification successful";
};

module.exports = verificationService;
