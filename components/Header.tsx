"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    console.log("Menu toggle clicked, current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Etusivu', path: '/' },
    { name: 'Tarinani', path: '/tarinani' },
    { name: 'Palvelut', path: '/palvelut' },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2E8B57] shadow-md sticky top-0 z-[1000] px-[30px] py-[20px]">
      <div className="flex justify-start items-center gap-[60px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image 
              src="/hd_logo.png" 
              alt="BittiViidakon Logo" 
              width={40} 
              height={40} 
              className="object-contain h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigaatio */}
          <nav className="hidden md:flex space-x-8 mx-auto" style={{fontFamily: 'rajdhani, sans-serif'}}>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-lg font-semibold transition-all px-4 py-2 rounded-lg ${
                  pathname === link.path 
                    ? 'text-white bg-black/20 shadow-lg' 
                    : 'text-black hover:text-white hover:bg-black/10 hover:shadow-md'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Hampurilaisvalikon painike (Mobiili) */}
          <div className="md:hidden flex items-center ml-auto">
            <button 
              type="button"
              onClick={handleMenuToggle}
              className="text-black hover:text-[#32CD32] focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
        </div>
      </div>

      {/* Mobiilivalikko */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#4CAF50] to-[#2E8B57] border-t border-green-700" style={{fontFamily: 'rajdhani, sans-serif'}}>
          <div className="px-[30px] pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-semibold transition-all ${
                  pathname === link.path ? 'text-white bg-black/20 shadow-md' : 'text-black hover:text-white hover:bg-black/10 hover:shadow-sm'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
