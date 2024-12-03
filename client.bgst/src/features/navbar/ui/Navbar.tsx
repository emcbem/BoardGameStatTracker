import { useState } from "react";
import { Links } from "./Links";
import { Link } from "react-router-dom";
import { Logo } from "../../logo/ui/Logo";
import LoginButton from "../../authentication/ui/login-button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkness-700 ">
      <div className="mx-auto px-4 max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-darkness-50 text-2xl bgst-text ">
              <div className="w-[30px]">
                <Logo />
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Links></Links>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="hidden md:block">
              <LoginButton></LoginButton>
            </div>
            <div className="md:hidden">
              <div className="flex flex-row items-center gap-4">
                <LoginButton></LoginButton>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-darkness-200  hover:text-darkness-50 hover:bg-darkness-600 rounded-md px-2 py-1 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-items-start">
          <Links></Links>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
