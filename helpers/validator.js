const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const validatePhone = function (phone) {
    // "(748) 206-2688";
    var re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    return re.test(phone);
};

const asyncWrapper = (controller) => {
    return (req, res, next) => {
        controller(req, res).catch(next);
    };
};

module.exports = {
    validateEmail,
    validatePhone,
    asyncWrapper,
};
