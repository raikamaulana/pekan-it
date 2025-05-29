import React from 'react'
import Image from 'next/image'

export default function DaftarSekarang() {
    return (
        <>
        <section id='daftar-sekarang' className="pb-32 pt-28 sm:px-16 lg:px-20 bg-mainBlack transition-all duration-500 font-oxanium relative">
            <div className="text-center">
                <h1 className="text-white inline font-semibold text-7xl selection:bg-purple-900 selection:text-white text-center relative shadow-text">
                    Ayo Daftar
                </h1>
                <h1 className="w-fit inline selection:bg-purple-900 selection:text-white font-semibold text-7xl bg-gradient-to-r from-[#402DAE] to-[#BD63D1] bg-clip-text text-transparent drop-shadow-text"> Sekarang!</h1>
                <p className='w-full max-w-3xl mx-auto selection:bg-purple-900 text-white text-center text-2xl mt-8'>Upgrade softskill dan hardskill kamu dengan berbagai rangkaian kegiatan kami!</p>
            </div>
            <div className="mt-24 grid md:grid-cols-2 grid-cols-1 mx-auto max-w-4xl gap-10">
                <div className="card-daftar bg-black/50 text-white text-center text-3xl h-full rounded-[65px] min-h-[401px] w-full max-w-lg box-shadow-card p-10">Lomba UI/UX & Software Development</div>
                <div className="card-daftar bg-black/50 text-white text-center text-3xl h-full rounded-[65px] min-h-[401px] w-full max-w-lg box-shadow-card p-10">Lomba Competitive Programming</div>
                <div className="card-daftar bg-black/50 text-white text-center text-3xl h-full rounded-[65px] min-h-[401px] w-full max-w-lg box-shadow-card p-10">Webinar</div>
                <div className="card-daftar bg-black/50 text-white text-center text-3xl h-full rounded-[65px] min-h-[401px] w-full max-w-lg box-shadow-card p-10">Seminar & Workshop</div>
            </div>
            <div className="absolute bottom-0 right-15 w-[1px] h-[1px] rounded-full shadow-purple-glow z-1"></div>
        </section>
        </>
    )
}
