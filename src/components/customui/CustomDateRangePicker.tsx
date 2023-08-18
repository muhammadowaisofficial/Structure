import React from "react";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

type Props = {
    control: any,
    label?: string,
    placeholder?: string;
    name: string,
    description?: string,
    className?: string,
}

const CustomDateRangePicker = (props:Props) => {
    const {name='',control,label='',placeholder='',description='',className=''}=props;

    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 5),
      })


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
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !field.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {field.value?.from ? (
              field.value.to ? (
                <>
                  {format(field.value.from, "LLL dd, y")} -{" "}
                  {format(field.value.to, "LLL dd, y")}
                </>
              ) : (
                format(field.value.from, "LLL dd, y")
              )
            ) : (
              <span>{placeholder || "Pick a Date"}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={field.value?.from}
            selected={field.value}
            onSelect={field.onChange}
            // defaultMonth={date?.from}
            // selected={date}
            // onSelect={setDate}
            numberOfMonths={2}
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
export default CustomDateRangePicker