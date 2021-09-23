const badRequestError = (message) => {
    const response = { status: "error", message: message[0].message };
    return response;
};

module.exports = {
    badRequestError,
};
