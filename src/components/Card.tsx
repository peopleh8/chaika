import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { CardType } from '@/types'
import styles from '@/styles/Card.module.scss'

const Card:FC<CardType> = ({ 
  isIcon,
  title,
  balance,
  avaliable,
  date,
  points
}) => {
  const formattedAvaliable: any = avaliable && avaliable.toLocaleString('en-US', { style: 'decimal' })

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      { !isIcon && !points && <>
        <div className={styles.price}>${balance}</div>
        <p className={styles.desc}>${formattedAvaliable} Avaliable</p>
      </> }
      { isIcon && date && <p className={styles.desc}>You've paid your {date.toLocaleString('en-US', { month: 'long' })} balance.</p> }
      { points && <p className={styles.desc}>{points}</p> }
      { isIcon && <div className={styles.icon}>
        <FontAwesomeIcon icon={faCheck} />
      </div> }
    </div>
  )
}

export default Card