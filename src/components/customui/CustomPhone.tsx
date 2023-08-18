import {
  FormControl
  , FormDescription
  , FormField
  , FormItem
  , FormLabel
  , FormMessage
} from '@/ui/form'

import { cn } from '@/lib/utils';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  placeholder?: string;
}

const CustomPhone = (props: Props) => {
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
            <PhoneInput country={'us'}
              inputProps={{ name: name, autoFocus: true }}
              inputClass={cn("!w-full !h-10 !rounded-md !border !border-input !bg-background !py-2 !text-sm", className)}
              {...field} />
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

export default CustomPhone