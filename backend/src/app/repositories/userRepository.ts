import { getDatabase } from '@database/index'
import { User } from '@models/User'

function getUserRepository() {
  const database = getDatabase()
  const connection = database.getConnection()

  const userRepository = connection.getRepository(User)

  return userRepository
}

export { getUserRepository }
