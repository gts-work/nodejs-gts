const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = require("../../helpers/storageData");
const { asyncWrapper } = require("../../helpers/validator");

const {
    registrationController,
    loginController,
    currentUserController,
    logoutController,
    patchUserControler,
    uploadAvatarController,
    verificationController,
    repeatVerificationController,
} = require("../../controllers/auth");
const validate = require("../../middlewares/validationMiddleware");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const uploadMiddleware = multer({ storage });

router.use(authMiddleware);

router.post(
    "/signup",
    validate.authContactValidation,
    asyncWrapper(registrationController)
);
router.post("/login", asyncWrapper(loginController));
router.post("/logout", asyncWrapper(logoutController));
router.get("/current", asyncWrapper(currentUserController));
router.patch(
    "/avatars",
    uploadMiddleware.single("avatar"),
    asyncWrapper(uploadAvatarController)
);
router.patch("/", asyncWrapper(patchUserControler));
router.get("/verify/:verificationToken", asyncWrapper(verificationController));
router.post("/verify", asyncWrapper(repeatVerificationController));

module.exports = router;
