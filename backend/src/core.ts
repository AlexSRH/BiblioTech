import 'reflect-metadata'

import { getDatabase } from './database'
import { getApp } from './app'

interface getCoreProps {
  database: { start: () => Promise<void> }
  app: { start: () => void }
}

export function getCore(props?: getCoreProps) {
  const database = props?.database || getDatabase()
  const app = props?.app || getApp()

  async function start() {
    await database.start()
    app.start(3333)
  }

  return { start }
}
