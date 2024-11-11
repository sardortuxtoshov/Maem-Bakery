import DiscountsImages from "../assets/Discounts.jpg";
import BreadImages from "../assets/bread.avif";
import React from "react";

export default function Discounts() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 px-4">
            <div className="w-full md:w-1/2">
                <img
                    className="w-full h-auto md:h-[600px] rounded-[10%]"
                    src={DiscountsImages}
                    alt="Discounts"
                />
            </div>
            <div className="w-full md:w-1/2 text-center">
                <h2 className="font-merriweather text-[30px] md:text-[60px] text-center text-[#f95519] mb-4">
                    Fresh Breads with Discounts!
                </h2>
                <div className="relative flex gap-4">
                    {/* First Bread with Discount Label */}
                    <div className="relative">
                        <img
                            src={BreadImages}
                            alt="Bread"
                            className="w-[100%] h-[400px] m-auto"
                        />
                        <div className="absolute top-40 left-20 bg-orange-500 text-white font-bold px-3 py-2 rounded-lg text-xl rotate-12">
                            Buy 2 <br /> Free 1
                        </div>
                    </div>
                </div>
                <p className="mt-6 text-gray-600 text-center">
                    Wheat flour, eggs, sugar, butter, milk
                </p>
                <p className="text-lg md:text-xl my-4 mx-auto max-w-[450px] text-center">
                    A convenient, sweet bread to enjoy while working, ideal as a
                    morning coffee companion.
                </p>
            </div>
        </div>
    );
}
