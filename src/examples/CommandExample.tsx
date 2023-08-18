'use client'
import CustomButton from '@/components/customui/CustomButton'
import CustomCommand from '@/components/customui/CustomCommand'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'
import React, { useState } from 'react'

const CommandExample = () => {
const [isOpen,setIsOpen] = useState(false);

const options = [
        { id:"1", heading:"Suggestions",points:[
            {
                id:"1",
                value:"Calendar",
                icon: <Calendar className="mr-2 h-4 w-4" />,
                shortcut: "Ctrl + C",
                onclick: ()=> console.log("Calendar"),
            },
            {
                id:"2",
                value:"Seach Emoji",
                icon: <Smile className="mr-2 h-4 w-4" />,
            },
            {
                id:"3",
                value:"Calculator",
                icon: <Calculator className="mr-2 h-4 w-4" />,
                shortcut: "Ctrl + P",
                onclick: ()=> console.log("Calculator"),
            }
        ] },
        { id:"2", heading:"Settings",points:[
            {
                id:"1",
                value:"Profile",
                icon: <User className="mr-2 h-4 w-4" />,
                shortcut: "⌘ + P",
                onclick: ()=> console.log("Profile"),
            },
            {
                id:"2",
                value:"Billing",
                icon: <CreditCard className="mr-2 h-4 w-4" />,
                shortcut: "⌘ + B",
                onclick: ()=> console.log("Billing"),
            },
            {
                id:"3",
                value:"Settings",
                icon: <Settings className="mr-2 h-4 w-4" />,
                shortcut: "⌘ + S",
                onclick: ()=> console.log("Settings"),
            }
        ] },
      ]
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="w-full text-center">Command</h4>
      <CustomButton onClick={()=>setIsOpen(!isOpen)} >Open Command</CustomButton>
      <CustomCommand isOpen={isOpen} onOpenChange={()=>setIsOpen(!isOpen)} emptyPlaceholder='No result found.' inputPlaceholder='Type a command to search' options={options} />
      </div>
  )
}

export default CommandExample