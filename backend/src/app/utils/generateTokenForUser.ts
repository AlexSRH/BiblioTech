import jwt from 'jsonwebtoken'

import { User } from '@models/User'

export function generateTokenForUser(user: User, appSecret: string) {
  const userId = String(user.id)
  const token = jwt.sign({ id: userId }, appSecret)

  return token
}
