import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-pink-400 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">E-Store</h2>
          <p className="text-sm">
            Your one-stop shop for electronics, fashion, and more. Bringing you quality products at the best prices.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2">
            <li><a href="/store" className="hover:underline">All Products</a></li>
            <li><a href="/categories" className="hover:underline">Categories</a></li>
            <li><a href="/deals" className="hover:underline">Deals</a></li>
            <li><a href="/new-arrivals" className="hover:underline">New Arrivals</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/returns" className="hover:underline">Returns</a></li>
            <li><a href="/shipping" className="hover:underline">Shipping Info</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-6 py-4 text-center text-sm">
        © {new Date().getFullYear()} E-Store. All rights reserved.
      </div>
    </footer>
  );
}
