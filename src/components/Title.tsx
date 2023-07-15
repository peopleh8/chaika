import { FC } from 'react'
import styles from '@/styles/Title.module.scss'
import { ChildrenProps } from '@/types'

const Title:FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={styles.title}>
      {children}
    </div>
  )
}

export default Title