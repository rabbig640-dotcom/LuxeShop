import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";
import WishlistSidebar from './WishlistSidebar';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar() {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const location = useLocation();

  // Regular nav links (excluding Home)
  const regularLinks = [
    {
      name: "Products",
      path: "/products",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      name: "About",
      path: "/about",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Contact",
      path: "/contact",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  // Home link with special styling
  const homeLink = {
    name: "Home",
    path: "/",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  };

  // Desktop nav links (all links for desktop)
  const desktopLinks = [homeLink, ...regularLinks];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className="hidden md:block sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary-500/25">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                </svg>
              </div>
              <span className="text-2xl font-display font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                  Luxe
                </span>
                <span className="text-gray-900 dark:text-white">Shop</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {desktopLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    location.pathname === link.path
                      ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:block w-72">
                <SearchBar />
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-red-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-slide-in shadow-lg">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-primary-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-slide-in shadow-lg">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation with Center Home Button */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 safe-area-bottom">
        <div className="relative">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-around h-16 px-1">
              {/* Left side links - Products */}
              <div className="flex items-center justify-center flex-1">
                <Link
                  to="/products"
                  className={`relative flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition-all duration-200 min-w-[60px] group ${
                    location.pathname === "/products"
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  <div
                    className={`relative ${location.pathname === "/products" ? "scale-110" : ""} transition-transform`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    {location.pathname === "/products" && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
                    )}
                  </div>
                  <span className="text-[10px] font-medium">Products</span>
                  {location.pathname === "/products" && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></span>
                  )}
                </Link>
              </div>

              {/* Wishlist Button - Left side of center */}
              <div className="flex items-center justify-center flex-1">
                <button
                  onClick={() => setIsWishlistOpen(true)}
                  className="relative flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition-all duration-200 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 min-w-[60px] group"
                >
                  <div className="relative">
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-slide-in shadow-lg">
                        {wishlistCount}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-medium">Wishlist</span>
                </button>
              </div>

              {/* Center Home Button (Floating) */}
              <div className="relative -mt-6 mx-0.5">
                <Link
                  to="/"
                  className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg ${
                    location.pathname === "/"
                      ? "bg-gradient-to-br from-primary-500 to-accent-500 shadow-primary-500/30"
                      : "bg-gradient-to-br from-primary-500 to-accent-500 shadow-primary-500/25 hover:shadow-primary-500/40"
                  }`}
                >
                  <div className="text-white">{homeLink.icon}</div>
                  {location.pathname === "/" && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-primary-500"></span>
                  )}
                  {/* Ripple effect */}
                  <span className="absolute inset-0 rounded-full bg-white/20 scale-0 hover:scale-100 transition-transform duration-300"></span>
                </Link>
                <span
                  className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium whitespace-nowrap ${
                    location.pathname === "/"
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  Home
                </span>
              </div>

              {/* Right side links - Cart */}
              <div className="flex items-center justify-center flex-1">
                <button
                  onClick={() => setIsOpen(true)}
                  className="relative flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition-all duration-200 text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 min-w-[60px] group"
                >
                  <div className="relative">
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    {totalItems > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-slide-in shadow-lg">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-medium">Cart</span>
                </button>
              </div>

              {/* About link - Right side */}
              <div className="flex items-center justify-center flex-1">
                <Link
                  to="/about"
                  className={`relative flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition-all duration-200 min-w-[60px] group ${
                    location.pathname === "/about"
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  <div
                    className={`relative ${location.pathname === "/about" ? "scale-110" : ""} transition-transform`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {location.pathname === "/about" && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
                    )}
                  </div>
                  <span className="text-[10px] font-medium">About</span>
                  {location.pathname === "/about" && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar (Search) */}
      <div className="md:hidden sticky top-0 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
              </svg>
            </div>
            <span className="text-lg font-display font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Luxe
              </span>
              <span className="text-gray-900 dark:text-white">Shop</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`px-4 pb-3 transition-all duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <SearchBar />
        </div>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="md:hidden"></div>
      
      {/* Wishlist Sidebar */}
      <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
}