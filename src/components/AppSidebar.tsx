"use client";

import { 
  LayoutDashboard, 
  Settings, 
  User, 
  HelpCircle, 
  MessageSquare, 
  LogOut, 
  User2,
  ChevronUp,
  ChevronDown, // 🌟 Added for dropdown toggle tracking cues
  Plus,
  Projector,
  PlusIcon,
  ShoppingBag, // 🌟 Added icon for e-commerce category tracking
  Folder
} from "lucide-react";
import Link from "next/link";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupAction, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuBadge, 
  SidebarMenuButton, 
  SidebarMenuItem,
  // 🌟 Imported sub-menu primitives for building nested category folders
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 🌟 Imported Radix structural Collapsible block modules
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const items = [
    { title: "Dashboard", href: "/", icon: LayoutDashboard },
    { title: "Settings", href: "/settings", icon: Settings },
    { title: "Profile", href: "/profile", icon: User },
    { title: "Help", href: "/help", icon: HelpCircle },
    { title: "Feedback", href: "/feedback", icon: MessageSquare },
    { title: "Logout", href: "/logout", icon: LogOut }
];

// Mock data architecture for our new nested E-Commerce sub-navigation folder links
const ecomSubItems = [
    { title: "All Products", href: "/products" },
    { title: "Categories", href: "/products/categories" },
    { title: "Inventory", href: "/products/inventory" }
];

const AppSidebar = () => {
    return (
        <Sidebar side="left" collapsible="icon">
            <SidebarHeader className="p-4 border-b">
                <span className="font-bold tracking-tight text-sm group-data-[collapsible=icon]:hidden">
                    Store Admin
                </span>
            </SidebarHeader>
            
            <SidebarContent>
                {/* Section 1: Standard Base Root Application Layout Links */}
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.href} className="flex items-center gap-3 w-full">
                                                <IconComponent className="size-4 shrink-0 text-muted-foreground" />
                                                <span className="font-medium text-sm">{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                        {item.title === "Settings" && (
                                            <SidebarMenuBadge>44</SidebarMenuBadge>
                                        )}
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* 🌟 Section 2: NEW Nested Dropdown Category Group (Lama Dev E-Commerce Style) */}
                <SidebarGroup>
                    <SidebarGroupLabel>Management</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {/* Collapsible item container wraps the trigger and content together */}
                            <Collapsible asChild className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton className="w-full flex items-center justify-between cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <ShoppingBag className="size-4 shrink-0 text-muted-foreground" />
                                                <span className="font-medium text-sm group-data-[collapsible=icon]:hidden">E-Commerce</span>
                                            </div>
                                            {/* Rotating downward arrow indicates toggle status */}
                                            <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 group-data-[collapsible=icon]:hidden" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    
                                    {/* The content box container that expands or collapses smoothly */}
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {ecomSubItems.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <Link href={subItem.href}>
                                                            <span className="text-xs">{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Section 3: Project Generation Group Layout Links */}
                <SidebarGroup>
                    <SidebarGroupLabel>Account</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /><span className="sr-only">Add Account</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/account" className="flex items-center gap-3 w-full">
                                        <Projector className="size-4 shrink-0 text-muted-foreground" />
                                        <span className="font-medium text-sm">My Projects</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                             <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/account" className="flex items-center gap-3 w-full">
                                       <PlusIcon className="size-4 shrink-0 text-muted-foreground" />
                                        <span className="font-medium text-sm">Create New Project</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter className="p-4 border-t">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="w-full flex items-center justify-between cursor-pointer py-5 px-3 rounded-lg hover:bg-sidebar-accent transition-all duration-150">
                                    <User2 className="size-4 shrink-0 text-muted-foreground" />
                                    <span className="font-medium text-sm ml-2 mr-auto truncate group-data-[collapsible=icon]:hidden">
                                        micruz
                                    </span>
                                    <ChevronUp className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[collapsible=icon]:hidden" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            
                            <DropdownMenuContent side="right" align="end" className="w-48 ml-2">
                                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-destructive">Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
