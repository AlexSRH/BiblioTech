import { Router } from 'express'

import { getUserController } from '@controllers/userController'
import createUserValidation from '@validations/createUserValidation'

const userRoutes = Router()
const userController = getUserController()

userRoutes.post('/', createUserValidation, userController.store)

export { userRoutes }
