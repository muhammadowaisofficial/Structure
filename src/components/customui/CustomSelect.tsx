import React, { FC } from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type Props = {
  control:any,
  label?:string,
  name:string,
  className?: string;
  labelclassName?: string;
  description?:string,
  descriptionClassName?:string,
  placeholder:string,
  options: { id: string,name: string,value: string }[];
}

const CustomSelect = (props:Props) => {  
  const {control,label='',placeholder='',name,options,description='',labelclassName='',className='',descriptionClassName=""} =props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("",className)}>
          <FormLabel className={cn("",labelclassName)}>
            {label}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {options.map((option) => {
                  return (
                    <SelectItem value={option.value} key={option.id}>
                      {option.name}
                    </SelectItem>
                  );
                })}
                </SelectContent>
              </Select>
          <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
