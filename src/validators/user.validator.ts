import * as Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        "string.pattern.base": "Only chars allowed & this must be at least 4 characters."
    }),
    password: Joi.string().min(3).max(8).required().messages({
        "string.min": "pass min 3",
        "string.max": "pass max 8"
    }),
    age: Joi.number().min(1).max(117).required().messages({
        "number.min": "min age is 3",
        "number.max": "max age is 8"
    }),
})


export {
    userValidator
}