import { Router } from 'express'

import { getUserController } from '@controllers/UserController'

const userRoutes = Router()
const userController = getUserController()

userRoutes.post('/', userController.store)

export { userRoutes }
