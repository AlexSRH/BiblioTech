import 'dotenv/config'
import { createConnection, getConnection as getDbConnection } from 'typeorm'

export function getDatabase() {
  async function start() {
    await createConnection()
  }

  function getConnection() {
    if (process.env.NODE_ENV === 'test') {
      return getDbConnection('test')
    } else {
      return getDbConnection('default')
    }
  }

  return { start, getConnection }
}
