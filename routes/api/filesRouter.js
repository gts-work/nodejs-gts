const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = require("../../helpers/storageData");
const { asyncWrapper } = require("../../helpers/validator");
const { uploadController } = require("../../controllers/files");
const FILE_DIR = require("../../helpers/fileDirPath");

const uploadMiddleware = multer({ storage });

router.post(
    "/upload",
    uploadMiddleware.single("avatar"),
    asyncWrapper(uploadController)
);
router.use("/download", express.static(FILE_DIR));

module.exports = router;
