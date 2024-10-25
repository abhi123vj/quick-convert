import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Quick Convert - Free Unlimited File Converter",
    description: `Unleash your creativity with Quick Convert – the ultimate online tool for unlimited and free multimedia conversion. Transform images, audio, and videos effortlessly, without restrictions. Start converting now and elevate your content like never before!`,
    creator: "4bh1ram",
    keywords:
        "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={robotoMono.className} suppressHydrationWarning>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    themes={["light", "dark"]}
                >
                    <Navbar />
                    <Toaster />
                    <main className="pt-28 min-h-screen lg:pt-32 2xl:pt-40 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}