const Joi = require('joi');

const addCompany = Joi.object({
    company_name: Joi.string().min(3).max(50).required(),
    telephone_number: Joi.string().min(8).max(16),
    address: Joi.string().min(10).max(50).required()
});

const addEmployee = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(255).required(),
    phone_number: Joi.string().min(8).max(16),
    jobtitle: Joi.string().required()
});

const updateEmployee = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(255).required(),
    phone_number: Joi.string().min(8).max(16),
    jobtitle: Joi.string().required()
});

export default {
    addCompany,
    addEmployee,
    updateEmployee
};