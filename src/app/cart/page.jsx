"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

  // Calculate totals
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Empty cart view
  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-gray-600">
        <MdRemoveShoppingCart className="text-6xl text-pink-500 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty!!!!!!!!!!!!!!!!!!!!!!!!!!!</h2>
        <p className="text-gray-500 mb-6">Looks like you haven’t added anything yet.</p>
        <a
          href="/"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
        >
          Continue Shopping
        </a>
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-sm mt-6">
      <div className="flex items-center gap-3 mb-6">
        <FaShoppingCart className="text-pink-500 text-2xl" />
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h2 className="font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">₹{item.price}</p>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-gray-700 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold text-gray-800">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm flex items-center justify-end mt-2 gap-1"
              >
                <FaTrashAlt /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="flex justify-between text-lg font-semibold text-gray-800 mb-3">
          <span>Grand Total:</span>
          <span className="text-pink-500">₹{total.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={clearCart}
            className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            <FaTrashAlt /> Clear Cart
          </button>

          <button
            className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-pink-600 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
