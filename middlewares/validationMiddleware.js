const Joi = require("joi");
const { badRequestError } = require("../helpers/responseData");

module.exports = {
    contactValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().min(4).max(30).required(),
            phone: Joi.string().min(9).max(20).required(),
            email: Joi.string()
                .email({
                    minDomainSegments: 2,
                    // tlds: { allow: ["com", "net"] },
                })
                .required(),
            favorite: Joi.boolean().default(false),
        });

        const validationResult = schema.validate(req.body);

        if (validationResult.error) {
            next(badRequestError(validationResult.error.details[0].message));
        }

        next();
    },

    updateContactValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().min(4).max(30).optional(),
            phone: Joi.string().min(9).max(20).optional(),
            email: Joi.string()
                .email({
                    minDomainSegments: 2,
                    // tlds: { allow: ["com", "net"] },
                })
                .optional(),
            favorite: Joi.boolean().default(false).optional(),
        });

        const validationResult = schema.validate(req.body);

        if (validationResult.error) {
            next(badRequestError(validationResult.error.details[0].message));
        }

        next();
    },
};
