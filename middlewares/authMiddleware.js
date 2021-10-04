const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../helpers/responseError");

const authMiddleware = (req, res, next) => {
    try {
        // TODO: validate token type later
        const { authorization } = req.headers;

        if (!authorization) {
            next(
                new NotAuthorizedError(
                    "Please, provide a token in request authorization header"
                )
            );
        }

        const [, token] = authorization.split(" ");

        if (!token) {
            next(new NotAuthorizedError("Please, provide a token"));
        }

        const user = jwt.decode(token, process.env.JWT_SECRET);

        req.token = token;
        req.user = user;

        next();
    } catch (err) {
        next(new NotAuthorizedError("Not authorized authMiddleware"));
    }
};

module.exports = {
    authMiddleware,
};
