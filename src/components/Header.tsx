import { Link } from "@tanstack/react-router";
import { useTheme } from "../hooks/useTheme";
import { useState, useEffect } from "react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const headerClass = `transition duration-500 ease-in-out ${
    isScrolled
      ? "bg-opacity-90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50"
      : "bg-opacity-70"
  } bg-blue-50 text-slate-900 dark:bg-slate-800 dark:text-slate-100`;

  return (
    <header className={headerClass}>
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">
          <Link
            to="/"
            className="transition hover:text-blue-700 dark:hover:text-blue-400"
          >
            My App
          </Link>
        </h1>

        <ul className="hidden space-x-6 font-medium md:flex">
          <li>
            <Link
              to="/"
              className="transition hover:text-blue-700 dark:hover:text-blue-400"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="transition hover:text-blue-700 dark:hover:text-blue-400"
              aria-current="page"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="transition hover:text-blue-700 dark:hover:text-blue-400"
              aria-current="page"
            >
              Contact
            </Link>
          </li>
        </ul>

        <section className="hidden items-center space-x-2 md:flex">
          <form className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-slate-300 bg-blue-100 py-2 pl-2 pr-12 text-sm text-slate-900 placeholder-slate-600 outline-none transition hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:hover:border-blue-400 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              aria-label="Search input"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-3 flex items-center text-slate-500 transition hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </section>

        <section className="flex items-center space-x-4">
          <Link
            to="/sign-in"
            className="hidden rounded-md border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium text-white transition duration-150 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 md:block dark:bg-teal-400 dark:hover:bg-teal-500 dark:focus:ring-teal-800"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="hidden rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition duration-150 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:block dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-800"
          >
            Sign Up
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full p-2 transition hover:bg-blue-100 focus:outline-none dark:hover:bg-blue-800"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            )}
          </button>
        </section>
      </nav>
    </header>
  );
};
