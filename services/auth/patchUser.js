const User = require("../../model/users/usersModel");
const currentUser = require("./currentUser");

const patchContact = async (userId, body) => {
    const { subscription } = body;
    await User.findOneAndUpdate({ _id: userId }, { $set: { subscription } });

    return currentUser(userId);
};

module.exports = patchContact;
