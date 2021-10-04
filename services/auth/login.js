const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sha256 = require("sha256");

const { User } = require("../../model");
const { NotAuthorizedError } = require("../../helpers/responseError");

const login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new NotAuthorizedError("Email or password is wrong");
    }

    const token = jwt.sign(
        {
            _id: user._id,
        },
        process.env.JWT_SECRET
    );
    await User.findOneAndUpdate({ email }, { $set: { token } });

    return token;
};

module.exports = login;
