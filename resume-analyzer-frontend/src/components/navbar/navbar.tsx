"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../logo";
import { ThemeToggle } from "@/components/themeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 dark:bg-transparent">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">

        {/* Logo */}
        <div className="flex items-center justify-center gap-8">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            <div className="flex items-center justify-center gap-3">
              <Logo className="w-10 h-10" />
              HireSight AI
            </div>
          </Link>
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/features" className="hover:text-blue-400 transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 dark:text-white font-medium">


          <button className="cursor-pointer text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Link href="/login" className=" transition-colors">Login</Link>
          </button>

          <ThemeToggle />

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/20">
          <div className="flex flex-col text-white font-medium px-6 py-4 gap-4">

            <Link
              href="/"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/features"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>

            <Link
              href="/pricing"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-fit">
              Login
            </button>

            <div className="py-2 w-fit">
              <ThemeToggle />
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
