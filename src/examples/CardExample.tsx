'use client'
import CustomButton from '@/components/customui/CustomButton'
import CustomCard from '@/components/customui/CustomCard'
import React from 'react'

const CardExample = () => {
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Card</h4>
      <CustomCard >
        <p className="text">Card without Header or Footer</p>
      </CustomCard>
      <CustomCard title='Title'>
        <p className="text">Card with Header</p>
      </CustomCard>
      <CustomCard  footerChildren={
      <h4 className='font-semibold'>Footer</h4>}>
        <p className="text">Card with Footer</p>
      </CustomCard>
      <CustomCard  title='Title'  footerChildren={
      <div className="flex items-center justify-between w-full">
        <CustomButton variant={'outline'} width={'fit'} onClick={()=>console.log("cancel")}>Cancel</CustomButton>
        <CustomButton width={'fit'} onClick={()=>console.log("Confirm")}>Confirm</CustomButton>
      </div>}>
        <p className="text">Card with Title and Footer</p>
      </CustomCard>
      
      </div>
  )
}

export default CardExample