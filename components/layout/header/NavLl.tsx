'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface props {
  name: string,
  route: string,
  close: () => void
}


const NavLl = ({name, route, close}: props) => {
  const pathname = usePathname()
  const isactive = pathname === route

  return (
    <li className={`font-medium text-sm transition-all ease-in duration-75  capitalize lg:text-lg
      ${
        isactive ? 'text-menuLinkActive' : 'text-menuLink lg:hover:text-menuLinkActive'
      }
    `}>
      <Link href={route} onClick={close}>
        {name}    
      </Link>
    </li>
  )
}

export default NavLl
