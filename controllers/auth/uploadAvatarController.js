var Jimp = require("jimp");
const { v4: uuidv4 } = require("uuid");

const { patchUserAvatar } = require("../../services/auth");
const { WrongParametersError } = require("../../helpers/responseError");
const { AVATAR_FILE_DIR } = require("../../helpers/fileDirPath");

const uploadAvatarController = async (req, res) => {
    const userId = req.user._id;
    const fileData = req.file;
    const destination = fileData.destination;
    const [, extension] = fileData.originalname.split(".");

    // const originalFilePath = `${destination}`;
    const originalFilePath = `${destination}/${fileData.originalname}`;
    const newFilename = `${uuidv4()}.${extension}`;
    const newFilePath = `${AVATAR_FILE_DIR}/${newFilename}`;

    await Jimp.read(originalFilePath)
        .then((avatar) => {
            return avatar
                .resize(250, 250) // resize
                .quality(90) // set JPEG quality
                .write(newFilePath); // save
        })
        .catch((err) => {
            throw new WrongParametersError(`Not valid image: ${err.message}`);
        });

    const avatarUrl = await patchUserAvatar(userId, newFilename);

    return res.json({ avatarURL: avatarUrl });
};

module.exports = uploadAvatarController;
