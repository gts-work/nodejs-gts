const { authMiddleware } = require("../middlewares/authMiddleware");
const { NotAuthorizedError } = require("../helpers/responseError");
const jwt = require("jsonwebtoken");
require("dotenv").config();

describe("Auth middleware test", () => {
    it("check: User token is valid", () => {
        const user = {
            _id: "1",
        };

        const token = jwt.sign(
            {
                _id: user._id,
            },
            process.env.JWT_SECRET
        );

        const mReq = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };

        const mRes = {};
        const mockNext = jest.fn();

        authMiddleware(mReq, mRes, mockNext);

        expect(mReq.token).toEqual(token);
        expect(mReq.user._id).toEqual(user._id);
        expect(mReq.user.createdAt).toEqual(user.createdAt);
        expect(mockNext).toHaveBeenCalled();
    });

    it("check: No authorization", () => {
        const mReq = {
            headers: {},
        };
        const mRes = {};
        const mockNext = jest.fn();

        authMiddleware(mReq, mRes, mockNext);

        expect(mockNext).toHaveBeenCalledWith(
            new NotAuthorizedError(
                "Please, provide a token in request authorization header"
            )
        );
    });

    it("check: Not User token", () => {
        const user = {
            _id: "1",
        };

        const mReq = {
            headers: {
                authorization: ``,
            },
        };

        const mRes = {};
        const mockNext = jest.fn();

        authMiddleware(mReq, mRes, mockNext);

        expect(mockNext).toHaveBeenCalledWith(
            new NotAuthorizedError("Please, provide a token")
        );
    });

    it("check: User token is not valid", () => {
        const user = {
            _id: "1",
        };

        const token = jwt.sign(
            {
                _id: "5",
            },
            process.env.JWT_SECRET
        );

        const mReq = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };

        const mRes = {};
        const mockNext = jest.fn();

        try {
            authMiddleware(mReq, mRes, mockNext);
        } catch (err) {
            expect(err).toEqual({
                error: `Not authorized: ${err.message}`,
            });
        }
    });
});
