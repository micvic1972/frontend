"use client";

import { User, Settings, LogOut, Sun } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
// Fixed: Removed duplicate import and corrected the directory path using absolute alias
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const { setTheme } = useTheme();   
    
    return (
        <nav className="w-full border-b bg-background">
            <div className="text-xs text-muted-foreground px-4 pt-2">
                collapseButton
            </div>
            
            <div className="flex items-center justify-between p-4">
               <Link href="/" className="font-semibold tracking-tight">
                   Dashboard
               </Link>
               
               <div className="flex items-center gap-4">
                   
                   {/* 1. Theme Controller Dropdown Setup */}
                   <DropdownMenu>
                       <DropdownMenuTrigger asChild>
                         <Button variant="ghost" size="icon">
                           <Sun className="size-5 cursor-pointer text-muted-foreground hover:text-foreground" />
                           <span className="sr-only">Toggle theme</span>
                         </Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end" className="w-40 mt-2">
                         <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                           Light
                         </DropdownMenuItem>
                         <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                           Dark
                         </DropdownMenuItem>
                         <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
                            System
                         </DropdownMenuItem>
                       </DropdownMenuContent>
                   </DropdownMenu>
                       
                   {/* 2. User Profile Account Dropdown Setup */}
                   {/* Fixed: Added the missing opening tag here to stabilize the layout */}
                   <DropdownMenu>
                       <DropdownMenuTrigger className="cursor-pointer outline-none rounded-full">
                           <Avatar>
                               <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" alt="User" />
                               <AvatarFallback>ON</AvatarFallback>
                           </Avatar>
                       </DropdownMenuTrigger>
                       
                       <DropdownMenuContent align="end" className="w-56 mt-2">
                           <DropdownMenuLabel>My Account</DropdownMenuLabel>
                           <DropdownMenuSeparator />
                           
                           <DropdownMenuItem className="cursor-pointer gap-2">
                               <User className="size-4 text-muted-foreground" />
                               <span>Profile</span>
                           </DropdownMenuItem>
                           
                           <DropdownMenuItem className="cursor-pointer gap-2">
                               <Settings className="size-4 text-muted-foreground" />
                               <span>Settings</span>
                           </DropdownMenuItem>
                           
                           <DropdownMenuSeparator />
                           
                           <DropdownMenuItem className="cursor-pointer gap-2 text-destructive focus:text-destructive focus:bg-destructive/10">
                               <LogOut className="size-4" />
                               <span>Log out</span>
                           </DropdownMenuItem>
                       </DropdownMenuContent>
                   </DropdownMenu>

               </div>
            </div>
        </nav>
    );
}

export default Navbar;
