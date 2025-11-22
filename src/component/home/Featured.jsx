import React from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

export default async function FeaturedProducts() {
  const response = await fetch(
    "https://dummyjson.com/products/category/mobile-accessories?limit=5"
  );
  const data = await response.json();

  return (
    <div className="bg-white p-3">
      <Container>
        <div className="text-center text-2xl md:text-3xl font-bold mb-4">
          <h1 className="text-black">Featured Products</h1>
        </div>
        <div
          className="col-span-5 md:col-span-4
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {data.products.map((prod) => (
            <ProductBox key={prod.id} prod={prod} />
          ))}
        </div>
      </Container>
    </div>
  );
}
