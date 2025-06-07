"use client"
import React from 'react'
import { useState } from "react";
import "../../app/globals.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Timeline() {
    const tabs = [
            { label: "Software Development & UI/UX", key: "uiux" },
            { label: "Competitive Programming", key: "cp" },
            { label: "Webinar", key: "webinar" },
            { label: "Seminar & Workshop", key: "seminar" },
        ]
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const timelineCompeMing = [
        { id: 1, title: "Sosialisasi & Pendaftaran", date: "1 - 30 Juni 2025" },
        { id: 2, title: "Pelaksanaan Lomba", date: "12 Juli 2025" },
        { id: 3, title: "Pengumuman Pemenang", date: "11 Agustus 2025" },
    ];

    const acaraWebinar = [
        { id: 1, title: "Sosialisasi & Pendaftaran", date: "7 - 26 Juli 2025" },
        { id: 2, title: "Pelaksanaan", date: "27 Juli 2025" },
    ];

    const acaraSeminar = [
        { id: 1, title: "Sosialisasi & Pendaftaran", date: "7 Juli - 7 Agustus 2025" },
        { id: 2, title: "Pelaksanaan", date: "11 Agustus 2025" },
    ];

    return (
        <>
        <section className="pb-28 pt-32 sm:pt-40 md:pt-48 px-6 sm:px-16 lg:px-18 bg-mainBlack transition-all duration-500 font-oxanium relative selection:bg-purple-900 selection:text-white">
            <h1 className="text-white font-semibold text-6xl md:text-7xl text-center transition-all duration-500 selection:bg-purple-900 relative z-2 shadow-text">
                Timeline <span className='block md:inline'>Pekan IT</span>
            </h1>
            <h2 className="text-base mt-15 md:mt-0 mb-1 md:hidden bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent font-medium italic text-center">scroll x to see more tabs</h2>
            <div className="w-full md:mt-15 items-center">
                {/* Tabs */}
                <div className="flex gap-2 md:gap-5 mb-10 overflow-x-scroll whitespace-nowrap">
                    {tabs.map((tab) => (
                    <motion.div
                        key={tab.key}
                        onClick={() => setSelectedTab(tab)}
                        className={`cursor-pointer px-4 py-3 text-sm w-full max-w-7xl rounded-2xl transition duration-300 text-white hover:text-white font-oxanium font-semibold text-center bg-black/50`}
                        animate={{
                        color: tab.key === selectedTab.key ? "#ffffff" : "#8a8a8a",
                        scale: tab.key === selectedTab.key ? 1.05 : 1,
                        }}
                    >
                        {tab.label}
                        {tab.key === selectedTab.key && (
                        <motion.div
                            layoutId="underline"
                            className="h-[3px] bg-linear-90/oklch from-[#00D4FF] to-[#BD63D1] mt-2 rounded-full"
                        />
                        )}
                    </motion.div>
                    ))}
                </div>

                {/* Timeline Section */}
                <AnimatePresence mode="wait">
                    <motion.div
                    key={selectedTab.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                    >
                        
                    {selectedTab.key === "uiux" && (
                        <div className="mt-12 sm:mt-13 lg:mt-14 xl:mt-15">
                            <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center transition-all duration-500 selection:bg-purple-900">
                                Perlombaan
                            </h1>
                            <div className="w-full max-w-fit mt-2 mx-auto">
                                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center transition-all duration-500 selection:bg-purple-900 bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent">
                                    Software Development <span className="block">& UI/UX</span>
                                </h2>
                            </div>
                            {/* TIMELINE UI/UX & Soft */}
                            <section id="timeline" className="w-full flex flex-col text-center justify-center relative mt-10">
                                <div className="flex flex-col items-center relative">
                                    {/* Garis Tengah */}
                                    <div className="absolute top-[4%] bottom-[4%] left-1/2 -translate-x-1/2 w-[5px] bg-mainPurple z-0"></div>

                                    {/* Timeline Item 1 */}
                                    <div className="grid grid-cols-[1fr_50px_1fr] sm:grid-cols-[1fr_70px_1fr] md:grid-cols-[1fr_90px_1fr] items-center w-full lg:w-[80%] my-4 relative transition duration-800 ease-out"
                                    >
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-base md:text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-17px)] md:left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                            1
                                        </div>
                                        <div className="bg-black/50 pl-3 py-3 md:py-4 rounded-[10px] shadow-md w-full col-start-3 text-left md:pl-5 lg:pl-6 xl:pl-8 box-shadow-timeline font-jakarta">
                                            <h3 className="mb-1 md:mb-3 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold md:font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent w-fit">
                                            Sosialisasi & Pendaftaran
                                            </h3>
                                            <p className="text-sm md:text-lg xl:text-xl font-light text-white">
                                            1 - 30 Juni 2025
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Item 2 */}
                                    <div className="grid grid-cols-[1fr_50px_1fr] sm:grid-cols-[1fr_70px_1fr] md:grid-cols-[1fr_90px_1fr] items-center w-full lg:w-[80%] my-0 md:my-2 lg:my-4 relative transition duration-800 ease-out"
                                    >
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-base md:text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-17px)] md:left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                            2
                                        </div>
                                        <div className="bg-black/50 pr-3 py-3 md:py-4 rounded-[10px] shadow-md w-full text-right font-jakarta md:pr-5 lg:pr-6 xl:pr-8 box-shadow-timeline">
                                            <h3 className="mb-1 md:mb-3 text-sm sm:text-lg md:text-xl xl:text-2xl font-semibold md:font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] w-[80%] mx-6 sm:mx-12 md:w-[80%] xl:mx-20 flex bg-clip-text text-transparent">
                                            Presentasi Karya 5 Peserta Terbaik
                                            </h3>
                                            <p className="text-sm md:text-lg xl:text-xl font-light text-white">
                                            12 Juli 2025
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Item 3 */}
                                    <div className="grid grid-cols-[1fr_50px_1fr] sm:grid-cols-[1fr_70px_1fr] md:grid-cols-[1fr_90px_1fr] items-center w-full lg:w-[80%] my-4 relative transition duration-800 ease-out">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-base md:text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-17px)] md:left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                            3
                                        </div>
                                        <div className="bg-black/50 pl-3 py-3 md:py-4 rounded-[10px] shadow-md w-full col-start-3 text-left md:pl-5 lg:pl-6 xl:pl-8 box-shadow-timeline font-jakarta">
                                            <h3 className="mb-1 md:mb-3 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold md:font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] w-fit bg-clip-text text-transparent">
                                            Pengumuman Pemenang
                                            </h3>
                                            <p className="text-sm md:text-lg xl:text-xl font-light text-white">
                                            11 Agustus 2025
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* TIMELINE UI/UX & Soft */}
                        </div>
                    )}
                    {selectedTab.key === "cp" && (
                        <div className="mt-12 sm:mt-13 lg:mt-14 xl:mt-15">
                            <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center transition-all duration-500 selection:bg-purple-900">
                                Perlombaan
                            </h1>
                            <div className="w-full max-w-fit mt-2 mx-auto">
                                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center transition-all duration-500 selection:bg-purple-900 bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent">
                                    Competitive <span className="block">Programming</span>
                                </h2>
                            </div>
                            {/* TIMELINE COMPE */}
                            <section id="timeline" className="w-full flex flex-col text-center justify-center relative mt-10"
                                >
                                <div className="flex flex-col items-center relative">
                                    {/* Garis tengah */}
                                    <div className="absolute top-0 bottom-0 md:top-[2%] md:bottom-[2%] lg:top-[4%] lg:bottom-[4%] left-1/2 -translate-x-1/2 w-[5px] bg-mainPurple z-0"></div>

                                    {/* Items */}
                                    {timelineCompeMing.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="grid grid-cols-[1fr_50px_1fr] sm:grid-cols-[1fr_70px_1fr] md:grid-cols-[1fr_90px_1fr] items-center w-full lg:w-[80%] my-0 md:my-2 lg:my-4 relative transition duration-800 ease-out"
                                    >
                                        {/* Circle */}
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-base md:text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-17px)] md:left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                        {item.id}
                                        </div>

                                        {/* Content zigzag */}
                                        <div
                                        className={`bg-black/50 box-shadow-timeline py-3 md:py-4 rounded-[10px] shadow-md w-full font-jakarta ${
                                            index % 2 === 0
                                            ? "col-start-3 text-left pl-4 md:pl-5 lg:pl-6 xl:pl-8"
                                            : "col-start-1 text-right pr-4 md:pr-5 lg:pr-6 xl:pr-8"
                                        }`}
                                        >
                                            <h3
                                                className={`mb-1 md:mb-3 text-base sm:text-lg md:text-xl xl:text-2xl font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent w-fit ${
                                                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                }`}
                                                >
                                                {item.title}
                                            </h3>
                                            <p
                                                className={`text-sm md:text-xl font-light text-white w-fit ${
                                                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                }`}
                                                >
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </section>
                            {/* TIMELINE COMPE */}
                        </div>
                    )}
                    {selectedTab.key === "webinar" && (
                        <div className="mt-12 sm:mt-13 lg:mt-14 xl:mt-15">
                            <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center transition-all duration-500 selection:bg-purple-900">
                                Acara
                            </h1>
                            <div className="w-full max-w-fit mt-2 mx-auto">
                                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center transition-all duration-500 selection:bg-purple-900 bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent">
                                    Webinar
                                </h2>
                            </div>
                            {/* TIMELINE WEBINAR */}
                            <section
                                id="timeline"
                                className="w-full mt-10 flex flex-col text-center justify-center relative"
                                >
                                <div className="flex flex-col items-center relative">
                                    {/* Garis tengah */}
                                    <div className="absolute top-0 bottom-0 md:top-[2%] md:bottom-[2%] lg:top-[4%] lg:bottom-[4%] left-1/2 -translate-x-1/2 w-[5px] bg-mainPurple z-0"></div>

                                    {/* Items */}
                                    {acaraWebinar.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="grid grid-cols-[1fr_50px_1fr] sm:grid-cols-[1fr_70px_1fr] md:grid-cols-[1fr_90px_1fr] items-center w-full lg:w-[80%] my-0 md:my-2 lg:my-4 relative transition duration-800 ease-out"
                                    >
                                        {/* Circle */}
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-base md:text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-17px)] md:left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                        {item.id}
                                        </div>

                                        {/* Content zigzag */}
                                        <div
                                        className={`bg-black/50 box-shadow-timeline py-3 md:py-4 rounded-[10px] shadow-md w-full font-jakarta ${
                                            index % 2 === 0
                                            ? "col-start-3 text-left pl-4 md:pl-5 lg:pl-6 xl:pl-8"
                                            : "col-start-1 text-right pr-4 md:pr-5 lg:pr-6 xl:pr-8"
                                        }`}
                                        >
                                            <h3
                                                className={`mb-1 md:mb-3 text-base sm:text-lg md:text-xl xl:text-2xl font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent w-fit ${
                                                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                }`}
                                                >
                                                {item.title}
                                            </h3>
                                            <p
                                                className={`text-sm md:text-xl font-light text-white w-fit ${
                                                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                }`}
                                                >
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </section>
                            {/* TIMELINE WEBINAR */}
                        </div>
                    )}
                    {selectedTab.key === "seminar" && (
                        <div className="mt-12 sm:mt-13 lg:mt-14 xl:mt-15">
                            <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center transition-all duration-500 selection:bg-purple-900">
                                Acara
                            </h1>
                            <div className="w-full max-w-fit mt-2 mx-auto">
                                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center transition-all duration-500 selection:bg-purple-900 bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent">
                                    Seminar & Workshop
                                </h2>
                            </div>
                            {/* TIMELINE SEMINAR */}
                            <section id="timeline" className="w-full flex flex-col text-center justify-center relative mt-10"
                                >
                                <div className="flex flex-col items-center relative">
                                    {/* Garis tengah */}
                                    <div className="absolute top-0 bottom-0 md:top-[2%] md:bottom-[2%] lg:top-[4%] lg:bottom-[4%] left-1/2 -translate-x-1/2 w-[5px] bg-mainPurple z-0"></div>

                                    {/* Items */}
                                    {acaraSeminar.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="grid grid-cols-[1fr_50px_1fr] sm:grid-cols-[1fr_70px_1fr] md:grid-cols-[1fr_90px_1fr] items-center w-full lg:w-[80%] py-0 md:py-2 lg:my-4 relative transition duration-800 ease-out"
                                    >
                                        {/* Circle */}
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-base md:text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-17px)] md:left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                        {item.id}
                                        </div>

                                        {/* Content zigzag */}
                                        <div
                                        className={`bg-black/50 box-shadow-timeline py-3 md:py-4 rounded-[10px] shadow-md w-full font-jakarta ${
                                            index % 2 === 0
                                            ? "col-start-3 text-left pl-4 md:pl-5 lg:pl-6 xl:pl-8"
                                            : "col-start-1 text-right pr-4 md:pr-5 lg:pr-6 xl:pr-8"
                                        }`}
                                        >
                                            <h3
                                                className={`mb-1 md:mb-3 text-base sm:text-lg md:text-xl xl:text-2xl font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent w-fit ${
                                                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                }`}
                                                >
                                                {item.title}
                                            </h3>
                                            <p
                                                className={`text-sm md:text-xl font-light text-white w-fit ${
                                                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                }`}
                                                >
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </section>
                            {/* TIMELINE SEMINAR */}
                        </div>
                    )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
        </>
    )
}
