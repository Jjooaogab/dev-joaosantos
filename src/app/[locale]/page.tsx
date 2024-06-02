"use client";
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  MountainIcon,
  SunMoon
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Contact from "../sections/contact";
import Hero from "../sections/hero";
import Projects from "../sections/project";
import Skill from "../sections/skills";

export default function Component() {
  const { theme, setTheme } = useTheme();


  return (
    <div className="flex flex-col min-h-[100dvh] text-zinc-800 dark:text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-white dark:bg-zinc-800">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Joao Santos</span>
        </Link>
        <nav className="ml-auto flex items-center z-10 gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full zinc-200 border border-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-900">
                <SunMoon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem 
              onClick={() => setTheme("dark")}>
                Dark Theme
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light Theme
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Work
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skill />
        <Contact />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-slate-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 Joao Santos. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
