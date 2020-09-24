import { celebrate, Joi } from 'celebrate'

export default celebrate(
  {
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().min(8).required()
    })
  },
  {
    abortEarly: false
  }
)
