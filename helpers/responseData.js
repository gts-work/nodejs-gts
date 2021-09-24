const badRequestError = (message) => {
    const response = { status: "error", message: message };
    return response;
};

module.exports = {
    badRequestError,
};
