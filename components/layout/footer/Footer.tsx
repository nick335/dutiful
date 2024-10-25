import React from 'react'
import {data} from '@/lib/database/footer/footerListsData'
import FooterList from './FooterList'
import FooterSocial from './FooterSocial'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import styles from './footer.module.css'
import FooterCopyRight from './FooterCopyRight';

const Footer = () => {
  const footerList = data.map((each, idx) => {
    return <FooterList key={idx} data={each}/>
  })
  return (
    <footer className='bg-footerBg py-8 lg:py-20 font-circular '>
      <div className='marginLayout'>
        <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4  ${styles.footerSeparator} `}>
          {footerList}
        </div>
        <div className={`flex flex-col gap-10 lg:flex-row lg:!pb-6 justify-between lg:items-center mt-6 ${styles.footerSeparator} `}>
          <FooterSocial header='Follow Us'>
            <FaFacebookF  className={`${styles.footerSocial}`}/>
            <FaInstagram  className={`${styles.footerSocial}`}/>
            <FaTwitter  className={`${styles.footerSocial}`}/>
            <FaYoutube  className={`${styles.footerSocial}`}/>
            <FaLinkedin  className={`${styles.footerSocial}`}/>
          </FooterSocial>
          <FooterSocial header='Download the app'>
            <FaApple className={`${styles.footerSocial}`}/>
            <IoLogoGooglePlaystore className={`${styles.footerSocial}`}/>
          </FooterSocial>
        </div>
        <FooterCopyRight />
      </div>
    </footer>
  )
}

export default Footer
