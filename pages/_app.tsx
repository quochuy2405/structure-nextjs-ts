import '@/styles/global.css'
import type { AppProps } from '@/types/next'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getLayout = Component.getLayout || ((page: any) => page)
  const layouts = getLayout(<Component {...pageProps} />)

  return <>{layouts}</>
}

export default App
