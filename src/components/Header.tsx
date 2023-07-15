import { FC } from 'react'
import { HeaderType } from '@/types'
import Card from './Card'
import styles from '@/styles/Header.module.scss'

const Header:FC<HeaderType> = ({ 
  date, 
  balance, 
  avaliable, 
  points 
}) => {
  return (
    <div className={styles.header}>
      <Card 
        isIcon={false}
        title={'Card balance'}
        balance={balance}
        avaliable={avaliable}
      />
      <Card 
        isIcon
        title={'No Payment Due'}
        date={date}
      />
      <Card 
        isIcon={false}
        title={'Daily Points'}
        points={points}
      />
    </div>
  )
}

export default Header