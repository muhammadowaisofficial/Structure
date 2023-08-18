import React from 'react'
import CustomDialog from '../customui/CustomDialog'
import { Button } from '../ui/button'
import { Icons } from '@/lib/Icons'
import CustomAlertDialog from '../customui/CustomAlertDialog'

const DeleteModal = ({ data }: { data: any }) => {
  return (
    <CustomAlertDialog
      title="Are you absolutely sure?"
      message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
      trigger={
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 hover:text-red-500"
          // onClick={deleteSelectedRows}
        >
          <Icons.close className="h-4 w-4" />
        </Button>
      }
      onConfirmClick={() => console.log(data)}
      onCancelClick={() => console.log("Cancel clicked")}
    />
  )
}

export default DeleteModal