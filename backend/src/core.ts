import 'reflect-metadata'

import { getDatabase } from './database'
import { getApp } from './app'

interface getCoreProps {
  database: { start: () => Promise<void> }
  appExpress: { start: () => void }
}

export function getCore(props?: getCoreProps) {
  const database = props?.database || getDatabase()
  const appExpress = props?.appExpress || getApp()

  async function start() {
    await database.start()
    appExpress.start(3333)
  }

  return { start }
}
