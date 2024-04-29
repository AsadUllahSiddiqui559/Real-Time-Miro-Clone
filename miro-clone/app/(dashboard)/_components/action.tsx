'use clients'

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {Link2}  from "lucide-react";
import {toast} from 'sonner'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"

interface ActionsProps{
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"]
  sideOffset?:DropdownMenuContentProps["sideOffset"]
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}:ActionsProps) =>{

  const onCopyLink =()=>{
    navigator.clipboard.writeText(
      `${window.location.origin}/board/${id}`
    )
    .then(()=>toast.success('link copied'))
    .catch(()=>toast.success('failed to copy link!'))
  }
  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
      onClick = {(e)=>e.stopPropagation()}
      side={side}
      sideOffset={sideOffset}
      className='w-60'
      >
        <DropdownMenuItem
        className="p-3 cursor-pointer"
        onClick= {onCopyLink}
        >
        <Link2 className="h-4 w-4 mr-2"/>
          copy board link
        </DropdownMenuItem >

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
