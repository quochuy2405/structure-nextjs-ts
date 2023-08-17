import type { AppProps } from '@/types/next'
import { SessionProvider } from 'next-auth/react'
import '@/styles/global.css'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getLayout = Component.getLayout

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
