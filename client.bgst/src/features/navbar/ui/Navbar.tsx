import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkness-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-darkness-50 text-2xl bgst-text ">
              BGST
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/boardgames" className="text-darkness-200 hover:text-darkness-50 hover:bg-darkness-600 px-3 py-2 rounded-md text-sm font-medium">
                  BoardGames
                </a>
                <a href="#" className="text-darkness-200 hover:text-darkness-50 hover:bg-darkness-600  px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-darkness-200 hover:text-darkness-50 hover:bg-darkness-600 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </a>
                <a href="#" className="text-darkness-200 hover:text-darkness-50 hover:bg-darkness-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-darkness-200 hover:text-darkness-50 hover:bg-darkness-600 rounded-md px-2 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a> TODO: Make these links a component. And make them glow when the link is on the right page.   */ } 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
