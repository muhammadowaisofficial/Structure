import React, { FC } from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  placeholder?: string;
}

const CustomTextArea: FC<Props> = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
    placeholder = "",
    ...remaining
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn("", labelClassName)}>{label}</FormLabel>
          <FormControl>
            {/* <Input
              placeholder={placeholder}
              {...field}
              className={cn(
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                className
              )}
              {...remaining}
            /> */}
            <Textarea
              placeholder={placeholder}
              className={cn("focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0", className)}
              {...remaining}
              {...field}
            />
          </FormControl>
          <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomTextArea
// import React, { FC } from 'react'
// import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Textarea } from '@/components/ui/textarea';

// type Props = {
//     control:any,
//     darkmode?:boolean,
//     rows?: number;
//     label:string,
//     name:string,
//     placeholder:string,
//     description?:string,
//     className?: string;
// }

// const CustomTextArea:FC<Props> = ({control,label,placeholder,name,description,darkmode}) => {
//   return (
//     <FormField
//           control={control}
//           name={name}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className={darkmode ? '' : 'text-white'}> 
//                 {label}
//               </FormLabel> 
//               <FormControl>
//                 <Textarea
//                   placeholder={placeholder}
//                   {...field}
//                   //darkmode={darkmode}
//                   className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-solid border-blue-700 rounded-md border-blue-600"
//                 />
//               </FormControl>
//               <FormDescription>{description}</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         /> 
//   )
// }

// export default CustomTextArea