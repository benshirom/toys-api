//מכיל ולידציה מהיוזר מודול

const Joi = require("joi");


exports.validUser = (_reqBody) => {
    let joiSchema = Joi.object({
      name:Joi.string().min(2).max(99).required(),
      email:Joi.string().min(4).max(99).email().required(),
      password:Joi.string().min(6).max(99).required()
    })
  
    return joiSchema.validate(_reqBody);
  }
  
  exports.validLogin = (_reqBody) => {
    let joiSchema = Joi.object({
      email:Joi.string().min(4).max(99).email().required(),
      password:Joi.string().min(6).max(99).required()
    })
  
    return joiSchema.validate(_reqBody);
  }