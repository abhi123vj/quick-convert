"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect runs on client side only
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering the icons until mounted
  if (!mounted) {
    return (
      <Button variant="ghost" className="w-9 px-0">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      className="aspect-square h-10 p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon   />
      ) : (
        <MoonIcon  />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
