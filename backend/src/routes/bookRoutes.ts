import { getBookController } from '@controllers/bookController'
import { Router } from 'express'

const bookRoutes = Router()
const bookController = getBookController()

bookRoutes.get('/', bookController.index)
bookRoutes.post('/', bookController.store)

export { bookRoutes }
