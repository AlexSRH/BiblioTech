import { Router } from 'express'

import { userRoutes } from './userRoutes'
import { sessionRoutes } from './sessionRoutes'

const router = Router()

router.use('/users', userRoutes)
router.use('/sessions', sessionRoutes)

export { router }
