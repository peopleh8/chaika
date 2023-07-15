import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '@/styles/globals.scss'

const App:FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  NProgress.configure({ showSpinner: false })

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start())
    router.events.on('routeChangeComplete', () =>  NProgress.done())
    router.events.on('routeChangeError', () =>  NProgress.done())
  }, [])
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App