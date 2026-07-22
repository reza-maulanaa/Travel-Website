"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Trips" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left — Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Plane className="h-[18px] w-[18px] -rotate-45" />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Travel
            <span className="text-emerald-600"> Kuy</span>
          </span>
        </Link>

        {/* Center — Desktop Nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("?")[0].split("#")[0]);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-emerald-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-emerald-600" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right — Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/admin/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Login
          </Link>
          <Link
            href="/trips"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md"
          >
            Book Now
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile — Hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <span
            className={`absolute transition-all duration-300 ${
              mobileOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Menu className="h-5 w-5" />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              mobileOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          >
            <X className="h-5 w-5" />
          </span>
        </button>
      </nav>

      {/* Mobile — Drawer */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-x-0 top-16 z-50 origin-top transition-all duration-300 ease-out lg:hidden ${
          mobileOpen
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-b-2xl border border-slate-200/60 bg-white/95 shadow-xl backdrop-blur-xl">
            <ul className="divide-y divide-slate-100 p-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(
                        link.href.split("?")[0].split("#")[0]
                      );
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-slate-100 p-3">
              <div className="flex gap-2">
                <Link
                  href="/admin/login"
                  className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Login
                </Link>
                <Link
                  href="/trips"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
