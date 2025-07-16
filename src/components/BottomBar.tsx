"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Book, Compass } from 'lucide-react';

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
    href: '/dashboard/catalog',
    label: 'Catalog',
    icon: Compass,
  },
];

export function BottomBar() {
  const pathname = usePathname();
  // We need to remove the basePath from the pathname to match the hrefs
  const basePath = '/pwa-atomzlms';
  const pathnameWithoutBasePath = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;

  return (
    <div className="absolute bottom-0 left-0 z-20 h-16 w-full overflow-hidden rounded-b-[2rem] border-t bg-background/95">
      <nav className="grid h-full grid-cols-3">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors',
              pathnameWithoutBasePath === route.href || (pathnameWithoutBasePath === '/dashboard' && route.href === '/dashboard') || (pathnameWithoutBasePath.startsWith(route.href) && route.href !== '/dashboard')
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
  );
}
