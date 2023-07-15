import { FC } from 'react'
import Item from './Item'
import styles from '@/styles/List.module.scss'
import { TransactionsProps } from '@/types'

const List:FC<TransactionsProps> = ({ data, observer, balance }) => {
  return (
    <ul className={styles.list} id='list'>
      { data.map(item => (
        <Item
          key={item.id}
          id={item.id}
          type={item.type}
          price={item.price}
          name={item.name}
          desc={item.desc}
          discount={balance && (item.price * 100 / balance).toFixed(2)}
          date={item.date}
          status={item.status}
          authorizedUser={item.authorizedUser}
        />
      )) }
      <div className='observer' ref={observer} />
    </ul>
  )
}

export default List