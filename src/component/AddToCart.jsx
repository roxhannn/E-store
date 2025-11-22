"use client";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from '@/context/CartContext';
import React from 'react'

export default function AddToCart({ prod }) {
    const { addToCart, increaseQty, decreaseQty, cart } = useCart();
    const inCart = cart.find((item) => item.id === prod.id);

    return (
        <>
            {!inCart ? (
                <button
                    onClick={() => addToCart(prod)}
                    className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300 text-sm sm:text-base"
                >
                    Add to cart
                </button>
            ) : (
                <div className="mt-3 inline-flex items-center justify-center bg-pink-100 rounded-lg">
                    <button
                        onClick={() => decreaseQty(prod.id)}
                        className="px-3 py-2 text-pink-600 hover:text-pink-800"
                    >
                        <FiMinus size={18} />
                    </button>

                    <span className="px-4 py-2 font-semibold text-gray-800">
                        {inCart.quantity}
                    </span>

                    <button
                        onClick={() => increaseQty(prod.id)}
                        className="px-3 py-2 text-pink-600 hover:text-pink-800"
                    >
                        <FiPlus size={18} />
                    </button>
                </div>
            )}

        </>
    )
}
