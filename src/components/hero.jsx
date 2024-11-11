import React from "react";

export default function Hero() {
    return (
        <div className="bg-[#f7f5e7] text-center py-12 px-6">
            {/* Katta matn (Subtitle) */}
            <h2 className="max-w-3xl mx-auto text-xl md:text-4xl lg:text-5xl xl:text-[50px] font-semibold text-[#f75b3b] mb-4 font-merriweather">
                Beverages, Bread, Savory, Cookies and Pastries
            </h2>

            {/* Asosiy matn (Title) */}
            <h1 className="text-[100px] md:text-8xl lg:text-9xl xl:text-[500px] font-bold text-[#f75b3b] leading-none">
                Maem
            </h1>

            {/* Ish vaqtlarini ko'rsatish */}
            <div className="text-gray-700 font-medium mb-4 text-sm md:text-base mt-4">
                <span className="mr-4 md:mr-8">
                    Mon - Fri (8 AM until 8 PM)
                </span>
                <span>Sat - Sun (10 AM until 10 PM)</span>
            </div>

            {/* Tavsif matni */}
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
                With Maem’s reliable delivery service, you can savor these
                delicious breads without leaving the comfort of your home. Each
                bite is a moment of pure delight, making every day a little
                brighter and a lot tastier.
            </p>
        </div>
    );
}
