"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../../app/globals.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
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

    return (
        <>
            <div>
                {/* Hero Section */}
                <section id="hero" className="h-screen flex justify-center items-center bg-mainBlack blue-300 transition-all duration-500 relative" style={{ backgroundImage:"url('/bg/starry-sky.png')" }}>
                    <Image
                        src="/bg/gradasi-biru.svg"
                        width="500"
                        height="429"
                        alt="logo"
                        className="absolute w-full -top-35 z-1"
                    />
                    <Image
                        src="/icons/bintang-besar.svg"
                        width="450"
                        height="429"
                        alt="logo"
                        className="absolute -left-5 top-20 z-2"
                    />
                    <Image
                        src="/icons/bintang-kecil.png"
                        width="220"
                        height="100"
                        alt="logo"
                        className="absolute left-0 top-72 z-2"
                    />
                    <div className="font-oxanium z-2">
                        <h1 className="text-[145px] mt-4 mb-4 sm:mb-0 transition-all duration-500 text-center leading-44 selection:bg-purple-950 font-light tracking-wider selection:text-white">
                            Pekan IT
                        </h1>
                        <p className="font-medium text-5xl mt-4 text-white text-center transition-all duration-500 shadow-text selection:bg-purple-950">
                        Break The Limit, Connect The Idea!
                        </p>
                    </div>
                </section>
                {/* Hero Section */}

                {/* About Section */}
                <section id="about" className="h-screen flex justify-center items-center bg-mainBlack transition-all duration-500 relative">
                    <div className="font-oxanium z-1">
                        <h1 className="text-7xl mt-4 mb-4 sm:mb-0 transition-all duration-500 text-center selection:bg-purple-950 font-light tracking-wider selection:text-white">
                            About Us
                        </h1>
                        <div className="w-2/3 mx-auto">    
                            <p className="text-3xl mt-20 text-white text-center transition-all duration-500 shadow-text selection:bg-purple-950">
                            Merupakan kegiatan yang mewadahi ide dan kreativitas bidang IT lewat kompetisi dan edukasi, dengan 4 rangkaian kegiatan. Dikelola oleh Divisi Edukasi Himpunan Mahasiswa Informatika (HIMTIKA) UNSIKA.
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-40 w-[1px] h-[1px] rounded-full bg-red-500 shadow-green-glow"></div>
                        <div className="absolute -bottom-40 right-10 w-[1px] h-[1px] rounded-full bg-red-500 shadow-purple-glow"></div>
                    </div>
                </section>
                {/* About Section */}

                {/* Rangkaian Kegiatan */}
                <section className="pb-28 pt-48 sm:px-16 lg:px-20 bg-mainBlack transition-all duration-500 font-oxanium relative">
                    <Image
                        src="/icons/garis-pembatas.svg"
                        width="220"
                        height="100"
                        alt="logo"
                        className="absolute w-full left-0 top-0 z-1"
                    />
                    <h1 className="text-white font-semibold text-6xl sm:text-7xl text-purple transition-all duration-500 selection:bg-purple-900 selection:text-white relative z-2 shadow-text">
                        Rangkaian Kegiatan,
                    </h1>
                    <h1 className="block w-fit bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent"> Dalam Pekan IT.</h1>
                    <p className="text-2xl text-white leading-6 sm:leading-7 mt-10 max-w-5xl transition-all duration-500 selection:bg-purple-900 relative z-2">
                        Jelajahi rangkaian workshop inovatif, seminar inspiratif, dan kompetisi menantang yang akan memacu kreativitas serta mengasah kemampuanmu!
                    </p>
                    <div className="flex justify-center mt-24 gap-24">
                        {/* Card Perlombaan */}
                        <div className="card">
                            <div className="top-section">
                                <div className="border"></div>
                                <div>
                                    <div className="icons -mt-1 items-center relative">
                                        <div className="">
                                            <Image
                                                src="/icons/garis-pembatas-2.svg"
                                                width="500"
                                                height="47"
                                                alt="logo"
                                                className="w-[125px] -ml-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-center">
                                        <Image
                                            src="/logo/logo-pekan-it.png"
                                            width="500"
                                            height="47"
                                            alt="logo"
                                            className="w-[92px] logo-shadow"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-section pb-4 pt-5">
                                <h1 className="title text-white text-center text-lg tracking-wider">Perlombaan</h1>
                            </div>
                        </div>
                        {/* Card Perlombaan */}

                        {/* Card Seminar & Workshop */}
                        <div className="card">
                            <div className="top-section">
                                <div className="border"></div>
                                <div>
                                    <div className="icons -mt-1 items-center relative">
                                        <div className="">
                                            <Image
                                                src="/icons/garis-pembatas-2.svg"
                                                width="500"
                                                height="47"
                                                alt="logo"
                                                className="w-[125px] -ml-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-center">
                                        <Image
                                            src="/logo/logo-pekan-it.png"
                                            width="500"
                                            height="47"
                                            alt="logo"
                                            className="w-[92px] logo-shadow"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-section pb-4 pt-5">
                                <h1 className="title text-white text-center text-lg tracking-wider">Seminar & Workshop</h1>
                            </div>
                        </div>
                        {/* Card Seminar & Workshop */}

                        {/* Card Webinar */}
                        <div className="card">
                            <div className="top-section">
                                <div className="border"></div>
                                <div>
                                    <div className="icons -mt-1 items-center relative">
                                        <div className="">
                                            <Image
                                                src="/icons/garis-pembatas-2.svg"
                                                width="500"
                                                height="47"
                                                alt="logo"
                                                className="w-[125px] -ml-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-center">
                                        <Image
                                            src="/logo/logo-pekan-it.png"
                                            width="500"
                                            height="47"
                                            alt="logo"
                                            className="w-[92px] logo-shadow"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-section pb-3 pt-5">
                                <h1 className="title text-white text-center text-lg tracking-wider">Webinar</h1>
                            </div>
                        </div>
                        {/* Card Webinar */}
                    </div>
                    <div className="absolute -bottom-25 left-10 w-[1px] h-[1px] rounded-full bg-red-500 shadow-purple-glow z-1"></div>
                </section>
                {/* Rangkaian Kegiatan */}

                {/* Timeline Pekan IT */}
                <section className="pb-28 pt-48 sm:px-16 lg:px-20 bg-mainBlack transition-all duration-500 font-oxanium relative">
                    <h1 className="text-white font-semibold text-7xl text-center transition-all duration-500 selection:bg-purple-900 relative z-2 shadow-text">
                        Timeline Pekan IT
                    </h1>
                    <div className="w-full mt-15 items-center">
                        {/* Tabs */}
                        <div className="flex gap-5 mb-10">
                            {tabs.map((tab) => (
                            <motion.div
                                key={tab.key}
                                onClick={() => setSelectedTab(tab)}
                                className={`cursor-pointer px-4 py-3 w-full max-w-7xl rounded-2xl  transition duration-300 text-white hover:text-white font-oxanium font-semibold text-center bg-black/50`}
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
                                <div className="mt-15">
                                    <h1 className="text-white font-semibold text-6xl text-center transition-all duration-500 selection:bg-purple-900">
                                        Perlombaan
                                    </h1>
                                    <div className="w-full max-w-fit mt-2 mx-auto">
                                        <h2 className="font-semibold text-6xl text-center transition-all duration-500 selection:bg-purple-900 bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent">
                                            Software Development <span className="block">& UI/UX</span>
                                        </h2>
                                    </div>
                                    {/* TIMELINE UI/UX & Soft */}
                                    <section id="timeline" className="w-full flex flex-col text-center justify-center relative mt-10">
                                        <div className="flex flex-col items-center relative">
                                            {/* Garis Tengah */}
                                            <div className="absolute top-[4%] bottom-[4%] left-1/2 -translate-x-1/2 w-[5px] bg-mainPurple z-0"></div>

                                            {/* Timeline Item 1 */}
                                            <div className="grid grid-cols-[1fr_90px_1fr] items-center w-[80%] my-4 relative transition duration-800 ease-out"
                                            >
                                                <div className="w-10 h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                                    1
                                                </div>
                                                <div className="bg-black/50 p-4 rounded-[10px] shadow-md w-full col-start-3 text-left pl-8 box-shadow-timeline font-jakarta">
                                                    <h3 className="mb-3 text-2xl font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent w-fit">
                                                    Sosialisasi & Pendaftaran
                                                    </h3>
                                                    <p className="text-xl font-light text-white">
                                                    21 - 30 Juni 2025
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Timeline Item 2 */}
                                            <div className="grid grid-cols-[1fr_90px_1fr] items-center w-[80%] my-4 relative transition duration-800 ease-out"
                                            >
                                                <div className="w-10 h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                                    2
                                                </div>
                                                <div className="bg-black/50 p-4 rounded-[10px] shadow-md w-full text-right font-jakarta pr-8 box-shadow-timeline">
                                                    <h3 className="mb-3 text-2xl  font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] w-[80%] mx-20 flex bg-clip-text text-transparent">
                                                    Presentasi Karya 5 Peserta Terbaik
                                                    </h3>
                                                    <p className="text-xl font-light text-white">
                                                    12 Juli 2025
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Timeline Item 3 */}
                                            <div className="grid grid-cols-[1fr_90px_1fr] items-center w-[80%] my-4 relative transition duration-800 ease-out">
                                                <div className="w-10 h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                                    3
                                                </div>
                                                <div className="bg-black/50 p-4 rounded-[10px] shadow-md w-full col-start-3 text-left pl-8 box-shadow-timeline font-jakarta">
                                                    <h3 className="mb-3 text-2xl font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] w-fit bg-clip-text text-transparent">
                                                    Pengumuman Pemenang
                                                    </h3>
                                                    <p className="text-xl font-light text-white">
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
                                <div className="mt-15">
                                    <h1 className="text-white font-semibold text-6xl text-center transition-all duration-500 selection:bg-purple-900">
                                        Perlombaan
                                    </h1>
                                    <div className="w-full max-w-fit mt-2 mx-auto">
                                        <h2 className="font-semibold text-6xl text-center transition-all duration-500 selection:bg-purple-900 bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent">
                                            Competitive <span className="block">Programming</span>
                                        </h2>
                                    </div>
                                    {/* TIMELINE COMPE */}
                                    <section id="timeline" className="w-full flex flex-col text-center justify-center relative mt-10"
                                        >
                                        <div className="flex flex-col items-center relative">
                                            {/* Garis tengah */}
                                            <div className="absolute top-[4%] bottom-[4%] left-1/2 -translate-x-1/2 w-[5px] bg-mainPurple z-0"></div>

                                            {/* Items */}
                                            {timelineCompeMing.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="grid grid-cols-[1fr_90px_1fr] items-center w-[80%] my-4 relative transition duration-800 ease-out"
                                            >
                                                {/* Circle */}
                                                <div className="w-10 h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                                {item.id}
                                                </div>

                                                {/* Content zigzag */}
                                                <div
                                                className={`bg-black/50 box-shadow-timeline p-4 rounded-[10px] shadow-md w-full font-jakarta ${
                                                    index % 2 === 0
                                                    ? "col-start-3 text-left pl-8"
                                                    : "col-start-1 text-right pr-8"
                                                }`}
                                                >
                                                    <h3
                                                        className={`mb-3 text-2xl font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent w-fit ${
                                                            index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                        }`}
                                                        >
                                                        {item.title}
                                                    </h3>
                                                    <p
                                                        className={`text-xl font-light text-white w-fit ${
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
                                <div className="mt-15">
                                    <h1 className="text-white font-semibold text-6xl text-center transition-all duration-500 selection:bg-purple-900">
                                        Acara
                                    </h1>
                                    <div className="w-full max-w-fit mt-2 mx-auto">
                                        <h2 className="font-semibold text-6xl text-center transition-all duration-500 selection:bg-purple-900 bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent">
                                            Seminar & Workshop
                                        </h2>
                                    </div>
                                    {/* TIMELINE SEMINAR */}
                                    <section
                                        id="timeline"
                                        className="w-full mt-10 flex flex-col text-center justify-center relative"
                                        >
                                        <div className="flex flex-col items-center relative">
                                            {/* Garis tengah */}
                                            <div className="absolute top-[4%] bottom-[4%] left-1/2 -translate-x-1/2 w-[5px] bg-mainPurple z-0"></div>

                                            {/* Items */}
                                            {acaraWebinar.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="grid grid-cols-[1fr_90px_1fr] items-center w-[80%] my-4 relative transition duration-800 ease-out"
                                            >
                                                {/* Circle */}
                                                <div className="w-10 h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                                {item.id}
                                                </div>

                                                {/* Content zigzag */}
                                                <div
                                                className={`bg-black/50 box-shadow-timeline p-4 rounded-[10px] shadow-md w-full font-jakarta ${
                                                    index % 2 === 0
                                                    ? "col-start-3 text-left pl-8"
                                                    : "col-start-1 text-right pr-8"
                                                }`}
                                                >
                                                    <h3
                                                        className={`mb-3 text-2xl font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent w-fit ${
                                                            index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                        }`}
                                                        >
                                                        {item.title}
                                                    </h3>
                                                    <p
                                                        className={`text-xl font-light text-white w-fit ${
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
                            {selectedTab.key === "seminar" && (
                                <div className="mt-15">
                                    <h1 className="text-white font-semibold text-6xl text-center transition-all duration-500 selection:bg-purple-900">
                                        Acara
                                    </h1>
                                    <div className="w-full max-w-fit mt-2 mx-auto">
                                        <h2 className="font-semibold text-6xl text-center transition-all duration-500 selection:bg-purple-900 bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent">
                                            Webinar
                                        </h2>
                                    </div>
                                    {/* TIMELINE WEBINAR */}
                                    <section id="timeline" className="w-full flex flex-col text-center justify-center relative mt-10"
                                        >
                                        <div className="flex flex-col items-center relative">
                                            {/* Garis tengah */}
                                            <div className="absolute top-[4%] bottom-[4%] left-1/2 -translate-x-1/2 w-[5px] bg-mainPurple z-0"></div>

                                            {/* Items */}
                                            {acaraWebinar.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="grid grid-cols-[1fr_90px_1fr] items-center w-[80%] my-4 relative transition duration-800 ease-out"
                                            >
                                                {/* Circle */}
                                                <div className="w-10 h-10 bg-linear-180/oklch from-mainPurple to-darkPurple text-white text-xl font-bold rounded-full flex items-center justify-center absolute left-[calc(50%-20px)] top-1/2 -translate-y-1/2 z-20">
                                                {item.id}
                                                </div>

                                                {/* Content zigzag */}
                                                <div
                                                className={`bg-black/50 box-shadow-timeline p-4 rounded-[10px] shadow-md w-full font-jakarta ${
                                                    index % 2 === 0
                                                    ? "col-start-3 text-left pl-8"
                                                    : "col-start-1 text-right pr-8"
                                                }`}
                                                >
                                                    <h3
                                                        className={`mb-3 text-2xl font-medium bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent w-fit ${
                                                            index % 2 === 0 ? "mr-auto" : "ml-auto"
                                                        }`}
                                                        >
                                                        {item.title}
                                                    </h3>
                                                    <p
                                                        className={`text-xl font-light text-white w-fit ${
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
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
                {/* Timeline Pekan IT */}
            </div>
        </>
    );
}