import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Discounts from "../components/discounts";
import Gallary from "../components/gallary";
import Lookmenu from "../components/lookmenu";
import Info from "../components/info";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <div className="container m-auto bg-[#f3f3e7]">
                <Header />
                <Hero />
            </div>
            <div className="container m-auto bg-white p-5">
                <Discounts />
                <Gallary />
                <Lookmenu />
                <Info />
            </div>
            <Footer />
        </>
    );
}
