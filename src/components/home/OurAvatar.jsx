"use client"
import React from 'react'
import "../../app/globals.css";

export default function OurAvatar() {
    return (
        <>
        <section className="pb-28 pt-17 md:pt-25 lg:pt-28 sm:px-16 lg:px-20 bg-mainBlack transition-all duration-500 font-oxanium relative">
            <div className="text-center">
                <h1 className="text-white inline font-semibold text-5xl md:text-6xl xl:text-7xl selection:bg-purple-900 selection:text-white text-center relative shadow-text">
                    Meet Our
                </h1>
                <h1 className="w-fit inline selection:bg-purple-900 selection:text-white font-semibold text-6xl md:text-7xl bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent drop-shadow-text"> Avatar</h1>
            </div>
            <div className="mt-24 relative selection:bg-purple-900 selection:text-white">
                <div className='relative mx-auto max-w-72 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[542px]'>
                    <div className="absolute top-0 right-0 w-[1px] h-[1px] rounded-full shadow-green-glow-2"></div>
                    <img
                        src="/logo/Filo.svg"
                        width="542"
                        height="10"
                        alt="logo"
                        className='mx-auto max-w-69 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[542px] transition-all duration-500 select-none relative'
                    />
                    {/* Antena */}
                    <div className='absolute -left-7 top-8 sm:-left-10 md:top-9 md:-left-14 lg:top-12 lg:-left-13 xl:-left-11 xl:top-20 font-semibold transition-all duration-500'>
                        <img
                            src="/icons/antena.svg"
                            width="175"
                            height="10"
                            alt="logo"
                            className='select-none max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[160px] xl:max-w-[175px]'
                        />
                    </div>
                    <div className='absolute -top-5 -left-6 sm:-top-6 sm:-left-25 md:-top-8 md:-left-32 lg:-top-5 lg:-left-50 xl:-top-2 xl:-left-55 font-semibold transition-all duration-500'>
                        <h1 className='text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl'>Antena</h1>
                        <p className='lg:mt-2 bg-gradient-to-r from-[#6a58cc] to-[#BD63D1] bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl xl:text-4xl'>Keterbukaan untuk <span className='lg:block'>kolaborasi</span></p>
                    </div>
                    {/* Antena */}
                    {/* Kacamata  */}
                    <div className='absolute top-24 -right-3 sm:top-28 sm:-right-13 md:top-32 md:-right-13 lg:top-38 lg:-right-10 xl:top-45 xl:-right-5 font-semibold transition-all duration-500'>
                        <img
                            src="/icons/kacamata-visio.svg"
                            width="185"
                            height="10"
                            alt="logo"
                            className='select-none max-w-[100px] sm:max-w-[145px] md:max-w-[165px] lg:max-w-[175px] xl:max-w-[185px]'
                        />
                    </div>
                    <div className='absolute top-31 -right-26 sm:top-40 sm:-right-34 md:top-45 md:-right-40 lg:top-52 lg:-right-42 xl:top-62 xl:-right-68 font-semibold transition-all duration-500'>
                        <h1 className='text-white text-xl sm:text-3xl md:text-4xl xl:text-5xl'>Kacamata</h1>
                        <p className='md:mt-2 bg-gradient-to-r w-[60%] sm:w-auto leading-5 sm:leading-none from-[#6a58cc] to-[#BD63D1] bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl xl:text-4xl'>Visioner, pandangan <span className='block'>pada masa depan</span></p>
                    </div>
                    {/* Kacamata  */}
                    {/* Burung */}
                    <div className='absolute top-35 -left-2 sm:top-42 sm:-left-8 md:top-50 md:-left-16 lg:top-58 lg:-left-27 xl:top-73 xl:-left-30 font-semibold transition-all duration-500'>
                        <img
                            src="/icons/burung-semangat.svg"
                            width="351"
                            height="10"
                            alt="logo"
                            className='select-none max-w-[140px] sm:max-w-[170px] md:max-w-[230px] lg:max-w-[300px] xl:max-w-[351px]'
                        />
                    </div>
                    <div className='absolute bottom-21 -left-5 sm:bottom-30 sm:-left-25 md:bottom-35 md:-left-34 lg:bottom-42 lg:-left-49 xl:bottom-50 xl:-left-55 font-semibold text-5xl transition-all duration-500'>
                        <h1 className='text-white text-xl sm:text-3xl md:text-4xl xl:text-5xl'>Burung</h1>
                        <p className='w-1/2 sm:w-auto leading-6 mt-1 bg-gradient-to-r from-[#6a58cc] to-[#BD63D1] bg-clip-text text-transparent text-lg sm:text-lg md:text-2xl xl:text-4xl'>Semangat kebebasan <span className='block'>berkarya</span></p>
                    </div>
                    {/* Burung */}
                    {/* Circuit */}
                    <div className='absolute bottom-15 -right-3 rotate-40 sm:bottom-34 sm:right-1 sm:rotate-12 md:rotate-0 md:bottom-44 md:-right-2 lg:bottom-52 lg:-right-2 xl:bottom-63 font-semibold text-5xl transition-all duration-500'>
                        <img
                            src="/icons/circuit-transformasi.svg"
                            width="251"
                            height="10"
                            alt="logo"
                            className='select-none max-w-[180px] sm:max-w-[145px] md:max-w-[180px] lg:max-w-[210px] xl:max-w-[251px]'
                        />
                    </div>
                    <div className='absolute -bottom-10 -right-6 sm:bottom-10 sm:-right-33 md:bottom-18 md:-right-43 lg:bottom-25 lg:-right-47 xl:bottom-30 xl:-right-74 font-semibold text-5xl transition-all duration-500'>
                        <h1 className='text-white text-xl sm:text-3xl md:text-4xl xl:text-5xl'>Circuit</h1>
                        <p className='md:mt-1 bg-gradient-to-r from-[#6a58cc] to-[#BD63D1] bg-clip-text text-transparent text-base sm:text-lg md:text-2xl xl:text-4xl'>Transformasi digital & <span className='block'>kecerdasan adaptif</span></p>
                    </div>
                    {/* Circuit */}
                </div>
                <div className="absolute hidden md:block bottom-0 left-25 w-[1px] h-[1px] rounded-full shadow-purple-glow-2 z-1"></div>
                <div className="absolute md:hidden bottom-0 left-25 w-[1px] h-[1px] rounded-full shadow-purple-glow-mob-2 z-1"></div>
            </div>
        </section>
        </>
    )
}
