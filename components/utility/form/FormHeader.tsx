import React from 'react'


interface props {
  header: string
  subHeader: string
  containerStyle?: string
}

const FormHeader = ({header, subHeader, containerStyle}: props) => {
  return (
    <div className={`${containerStyle} flex flex-col-reverse gap-y-2`}>
      <h3 className='font-semibold text-2xl lg:text-4xl text-[#1E1E4B] font-recoleta'>{header}</h3>
      <p className='text-sm lg:text-base font-medium text-[#686868] '>{subHeader}</p>
    </div>
  )
}

export default FormHeader
