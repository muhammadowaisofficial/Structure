import React from "react";
import CustomDialog from "../customui/CustomDialog";
import { Button } from "../ui/button";
import { Icons } from "@/lib/Icons";
import AccordionExample from "@/examples/AccordionExample";

const AddModal = () => {
  return (
    <CustomDialog
      trigger={
        <Button
          variant="default"
          size="sm"
          className="ml-auto h-8 bg-green-600 hover:bg-green-500 lg:flex"
          // onClick={deleteSelectedRows}
        >
          <Icons.plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      }
      title="Add New Data"
      description="Allows you to add Data into Database"
      content={<AccordionExample />}
    />
  );
};

export default AddModal;
