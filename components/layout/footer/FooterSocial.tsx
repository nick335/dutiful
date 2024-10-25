import React from 'react'
import styles from './footer.module.css'

interface props {
  header: string,
  children: React.ReactNode
}

const FooterSocial = ({header, children}: props) => {
  return (
    <div className='flex items-center'>
      <h3 className={`${styles.footerHeader}`}>{header}</h3>
      <div className='flex gap-4 lg:gap-8 items-center ml-8'>
        {children}
      </div>
    </div>
  )
}

export default FooterSocial
