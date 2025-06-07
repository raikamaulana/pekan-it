"use client"
import React from 'react'
import "../../app/globals.css";

export default function DaftarSekarang() {
    return (
        <>
        <section id='daftar-sekarang' className="pb-36 pt-28 px-7 sm:px-16 lg:px-18 bg-mainBlack transition-all duration-500 font-oxanium relative">
            <div className="text-center transition-all duration-500">
                <h1 className="text-white inline font-semibold text-5xl sm:text-6xl lg:text-7xl selection:bg-purple-900 selection:text-white text-center relative shadow-text">
                    Ayo Daftar
                </h1>
                <h1 className="w-fit block mx-auto mt-2 sm:mt-0 sm:inline selection:bg-purple-900 selection:text-white font-semibold text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent drop-shadow-text"> Sekarang!</h1>
                <p className='w-full lg:max-w-3xl mx-auto selection:bg-purple-900 text-white text-center text-xl lg:text-2xl mt-8'>Upgrade softskill dan hardskill kamu dengan berbagai rangkaian kegiatan kami!</p>
            </div>
            <div className="mt-15 w-full md:mt-20 lg:mt-24 grid md:grid-cols-2 grid-cols-1 mx-auto md:max-w-4xl gap-10 px-1 sm:px-6 md:px-0 z-2 selection:bg-purple-900 selection:text-white">
                <div className="card-daftar bg-black/50 text-white text-center text-3xl h-full rounded-[65px] min-h-[320px] md:min-h-[360px] w-full mx-auto md:max-w-lg box-shadow-card p-10 transition-allduration-500 relative">
                    <span className='absolute top-5 left-1/2 text-sm -translate-x-1/2 italic pr-1 bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent xl:hidden'>Click the card</span>
                    Lomba UI/UX & Software Development
                    <a href='/uiux-softwaredev' className='daftar-btn z-1 text-white rounded-full font-semibold text-3xl px-12 py-4 bg-linear-90/oklch from-mainPurple to-darkPurple '>Daftar</a>
                </div>
                <div className="card-daftar bg-black/50 text-white text-center text-3xl h-full rounded-[65px] min-h-[320px] md:min-h-[360px] w-full mx-auto md:max-w-lg box-shadow-card p-10 transition-colors duration-500 relative">
                    <span className='absolute top-5 left-1/2 text-sm -translate-x-1/2 italic pr-1 bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent xl:hidden'>Click the card</span>
                    Lomba Competitive Programming
                    <a href='/competitive-programming' className='daftar-btn z-1 text-white rounded-full font-semibold text-3xl px-12 py-4 bg-linear-90/oklch from-mainPurple to-darkPurple '>Daftar</a>
                </div>
                <div className="card-daftar bg-black/50 text-white text-center text-3xl h-full rounded-[65px] min-h-[320px] md:min-h-[360px] w-full mx-auto md:max-w-lg box-shadow-card p-10 transition-colors duration-500 relative">
                    <span className='absolute top-5 left-1/2 text-sm -translate-x-1/2 italic pr-1 bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent xl:hidden'>Click the card</span>
                    Webinar
                    <a href='/webinar' className='daftar-btn z-1 text-white rounded-full font-semibold text-3xl px-12 py-4 bg-linear-90/oklch from-mainPurple to-darkPurple '>Daftar</a>
                </div>
                <div className="card-daftar bg-black/50 text-white text-center text-3xl h-full rounded-[65px] min-h-[320px] md:min-h-[360px] w-full mx-auto md:max-w-lg box-shadow-card p-10 transition-colors duration-500 relative">
                    <span className='absolute top-5 left-1/2 text-sm -translate-x-1/2 italic pr-1 bg-gradient-to-r from-[#00D4FF] to-[#BD63D1] bg-clip-text text-transparent xl:hidden'>Click the card</span>
                    Seminar & Workshop
                    <a href='/seminar-workshop' className='daftar-btn z-1 text-white rounded-full font-semibold text-3xl px-12 py-4 bg-linear-90/oklch from-mainPurple to-darkPurple '>Daftar</a>
                </div>
            </div>
            <div className="absolute hidden md:block bottom-30 right-30 w-[1px] h-[1px] rounded-full shadow-purple-glow-2 z-1"></div>
            <div className="absolute md:hidden bottom-12 right-25 w-[1px] h-[1px] rounded-full shadow-purple-glow-mob-2 z-1"></div>
        </section>
        </>
    )
}
