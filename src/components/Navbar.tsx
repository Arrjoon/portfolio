"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Development", href: "/development" },
  { name: "My Resume", href: "/myresume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-secondary text-text-primary"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-3xl font-black tracking-tight">
          AN
        </Link>

        <div className="flex items-center gap-2 md:gap-8">
          <ul className="hidden gap-8 text-base font-bold md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative transition-colors duration-300 ${
                      isActive
                        ? "text-accent"
                        : "text-body-secondary hover:text-accent"
                    }`}
                  >
                    {link.name}
                    {isActive ? (
                      <span className="absolute -bottom-1 left-0 h-1 w-full rounded bg-accent" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-text-primary transition-colors hover:bg-primary/40 dark:hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>

          <ThemeToggle />
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        className={`border-t border-border bg-secondary md:hidden ${
          open ? "block" : "hidden"
        }`}
        role="navigation"
        aria-label="Mobile"
      >
        <ul className="flex flex-col px-4 py-3 sm:px-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-3 py-3 text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-accent/15 text-accent"
                      : "text-body-secondary hover:bg-primary/30 hover:text-accent dark:hover:bg-white/10"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
