const { verificationService } = require("../../services/auth");

const verificationController = async (req, res) => {
    const verificationMessage = await verificationService(
        req.params.verificationToken
    );

    req.params.verificationToken = null;

    return res.json({ status: "success", message: verificationMessage });
};

module.exports = verificationController;
