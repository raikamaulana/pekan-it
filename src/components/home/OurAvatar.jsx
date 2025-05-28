import React from 'react'
import Image from 'next/image'

export default function OurAvatar() {
    return (
        <>
        <section className="pb-28 pt-28 sm:px-16 lg:px-20 bg-mainBlack transition-all duration-500 font-oxanium relative">
            <div className="text-center">
                <h1 className="text-white inline font-semibold text-7xl selection:bg-purple-900 selection:text-white text-center relative shadow-text">
                    Meet Our
                </h1>
                <h1 className="w-fit inline selection:bg-purple-900 selection:text-white font-semibold text-7xl bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent drop-shadow-text"> Avatar</h1>
            </div>
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
        </>
    )
}
