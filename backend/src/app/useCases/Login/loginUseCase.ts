import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { Repository } from 'typeorm'

import { User } from '@models/User'
import { ILoginDTO } from './ILoginDTO'
import { getUserRepository } from '@repositories/userRepository'
import generateTokenForUser from '@utils/generateTokenForUser'

interface getLoginUseCaseProps {
  userRepository?: Repository<User>
}

export function getLoginUseCase(props?: getLoginUseCaseProps) {
  const userRepository = props?.userRepository || getUserRepository()

  async function handle({ email, password }: ILoginDTO) {
    const user = await userRepository.findOne({ email })

    if (!user) {
      throw new Error("User doesn't exist")
    }

    const checkedPassword = await bcrypt.compare(password, user.password)

    if (!checkedPassword) {
      throw new Error('Incorrect password')
    }

    const token = generateTokenForUser(user, process.env.APP_SECRET)

    return { token, user }
  }

  return { handle }
}
