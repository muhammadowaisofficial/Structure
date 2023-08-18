import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/ui/command";
import { ScrollArea } from "@/ui/scroll-area";

type Props = {
    isOpen:boolean,
    onOpenChange:()=>void,
    commandClassName?:string,
    inputClassName?:string,
    inputPlaceholder:string,
    listClassName?:string,
    emptyPlaceholder:string,
    emptyPlaceholderClassName?:string,
    commandItemClassName?:string,
    commandNameClassName?:string,
    commandShortcutClassName?:string,
    seperatorClassName?:string,
    options: { 
        id:string, 
        heading?:string,
        points:{
            id:string,
            value:string,
            icon?: ReactNode,
            shortcut?: string
            onClick?:()=>void
        }[]
    }[],};

const CustomCommand = (props: Props) => {
    const {isOpen=false,onOpenChange,commandClassName='',inputClassName='',inputPlaceholder='',listClassName='',emptyPlaceholder='',emptyPlaceholderClassName='',commandItemClassName='',commandNameClassName='',commandShortcutClassName='',seperatorClassName='',options,} = props;
  return (
    <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
    {/* <CommandDialog open={isOpen} className={cn("rounded-lg border shadow-md h-fit",commandClassName)}> */}
      <CommandInput placeholder={inputPlaceholder} className={cn("focus-visible:ring-0 focus-visible:outline-none border-none",inputClassName)} />
      <CommandList className={cn("overflow-auto",listClassName)}>
        <CommandEmpty className={cn("flex items-center justify-center p-4",emptyPlaceholderClassName)}>{emptyPlaceholder}</CommandEmpty>
        <ScrollArea className="h-fit w-full ">
        {
            options.map((option)=>(
                option.heading && <CommandGroup heading={option.heading} key={option.id}>
                    {
                        option.points.map((command)=>(
                            // <CommandItem key={command.id} className={cn("cursor-pointer",commandItemClassName)} onClick={command.onClick}>
                            <CommandItem key={command.id} className={cn("cursor-pointer",commandItemClassName)} >
                                {command.icon }
                                <span className={cn("",commandNameClassName)}>{command.value}</span>
                                {
                                    command.shortcut && <CommandShortcut className={cn("",commandShortcutClassName)}>{command.shortcut}</CommandShortcut>
                                }
                            </CommandItem>
                        ))
                    }
                </CommandGroup>
                // <CommandSeparator  className={cn("",seperatorClassName)}/>
                
            ))
        }
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  );
};
export default CustomCommand;