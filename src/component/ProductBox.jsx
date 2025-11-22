import React from "react";
import { FaStar } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import AddToCart from "./AddToCart";

export default function ProductBox({ prod }) {

  return (
    <div className="h-[330px] sm:h-[454px] lg:h-[454px] bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl flex justify-between flex-col relative">
      {/* Discount Badge */}
      {prod.discountPercentage > 0 && (
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          -{prod.discountPercentage}%
        </span>
      )}

      {/* Product Image */}
      <Link href={`/store/product-detail/${prod.id}`}>
        <img
          src={prod.thumbnail}
          alt={prod.title}
          className="w-38 sm:w-48 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-105 mx-auto"
        />
      </Link>

      {/* Product Info */}
      <div className="mt-4 flex flex-col">
        <h2 className="text-lg sm:text-base font-bold text-gray-800 truncate">
          {prod.brand}
        </h2>
        <h3 className="text-sm font-medium truncate sm:whitespace-normal text-gray-600">
          {prod.title}
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <p className="text-gray-900 font-bold text-base sm:text-sm">
            ₹{prod.price}
          </p>
          {prod.discountPercentage > 0 && (
            <span className="text-sm text-gray-500 line-through">
              ₹{(prod.price / (1 - prod.discountPercentage / 100)).toFixed(0)}
            </span>
          )}
        </div>

        <div className="hidden sm:flex items-center gap-1 mt-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={14}
              className={i < Math.round(prod.rating) ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-600 text-sm ml-1">({prod.rating})</span>
        </div>

        {/* Add to Cart / Quantity Control */}
        <AddToCart prod={prod} />
      </div>
    </div>
  );
}
