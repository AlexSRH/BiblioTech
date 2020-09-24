import bcrypt from 'bcryptjs'
import { Repository } from 'typeorm'

import { User } from '@models/User'
import { getUserRepository } from '@repositories/userRepository'
import { CreateUserUseCaseDTO } from './CreateUserUseCaseDTO'

interface getCreateUserUseCaseProps {
  userRepository?: Repository<User>
}

export function getCreateUserUseCase(props?: getCreateUserUseCaseProps) {
  const userRepository = props?.userRepository || getUserRepository()

  async function handle({ email, name, password }: CreateUserUseCaseDTO) {
    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const passwordHash = await bcrypt.hash(password, 8)

    const user = new User({ name, email, password: passwordHash })
    return await userRepository.save(user)
  }

  return { handle }
}
