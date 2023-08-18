"use client";

import { Command as CommandPrimitive } from "cmdk";
import { X } from "lucide-react";
import {
  useRef,
  useState,
  useCallback,
  KeyboardEvent,
  MouseEventHandler,
  memo,
  useEffect,
} from "react";

import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

//import { Item } from "./type";
import { Item } from "@/types/index";

export const useMultiSelect = (
  initialItems: Item[],
  placeholder = "Select items..."
) => {
  const [items, setItems] = useState(initialItems);
  const [selected, setSelected] = useState<Item[]>([]);
  const onCreateNew = (newItem: Item) =>
    setItems((current) => [...current, newItem]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const MultiSelect = memo(() => {
    const [inputValue, setInputValue] = useState("");

    const createNew = () => {
      const newItem = { value: inputValue, label: inputValue };
      onCreateNew(newItem);
      handleSelect(newItem);
    };


    const handleSelect = useCallback((item: Item) => {
      setInputValue("");
      setSelected((prev) => [...prev, item]);
    }, []);

    const handleUnselect = useCallback((item: Item) => {
      setSelected((prev) => prev.filter((s) => s.value !== item.value));
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    }, []);

    // useEffect(() => {
    //   const input = inputRef.current;
    //   input?.focus();
    // }, [selected]);

    useEffect(() => {
      if (open) {
        const input = inputRef.current;
        input?.focus();
      }
    }, []);
    const haltEvent: MouseEventHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const selectables = items
      .filter((item) => !selected
        .includes(item));

    const alreadyExist = items
      .map(({ label }) => label)
      .includes(inputValue);

    const alreadySelected = selected
      .map(({ label }) => label)
      .includes(inputValue);

    return (
      <Command
        onKeyDown={handleKeyDown}
        className="overflow-visible bg-transparent"
      >
        <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div className="flex flex-wrap gap-1">
            {selected.map((item) => {
              return (
                <Badge key={item.value} variant="secondary">
                  {item.label}
                  <button
                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(item);
                      }
                    }}
                    onMouseDown={haltEvent}
                    onClick={() => handleUnselect(item)}
                  >
                    <X className="h-3 w-3 text-secondary-foreground transition-colors hover:text-muted-foreground" />
                  </button>
                </Badge>
              );
            })}
            {/* Avoid having the "Search" Icon */}
            <CommandPrimitive.Input
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder={placeholder}
              className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="relative mt-2">
          {open && selectables.length > 0 && (
            <div className="absolute top-0 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((item) => {
                  return (
                    <CommandItem
                      key={item.value}
                      onSelect={() => handleSelect(item)}
                      onMouseDown={haltEvent}
                    >
                      {item.label}
                    </CommandItem>
                  );
                })}
                {inputValue && (
                  <CommandItem
                    key="new"
                    onSelect={createNew}
                    onMouseDown={haltEvent}
                  >
                    Create {inputValue}!
                  </CommandItem>
                )}

                {alreadyExist && alreadySelected && (
                  <CommandItem className="aria-selected:bg-background aria-selected:text-red-10">
                    {inputValue} is already selected!
                  </CommandItem>
                )}
              </CommandGroup>
            </div>
          )}
        </div>
      </Command>
    );
  });
  MultiSelect.displayName = "MultiSelect";
  return [MultiSelect];
};


// "use client";

// import { FRAMEWORKS } from "./data";
// import { useMultiSelect } from "./hook";

// export default function Page() {
//   const MultiFlameworksSelect = useMultiSelect(FRAMEWORKS);

//   return (
//     <div>
//       <MultiFlameworksSelect />
//     </div>
//   );
// }

//"use client";

// import { useAtom } from "jotai";

// import { flameworksAtom } from "./atom";
// import { MultiSelect } from "./component";
// import { Item } from "./type";

// export default function Page() {
//   const [flameworks, setFlameWorks] = useAtom(flameworksAtom);
//   const onCreateNew = (newItem: Item) =>
//     setFlameWorks((current) => [...current, newItem]);

//   return (
//     <div>
//       <MultiSelect items={flameworks} onCreateNew={onCreateNew} />
//     </div>
//   );
// }