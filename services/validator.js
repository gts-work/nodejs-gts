const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const validatePhone = function (phone) {
    // "(748) 206-2688";
    var re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    return re.test(phone);
};

module.exports = {
    validateEmail,
    validatePhone,
};
