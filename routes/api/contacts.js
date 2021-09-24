const express = require("express");
const router = express.Router();
require("dotenv").config();

const controlers = require("../../controllers/contacts");
const validate = require("../../middlewares/validationMiddleware");

router.get("/", async (req, res, next) =>
    controlers.getContactControler(req, res)
);

router.get("/:contactId", async (req, res, next) =>
    controlers.getContactByIdControler(req, res)
);

router.post("/", validate.contactValidation, async (req, res, next) =>
    controlers.addContactByIdControler(req, res)
);

router.delete("/:contactId", async (req, res, next) =>
    controlers.deleteContactByIdControler(req, res)
);

router.put("/:contactId", validate.contactValidation, async (req, res, next) =>
    controlers.patchContactByIdControler(req, res)
);

router.patch(
    "/:contactId",
    validate.updateContactValidation,
    async (req, res, next) => controlers.patchContactByIdControler(req, res)
);

module.exports = router;
