import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form';
import { cn } from '@/lib/utils';
import { Switch } from '@/ui/switch';


interface Props {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
}

const CustomSwitch = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-row items-center justify-between rounded-lg border p-4', className)}>
          <div className="space-y-0.5">
            <FormLabel className={cn("text-base", labelClassName)}>{label}</FormLabel>
            <FormDescription className={cn("", descriptionClassName)}>
              {description}
            </FormDescription>
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  )
}

export default CustomSwitch