import { getBookController } from '@controllers/bookController'
import { Router } from 'express'

const bookRoutes = Router()
const bookController = getBookController()

bookRoutes.get('/', bookController.index)
bookRoutes.post('/', bookController.store)
bookRoutes.delete('/:id', bookController.remove)

export { bookRoutes }
