import React from 'react'
import Link from 'next/link'
import styles from './footer.module.css'

const FooterCopyRight = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 lg:items-center mt-4'>
      <h3 className={`${styles.footerHeader}`}>©  2022 Dutiful®</h3>
      <ul className='flex flex-col lg:flex-row gap-6 lg:gap-4 lg:items-center text-sm lg:text-base text-footerList lg:ml-10'>
        <li>
          <Link href={'/privacy'}>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href={'/terms'}>
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href={'/cookie'}>
            Cookie Policy
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterCopyRight
