import React from 'react'
import {
  TableCell,
  TableRow,
} from "@/components/shadcnui/table"
import { IoCheckmark } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import FormButton from '@/components/utility/buttons/FormButton';


interface data {
  label: string,
  basic: string | boolean
  standard: string | boolean
  premium: string | boolean
}

interface props {
  idx: number
  data: data
}

const FeaturesTableRow = ({idx, data}: props) => {
  const isEven = idx % 2 === 0 ? true : false

  // Utility function to check if a property is a string or boolean
  const isString = (value: string | boolean): value is string => typeof value === "string";
  const isBoolean = (value: string | boolean): value is boolean => typeof value === "boolean"

  return (
    <TableRow className={`text-sm font-medium  !py-8
      ${
        isEven ? 'bg-white' : ''
      }
    `}>
      <TableCell  className=' text-lg font-circular font-medium text-[#686868] max-w-[300px]'>
       {data.label}
      </TableCell>
      <TableCell  className='capitalize'>
        {
          isString(data.basic) ? data.basic === 'button' ? 
            <div className='max-w-[244px]'>
              <FormButton name='Get Started' className='sm:min-h-[52px]' />
            </div>
          :<p className='text-lg font-circular font-medium'>{data.basic}</p> : isBoolean(data.basic) ? <p>{data.basic ? <IoCheckmark className='text-2xl text-textHighlight' /> : <HiMiniXMark className='text-2xl text-[#9E9E9E]' />}</p> : <p>N/A</p>
        }
      </TableCell>
      <TableCell  className='!py-3.5 capitalize'>
        {
          isString(data.standard) ? data.basic === 'button' ? 
          <div className='max-w-[244px]'>
            <FormButton name='Get Started' className='sm:min-h-[52px]' />
          </div>
        : <p className='text-lg font-circular font-medium'>{data.standard}</p> : isBoolean(data.standard) ? <p>{data.standard ? <IoCheckmark className='text-2xl text-textHighlight' /> : <HiMiniXMark className='text-2xl text-[#9E9E9E]' />}</p> : <p>N/A</p>
        }
      </TableCell>
      <TableCell className='!py-3.5 capitalize'>
        {
          isString(data.premium) ? data.basic === 'button' ? 
          <div className='max-w-[244px]'>
            <FormButton name='Get Started' className='sm:min-h-[52px]' />
          </div>
        : <p className='text-lg font-circular font-medium'>{data.premium}</p> : isBoolean(data.premium) ? <p>{data.premium ? <IoCheckmark className='text-2xl text-textHighlight' /> : <HiMiniXMark className='text-2xl text-[#9E9E9E]' />}</p> : <p>N/A</p>
        }
      </TableCell>
    </TableRow>
  )
}

export default FeaturesTableRow