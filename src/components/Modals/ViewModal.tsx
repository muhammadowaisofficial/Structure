import React from 'react'
import CustomDialog from '../customui/CustomDialog'
import { Button } from '../ui/button'
import { Icons } from '@/lib/Icons'

const ViewModal = ({ data }: { data: any }) => {
  return (
    <CustomDialog
      trigger={
        <Button
          variant="ghost"
          size="sm"
          className="text-green-500 hover:text-green-500"
          // onClick={deleteSelectedRows}
        >
          <Icons.view className="h-4 w-4" />
        </Button>
      }
      title="View Data"
      description="Allows you to add Data into Database"
      content={
          <Button
            variant="default"
            onClick={()=>console.log(data)}
          >
            <Icons.view className="h-4 w-4" />
            Console Data
          </Button>
      }
    />
  )
}

export default ViewModal