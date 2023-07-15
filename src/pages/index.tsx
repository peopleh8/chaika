import { FC, useState, useEffect, useRef, useMemo } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import Header from '@/components/Header'
import List from '@/components/List'
import Title from '@/components/Title'
import Seo from '@/components/Seo'
import { TransactionsProps } from '@/types'
import { getRandom } from '@/utils/getRandom'
import { calculatePoints } from '@/utils/calculatePoints'
import styles from '@/styles/Homepage.module.scss'

const Homepage:FC<TransactionsProps> = ({ data, totalCount }) => {
  const date: Date = new Date()
  
  const observe = useRef<any>(null)
  const page = useRef<number>(1)
  const pagesCount = useRef<number | null>(null)

  const limit: number = 1500
  const balance:number = getRandom('balance-seed', 1, limit)
  const avaliable: number = limit - balance
  const points: string = useMemo(() => calculatePoints(), [date.getDate()])

  const [ tansactions, setTransactions ] = useState(data)

  useEffect(() => {
    pagesCount.current = Math.ceil(totalCount / 10)
    
    const loadMoreTransactions = async () => {
      page.current += 1
      
      const { data } = await axios.get<TransactionsProps | any>(`${process.env.baseUrl}/transactions`, {
        params: {
          _limit: 10,
          _page: page.current,
        }
      })

      setTransactions(prev => [...prev, ...data])
    }
    
    const options = {
      root: document.querySelector('#list'),
      rootMargin: '0px',
      threshold: 1.0,
    }

    const callback = (entries: any, observer: any) => {
      if (entries[0].isIntersecting && pagesCount.current && page.current < pagesCount.current) {
        loadMoreTransactions()
      }
    }
    
    const observer = new IntersectionObserver(callback, options)

    observer.observe(observe.current && observe.current)
  }, [])
  
  return (
    <div className={styles.transactions}>
      <Seo title='Transactions' />
      <Header
        date={date}
        balance={balance}
        avaliable={avaliable}
        points={points}
      />
      <Title>Latest Transactions</Title>
      { 
        data && data.length > 0
          ? <List 
              data={tansactions} 
              observer={observe}
              balance={balance}
            />
          : <Title>Transactions list is empty</Title>
      }
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get<TransactionsProps>(`${process.env.baseUrl}/transactions`, {
    params: {
      _limit: 10,
      _page: 1,
    }
  })
  
  return {
    props: { 
      data: response.data,
      totalCount: response.headers['x-total-count']
    }
  }
}

export default Homepage