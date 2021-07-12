import Joi from "joi";

export const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().required()
})

export const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({tlds: {allow: false}}).required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
})
