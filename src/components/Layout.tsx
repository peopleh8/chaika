import { FC } from 'react'
import { ChildrenProps } from '@/types'


const Layout:FC<ChildrenProps> = ({ children }) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Layout