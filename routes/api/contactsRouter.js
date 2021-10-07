const express = require("express");
const router = express.Router();
require("dotenv").config();

const controlers = require("../../controllers/contacts");
const validate = require("../../middlewares/validationMiddleware");
const { asyncWrapper } = require("../../helpers/validator");
const { authMiddleware } = require("../../middlewares/authMiddleware");

router.use(authMiddleware);

router.get("/", asyncWrapper(controlers.getContactsControler));

router.get("/:contactId", asyncWrapper(controlers.getContactByIdControler));

router.post(
    "/",
    validate.contactValidation,
    asyncWrapper(controlers.addContactByIdControler)
);

router.delete(
    "/:contactId",
    asyncWrapper(controlers.deleteContactByIdControler)
);

router.put(
    "/:contactId",
    validate.contactValidation,
    asyncWrapper(controlers.putContactByIdControler)
);

router.patch(
    "/:contactId",
    validate.updateContactValidation,
    asyncWrapper(controlers.patchContactByIdControler)
);

module.exports = router;
