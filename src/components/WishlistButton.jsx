import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import Button from "./Button";

export default function WishlistButton({ product, className = "" }) {
  const { addToWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAnimating(true);
    addToWishlist(product);

    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      onClick={handleToggleWishlist}
      className={`relative group ${className}`}
      title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <div
        className={`p-2 rounded-xl transition-all duration-300 ${
          inWishlist
            ? "bg-red-50 dark:bg-red-900/30"
            : "bg-gray-100 dark:bg-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20"
        }`}
      >
        <svg
          className={`w-8 h-8 transition-all duration-300 ${
            isAnimating ? "scale-125" : "scale-100"
          } ${
            inWishlist
              ? "text-red-500 fill-red-500"
              : "text-gray-600 dark:text-gray-400 group-hover:text-red-500"
          }`}
          fill={inWishlist ? "currentColor" : "none"}
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
      </div>

      {/* Heart burst animation */}
      {isAnimating && !inWishlist && (
        <>
          <span className="absolute inset-0 bg-red-500 rounded-xl animate-ping opacity-25" />
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-red-500 animate-bounce text-xs">
            ♥
          </span>
        </>
      )}
    </button>
  );
}
