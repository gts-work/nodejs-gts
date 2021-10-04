const { GeneralCustomError } = require("../helpers/responseError");

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const validatePhone = function (phone) {
    // "(748) 206-2688";
    var re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    return re.test(phone);
};

const validatePassword = function (password) {
    // "(748) 206-2688";
    var re = /^[A-Za-z]\w{8,16}$/;
    return re.test(password);
};

const asyncWrapper = (controller) => {
    return (req, res, next) => {
        controller(req, res).catch(next);
    };
};

const errorHandler = (error, req, res, next) => {
    if (error instanceof GeneralCustomError) {
        return res.status(error.status).json({ message: error.message });
    }

    res.status(500).json({ message: error.message });
};

module.exports = {
    validateEmail,
    validatePhone,
    asyncWrapper,
    errorHandler,
    validatePassword,
};
