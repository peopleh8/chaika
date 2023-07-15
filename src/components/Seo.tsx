import { FC } from 'react'
import Head from 'next/head'
import { SeoProps } from '@/types'

const Seo:FC<SeoProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default Seo