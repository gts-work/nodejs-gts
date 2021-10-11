const registrationController = require("./registrationContriller");
const loginController = require("./loginController");
const currentUserController = require("./currentUserController");
const logoutController = require("./logoutController");
const patchUserControler = require("./patchUserControler");
const uploadAvatarController = require("./uploadAvatarController");

module.exports = {
    registrationController,
    loginController,
    currentUserController,
    logoutController,
    patchUserControler,
    uploadAvatarController,
};
