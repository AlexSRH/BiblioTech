import React, { createContext, useContext, useState } from 'react'
import api from '../services/api'

interface singInProps {
  email: string
  password: string
}

interface User {
  name: string
  email: string
}

interface AuthContextData {
  signed: boolean
  singIn: (props: singInProps) => Promise<void>
  singOut: () => void
  token: string | null
  user: User | null
}

interface ResponseSignIn {
  token: string
  user: User
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  async function singIn({ email, password }: singInProps) {
    const response = await api.post<ResponseSignIn>('sessions', {
      email,
      password
    })

    setUser(response.data.user)
    setToken(response.data.token)
  }

  function singOut() {
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, singIn, token, user, singOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
