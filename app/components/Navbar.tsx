'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-heading text-2xl font-bold text-coral hover:text-ocean transition-colors">
            Discover Whitsundays
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="font-body text-gray-700 hover:text-coral transition-colors font-medium">
              About
            </Link>
            <Link href="/islands" className="font-body text-gray-700 hover:text-coral transition-colors font-medium">
              Islands
            </Link>
            <Link href="/things-to-do" className="font-body text-gray-700 hover:text-coral transition-colors font-medium">
              Things to Do
            </Link>
            <Link href="/where-to-stay" className="font-body text-gray-700 hover:text-coral transition-colors font-medium">
              Where to Stay
            </Link>
            <Link href="/whitehaven-beach" className="font-body text-gray-700 hover:text-coral transition-colors font-medium">
              Whitehaven Beach
            </Link>
            <Link href="/itinerary-3-day" className="font-body text-gray-700 hover:text-coral transition-colors font-medium">
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-coral focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              href="/about"
              className="block py-2 font-body text-gray-700 hover:text-coral hover:bg-gray-50 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/islands"
              className="block py-2 font-body text-gray-700 hover:text-coral hover:bg-gray-50 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Islands
            </Link>
            <Link
              href="/things-to-do"
              className="block py-2 font-body text-gray-700 hover:text-coral hover:bg-gray-50 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Things to Do
            </Link>
            <Link
              href="/where-to-stay"
              className="block py-2 font-body text-gray-700 hover:text-coral hover:bg-gray-50 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Where to Stay
            </Link>
            <Link
              href="/whitehaven-beach"
              className="block py-2 font-body text-gray-700 hover:text-coral hover:bg-gray-50 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Whitehaven Beach
            </Link>
            <Link
              href="/itinerary-3-day"
              className="block py-2 font-body text-gray-700 hover:text-coral hover:bg-gray-50 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Plan Your Trip
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}