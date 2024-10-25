import React from 'react'
import Link from 'next/link'

interface dataList {
  label: string,
  link: string
}

interface data {
  header: string,
  list: dataList[]
}

interface props {
  data: data
}

const FooterList = ({data}: props) => {
  return (
    <div>
      <h3 className='text-white font-medium text-lg lg:text-xl'>{data.header}</h3>
      <ul className='grid grid-cols-1 gap-2 mt-4 '>
        {
          data.list.map((each, idx) => {
            return <li key={idx} className='text-footerList font-medium text-sm lg:text-base hover:text-white transition-colors duration-75 ease-linear w-fit'>
                <Link href={each.link}>
                  {each.label}
                </Link>
              </li>
          })
        }
      </ul>
    </div>
  )
}

export default FooterList
