import { Router } from 'express'

import { getSessionController } from '@controllers/sessionController'

import loginValidation from '@validations/loginValidation'

const sessionRoutes = Router()
const sessionController = getSessionController()

sessionRoutes.post('/', loginValidation, sessionController.store)

export { sessionRoutes }
