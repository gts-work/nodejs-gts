const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const FILE_DIR = require("./fileDirPath");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, FILE_DIR);
    },
    filename: (req, file, cb) => {
        const [, extension] = file.originalname.split(".");
        cb(null, `${uuidv4()}.${extension}`);
    },
});

module.exports = storage;
