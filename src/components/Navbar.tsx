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
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar"; // Updated absolute import pathway mapping

const Navbar = () => {
    const { setTheme } = useTheme();   
    
    return (
        <nav className="w-full border-b bg-background px-4">
            {/* Kept all components aligned inside one fluid, responsive row */}
            <div className="flex h-16 items-center justify-between">
               
               {/* Left Grouping alignment container box */}
               <div className="flex items-center gap-3">
                   <SidebarTrigger className="cursor-pointer text-muted-foreground hover:text-foreground" />
                   <div className="h-4 w-px bg-border" /> {/* Visual separator vertical divider line */}
                   <Link href="/" className="font-semibold tracking-tight text-sm hover:text-muted-foreground transition-colors">
                       Dashboard
                   </Link>
               </div>
               
               {/* Right Grouping alignment container box */}
               <div className="flex items-center gap-4">
                   
                   {/* 1. Theme Controller Dropdown Setup */}
                   <DropdownMenu>
                       <DropdownMenuTrigger asChild>
                         <Button variant="ghost" size="icon" className="cursor-pointer">
                           <Sun className="size-5 text-muted-foreground hover:text-foreground" />
                           <span className="sr-only">Toggle theme</span>
                         </Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end" className="w-40 mt-2">
                         <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">Light</DropdownMenuItem>
                         <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">Dark</DropdownMenuItem>
                         <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">System</DropdownMenuItem>
                       </DropdownMenuContent>
                   </DropdownMenu>
                       
                   {/* 2. User Profile Account Dropdown Setup */}
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
                           <DropdownMenuItem className="cursor-pointer gap-2"><User className="size-4" />Profile</DropdownMenuItem>
                           <DropdownMenuItem className="cursor-pointer gap-2"><Settings className="size-4" />Settings</DropdownMenuItem>
                           <DropdownMenuSeparator />
                           <DropdownMenuItem className="cursor-pointer gap-2 text-destructive"><LogOut className="size-4" />Log out</DropdownMenuItem>
                       </DropdownMenuContent>
                   </DropdownMenu>

               </div>
            </div>
        </nav>
    );
}

export default Navbar;
