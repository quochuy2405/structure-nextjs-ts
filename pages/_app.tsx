import type { AppProps } from '@/types/next'
import '@/styles/global.css'

function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout

  return <Component {...pageProps} />
}

export default App
