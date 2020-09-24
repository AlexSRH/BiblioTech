import cors from 'cors'
import express from 'express'

import { router } from './routes'

export function getApp() {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(router)

  function start(port: number) {
    if (process.env.NODE_ENV !== 'test') {
      app.listen(port, () => {
        console.log(`🚀 Server running on port ${port}`)
      })
    }
  }

  return { start }
}
