"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Book, Compass } from "lucide-react";

const routes = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/my-training",
    label: "My Training",
    icon: Book,
  },
  {
    href: "/dashboard/catalog",
    label: "Catalog",
    icon: Compass,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden h-full border-r bg-muted/20 md:flex md:w-56 md:flex-col">
      <div className="flex flex-col gap-2 p-2 pt-4">
        {routes.map((route) => (
          <Button
            key={route.href}
            asChild
            variant={pathname === route.href ? "secondary" : "ghost"}
            className="justify-start"
          >
            <Link href={route.href}>
              <route.icon className="mr-2 h-4 w-4" />
              {route.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
