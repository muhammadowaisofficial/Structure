import { ReactNode } from 'react'
import { AspectRatio } from '@/ui/aspect-ratio'

type Props = {
    ratio: number,
    children:ReactNode
}

const CustomAspectRatio = (props:Props) => {
  return (
    <AspectRatio ratio={props.ratio}>
        {props.children}
    </AspectRatio>
  )
}

export default CustomAspectRatio