'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Discover Whitsundays
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/islands" className="text-gray-700 hover:text-blue-600">
              Islands
            </Link>
            <Link href="/things-to-do" className="text-gray-700 hover:text-blue-600">
              Things to Do
            </Link>
            <Link href="/where-to-stay" className="text-gray-700 hover:text-blue-600">
              Where to Stay
            </Link>
            <Link href="/whitehaven-beach" className="text-gray-700 hover:text-blue-600">
              Whitehaven Beach
            </Link>
            <Link href="/itinerary-3-day" className="text-gray-700 hover:text-blue-600">
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
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
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/islands"
              className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4"
              onClick={() => setIsOpen(false)}
            >
              Islands
            </Link>
            <Link
              href="/things-to-do"
              className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4"
              onClick={() => setIsOpen(false)}
            >
              Things to Do
            </Link>
            <Link
              href="/where-to-stay"
              className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4"
              onClick={() => setIsOpen(false)}
            >
              Where to Stay
            </Link>
            <Link
              href="/whitehaven-beach"
              className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4"
              onClick={() => setIsOpen(false)}
            >
              Whitehaven Beach
            </Link>
            <Link
              href="/itinerary-3-day"
              className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4"
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