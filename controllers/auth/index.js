const registrationController = require("./registrationContriller");
const loginController = require("./loginController");
const currentUserController = require("./currentUserController");
const logoutController = require("./logoutController");
const patchUserControler = require("./patchUserControler");

module.exports = {
    registrationController,
    loginController,
    currentUserController,
    logoutController,
    patchUserControler,
};
