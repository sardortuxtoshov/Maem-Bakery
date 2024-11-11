import React from "react";
import LookmenuImages from "../assets/bread.avif";

export default function Lookmenu() {
    return (
        <div className="px-4">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <h3 className="text-2xl md:text-[35px] font-bold text-[#f95519] font-merriweather">
                    Look Menu
                </h3>
                <h3 className="text-2xl md:text-[35px] font-bold text-[#f95519] font-merriweather">
                    23
                </h3>
            </div>

            {/* Main Image */}
            <img
                className="w-full md:w-[80%] m-auto mt-5 rounded-lg"
                src={LookmenuImages}
                alt="LookmenuImages"
            />

            {/* Gallery Section */}
            <div className="flex flex-wrap gap-4 mt-5">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="w-full md:w-[30%] bg-white rounded-lg"
                    >
                        <img
                            src={LookmenuImages}
                            alt="GallaryImages"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Promo Section */}
            <div className="flex flex-col md:flex-row mt-6 p-6 bg-white rounded-lg gap-6 items-center">
                <div className="md:w-1/2">
                    <h5 className="text-2xl md:text-[50px] font-bold tracking-tight text-[#f95519] mb-4">
                        Enjoy Fresh Breads Without the Extra Cost!
                    </h5>
                    <p className="text-gray-700 mb-4">
                        Get Free Delivery on All Orders Over $50. Savor the
                        Taste, Skip the Fee!
                    </p>
                    <button className="px-5 py-3 text-xl font-medium text-white rounded-xl bg-[#f95519]">
                        Get Started
                    </button>
                </div>
                <img
                    src={LookmenuImages}
                    alt="LookMenuImages"
                    className="w-full md:w-1/2 rounded-lg object-cover"
                />
            </div>
        </div>
    );
}
