'use client';
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LuMenu } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Link href="/">
                <Image alt="logo" className="w-40 cursor-pointer dark:invert" src="/images/logo.svg" height={100} width={170} />
            </Link>
            <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
                <Link href="/">
                    <Button 
                        variant="ghost" 
                        className={cn(
                            "font-semibold text-md",
                            isActive('/') && "text-primary font-bold underline"
                        )}
                    >
                        Home
                    </Button>
                </Link>
                <Link href="/about">
                    <Button 
                        variant="ghost" 
                        className={cn(
                            "font-semibold text-md",
                            isActive('/about') && "text-primary font-bold underline"
                        )}
                    >
                        About
                    </Button>
                </Link>
                {/* <Link href="/privacy-policy">
                    <Button 
                        variant="ghost" 
                        className={cn(
                            "font-semibold text-md",
                            isActive('/privacy-policy') && "text-primary font-bold underline"
                        )}
                    >
                        Privacy Policy
                    </Button>
                </Link> */}
            </div>
            <div className="items-center hidden gap-2 md:flex">
                <ModeToggle />
                <Link href="https://github.com/abhi123vj/quick-convert.git">
                    <Button
                        variant="default"
                        className="items-center hidden gap-2 rounded-full w-fit md:flex"
                        size="lg"
                    >
                        <span>Github Repo</span>
                        <span className="text-xl">
                            <BsGithub />
                        </span>
                    </Button>
                </Link>
            </div>
            {/* MOBILE NAV */}
            <Sheet>
                <SheetTrigger className="block p-3 md:hidden">
                    <span className="text-2xl text-slate-950 dark:text-slate-200">
                        <LuMenu />
                    </span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col w-full h-full">
                                <SheetTrigger asChild>
                                    <Link href="/">
                                        <Button 
                                            variant="link" 
                                            className={cn(
                                                "w-full font-semibold text-md",
                                                isActive('/') && "text-primary"
                                            )}
                                        >
                                            Home
                                        </Button>
                                    </Link>
                                </SheetTrigger>
                                <SheetTrigger asChild>
                                    <Link href="/about">
                                        <Button 
                                            variant="link" 
                                            className={cn(
                                                "w-full font-semibold text-md",
                                                isActive('/about') && "text-primary"
                                            )}
                                        >
                                            About
                                        </Button>
                                    </Link>
                                </SheetTrigger>
                                {/* <SheetTrigger asChild>
                                    <Link href="/privacy-policy">
                                        <Button 
                                            variant="link" 
                                            className={cn(
                                                "w-full font-semibold text-md",
                                                isActive('/privacy-policy') && "text-primary"
                                            )}
                                        >
                                            Privacy Policy
                                        </Button>
                                    </Link>
                                </SheetTrigger> */}
                                <ModeToggle />
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}