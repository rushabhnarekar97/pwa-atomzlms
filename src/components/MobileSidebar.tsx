"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Book, Compass } from 'lucide-react';
import { Logo } from './Logo';

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

export function MobileSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="flex h-full flex-col">
             <div className="border-b p-4">
                <Logo />
             </div>
            <div className="flex flex-col gap-2 p-4">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  asChild
                  variant={pathname === route.href ? 'secondary' : 'ghost'}
                  className="justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={route.href}>
                    <route.icon className="mr-2 h-4 w-4" />
                    {route.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
