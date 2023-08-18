import { VariantProps, cva } from "class-variance-authority";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";


const customBadgeVariants = cva("", {
    variants: {
      size: {
        default: "h-10 px-4 py-2 text-base",
        xs: "px-2 py-0.5 text-xs",
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-1 text-base",
        lg: "px-4 py-1 text-lg",
      },
      width: {
        default: "w-fit",
        full: "w-full",
        fit: "w-fit",
      },
      rounded: {
        default: "rounded",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
        none: "rounded-none",
      },
    defaultVariants: {
      variant: "default",
      size: "default",
      width:"default",
      rounded: "default",
    },
  }
});

interface Props extends VariantProps<typeof customBadgeVariants> {
    name:string,
    className?:string,
}

const CustomBadge = (props:Props) => {
    const {name='Badge', size='default', rounded="default", width='default', className='', ...remaining} = props;
  return (
    <Badge className={cn("custom-badge flex items-center justify-center",customBadgeVariants({  size, width,rounded, className }))} {...remaining}>
        {name}
    </Badge>
  )
}

export default CustomBadge