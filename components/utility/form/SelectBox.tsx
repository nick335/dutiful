import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import styles from '@/components/utility/form/form.module.css'

interface props {
 label: string
 value: string
 activeState: string
 onChange: (value: string) => void
 icon: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectBox = ({label, value, activeState, onChange, icon}: props) => {
  const isactive = value === activeState
  return (
    <div className={`flex items-center gap-x-4 lg:gap-x-6 justify-center border rounded-md lg:rounded-xl relative lg:h-[5.0125rem] h-16 transition-all ease-linear duration-75 text-lg lg:text-xl font-medium font-circular ${
      !isactive ? styles.selectBoxDefault : styles.selectBoxActive
    }`} onClick={() => onChange(value)}>
      {/* {icon} */}
      <p>{label}</p>
      { isactive && <div className='w-fit absolute -top-4 -right-4 z-10'>
        <FaCircleCheck className={'text-textHighlight text-2xl lg:text-3xl'} />
      </div>}
    </div>
  )
}

export default SelectBox
