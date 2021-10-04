const { currentUser } = require("../../services/auth");
const { NotAuthorizedError } = require("../../helpers/responseError");

const currentUserController = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await currentUser(userId);

        res.json({
            user: {
                email: user.email,
                subscription: user.subscription,
            },
        });
    } catch (err) {
        throw new NotAuthorizedError(`Not authorized: ${err.message}`);
    }
};

module.exports = currentUserController;
