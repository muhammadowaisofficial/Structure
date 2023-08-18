import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover';
import { Button } from '@/ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/ui/calendar';
import { format } from "date-fns"


type Props = {
    control: any,
    label?: string,
    placeholder?: string;
    name: string,
    description?: string,
    className?: string,
}

const CustomDatePicker = (props:Props) => {
    const {name='',control,label='',placeholder='',description='',className=''}=props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("mb-3",className)}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
            <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{placeholder || "Pick a Date"}</span>
                  )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    //selected={(field.value as any) instanceof Date ? field.value : null}
                    //onSelect={(value) => field.onChange(value)}
                    //disabled={(date) =>date > new Date() || date < new Date("1900-01-01")}
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormDescription>{description}</FormDescription>
              <FormMessage />
        </FormItem>
        )}
        />
  )
}

export default CustomDatePicker