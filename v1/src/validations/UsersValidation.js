const Joi = require('joi');

const createValidation = Joi.object({
    full_name: Joi.string().required().min(1),
    password: Joi.string().required().min(6),
    email: Joi.string().required().min(8),
});

module.exports = {
    createValidation,
};