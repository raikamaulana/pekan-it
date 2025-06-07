"use client"
import { useEffect, useRef } from "react";

export default function Hero() {
    const bigStarRef = useRef(null);
    const smallStarRef = useRef(null);

    return (
        <>
            <div>
                {/* Hero Section */}
                <section id="hero" className="h-screen flex justify-center items-center bg-mainBlack blue-300 transition-all duration-500 px-10 md:px-0 relative " style={{ backgroundImage:"url('/bg/starry-sky.png')" }}>
                    <img
                        src="/bg/gradasi-biru.svg"
                        width="500"
                        height="429"
                        alt="logo"
                        className="absolute w-full scale-200 top-60 -rotate-10 translate-x-20 md:translate-x-0 md:rotate-0 md:scale-100 md:-top-50 select-none overflow-hidden"
                    />
                    <img
                        ref={bigStarRef}
                        src="/icons/bintang-besar.svg"
                        width="450"
                        height="429"
                        alt="logo"
                        className="absolute -left-30 scale-75 top-0 md:scale-100 md:-left-5 md:top-20 z-2 select-none"
                    />
                    <img
                        ref={smallStarRef}
                        src="/icons/bintang-kecil.png"
                        width="220"
                        height="100"
                        alt="logo"
                        className="absolute left-0 bottom-20 md:left-0 md:top-72 z-2 select-none"
                    />
                    <div className="font-oxanium z-3">
                        <h1 className="xl:text-[145px] lg:text-9xl md:text-8xl sm:text-7xl text-6xl text-white font-semibold lg:mt-4 mb-4 md:mb-0 transition-all duration-500 text-center lg:leading-44 selection:bg-purple-950 selection:text-white">
                            404 Not Found
                        </h1>
                        <p className="font-medium text-xl sm:text-2xl md:text-4xl lg:text-5xl md:mt-2 xl:mt-4 text-white text-center transition-all duration-500 shadow-text selection:bg-purple-950">
                        Halaman yang kamu cari tidak ada.
                        </p>
                    </div>
                </section>
                {/* Hero Section */}
            </div>
        </>
    );
}