import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "@/lib/utils";

type CustomDialogProps = {
  trigger: ReactNode;
  triggerClassName?: string;
  content: ReactNode;
  contentClassName?: string;
  title?: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
  footer?: ReactNode;
  footerClassName?: string;
};

const CustomDialog = ({
  trigger,
  triggerClassName,
  content,
  contentClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  footer,
  footerClassName,
}: CustomDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild className={cn("", triggerClassName)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className={cn("rounded-md", contentClassName)}>
        <DialogHeader>
          {title && (
            <DialogTitle className={cn("", titleClassName)}>
              {title}
            </DialogTitle>
          )}
          {description && (
            <DialogDescription className={cn("", descriptionClassName)}>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        {content}
        {footer && (
          <DialogFooter className={cn("", footerClassName)}>
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
