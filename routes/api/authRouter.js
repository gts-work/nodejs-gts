const express = require("express");
const router = express.Router();
// require("dotenv").config();
const { asyncWrapper } = require("../../helpers/validator");

const {
    registrationController,
    loginController,
    currentUserController,
    logoutController,
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
router.post("/logout", asyncWrapper(logoutController));
router.get("/current", asyncWrapper(currentUserController));

module.exports = router;
