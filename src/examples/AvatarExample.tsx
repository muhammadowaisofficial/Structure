import CustomAvatar from '@/components/customui/CustomAvatar'
import React from 'react'

const AvatarExample = () => {
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Avatar</h4>
    <CustomAvatar  imageSrc="https://github.com/shadcn.png" className="h-8 w-8"/>
    <CustomAvatar  imageSrc="https://github.com/shadcn.png" className="h-20 w-20"/>
    </div>
  )
}

export default AvatarExample