import { Router } from 'express'

import { userRoutes } from './userRoutes'
import { sessionRoutes } from './sessionRoutes'
import { bookRoutes } from './bookRoutes'

import auth from '@middlewares/auth'

const router = Router()

router.use('/users', userRoutes)
router.use('/sessions', sessionRoutes)

router.use('/books', auth, bookRoutes)

export { router }
