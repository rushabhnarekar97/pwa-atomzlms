"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Book, User } from 'lucide-react';

const routes = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/dashboard/my-training',
    label: 'My Training',
    icon: Book,
  },
  {
    href: '/dashboard/profile',
    label: 'Profile',
    icon: User,
  },
];

export function BottomBar() {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const pathnameWithoutBasePath = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;

  return (
    <div className="fixed bottom-0 left-0 z-20 h-16 w-full border-t bg-background/95">
       <div className="mx-auto h-full max-w-md">
        <nav className="grid h-full grid-cols-3">
            {routes.map((route) => (
            <Link
                key={route.href}
                href={basePath + route.href}
                className={cn(
                'flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors',
                (pathnameWithoutBasePath === route.href || (route.href !== '/dashboard' && pathnameWithoutBasePath.startsWith(route.href)))
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                )}
            >
                <route.icon className="h-5 w-5" />
                <span>{route.label}</span>
            </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}
