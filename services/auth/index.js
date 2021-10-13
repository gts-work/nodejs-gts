const registration = require("./registration");
const login = require("./login");
const currentUser = require("./currentUser");
const logout = require("./logout");
const patchUser = require("./patchUser");
const patchUserAvatar = require("./patchUserAvatar");
const verificationService = require("./verification");

module.exports = {
    registration,
    login,
    currentUser,
    logout,
    patchUser,
    patchUserAvatar,
    verificationService,
};
