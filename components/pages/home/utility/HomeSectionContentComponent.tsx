import React from 'react'

interface props {
  sectionHeader: string
  sectionPara: string
  sectionContainerStyle?: string
}

const HomeSectionContentComponent = ({ sectionHeader, sectionPara, sectionContainerStyle }: props) => {
  return (
    <div className={`${sectionContainerStyle}`}>
      <h3 className='font-recoleta font-semibold text-2xl lg:text-4xl text-center lg:text-left text-[#1E1E4B]'>{sectionHeader}</h3>
      <p className='font-circular text-lg lg:text-xl text-center lg:text-left mt-2 lg:mt-4 text-[#656565]'>{sectionPara}</p>
    </div>
  )
}

export default HomeSectionContentComponent
