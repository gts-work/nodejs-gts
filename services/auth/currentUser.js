const { User } = require("../../model");
const { NotAuthorizedError } = require("../../helpers/responseError");

const currentUser = async (userId) => {
    const user = await User.findOne({ _id: userId }).select({ __v: 0 });

    if (!user) {
        throw new NotAuthorizedError("Not authorized");
    }

    return user;
};

module.exports = currentUser;
