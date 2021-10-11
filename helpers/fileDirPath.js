const path = require("path");

const TMP_FILE_DIR = path.resolve(`${process.env.STATIC_DIR}/tmp`);
const AVATAR_FILE_DIR = path.resolve(`${process.env.STATIC_DIR}/avatars`);

module.exports = { TMP_FILE_DIR, AVATAR_FILE_DIR };
