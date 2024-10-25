import React, { useEffect } from 'react'
import useWindowSize from '@/lib/customHooks/UseWindowsDimension'
import ResponsiveImage from '@/components/utility/image/ResponsiveImage'
import logo from '@/public/logo.svg'
import NavLl from './NavLl'
import { data } from './NavData'

interface props {
  close: () => void
  isOpen: boolean
}

const Nav = ({close, isOpen}: props) => {
  const width = useWindowSize().width
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow='hidden'
    }

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [isOpen])

  const closeMenu = () => {
    if(width && width < 1024){
      close()
    }
  } 

  const routes  = data.map((each, idx) => {
    return <NavLl 
            key={idx}
            name={each.name}
            route={each.route}
            close={closeMenu}
          />
  })
  return (
    <nav className={`md:static md:block lg:w-fit lg:h-fit absolute top-0 left-0 w-screen h-screen md:h-fit md:w-fit  bg-[#061F24]/50 z-30 bg-opacity-75 overflow-hidden ${ isOpen ? 'block' : 'hidden'} md:bg-transparent md:bg-opacity-100 md:z-0`} onClick={closeMenu}>
      <div className={`h-full absolute top-0 md:static  w-[70%] md:w-fit lg:pt-0 transition-all duration-300 delay-75 ease-in-out bg-[#FFF] md:bg-transparent pt-9 pl-6 md:pt-0 md:pl-0 ${ isOpen ? 'animate-[comeout_0.3s_ease-in-out_0.1s_both]' : 'animate-[goout_0.5s_ease-in-out_both]'} xs:w-[270px] `} onClick={(event) => event.stopPropagation()}>
       <div className='w-[5.5rem] mx-auto md:hidden'>
          <ResponsiveImage 
            alt='logo'
            placeholder='empty'
            width={120}
            height={54}
            src={logo}
          />
        </div>
        <ul className='mt-16 lg:mt-0 gap-y-7 flex-col flex lg:flex-row  lg:gap-x-8 lg:justify-center lg:items-center lg:text-center '>
        {routes}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
