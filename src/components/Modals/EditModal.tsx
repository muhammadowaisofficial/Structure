import React from "react";
import CustomDialog from "../customui/CustomDialog";
import { Button } from "../ui/button";
import { Icons } from "@/lib/Icons";
import { ScrollArea } from "../ui/scroll-area";

const EditModal = ({ data }: { data: any }) => {
  return (
    <CustomDialog
      trigger={
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-500 hover:text-blue-500"
          // onClick={deleteSelectedRows}
        >
          <Icons.Pencil className="h-4 w-4" />
        </Button>
      }
      title="Add New Data"
      description="Allows you to add Data into Database"
      content={
          <Button
            variant="default"
            onClick={()=>console.log(data)}
          >
            <Icons.Pencil className="h-4 w-4" />
            Console Data
          </Button>
      }
    />
  );
};

export default EditModal;
