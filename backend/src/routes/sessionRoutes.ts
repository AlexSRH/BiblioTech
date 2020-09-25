import { Router } from 'express'

import { getSessionController } from '@controllers/sessionController'

const sessionRoutes = Router()
const sessionController = getSessionController()

sessionRoutes.post('/', sessionController.store)

export { sessionRoutes }
