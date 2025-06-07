'use client';

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Stairs from './Stairs';
import React from 'react'

const StairTransition = () => {
    const pathname = usePathname();
    const [delayedPathname, setDelayedPathname] = useState(pathname);

    useEffect(() => {
    const timeout = setTimeout(() => {
        setDelayedPathname(pathname);
    }, 100); // Delay sekitar 100ms atau bisa disesuaikan

    return () => clearTimeout(timeout);
    }, [pathname]);

    const routes = {
        "/": "Home",
        "/seminar-workshop": "Seminar & Workshop",
        "/webinar": "Webinar",
        "/competitive-programming": "Lomba Competitive Programming",
        "/uiux-softwaredev": "UI/UX & Software Development",
    };

    return (
        <AnimatePresence mode='wait'>
            <div key={pathname} className='pointer-events-none'>
                <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none flex z-50'>
                    {/* Image di tengah layar dengan animasi sinkron */}
                    <motion.div 
                        className="fixed top-[28%] left-1/2 transform -translate-x-1/2 z-50"
                        initial={
                            { opacity: 1 }
                        }
                        animate={{ 
                            opacity: 0,  
                            top: "-100%",
                            transition: { 
                                delay: 0.3, 
                                duration: 0.75, 
                                ease: [0.76, 0, 0.24, 1] 
                            },
                            transitionEnd: {
                                top: "60.5%",
                            }
                        }}
                        exit={{ 
                            opacity: 1,  
                            top: "28%",
                            transition: { 
                                duration: 0.75,
                                delay: 0.3, 
                                ease: [0.33, 1, 0.68, 1], 
                            } 
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <motion.img 
                                src="/logo/logo-pekan-it.png" 
                                alt="Transition Image"
                                className="md:w-72 md:h-72 sm:w-52 sm:h-52 w-44 h-44 select-none"
                            />
                            <motion.h1 className="text-white text-3xl font-oxanium mt-4 text-center">
                                {routes[delayedPathname] || 'PEKAN IT'}
                            </motion.h1>
                        </div>
                    </motion.div>
                    <Stairs />
                </div>

                <motion.div 
                    className='h-screen w-screen fixed bg-mainBlack top-0 pointer-events-none z-40' 
                    initial = {{ opacity: 1 }}
                    animate = {{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.7, ease: 'easeInOut' }
                    }}
                />
            </div>
        </AnimatePresence>
    )
}

export default StairTransition
