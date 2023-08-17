import axios from '@/lib/axios'
import useAxiosAuth from '@/lib/hooks/useAxiosAuth'
import type { NextPage } from '@/types/next'
import { signIn, signOut, useSession } from 'next-auth/react'
const Home: NextPage = () => {
  const { data: session } = useSession()
  const axiosAuth = useAxiosAuth()
  console.log('is logined', session?.user)

  const handleSubmit = async () => {
    const res = await axiosAuth.get('/get')
    console.log(res)
  }

  const handleLogin = async () => {
    // gọi đúng name nha k thì nó ra 1 trang login mặc định cho mà dùng
    // name = credentials đã config ở trong api/auth
    signIn('credentials', { username: 'jsmith', password: '1234' })
  }

  const handleLogOut = async () => {
    signOut()
  }
  return (
    <div>
      <button onClick={handleSubmit}>GET DATA</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Home
