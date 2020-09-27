import React, { createContext, useContext, useState } from 'react'
import api from '../services/api'

interface SingInProps {
  email: string
  password: string
}

interface RegisterProps extends SingInProps {
  name: string
}

interface User {
  name: string
  email: string
}

interface AuthContextData {
  signed: boolean
  singIn: (props: SingInProps) => Promise<void>
  register: (props: RegisterProps) => Promise<void>
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

  async function singIn({ email, password }: SingInProps) {
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

  async function register({ email, password, name }: RegisterProps) {
    const response = await api.post<ResponseSignIn>('users', {
      name,
      email,
      password
    })

    setUser(response.data.user)
    setToken(response.data.token)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, singIn, token, user, singOut, register }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
