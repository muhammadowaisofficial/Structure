import CustomDialog from "@/components/customui/CustomDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CustomDialogExample = () => {
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Dialog</h4>
      <CustomDialog
        title="Title"
        description="Description"
        footer={
          <Button onClick={() => console.log("DialogConfirm Button Clicked")}>
            Confirm
          </Button>
        }
        trigger={<Button>Open Dialog</Button>}
        content={
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CustomDialogExample;
