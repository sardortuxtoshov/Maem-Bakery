import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Ikonkalar uchun react-icons kutubxonasidan foydalanamiz

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Burger menyuni toggling qilish funksiyasi
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="container mx-auto flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#f75b3b] font-cookie">
                Maem Bakery
            </div>

            {/* Delivery text */}
            <div className="hidden md:block text-sm text-gray-700 font-medium">
                GET FREE DELIVERY ON ALL ORDERS OVER $50
            </div>

            {/* Burger menu icon (mobil qurilmalar uchun) */}
            <div
                className="md:hidden text-3xl cursor-pointer"
                onClick={toggleMenu}
            >
                {isOpen ? <HiX /> : <HiOutlineMenu />}
            </div>

            {/* Menu items */}
            <div
                className={`flex-col   md:flex-row md:items-center md:space-x-8 text-gray-800 font-medium absolute md:static md:w-auto left-0 top-20 md:top-0 md:flex ${
                    isOpen
                        ? "flex border bg-zinc-100 shadow-sm w-[80%] items-center"
                        : "hidden "
                } transition-all duration-300`}
            >
                <Link
                    to="#explore"
                    className="block py-2 px-4 hover:text-[#f75b3b]"
                >
                    Explore
                </Link>
                <Link
                    to="#order"
                    className="block py-2 px-4 hover:text-[#f75b3b]"
                >
                    Order
                </Link>
                <Link
                    to="#contact"
                    className="block py-2 px-4 hover:text-[#f75b3b]"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
