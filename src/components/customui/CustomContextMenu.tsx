import React, { ReactNode } from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { cn } from "@/lib/utils";
import { contextMenuOptionsType } from "@/types/ContextMenuTypes";

type Props = {
  triggerClassName?: string;
  trigger: string | ReactNode;
  contentClassName?: string;
  options: contextMenuOptionsType;
  commandClassName?: string;
  commandSeperatorClassName?: string;
  menutriggerClassName?: string;
  subMenuClassName?: string;
  subMenuOptionClassName?: string;
  subMenuSeperatorClassName?: string;
  menuSeperatorClassName?: string;
  checkboxOptionClassName?: string;
  checkboxSperatorClassName?: string;
  radioGroupClassName?: string;
  radioLabelSeperatorClassName?: string;
  radioLabelClassName?: string;
  radioOptionClassName?: string;
  radioSeperatorClassName?: string;
};

const CustomContextMenu = (props: Props) => {
  const {
    triggerClassName = "",
    trigger = "Trigger",
    contentClassName = "",
    options,
    commandClassName = "",
    commandSeperatorClassName = "",
    menutriggerClassName = "",
    subMenuClassName = "",
    subMenuOptionClassName = "",
    subMenuSeperatorClassName="",
    menuSeperatorClassName="",
    checkboxOptionClassName="",
    checkboxSperatorClassName="",
    radioGroupClassName="",
    radioLabelSeperatorClassName="",
    radioLabelClassName="",
    radioOptionClassName="",
    radioSeperatorClassName="",
  } = props;
  return (
    <ContextMenu>
      <ContextMenuTrigger className={cn("", triggerClassName)}>
        {trigger}
      </ContextMenuTrigger>
      <ContextMenuContent className={cn("w-64", contentClassName)}>
        {options.map((option) => (
          <div key={option.id}>
            {option.type === "Shortcut" && (
              <>
                <ContextMenuItem
                  inset
                  disabled={option.disabled}
                  className={cn("", commandClassName)}
                >
                  {option.name}
                  {option.command && (
                    <ContextMenuShortcut>{option.command}</ContextMenuShortcut>
                  )}
                </ContextMenuItem>
                {option.seperator && (
                  <ContextMenuSeparator
                    className={cn("", commandSeperatorClassName)}
                  />
                )}
              </>
            )}
            {option.type === "Menu" && (
              <>
                <ContextMenuSub>
                  <ContextMenuSubTrigger
                    inset
                    className={cn("", menutriggerClassName)}
                  >
                    {option.name}
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent
                    className={cn("w-56", subMenuClassName)}
                  >
                    {option.subOptions.map((subOption) => (
                      <div key={subOption.id}>
                        <ContextMenuItem
                          className={cn("", subMenuOptionClassName)}
                        >
                          {subOption.name}
                          {subOption.command && (
                            <ContextMenuShortcut>
                              {subOption.command}
                            </ContextMenuShortcut>
                          )}
                        </ContextMenuItem>
                        {subOption.seperator && (
                          <ContextMenuSeparator
                            className={cn("", subMenuSeperatorClassName)}
                          />
                        )}
                      </div>
                    ))}
                  </ContextMenuSubContent>
                </ContextMenuSub>
                {option.seperator && <ContextMenuSeparator className={cn("", menuSeperatorClassName)}/>}
              </>
            )}
            {option.type === "Checkbox" && (
              <>
                {option.data.map((checkbox) => (
                  <ContextMenuCheckboxItem
                    checked={checkbox.checked}
                    key={checkbox.id}
                    className={cn("",checkboxOptionClassName)}
                  >
                    {checkbox.name}
                    {checkbox.command && (
                      <ContextMenuShortcut>
                        {checkbox.command}
                      </ContextMenuShortcut>
                    )}
                  </ContextMenuCheckboxItem>
                ))}
                {option.seperator && <ContextMenuSeparator className={cn("",checkboxSperatorClassName)} />}
              </>
            )}
            {option.type === "Radio" && (
              <>
                <ContextMenuRadioGroup value={option.value} className={cn("",radioGroupClassName)}>
                  {option.label && (
                    <>
                      <ContextMenuSeparator className={cn("",radioLabelSeperatorClassName)}/>
                      <ContextMenuLabel inset className={cn("",radioLabelClassName)}>{option.label}</ContextMenuLabel>
                    </>
                  )}
                  {option.data.map((radio) => (
                    <ContextMenuRadioItem value={radio.value} key={radio.id} className={cn("",radioOptionClassName)}>
                      {radio.name}
                    </ContextMenuRadioItem>
                  ))}
                </ContextMenuRadioGroup>
                {option.seperator && <ContextMenuSeparator className={cn("",radioSeperatorClassName)} />}
              </>
            )}
          </div>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default CustomContextMenu;
