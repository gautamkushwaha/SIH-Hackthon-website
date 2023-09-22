"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="w-[100vw] fixed top-0 bg-black z-50 px-[75px]">
        <div className="w-[100%] flex flex-row justify-between p-5 ">
          <div className="items-center">
            <h2 className="font-bold text-2xl m-1 text-white">Indian Railway..</h2>
          </div>
          {/* Mobile Menu */}
          <div className="sm:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M3.293 4.293a1 1 0 011.414 0L12 11.586l7.293-7.293a1 1 0 111.414 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 6a1 1 0 011-1h14a1 1 0 010 2H5a1 1 0 01-1-1zM4 11a1 1 0 011-1h14a1 1 0 010 2H5a1 1 0 01-1-1zM4 16a1 1 0 011-1h14a1 1 0 010 2H5a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden sm:flex text-white ">
            <ul className="flex text-[20px]">
              <Link href="/">
                <li className="mx-5 cursor-pointer">Home</li>
              </Link>
              <Link href="#goto">
                <li className="mx-5 cursor-pointer">Go TO</li>
              </Link>
              <Link href="#about">
                <li className="mx-5 cursor-pointer">About</li>
              </Link>
              <Link href="#technology">
                <li className="mx-5 cursor-pointer">Skills</li>
              </Link>
              <Link href="#contact">
                <li className="mx-5 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* Mobile Menu Content */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"
            } sm:hidden bg-gray-900`}
        >
          <ul className="flex flex-col text-white">
            <Link href="/">
              <li className="p-4 cursor-pointer">Home</li>
            </Link>
            <Link href="#goto">
              <li className="p-4 cursor-pointer">Go To</li>
            </Link>
            <Link href="#about">
              <li className="p-4 cursor-pointer">About</li>
            </Link>
            <Link href="#technology">
              <li className="p-4 cursor-pointer">Skills</li>
            </Link>
            <Link href="#contact">
              <li className="p-4 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
