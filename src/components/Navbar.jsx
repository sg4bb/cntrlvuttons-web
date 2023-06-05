"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// ❤ assets
import BmcIcon from "@/components/icons/BmcIcon";
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import HamburguerIcon from "@/components/icons/HamburguerIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import KCapLogo from "@/components/icons/KCapLogo";

const initialThemeState = () => {
  if (localStorage.getItem("theme") !== ("dark" || "light")) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return localStorage.getItem("theme");
};

const Navbar = () => {
  const [theme, setTheme] = useState(initialThemeState);
  const [control, setControl] = useState(1);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      setControl(0);

      document.documentElement.classList.add("dark");

      setTimeout(() => {
        setControl(1);
      }, 300);
    } else {
      setControl(0);

      document.documentElement.classList.remove("dark");

      setTimeout(() => {
        setControl(1);
      }, 300);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const scale = () => {
    return control === 1 ? 100 : 0;
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const handlerDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const pathname = usePathname();

  return (
    <>
      <header className="w-full bg-gray-50 dark:bg-[#2c3147] text-gray-500 dark:text-gray-50 body-font shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-5">
          <Link
            href="/"
            className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0 hover:scale-110 duration-300"
          >
            <KCapLogo
              width={40}
              className="fill-indigo-500 dark:fill-emerald-400"
            />
            <span className="ml-3 text-xl text-indigo-500 dark:text-emerald-400 font-semibold antialiased">
              Cntrl + Vuttons
            </span>
          </Link>

          {/* Navigation for desktop  */}
          <section className="hidden lg:flex lg:items-center">
            <input
              type="text"
              placeholder="Search a button"
              className="relative p-2 bg-transparent hover:ring-2 rounded hover:ring-gray-300 focus:ring-0 duration-300"
            />
            <SearchIcon className="cursor-pointer absolute left-[52%]" />
          </section>

          <section className="hidden lg:flex space-x-2">
            <button
              onClick={handleTheme}
              className={`group flex items-center space-x-2 transition-all scale-${scale()} duration-300`}
            >
              <span className=" invisible group-hover:visible text-gray-400 group-hover:-translate-x-2 group-hover:text-indigo-500 dark:group-hover:text-emerald-400 transition-all delay-200">
                {theme === "light" ? <span>Light</span> : <span>Dark</span>}
              </span>
              {theme === "light" ? (
                <SunIcon className="stroke-gray-400 peer" />
              ) : (
                <MoonIcon className="stroke-gray-400 peer" />
              )}
            </button>

            <nav className="flex items-center justify-center text-base tracking-wide">
              <Link
                href="/contact"
                className={`peer text-center mx-4 text-sm duration-300`}
              >
                Contact with us
              </Link>
            </nav>

            <div className="inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer bg-gradient-to-br from-purple-500 to-blue-500 dark:from-emerald-400 dark:to-sky-700 rounded-full p-2 swing">
              <a href="https://www.buymeacoffee.com/" target="_blank">
                <BmcIcon height={40} width={30} className="fill-white" />
              </a>
            </div>
          </section>

          {/* Navigation for mobile */}
          <section
            className={`${
              openDrawer
                ? "block lg:hidden absolute top-0 right-0 z-10 min-h-screen w-3/6 gap-y-[21px] bg-white dark:bg-[#2c3147] p-8"
                : "hidden"
            }`}
          >
            <div className="relative block lg:hidden mb-20">
              <button
                className="absolute right-0 growItem"
                onClick={handlerDrawer}
              >
                <CloseIcon className="stroke-indigo-500 dark:stroke-emerald-400" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-7">
              <div>
                <input
                  id="filter"
                  type="text"
                  placeholder="Search a button"
                  className="p-2 bg-transparent w-full text-center text-xs md:text-md"
                />
              </div>

              <div className="flex items-center justify-center text-base tracking-wide">
                <Link
                  href="/"
                  className={`peer text-center mx-4 hover:text-indigo-500 hover:dark:text-emerald-400 text-xs md:text-md ${
                    pathname === "/"
                      ? "text-indigo-500 dark:text-emerald-400"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </div>

              <div className="flex items-center justify-center text-base tracking-wide">
                <Link
                  href="/contact"
                  className={`peer text-center mx-4 hover:text-indigo-500 hover:dark:text-emerald-400 text-xs md:text-md ${
                    pathname === "/contact"
                      ? "text-indigo-500 dark:text-emerald-400"
                      : ""
                  }`}
                >
                  Contact with us
                </Link>
              </div>

              <a href="https://www.buymeacoffee.com/" target="_blank">
                <button className="flex items-center text-white bg-gradient-to-br from-purple-500 to-blue-500 dark:from-emerald-400 dark:to-sky-700 rounded-full p-2 swing text-xs md:text-md">
                  <BmcIcon height={40} width={30} className="fill-white" />
                  Buy me a coffe
                </button>
              </a>
            </div>
          </section>

          <div className="flex lg:hidden items-center space-x-6">
            <button className="block lg:hidden" onClick={handleTheme}>
              {theme === "light" ? (
                <SunIcon className="stroke-gray-400" />
              ) : (
                <MoonIcon className="stroke-gray-400" />
              )}
            </button>

            <HamburguerIcon
              className="text-indigo-500 dark:text-emerald-400 block lg:hidden"
              onClick={handlerDrawer}
            />
          </div>
        </div>
      </header>

      {openDrawer && (
        <span className="block lg:hidden bg-black/40 absolute top-0 left-0 h-full w-full z-[5]"></span>
      )}
    </>
  );
};

export default Navbar;
