import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible";
import { Button } from "@/ui/button";
import { ChevronsUpDown } from "lucide-react";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
  className?: string;
  triggerClassName?: string;
  trigger: ReactNode;
  triggerIcon?: ReactNode;
  triggerIconButtonClassName?: string;
  triggerIconClassName?: string;
  displayedContent?: ReactNode;
  collapsedContent: ReactNode;
  collapsedContentClassName?: string;
};

const CustomCollapsible = (props: Props) => {
  const {
    isOpen = false,
    setIsOpen,
    className = "",
    triggerClassName = "",
    trigger,
    triggerIcon,
    triggerIconButtonClassName,
    triggerIconClassName,
    displayedContent,
    collapsedContent,
    collapsedContentClassName = "",
  } = props;
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("", className)}
    >
      <div
        className={cn(
          "flex items-center justify-between space-x-4 ",
          triggerClassName
        )}
      >
        {trigger}
        <CollapsibleTrigger asChild className="">
          <Button
            variant={"ghost"}
            size={"sm"}
            className={cn("w-9 p-0", triggerIconButtonClassName)}
          >
            {triggerIcon ? (
              triggerIcon
            ) : (
              <ChevronsUpDown className={cn("h-4 w-4", triggerIconClassName)} />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {displayedContent}
      <br />
      <CollapsibleContent
        className={cn("space-y-2", collapsedContentClassName)}
      >
        {collapsedContent}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CustomCollapsible;