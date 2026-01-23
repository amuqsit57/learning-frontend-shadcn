import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/dist/client/link'
import Dropdown from './Dropdown'


const Navigation = () => {
  return (
    <div className='w-full flex justify-center bg-background p-2 shadow-2xl'>
        <NavigationMenu>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild >
                <Link href="/docs">Offers</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild >
                <Link href="/docs">Trending</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild >
                <Link href="/docs">Most Selling</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild >
                <Dropdown/>
              </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenu>
    </div>
  )
}

export default Navigation
