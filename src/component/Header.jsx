"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Container from "./Container";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 640) {
        const currentY = window.scrollY;

        if (currentY <= 0) {
          setShowHeader(true);
          setLastScrollY(0);
          return;
        }

        if (currentY > lastScrollY) {
          setShowHeader(false);
        }
        else {
          setShowHeader(true);
        }

        setLastScrollY(currentY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white backdrop-blur-2xl border border-white px-2 shadow sticky top-0 w-full z-50 transition-transform duration-300
      ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <Container>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 relative">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center text-3xl md:text-4xl cursor-pointer">
              <span className="text-pink-500 font-bold">E-Store</span>
              <b className="text-black"> . </b>
            </div>
          </Link>

          {/* ===== Desktop Nav Links ===== */}
          <nav className="hidden sm:flex gap-8 text-lg font-semibold">
            <Link href="/" className="hover:text-pink-500">
              Home
            </Link>
            <Link href="/store" className="hover:text-pink-500">
              Store
            </Link>
          </nav>

          {/* Search Bar (hidden on small screens) */}
          <div className="hidden sm:flex items-center flex-1 max-w-[400px] mx-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-[11px] rounded-r-full cursor-pointer">
              <FiSearch size={18} />
            </button>
          </div>

          {/* Right Section (Icons + Menu) */}
          <div className="flex items-center gap-4">
            {/* Hamburger for Mobile */}
            <button
              className="sm:hidden text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>

            {/* Cart Icon */}
            <Link href="/cart">
              <div className="relative cursor-pointer">
                <FiShoppingCart color="black" size={24} />
                  <span className="absolute -top-3 -right-4 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                
              </div>
            </Link>
          </div>

          {/* ===== Mobile Menu (slide in) ===== */}
          <div
            className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out 
            ${menuOpen ? "translate-x-0" : "-translate-x-full"} sm:hidden`}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-300 ">
              <h2 className="text-3xl p-1 font-bold text-pink-500">E-Store</h2>
              <button onClick={() => setMenuOpen(false)}>
                <FiX size={26} />
              </button>
            </div>

            <nav className="flex flex-col p-5 gap-5 text-lg font-semibold bg-white h-screen">
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden mt-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 outline-none"
                />
                <button className="bg-pink-500 text-white px-3 py-2 h-full">
                  <FiSearch size={18} />
                </button>
              </div>
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-pink-500">
                Home
              </Link>
              <Link href="/store" onClick={() => setMenuOpen(false)} className="hover:text-pink-500">
                Store
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
