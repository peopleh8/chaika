import { FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '@/styles/Item.module.scss'
import { TransactionProps } from '@/types'
import { processDate } from '@/utils/getDate'

const Item:FC<TransactionProps> = ({
  id,
  type,
  price,
  name,
  desc,
  discount,
  date,
  status,
  authorizedUser
}) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} href={`${id}`}>{name}</Link>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faApple} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>
            {type === 'payment' ? `+$${price.toFixed(2)}` : `$${price.toFixed(2)}`}
          </div>
        </div>
        <div className={styles.body}>
          <p className={styles.desc}>
            { status === 'pending' ? `${status} - ${desc}` : desc}
          </p>
          { type !== 'payment' && <span className={styles.discount}>{discount}%</span> }
        </div>
        <div className={styles.date}>
          { authorizedUser ? `${authorizedUser} - ${processDate(date)}` : processDate(date) }
        </div>
      </div>
    </li>
  )
}

export default Item