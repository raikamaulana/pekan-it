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

    const acaraSeminar = [
        { id: 1, title: "Sosialisasi & Pendaftaran", date: "7 Juli - 7 Agustus 2025" },
        { id: 2, title: "Pelaksanaan", date: "11 Agustus 2025" },
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
                        <button 
                            onClick={() => {
                                const aboutSection = document.getElementById("daftar-sekarang");
                                if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="button flex items-center gap-2 px-6 py-3 border-none origin-center relative cursor-pointer mt-12 font-jakarta mx-auto z-5">
                            <div className="dots_border"></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="sparkle"
                            >
                                <path
                                className="path"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="black"
                                fill="black"
                                d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                                ></path>
                                <path
                                className="path"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="black"
                                fill="black"
                                d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                                ></path>
                                <path
                                className="path"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="black"
                                fill="black"
                                d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
                                ></path>
                            </svg>
                            <span className="text_button">Yuk, Daftar!</span>
                        </button>
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
                        <div className="absolute bottom-0 left-40 w-[1px] h-[1px] rounded-full shadow-green-glow"></div>
                        <div className="absolute -bottom-40 right-10 w-[1px] h-[1px] rounded-full shadow-purple-glow"></div>
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
                    <div className="relative z-2">
                        <h1 className="text-white font-semibold text-7xl text-purple transition-all duration-500 selection:bg-purple-900 relative z-2 shadow-text">
                            Rangkaian Kegiatan,
                        </h1>
                        <h1 className="block w-fit font-semibold text-7xl bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent relative z-2 drop-shadow-text selection:bg-purple-900 selection:text-white"> Dalam Pekan IT.</h1>
                        <p className="text-2xl text-white leading-6 sm:leading-7 mt-10 max-w-5xl transition-all duration-500 selection:bg-purple-900 relative z-2">
                            Jelajahi rangkaian workshop inovatif, seminar inspiratif, dan kompetisi menantang yang akan memacu kreativitas serta mengasah kemampuanmu!
                        </p>
                    </div>
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
                                                    1 - 30 Juni 2025
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
                                            {acaraSeminar.map((item, index) => (
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