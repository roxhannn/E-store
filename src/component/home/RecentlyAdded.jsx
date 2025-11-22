import React from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

export default async function RecentlyAdded() {
  const response = await fetch(
    "https://dummyjson.com/products/category/mobile-accessories?limit=5&skip=5",
    { cache: "no-store" } // optional, ensures fresh data
  );
  const data = await response.json();

  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <div className="text-center text-2xl md:text-3xl font-bold mb-4">
          <h1 className="text-black">Recently Added Products</h1>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >

          {data.products.map((prod) => (
            <ProductBox key={prod.id} prod={prod} />
          ))}
        </div>
      </Container>
    </div>
  );
}
