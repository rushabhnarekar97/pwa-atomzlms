"use client"
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { BottomBar } from '@/components/BottomBar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showBottomBar = pathname.startsWith('/dashboard');

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-body antialiased bg-muted/30 dark:bg-black">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <div className="relative flex flex-col h-screen w-full max-w-md mx-auto bg-background">
                <main className={cn("flex-1 overflow-y-auto no-scrollbar", showBottomBar && 'pb-16')}>
                    {children}
                </main>
                {showBottomBar && <BottomBar />}
                <Toaster />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
