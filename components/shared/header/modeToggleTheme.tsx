"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import { MoonIcon, SunMoon, SunIcon, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ModeToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggleTheme;

/*

 <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>

           <DropdownMenuContent>
        
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
            className="cursor-pointer"
          checked={theme === "system"}
          onClick={() => {
            setTheme("system");
          }}
        >
          System
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
         className="cursor-pointer"
          checked={theme === "light"}
          onClick={() => {
            setTheme("light");
          }}
        >
          Light
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
         className="cursor-pointer"
          checked={theme === "dark"}
          onClick={() => {
            setTheme("dark");
          }}
        >
          Dark
        </DropdownMenuCheckboxItem>

      </DropdownMenuContent>
*/
