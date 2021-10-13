const { repeatVerificationService } = require("../../services/auth");
const { WrongParametersError } = require("../../helpers/responseError");

const repeatVerificationController = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        throw new WrongParametersError("email is are required parameters");
    }

    const verificationResponse = await repeatVerificationService(email);

    return res.json({ status: "success", message: verificationResponse });
};

module.exports = repeatVerificationController;
