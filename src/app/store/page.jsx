"use client";
import React, { useState, useEffect } from "react";
import Container from "@/component/Container";
import ProductBox from "@/component/ProductBox";
import { categoryapi, productapi } from "@/library";

export default function StorePage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [showCategories, setShowCategories] = useState(false); // 👈 for mobile toggle

  // fetch categories once
  useEffect(() => {
    async function loadCategories() {
      const data = await categoryapi();
      setCategories(data);
    }
    loadCategories();
  }, []);

  // fetch products based on category
  useEffect(() => {
    async function loadProducts() {
      const data = await productapi(selectedCategory);
      setProducts(data.products || []);
    }
    loadProducts();
  }, [selectedCategory]);

  return (
    <Container className="relative grid md:grid-cols-5 gap-4">
      {/* ===== Mobile Toggle Button ===== */}
      <div className="md:hidden flex justify-between items-center mb-3">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md"
        >
          {showCategories ? "Hide Categories" : "Categories"}
        </button>
      </div>

      {/* ===== Category Sidebar ===== */}
      {/* Overlay for mobile */}
      {showCategories && (
        <div
          onClick={() => setShowCategories(false)}
          className={`fixed inset-0 bg-black ${showCategories? "z-55": "z-10"} md:hidden`}
        ></div>
      )}

      <div
        className={`
          fixed md:static top-0 left-0 h-full md:h-auto
          w-3/4 md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none 
          transform transition-transform duration-300 ease-in-out 
          ${showCategories ? "translate-x-0 z-60" : "-translate-x-full z-20"} 
          md:translate-x-0 
           rounded-xl
        `}
      >
        <CategoryListing
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            setShowCategories(false); // auto close on mobile after click
          }}
        />
      </div>

      {/* ===== Product Section ===== */}
      <div
        className="
          col-span-5 md:col-span-4
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4
        "
      >
        <ProductListing products={products} />
      </div>
    </Container>
  );
}

const CategoryListing = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-col mt-1 mr-4">
      <h4 className="text-center rounded-2xl shadow-lg text-2xl bg-pink-400 text-white p-3 m-1">
        Categories
      </h4>
      {categories.map((d, i) => (
        <button
          key={"category-" + i}
          onClick={() => onCategoryChange(d.slug || d)} // handle string or object
          className={`px-4 py-2 font-semibold rounded-lg shadow-md my-0.5 transition-all
            ${
              selectedCategory === (d.slug || d)
                ? "bg-pink-400 text-white"
                : "bg-white text-pink-500 hover:ring-2 hover:ring-pink-400 hover:ring-opacity-75"
            }
          `}
        >
          {d.name || d}
        </button>
      ))}
    </div>
  );
};

const ProductListing = ({ products }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((p) => <ProductBox key={p.id} prod={p} />)
      ) : (
        <p className="text-gray-500 col-span-full text-center mt-10">
          No products found.
        </p>
      )}
    </>
  );
};
