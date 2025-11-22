import { getProduct } from '@/library'
import React from 'react'
import AddToCart from '@/component/AddToCart';

export default async function page({ params }) {
  const data = await getProduct(params.productId)

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex flex-col gap-4">
          <img
            src={data.thumbnail}
            alt={data.title}
            width={500}
            height={500}
            className="rounded-xl shadow-md"
          />
          <div className="flex gap-3">
            {data.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`product-${i}`}
                width={100}
                height={100}
                className="rounded-md border"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {data.title}
          </h1>
          <p className="text-gray-600 mb-5">{data.description}</p>

          <div className="text-2xl font-semibold text-pink-600 mb-2">
            ${data.price}
          </div>
          <div className="text-sm text-gray-500 mb-4">
            {data.discountPercentage}% OFF
          </div>

          <AddToCart prod={data} />

          <div className="mt-6">
            <p><b>Brand:</b> {data.brand}</p>
            <p><b>Category:</b> {data.category}</p>
            <p><b>Stock:</b> {data.stock} ({data.availabilityStatus})</p>
            <p><b>Warranty:</b> {data.warrantyInformation}</p>
            <p><b>Shipping:</b> {data.shippingInformation}</p>
            <p><b>Return Policy:</b> {data.returnPolicy}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {data.reviews.map((review, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 bg-gray-50 shadow-sm"
            >
              <p className="font-semibold">
                {review.reviewerName} - ⭐ {review.rating}
              </p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

