"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Domains", href: "/domains" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar({ children }: { children?: ReactNode }) {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-56 px-4 py-6 bg-neutral-950 border-r border-neutral-800 min-h-[calc(100vh-64px)]">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 rounded-md font-medium text-sm transition
              ${
                pathname === item.href
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
              }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* Espaço para children extra na Sidebar, se desejar */}
      <div className="mt-8">{children}</div>
    </aside>
  );
}
