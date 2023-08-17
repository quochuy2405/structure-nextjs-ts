import { useSession } from 'next-auth/react'
import axios from '../axios'

const useRefreshToken = () => {
  const { data: session } = useSession()

  const refreshToken = () => {
    const res = axios.post('/auth/refresh', {
      refresh: session?.refreshToken
    })
    if (res) session.accessToken = session.accessToken
  }
  return refreshToken
}

export default useRefreshToken
