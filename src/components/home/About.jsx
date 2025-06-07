"use client"
import React from 'react'
import "../../app/globals.css";

export default function About() {
    return (
        <>
        <section id="about" className="h-screen flex justify-center items-center bg-mainBlack transition-all duration-500 relative">
            <div className="font-oxanium z-1">
                <h1 className="text-6xl sm:text-7xl font-semibold md:mt-4 md:mb-4 mb-0 transition-all duration-500 text-center selection:bg-purple-950 text-white">
                    About Us
                </h1>
                <div className="w-2/3 mx-auto">    
                    <p className="text-xl sm:text-2xl md:text-3xl mt-10 md:mt-20 text-white text-center transition-all duration-500 shadow-text selection:bg-purple-950">
                    Merupakan kegiatan yang mewadahi ide dan kreativitas bidang IT lewat kompetisi dan edukasi, dengan 4 rangkaian kegiatan. Dikelola oleh Divisi Edukasi, Himpunan Mahasiswa Informatika (HIMTIKA) UNSIKA.
                    </p>
                </div>
                <div className="absolute bottom-20 md:bottom-0 left-10 sm:left-20 md:left-30 lg:left-40 w-[1px] h-[1px] rounded-full shadow-green-glow-mob md:shadow-green-glow"></div>
                <div className="absolute -bottom-10 sm:-bottom-20 md:-bottom-40 right-10 w-[1px] h-[1px] rounded-full shadow-purple-glow-mob md:shadow-purple-glow"></div>
            </div>
        </section>
        </>
    )
}
