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
            <div className="mt-24 relative">
                <div className="absolute top-13 right-70 w-[1px] h-[1px] rounded-full shadow-green-glow-2"></div>
                <Image
                    src="/logo/Filo.svg"
                    width="542"
                    height="10"
                    alt="logo"
                    className='mx-auto'
                />
                <div className='absolute top-20 left-71 font-semibold text-5xl'>
                    <Image
                        src="/icons/antena.svg"
                        width="175"
                        height="10"
                        alt="logo"
                    />
                </div>
                <div className='absolute -top-2 left-15 font-semibold text-5xl'>
                    <h1 className='text-white'>Antena</h1>
                    <p className='mt-2 bg-gradient-to-r from-[#6a58cc] to-[#BD63D1] bg-clip-text text-transparent text-4xl'>Keterbukaan untuk <span className='block'>kolaborasi</span></p>
                </div>
                <div className='absolute top-45 right-74 font-semibold text-5xl'>
                    <Image
                        src="/icons/kacamata-visio.svg"
                        width="185"
                        height="10"
                        alt="logo"
                    />
                </div>
                <div className='absolute top-62 right-5 font-semibold text-5xl'>
                    <h1 className='text-white'>Kacamata</h1>
                    <p className='mt-3 bg-gradient-to-r from-[#6a58cc] to-[#BD63D1] bg-clip-text text-transparent text-4xl'>Visioner, pandangan <span className='block'>pada masa depan</span></p>
                </div>
                <div className='absolute top-73 left-55 font-semibold text-5xl'>
                    <Image
                        src="/icons/burung-semangat.svg"
                        width="351"
                        height="10"
                        alt="logo"
                    />
                </div>
                <div className='absolute bottom-55 left-13 font-semibold text-5xl'>
                    <h1 className='text-white'>Burung</h1>
                    <p className='mt-2 bg-gradient-to-r from-[#6a58cc] to-[#BD63D1] bg-clip-text text-transparent text-4xl'>Semangat kebebasan <span className='block'>berkarya</span></p>
                </div>
                <div className='absolute bottom-63 right-79 font-semibold text-5xl'>
                    <Image
                        src="/icons/circuit-transformasi.svg"
                        width="251"
                        height="10"
                        alt="logo"
                    />
                </div>
                <div className='absolute bottom-28 right-2 font-semibold text-5xl'>
                    <h1 className='text-white'>Circuit</h1>
                    <p className='mt-2 bg-gradient-to-r from-[#6a58cc] to-[#BD63D1] bg-clip-text text-transparent text-4xl'>Transformasi digital & <span className='block'>kecerdasan adaptif</span></p>
                </div>
            </div>
            <div className="absolute bottom-15 left-55 w-[1px] h-[1px] rounded-full shadow-purple-glow-2 z-1"></div>
        </section>
        </>
    )
}
