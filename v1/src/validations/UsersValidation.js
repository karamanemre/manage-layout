const Joi = require("joi");
const { checkEmailInUse } = require("../services/UsersService");

const createValidation = Joi.object({
  full_name: Joi.string().required().min(1),
  password: Joi.string().required().min(6),
  email: Joi.string().required().email()
//   .external(async (email) => {
//     // You have to create `checkEmailInUse` funciton somewhere in your code and call it here
//     const isEmailInUse = await checkEmailInUse(email);
//     if(isEmailInUse) {
//         throw new Error('email in use');
//     }

//     return email;
// }),
});

const loginValidation = Joi.object({
  password: Joi.string().required().min(6),
  email: Joi.string().required().min(8),
});

module.exports = {
  createValidation,
  loginValidation,
};
