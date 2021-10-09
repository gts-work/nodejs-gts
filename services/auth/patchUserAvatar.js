const User = require("../../model/users/usersModel");
const { NotAuthorizedError } = require("../../helpers/responseError");
// const currentUser = require("./currentUser");

const patchUserAvatar = async (userId, avatarName) => {
    const user = await User.findOne({ _id: userId });

    if (!user) {
        throw new NotAuthorizedError("Not authorized");
    }

    const userAvatarUrl = `/avatars/${avatarName}`;
    await User.findOneAndUpdate({ _id: userId }, { $set: { userAvatarUrl } });

    return userAvatarUrl;
};

module.exports = patchUserAvatar;
