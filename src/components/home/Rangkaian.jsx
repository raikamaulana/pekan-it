"use client"
import React from 'react'
import "../../app/globals.css";

export default function Rangkaian() {
    return (
        <>
        <section className="pb-28 pt-36 md:pt-48 px-7 sm:px-16 lg:px-18 bg-mainBlack transition-all duration-500 font-oxanium relative">
            <img
                src="/icons/garis-pembatas.svg"
                width="220"
                height="100"
                alt="logo"
                className="absolute w-full left-0 top-0 z-1 select-none"
            />
            <div className="relative z-2">
                <h1 className="text-white font-semibold text-5xl sm:text-6xl md:text-7xl text-purple transition-all duration-500 selection:bg-purple-900 relative z-2 shadow-text">
                    Rangkaian Kegiatan,
                </h1>
                <h1 className="block w-fit font-semibold mt-3 md:mt-2 lg:mt-1 xl:mt-0 text-4xl sm:text-5xl md:text-6xl xl:text-7xl bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent relative z-2 drop-shadow-text selection:bg-purple-900 selection:text-white"> Dalam Pekan IT.</h1>
                <p className="text-xl md:text-2xl text-white leading-6 sm:leading-7 mt-10 max-w-5xl transition-all duration-500 selection:bg-purple-900 relative z-2">
                    Jelajahi rangkaian workshop inovatif, seminar inspiratif, dan kompetisi menantang yang akan memacu kreativitas serta mengasah kemampuanmu!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[80%] sm:max-w-full md:max-w-[80%] lg:max-w-[90%] xl:max-w-[80%] gap-8 sm:gap-6 md:gap-10 lg:gap-15 xl:gap-22 mt-12 sm:mt-15 md:mt-24 mx-auto transition-all duration-500">
                {/* Card Perlombaan */}
                <div className="card w-full rounded-3xl p-1.5 bg-[#1b233d]">
                    <div className="top-section h-[165px] md:h-[160px]">
                        <div className="border"></div>
                        <div>
                            <div className="icons -mt-1 items-center relative">
                                <div className="">
                                    <img
                                        src="/icons/garis-pembatas-2.svg"
                                        width="500"
                                        height="47"
                                        alt="logo"
                                        className="w-[125px] -ml-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-center">
                                <img
                                    src="/logo/logo-pekan-it.png"
                                    width="500"
                                    height="47"
                                    alt="logo"
                                    className="w-[100px] logo-shadow"
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
                <div className="card w-full rounded-3xl p-1.5 bg-[#1b233d]">
                    <div className="top-section h-[165px] md:h-[160px]">
                        <div className="border"></div>
                        <div>
                            <div className="icons -mt-1 items-center relative">
                                <div className="">
                                    <img
                                        src="/icons/garis-pembatas-2.svg"
                                        width="500"
                                        height="47"
                                        alt="logo"
                                        className="w-[125px] -ml-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-center">
                                <img
                                    src="/logo/logo-pekan-it.png"
                                    width="500"
                                    height="47"
                                    alt="logo"
                                    className="w-[100px] logo-shadow"
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
                <div className="card w-full rounded-3xl p-1.5 bg-[#1b233d]">
                    <div className="top-section h-[165px] md:h-[160px]">
                        <div className="border"></div>
                        <div>
                            <div className="icons -mt-1 items-center relative">
                                <div className="">
                                    <img
                                        src="/icons/garis-pembatas-2.svg"
                                        width="500"
                                        height="47"
                                        alt="logo"
                                        className="w-[125px] -ml-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-center">
                                <img
                                    src="/logo/logo-pekan-it.png"
                                    width="500"
                                    height="47"
                                    alt="logo"
                                    className="w-[100px] logo-shadow"
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
            <div className="absolute -bottom-5 sm:-bottom-10 md:-bottom-25 left-0 sm:left-5 md:left-10 w-[1px] h-[1px] rounded-full bg-red-500  shadow-purple-glow-mob md:shadow-purple-glow z-1"></div>
        </section>
        </>
    )
}
