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
import Link from 'next/link'
import Dropdown from './Dropdown'


const Navigation = () => {
  return (
    <div className='w-full flex justify-center bg-background p-2 shadow-2xl'>
        <NavigationMenu>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild >
                <Link href="/products">Offers</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild >
                <Link href="/products">Trending</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild >
                <Link href="/products">Most Selling</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild >
                <Dropdown/>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='list-none'>
              <NavigationMenuLink asChild>
                <Link href="/cart">Cart</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenu>
    </div>
  )
}

export default Navigation
