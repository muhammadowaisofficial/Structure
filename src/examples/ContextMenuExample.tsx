import CustomButton from "@/components/customui/CustomButton";
import CustomContextMenu from "@/components/customui/CustomContextMenu";
import { contextMenuOptionsType } from "@/types/ContextMenuTypes";
import React from "react";

const ContextMenuExample = () => {
  const options: contextMenuOptionsType = [
    {
      id: "1",
      type: "Shortcut",
      name: "Back",
      command: "",
    },
    {
      id: "2",
      type: "Shortcut",
      name: "Forward",
      command: "",
      disabled: true,
      seperator: true,
    },
    {
      id: "3",
      type: "Shortcut",
      name: "Reload",
      command: "Ctrl + F5",
    },
    {
      id: "4",
      type: "Menu",
      name: "Tools",
      seperator: false,
      subOptions: [
        {
          id: "1",
          name: "Save",
          command: "Ctrl + S",
        },
        {
          id: "2",
          name: "Create",
          seperator: true,
        },
        {
          id: "3",
          name: "Develop",
          command: "Ctrl + D",
        },
      ],
    },
    {
      id: "5",
      type: "Menu",
      name: "More Tools",
      seperator: true,
      subOptions: [
        {
          id: "1",
          name: "Save Page As",
          command: "Ctrl + S",
          seperator: true,
        },
        {
          id: "2",
          name: "Create Shortcut",
        },
        {
          id: "3",
          name: "Developer Tools",
          command: "Ctrl + S",
        },
      ],
    },
    {
      id: "6",
      type: "Checkbox",
      seperator: true,
      data: [
        {
          id: "1",
          name: "Show Bookmarks Bar",
          command: "Ctrl + B",
          checked: true,
        },
        {
          id: "2",
          name: "Show Full URLs",
        },
      ],
    },
    {
      id: "7",
      type: "Checkbox",
      data: [
        {
          id: "1",
          name: "Bar",
          command: "Ctrl + B",
          checked: true,
        },
        {
          id: "2",
          name: "URLs",
          checked: true,
        },
      ],
    },
    {
      id: "8",
      type: "Radio",
      value: "fahad",
      seperator: true,
      label: "Developer",
      data: [
        {
          id: "1",
          name: "Fahad Razzaq",
          value: "fahad",
        },
        {
          id: "2",
          name: "Asad Razzaq",
          value: "asad",
        },
        {
          id: "3",
          name: "Sanan Razzaq",
          value: "sanan",
        },
      ],
    },
    {
      id: "9",
      type: "Radio",
      value: "t3",
      data: [
        {
          id: "1",
          name: "NextJS",
          value: "nextjs",
        },
        {
          id: "2",
          name: "T3",
          value: "t3",
        },
      ],
    },
  ];
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="w-full text-center">Context Menu</h4>
      <CustomContextMenu
        trigger="Right Click"
        options={options}
        triggerClassName="flex h-[50px] w-full items-center justify-center rounded-md border border-dashed text-sm"
        contentClassName="w-[300px]"
        
      />
      <CustomContextMenu
        trigger={
          <CustomButton >Click Me</CustomButton>
        }
        options={options}
        contentClassName="w-[300px]"
      />
    </div>
  );
};

export default ContextMenuExample;
