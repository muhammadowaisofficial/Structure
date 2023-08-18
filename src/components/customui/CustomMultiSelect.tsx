import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/ui/command";
import {  ChevronsUpDown, X } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import CustomButton from "./CustomButton";

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
  form: any;
  placeHolder: string;
  options: { id: string; value: string }[];
};

const CustomMultiSelect = (props: Props) => {
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
    form,
  } = props;

  const [selected, setSelected] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const onSelect = (value: string) => {
    const exists = selected.includes(value);
    if (!exists) {
      const data = [...selected, value];
      setSelected(data);
      return data;
    } else {
      let removedData = selected.filter((val) => {
        return val !== value;
      });
      setSelected(removedData);
      return removedData;
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn("", labelClassName)}>{label}</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger
                asChild
                className={cn("h-fit", popoverTriggerClassName)}
              >
                <FormControl>
                  <Button
                    variant={"outline"}
                    role="combobox"
                    className={cn(
                      "w-full justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {/* {field.value
                    ? options.find(
                      (option) => option.value === field.value
                    )?.label
                    : placeHolder} */}
                    {selected.length != 0 ? (
                      <div className="flex w-full flex-wrap items-center gap-1">
                        {selected.map((selectedItem) => (
                          <Badge key={selectedItem} className="text-sm">
                            {selectedItem}
                            <X
                              className={"ml-2 h-3 w-3"}
                              onClick={() => {
                                const removedData = selected.filter(
                                  (val) => val != selectedItem
                                );
                                setSelected(removedData);
                                form.setValue(name, removedData);
                                // console.log(selectedItem)
                              }}
                            />
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      placeHolder
                    )}
                    <div className="flex w-fit ">
                      {selected.length != 0 && (
                        <X
                          className={"hrink-0 h-4 w-4 opacity-50"}
                          onClick={() => {
                            setSelected([]);
                            form.setValue(name, []);
                          }}
                        />
                      )}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </div>
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className={cn("w- p-0", popoverContentClassName)}>
                <Command className={cn("", optionsClassName)}>
                  <CommandInput
                    placeholder={optionsPlaceholder}
                    onValueChange={setSearch}
                    value={search}
                    className={cn(
                      "focus-visible::outline-none border-none outline-none ring-0 focus-visible:ring-0",
                      optionsInputClassName
                    )}
                  />
                  <CommandEmpty
                    className={cn(
                      "flex flex-col items-center justify-center p-4",
                      optionsEmptyClassName
                    )}
                  >
                    {optionsEmptyPlaceholder}
                    {/* <CustomButton
                      variant={"default"}
                      width={"full"}
                      className="mt-4"
                      onClick={() => {
                        if(search !== ""){
                          form.setValue(name, onSelect(search.toLowerCase()));
                          form.clearErrors(name);
                          setSearch("")
                        }
                      }}
                    >
                      Add
                    </CustomButton> */}
                  </CommandEmpty>
                  <CommandGroup className={cn("px-3", optionsGroupClassName)}>
                    {options.map((option) => (
                      <CommandItem
                        value={option.value}
                        key={option.value}
                        onSelect={(value) => {
                          form.setValue(name, onSelect(value));
                          form.clearErrors(name);
                        }}
                      >
                        {/* <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field?.value?.find((checkedData)=> field.value === option.value)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        /> */}
                        {option.value}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  {/* {options.filter(
                    (option: { id: string; value: string }) =>
                      option.value === search
                  ) && (
                    <CustomButton
                      variant={"default"}
                      width={"full"}
                      className="mx-3 my-2 w-[90%]"
                      onClick={() => {
                        if (search != "") {
                          form.setValue(name, onSelect(search.toLowerCase()));
                          form.clearErrors(name);
                          setSearch("");
                        }
                      }}
                    >
                      Add
                    </CustomButton>
                  )} */}
                </Command>
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription>
          <FormMessage className={cn("", messageClassName)} />
        </FormItem>
      )}
    />
  );
};

export default CustomMultiSelect;
