import { FC} from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import Seo from '@/components/Seo'
import { DetailProps } from '@/types'
import styles from '@/styles/Detail.module.scss'

const Detail:FC<DetailProps> = ({ data }) => {
  return (
    <>
      <Seo title={data.name} />
      <div className={styles.detail}>
        <div className={styles.body}>
          <div className={styles.status}>Status: <span>{data.status}</span></div>
          <p className={styles.name}>
            { data.status === 'pending' ? `${data.status} - ${data.desc}` : data.desc }
          </p>
        </div>
        <div className={styles.footer}>
          <div className={styles.text}>Total</div>
          <div className={styles.text}>
            { data.type === 'payment' ? `+$${data.price.toFixed(2)}` : `$${data.price.toFixed(2)}` }
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const { data } = await axios.get<DetailProps>(`${process.env.baseUrl}/transactions/${params.id}`)
  
  return {
    props: { data }
  }
}

export default Detail