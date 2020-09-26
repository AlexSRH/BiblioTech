import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

interface IDecoded {
  id: number
}

export default function (
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: 'Token not provided' })
  }

  const [scheme, token] = authHeader.split(' ')

  if (!/Bearer$/i.test(scheme)) {
    return response.status(401).json({ message: 'Token poorly formatted' })
  }

  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET) as IDecoded

    request.userId = Number(decoded.id)

    next()
  } catch {
    return response.status(401).json({ error: 'Token Invalid' })
  }
}
