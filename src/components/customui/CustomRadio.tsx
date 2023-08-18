import React, { FC } from 'react'
//import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

type Props = {
  control: any,
  darkmode?: boolean,
  label?: string,
  name: string,
  orientation?: 'horizontal' | 'vertical';
  options: { name: string; id: string }[];
}

const CustomRadio: FC<Props> = ({ control, label, name, darkmode, options, orientation }) => {

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={darkmode ? '' : 'text-white'}>
            {label}
          </FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange}
              orientation={orientation}
               defaultValue={field.value}
              // value={selected}
              className={`${orientation === 'horizontal' ? 'flex flex-row' : 'flex flex-col'}`}>
              {options.map((option) => {
                return (
                  <div className="flex items-center space-x-2" key={option.id} >
                    <RadioGroupItem value={option.name} key={option.id} />
                    <FormLabel className="font-normal">{option.name}</FormLabel>
                    {/* <Label htmlFor={'r' + option.id} className="cursor-pointer">
                      {option.name}
                    </Label> */}
                    </div>
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default CustomRadio;