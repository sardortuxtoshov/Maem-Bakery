import React from "react";
import GallaryImages from "../assets/bread.avif";

const items = [
    {
        title: "Baguette crustythin",
        description:
            "A baguette with a crispy crust and a soft interior, perfect for enjoying with butter or as a meal companion.",
        ingredients: "Wheat flour, water, salt, yeast",
        image: GallaryImages,
    },
    // Shu kabi boshqa elementlarni qo'shishingiz mumkin.
    {
        title: "Baguette crustythin",
        description:
            "A baguette with a crispy crust and a soft interior, perfect for enjoying with butter or as a meal companion.",
        ingredients: "Wheat flour, water, salt, yeast",
        image: GallaryImages,
    },
    {
        title: "Baguette crustythin",
        description:
            "A baguette with a crispy crust and a soft interior, perfect for enjoying with butter or as a meal companion.",
        ingredients: "Wheat flour, water, salt, yeast",
        image: GallaryImages,
    },
    // Boshqa elementlar shu formatda qo'shilishi mumkin.
];

export default function Gallary() {
    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center mt-10 px-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full md:w-[48%] lg:w-[30%] bg-white rounded-lg shadow-lg"
                    >
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl lg:text-[35px] text-center font-bold text-[#f95519]">
                                {item.title}
                            </h5>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg w-full h-64 object-cover"
                            />
                            <p className="text-center mt-4 text-[#797979]">
                                {item.ingredients}
                            </p>
                            <p className="text-center mt-3">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 px-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full md:w-[48%] lg:w-[30%] bg-white rounded-lg shadow-lg"
                    >
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl lg:text-[35px] text-center font-bold text-[#f95519]">
                                {item.title}
                            </h5>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg w-full h-64 object-cover"
                            />
                            <p className="text-center mt-4 text-[#797979]">
                                {item.ingredients}
                            </p>
                            <p className="text-center mt-3">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
