import jwt from 'jsonwebtoken'

import { User } from '@models/User'

export default function generateTokenForUser(user: User, appSecret: string) {
  const userId = String(user.id)
  const token = jwt.sign(userId, appSecret)

  return token
}
