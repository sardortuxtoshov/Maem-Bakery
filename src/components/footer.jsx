import React from "react";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md space-y-4 md:space-y-0">
            {/* Left Side (Logo) */}
            <div className="text-orange-500 font-bold text-xl">Maem Bakery</div>

            {/* Center (Navigation Links) */}
            <div className="flex flex-col md:flex-row md:space-x-8 text-gray-700 font-semibold items-center space-y-2 md:space-y-0">
                <a href="#" className="hover:text-orange-500">
                    About
                </a>
                <a href="#" className="hover:text-orange-500">
                    Menu
                </a>
                <a href="#" className="hover:text-orange-500">
                    Food Truck
                </a>
                <a href="#" className="hover:text-orange-500">
                    Gift Card
                </a>
                <a href="#" className="hover:text-orange-500">
                    Contact
                </a>
            </div>

            {/* Right Side (Privacy Policy) */}
            <div className="text-gray-500 hover:text-orange-500 font-semibold cursor-pointer">
                Privacy Policy
            </div>
        </footer>
    );
}
