"use client";
import { useState } from "react";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";
import Logo from "../logo";
import { ThemeToggle } from "@/components/themeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl ">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-8">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 dark:text-white"
          >
            <div className="flex items-center justify-center gap-3">
              <Logo className="w-10 h-10" />
              HireSight AI
            </div>
          </Link>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link
            href="/features"
            className="hover:text-blue-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:text-blue-400 transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 dark:text-white font-medium">
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-xl">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="text-sm font-medium">{user?.name || ""}</span>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-700">
                      {user?.email}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setProfileOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="cursor-pointer text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <Link href="/login" className=" transition-colors">
                Login
              </Link>
            </button>
          )}

          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
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

            {isAuthenticated ? (
              <div className="flex items-center gap-3 py-2">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div>
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-gray-400">{user?.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="ml-auto text-red-400 hover:text-red-300 cursor-pointer"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-fit">
                <Link href="/login">Login</Link>
              </button>
            )}

            <div className="py-2 w-fit">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
