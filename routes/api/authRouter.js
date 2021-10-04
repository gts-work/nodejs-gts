const express = require("express");
const router = express.Router();
// require("dotenv").config();
const { asyncWrapper } = require("../../helpers/validator");

const {
    registrationController,
    loginController,
    currentUserController,
} = require("../../controllers/auth");
const validate = require("../../middlewares/validationMiddleware");
const { authMiddleware } = require("../../middlewares/authMiddleware");

router.use(authMiddleware);

router.post(
    "/signup",
    validate.authContactValidation,
    asyncWrapper(registrationController)
);

router.post("/login", asyncWrapper(loginController));

router.get("/current", asyncWrapper(currentUserController));

module.exports = router;

// const express = require("express");
// const router = new express.Router();

// const { asyncWrapper } = require("../helpers/apiHelpers");
// const {
//     registrationController,
//     registrationConfirmationController,
//     forgotPasswordController,
//     loginController,
// } = require("../controllers/authController");

// router.post("/registration", asyncWrapper(registrationController));
// router.post(
//     "/registration_confirmation/:code",
//     asyncWrapper(registrationConfirmationController)
// );
// router.post("/forgot_password", asyncWrapper(forgotPasswordController));
// router.post("/login", asyncWrapper(loginController));

// module.exports = { authRouter: router };
