import React from "react";
import Slider from "./Slider";
import Container from "../Container";
import Link from "next/link";

export default function Hero() {
    return (
        <Container>
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-8 py-12 md:py-16 rounded-xl max-w-7xl mx-auto gap-8">

                {/* Text Section */}
                <div className="flex-1 text-gray-700 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        One stop solution{" "}
                        <span className="text-pink-500 inline-block whitespace-nowrap">
                            E-Store
                        </span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed mb-3">
                        Discover the latest headphones, earphones, mobiles, tablets etc.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-6">
                        Exclusive deals just for you!
                    </p>
                    <Link href="/store">
                        <button className="bg-gray-100 text-pink-500 px-5 md:px-6 py-2.5 md:py-3 text-base md:text-lg rounded-lg font-medium hover:bg-pink-500 hover:text-white transition-colors">
                            Shop Now
                        </button>
                    </Link>
                </div>

                {/* Image Slider */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-lg">
                        <Slider />
                    </div>
                </div>

            </section>
        </Container>
    );
}
