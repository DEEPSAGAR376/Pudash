"use client"

import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState } from "react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Cart } from "@/components/cart"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function NavigationBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 dark:bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://tools.corenexis.com/image/cnxm/M25/01/fff49f3ed8.webp"
                alt="Melon Nodes Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-white dark:text-white-900 font-semibold text-lg">Melon Nodes</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                Plans <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/plans" className="w-full">
                    Minecraft Plans
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/plans/vps" className="w-full">
                    VPS Plans
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="https://portal.melonnodes.com/"
              className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Panel
            </Link>
            <Link
              href="/terms"
              className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Terms of Service
            </Link>
            <Link
              href="/login"
              className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
            <Cart />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Cart />
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white ml-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/95 dark:bg-white/95 border-red-500/20">
                <div className="flex justify-end mb-4">
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white dark:text-gray-900">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-4 text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/features"
                    className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-4 text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Features
                  </Link>
                  <div className="text-white dark:text-gray-900 px-3 py-4 text-lg font-medium">Plans</div>
                  <Link
                    href="/plans"
                    className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-4 text-lg font-medium pl-6"
                    onClick={() => setOpen(false)}
                  >
                    Minecraft Plans
                  </Link>
                  <Link
                    href="/plans/vps"
                    className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-4 text-lg font-medium pl-6"
                    onClick={() => setOpen(false)}
                  >
                    VPS Plans
                  </Link>
                  <Link
                    href="https://portal.melonnodes.com/"
                    className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-4 text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Panel
                  </Link>
                  <Link
                    href="/terms"
                    className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-4 text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/login"
                    className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-4 text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="text-white dark:text-gray-900 hover:text-red-500 px-3 py-4 text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

