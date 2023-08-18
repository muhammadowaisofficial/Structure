import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/ui/form";
  import { Checkbox } from "@/ui/checkbox";
  
  import { cn } from "@/lib/utils";
  
  type Props = {
    control: any;
    label: string;
    labelClassName?: string;
    name: string;
    className?: string;
    description?: string;
    descriptionClassName?: string;
    options: {
      id: string;
      label: string;
      description?: string;
    }[];
  };
  
  const CustomCheckboxGroup = (props: Props) => {
    const {
      control,
      label,
      name = "",
      className = "",
      labelClassName = "",
      description = "",
      descriptionClassName = "",
      options,
      ...remainig
    } = props;
    return (
      <FormField
        control={control}
        name={name}
        render={() => (
          <FormItem className={cn("mb-3",className)}>
            <div className="">
              <FormLabel className={cn("text-base",labelClassName)}>{label}</FormLabel>
              <FormDescription className={cn("",descriptionClassName)}>{description}</FormDescription>
            </div>
            {options.map((item) => (
              <FormField
                key={item.id}
                control={control}
                name={name}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          // checked={field.value?.indexOf(item.id)>=0}
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value: any) => value !== item.id
                                  )
                                );
                          }}
                          {...remainig}
                        />
                      </FormControl>
                      <div className="leading-none">
                        <FormLabel className="">
                          {item.label}
                        </FormLabel>
                        <FormDescription className="">
                          {item.description}
                        </FormDescription>
                      </div>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };
  
  export default CustomCheckboxGroup;