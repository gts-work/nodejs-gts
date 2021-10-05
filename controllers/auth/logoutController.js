const { logout } = require("../../services/auth");
const { NotAuthorizedError } = require("../../helpers/responseError");

const logoutController = async (req, res) => {
    try {
        const userId = req.user._id;
        const logoutUser = await logout(userId);

        if (!logoutUser) {
            throw new NotAuthorizedError("Not authorized");
        }

        res.status(204).json({});
    } catch (err) {
        throw new NotAuthorizedError(`Not authorized: ${err.message}`);
    }
};

module.exports = logoutController;
