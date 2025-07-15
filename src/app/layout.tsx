import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'CoursePilot',
  description: 'Your personal learning co-pilot.',
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#64B5F6" />
      </head>
      <body className="font-body antialiased bg-muted flex items-center justify-center min-h-screen p-4">
        <div className="w-[375px] h-[812px] mobile-mockup">
            <div className="mobile-mockup-screen w-full h-full">
                <div className="h-full w-full overflow-y-auto">
                    {children}
                    <Toaster />
                </div>
            </div>
        </div>
      </body>
    </html>
  );
}
