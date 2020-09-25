import { getDatabase } from '@database/index'
import { Repository } from 'typeorm'

export function getRepository<t>(entity: any) {
  const database = getDatabase()
  const connection = database.getConnection()

  const userRepository: Repository<t> = connection.getRepository(entity)

  return userRepository
}
