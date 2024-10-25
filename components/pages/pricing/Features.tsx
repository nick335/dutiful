import { featuresDb } from '@/lib/database/pricing/featuresDb'
import React from 'react'
import FeaturesTableRow from './FeaturesTableBody'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcnui/table"

const Features = () => {
  return (
    <section className='mt-14 lg:mt-20'>
      <h3 className='font-medium text-2xl lg:text-3xl font-circular '>Features Overview</h3>
      <div className='w-full mt-8'>
        <Table>
          <TableHeader className='!border-none'>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className='!text-lg font-medium font-circular  text-black'> Basic</TableHead>
              <TableHead className='!text-lg font-medium font-circular  text-black'>Standard</TableHead>
              <TableHead className='!text-lg font-medium font-circular  text-black'>Premium</TableHead>
            </TableRow>

          </TableHeader>
          <TableBody className='!mt-8'>
            {
              featuresDb.map((feature, idx) => {
                return <FeaturesTableRow key={idx} idx={idx+1} data={feature} />
              })
            }
          </TableBody>
        </Table>
        
      </div>
    </section>
  )
}

export default Features
