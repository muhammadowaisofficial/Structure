import { cn } from "@/lib/utils";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Button } from "@/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/ui/command";

type Props = {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  messageClassName?: string;
  popoverTriggerClassName?: string;
  popoverContentClassName?: string;
  optionsClassName?: string;
  optionsInputClassName?: string;
  optionsPlaceholder?: string;
  optionsEmptyPlaceholder: string;
  optionsEmptyClassName?: string;
  optionsGroupClassName?: string;
  form: any,
  placeHolder: string;
  options: { id: string,value: string }[],
};

const CustomCombobox = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
    messageClassName = "",
    popoverTriggerClassName = "",
    popoverContentClassName = "",
    optionsClassName = "",
    options,
    placeHolder = "",
    optionsPlaceholder = "",
    optionsInputClassName = "",
    optionsEmptyPlaceholder = "",
    optionsEmptyClassName = "",
    optionsGroupClassName = "",
    form
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", className)}>
          <FormLabel className={cn("", labelClassName)}>{label}</FormLabel>
          <Popover >
            <PopoverTrigger
              asChild
              className={cn("", popoverTriggerClassName)}
            >
              <FormControl>
                <Button variant={"outline"} role="combobox" className={cn("w-full justify-between", !field.value && "text-muted-foreground")}>
                  {/* {field.value
                    ? options.find(
                      (option) => option.value === field.value
                    )?.value
                    : placeHolder} */}
                    {
                      field.value || placeHolder
                    }
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className={cn("w- p-0", popoverContentClassName)}>
              <Command className={cn("", optionsClassName)}>
                <CommandInput placeholder={optionsPlaceholder} className={cn("border-none outline-none focus-visible::outline-none ring-0 focus-visible:ring-0", optionsInputClassName)} />
                <CommandEmpty className={cn("flex items-center justify-center p-4", optionsEmptyClassName)}>{optionsEmptyPlaceholder}</CommandEmpty>
                <CommandGroup className={cn("", optionsGroupClassName)}>
                  {options.map((option) => (
                    <CommandItem
                      value={option.value}
                      key={option.value}
                      onSelect={(value) => {
                        form.setValue(name, value);
                        form.clearErrors(name)
                      }}
                    >
                      {/* <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          option.value != field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      /> */}
                      {option.value}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription>
          <FormMessage className={cn("", messageClassName)} />
        </FormItem>
      )}
    />
  );
};

export default CustomCombobox;