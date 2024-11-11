import React from "react";
import LookmenuImages from "../assets/bread.avif";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { RiTimeLine } from "react-icons/ri";

export default function Info() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg flex flex-col md:flex-row gap-6">
            {/* Left Side - Information */}
            <div className="md:w-1/2">
                <h5 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f95519] mb-4">
                    Get More Information
                </h5>

                {/* Address Section */}
                <h3 className="text-2xl font-semibold">Address</h3>
                <div className="flex gap-2 items-center mt-3">
                    <IoLocationOutline className="text-xl text-black" />
                    <p>3891 Ranchview Dr. Richardson, California 62639</p>
                </div>
                <div className="h-[1px] bg-slate-600 my-4" />

                {/* Phone Section */}
                <h3 className="text-2xl font-semibold">Phone</h3>
                <div className="flex gap-4 flex-wrap items-center mt-3">
                    <div className="flex items-center gap-2">
                        <BsTelephone className="text-xl text-black" />
                        <p>
                            Contact sales officer <br /> (406) 555-0120
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsTelephone className="text-xl text-black" />
                        <p>
                            Contact support <br /> (406) 555-0120
                        </p>
                    </div>
                </div>
                <div className="h-[1px] bg-slate-600 my-4" />

                {/* Hours of Operation Section */}
                <h3 className="text-2xl font-semibold">Hours of Operation</h3>
                <div className="flex gap-4 flex-wrap items-center mt-3">
                    <div className="flex items-center gap-2">
                        <RiTimeLine className="text-xl text-black" />
                        <p>
                            Weekend (Sat - Sun) <br /> 10 AM until 10 PM
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiTimeLine className="text-xl text-black" />
                        <p>
                            Weekday (Mon - Fri) <br /> 8 AM until 8 PM
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Map */}
            <div className="md:w-1/2 h-[300px] md:h-[500px] bg-[#f95519] rounded-lg p-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3162.712789640522!2d67.588714!3d37.56183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDMzJzQyLjYiTiA2N8KwMzUnMTkuNCJF!5e0!3m2!1sen!2s!4v1731349675249!5m2!1sen!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg"
                ></iframe>
                <p className="text-center text-white mt-4">
                    3891 Ranchview Dr. Richardson, California 62639
                </p>
            </div>
        </div>
    );
}
