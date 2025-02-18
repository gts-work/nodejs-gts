const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../helpers/responseError");

const authMiddleware = (req, res, next) => {
    // console.log("authMiddleware ~ req.url ==>> ", req.url);

    try {
        // TODO: validate token type later
        if (
            req.url === "/signup" ||
            req.url === "/login" ||
            req.url.includes("/verify")
        ) {
            next();
            return;
        }

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
        next(new NotAuthorizedError("Not authorized"));
        // next(new NotAuthorizedError(`Not authorized: ${err.message}`));
    }
};

module.exports = {
    authMiddleware,
};
