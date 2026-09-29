import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().required().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({
        'string.pattern.base': 'Your brand value didn\'t match pattern',
        'string.empty': 'Brand is required',
        'any.required': 'Brand is required'
    }),

    price: Joi.number().required().integer().min(0).max(1000000).messages({
        "number.min": "min price is 0",
        "number.max": "max price is 1 000 000",
        'number.base': 'Price is required and must be a number',
        'any.required': 'Price is required',
        'number.integer': 'Price must be an integer'
    }),

    year: Joi.number().required().integer().min(1990).max(2026).messages({
        "number.min": "min year is 1990",
        "number.max": "max year is 2026",
        'number.base': 'Year  is required and must be a number',
        'any.required': 'Year  is required',
        'number.integer': 'Year must be an integer'
    }),
})