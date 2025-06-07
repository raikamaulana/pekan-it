"use client"
import React from 'react'
import "../../app/globals.css";

export default function Tema() {
    return (
        <>
        <section className="h-screen flex justify-center items-center bg-mainBlack px-8 sm:px-16 md:px-12 lg:px-18 transition-all duration-500 relative">
            <div className="absolute hidden md:block top-50 left-20 w-[1px] h-[1px] rounded-full shadow-purple-glow-2 z-0"></div>
            <div className="absolute md:hidden top-70 left-20 w-[1px] h-[1px] rounded-full shadow-purple-glow-mob-2 z-1"></div>
            <div className="flex flex-col lg:flex-row w-full lg:gap-5 xl:gap-0 font-oxanium z-2">
                <div className="w-full lg:w-7/12 md:pl-0 lg:pl-10 flex flex-col lg:flex-row items-center">
                    <div>
                        <h1 className="font-bold text-4xl sm:text-6xl xl:text-7xl text-white lg:w-fit text-center lg:text-left selection:bg-purple-900 selection:text-white transition-all duration-500">
                            Break The Limit, <span className='block bg-gradient-to-b from-biruGradien to-unguGradien bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl lg:leading-14 glow-purple transition-all duration-500'>Connect The Idea!</span>
                        </h1>
                        <div className="w-full mt-8 sm:mt-10 lg:mt-0 lg:w-5/12 flex items-start justify-center transition-all duration-500 relative lg:hidden">    
                            <img src="/logo/logo-pekan-it.png" alt="illustrasion" width="383" height="364" className="logo-shadow-white max-w-[230px] md:max-w-[300px] select-none transition-all duration-500" />
                        </div>
                        <div className="bg-linear-90/oklch from-[#221341] to-[#110621] rounded-4xl glow-desc-div py-4 md:py-6 px-11 mt-10 sm:mt-14 lg:mt-10"> 
                            <p className="font-light text-lg md:text-xl xl:text-2xl text-center text-white leading-7 tracking-wide lg:text-justify selection:bg-purple-900 selection:text-white">
                            Jelajahi batas imajinasi dan wujudkan ide-ide brilian bersama kami. Saatnya terhubung, berinovasi, dan melampaui batas!
                            </p>    
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-5/12  lg:flex lg:items-start justify-start md:justify-center transition-all duration-500 relative hidden">    
                    <img src="/logo/logo-pekan-it.png" alt="illustrasion" width="383" height="364" className="logo-shadow-white" />
                </div>
            </div>
            <div className="absolute hidden md:block bottom-30 right-110 w-[1px] h-[1px] rounded-full shadow-green-glow-2 z-1"></div>
            <div className="absolute md:hidden bottom-0 right-30 w-[1px] h-[1px] rounded-full shadow-green-glow-mob-2 z-1"></div>
        </section>
        </>
    )
}
