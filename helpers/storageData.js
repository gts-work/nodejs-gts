const multer = require("multer");

const { TMP_FILE_DIR } = require("./fileDirPath");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, TMP_FILE_DIR);
    },
    filename: (req, file, cb) => {
        const [fileName, extension] = file.originalname.split(".");
        cb(null, `${fileName}.${extension}`);
    },
});

module.exports = storage;
