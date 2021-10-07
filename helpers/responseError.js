class GeneralCustomError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class ValidationError extends GeneralCustomError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class WrongParametersError extends GeneralCustomError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class NotAuthorizedError extends GeneralCustomError {
    constructor(message) {
        super(message);
        this.status = 401;
    }
}

class ValidationEmailError extends GeneralCustomError {
    constructor(message) {
        super(message);
        this.status = 409;
    }
}

module.exports = {
    GeneralCustomError,
    ValidationError,
    WrongParametersError,
    NotAuthorizedError,
    ValidationEmailError,
    NotAuthorizedError,
};
