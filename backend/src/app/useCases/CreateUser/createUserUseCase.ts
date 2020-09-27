import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { Repository } from 'typeorm'

import { User } from '@models/User'
import { ICreateUserUseCaseDTO } from './ICreateUserUseCaseDTO'
import { generateTokenForUser } from '@utils/generateTokenForUser'
import { getRepository } from '@utils/getRepository'

interface getCreateUserUseCaseProps {
  userRepository?: Repository<User>
}

export function getCreateUserUseCase(props?: getCreateUserUseCaseProps) {
  const userRepository = props?.userRepository || getRepository<User>(User)

  async function handle({ email, name, password }: ICreateUserUseCaseDTO) {
    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const passwordHash = await bcrypt.hash(password, 8)

    const user = new User({ name, email, password: passwordHash })

    const savedUser = await userRepository.save(user)
    const token = generateTokenForUser(savedUser, process.env.APP_SECRET)

    savedUser.password = undefined

    return { user: savedUser, token }
  }

  return { handle }
}
