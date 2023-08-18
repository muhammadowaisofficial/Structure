"use client"
import CustomAlertDialog from "@/components/customui/CustomAlertDialog";
import React from "react";

const AlertDialogExample = () => {
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Alert Dialog</h4>
      <CustomAlertDialog
        title="Are you absolutely sure?"
        message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        trigger={
          <div className="text-sm font-medium text-pink-600">Show Alert</div>
        }
        onConfirmClick={() => console.log("Confirm Clicked")}
        onCancelClick={() => console.log("Cancel clicked")}
      />
    </div>
  );
};

export default AlertDialogExample;
