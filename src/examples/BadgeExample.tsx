import CustomBadge from '@/components/customui/CustomBadge'
import React from 'react'

const BadgeExample = () => {
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Badge</h4>
      <p className="mb-3">Sizes:</p>
      <CustomBadge name='XS'  size={'xs'}/>
      <CustomBadge name='SM'  size={'sm'}/>
      <CustomBadge name='MD'  size={'md'}/>
      <CustomBadge name='LG'  size={'lg'}/>
      <CustomBadge name='Default'  size={'default'}/>
      <p className="mt-3">Width:</p>
      <CustomBadge name='Fit' width={'fit'}  size={'default'}/>
      <CustomBadge name='Default' width={'default'}  size={'default'}/>
      <CustomBadge name='Full' width={'full'}  size={'default'}/>
      <p className="mt-3">Rounded:</p>
      <CustomBadge name='Default' rounded={'default'} width={'full'}  size={'default'}/>
      <CustomBadge name='None' rounded={'none'} width={'full'}  size={'default'}/>
      <CustomBadge name='Full' rounded={'full'} width={'full'}  size={'default'}/>
      <CustomBadge name='XL' rounded={'xl'} width={'full'}  size={'default'}/>
      <CustomBadge name='LG' rounded={'lg'} width={'full'}  size={'default'}/>
      <CustomBadge name='MD' rounded={'md'} width={'full'}  size={'default'}/>
      <CustomBadge name='SM' rounded={'sm'} width={'full'}  size={'default'}/>
    </div>
  )
}

export default BadgeExample