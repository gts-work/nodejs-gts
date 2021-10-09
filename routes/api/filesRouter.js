const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = require("../../helpers/storageData");
const { asyncWrapper } = require("../../helpers/validator");
const { uploadController } = require("../../controllers/files");
const { TMP_FILE_DIR } = require("../../helpers/fileDirPath");

const uploadMiddleware = multer({ storage });

router.post(
    "/upload",
    uploadMiddleware.single("avatar"),
    asyncWrapper(uploadController)
);
router.use("/download", express.static(TMP_FILE_DIR));

module.exports = router;
