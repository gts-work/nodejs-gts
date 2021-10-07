const { User } = require("../../model");
const { NotAuthorizedError } = require("../../helpers/responseError");

const currentUser = async (userId) => {
    const user = await User.findOne({ _id: userId });

    if (!user) {
        throw new NotAuthorizedError("Not authorized");
    }

    const token = "";
    await User.findOneAndUpdate({ _id: userId }, { $set: { token } });

    return true;
};

module.exports = currentUser;
