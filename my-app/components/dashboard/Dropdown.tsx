import React from 'react'
import { Button } from '@/components/ui/button'
import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu'
import { BiDownArrow } from 'react-icons/bi'

const Dropdown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Category 
            <BiDownArrow/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Tops</DropdownMenuItem>
            <DropdownMenuItem>Pants</DropdownMenuItem>
            <DropdownMenuItem>Shirts</DropdownMenuItem> 
            <DropdownMenuItem>Jackets</DropdownMenuItem>


          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}


export default Dropdown
