"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ChevronDown, Monitor, Speech, Frame, Code } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa6"
import { usePathname } from "next/navigation";
import "../app/globals.css"
import Link from "next/link";
import DesktopMenu from "@/components/NavDropdown/DesktopMenu";

const links = [
    {
        name: "Home",
        path: "/himtalks",
    },
    {
        name: "Songfess",
        path: "/himtalks/songfess",
    },
    {
        name: "Chat Anonym",
        path: "/himtalks/chat-anonym",
    },
    {
        name: "Podcast",
        path: "/himtalks/podcast",
    },
];

export const Menus = [
    {
        name: "Home",
    },
    {
        name: "Daftar Lomba",
        // subMenuHeading: ["Seminar", "Webinar"],
        subMenu: [
            {
                name: "Competitive Programming",
                url: "/competitive-programming",
                icon: Code,
            },
            {
                name: "UI/UX Design",
                url: "/uiux-design",
                icon: Frame,
            },
            {
                name: "Software Development",
                url: "/software-development",
                icon: FaLaptopCode,
            },
        ],
        gridCols: 1,
    },
    {
        name: "Daftar Kegiatan",
        // subMenuHeading: ["Seminar", "Webinar"],
        subMenu: [
            {
                name: "Seminar",
                url: "/seminar",
                icon: Speech,
            },
            {
                name: "Webinar",
                url: "/webinar",
                icon: Monitor,
            }
        ],
        gridCols: 1,
    },
];

const VARIANTS = {
    top: {
        open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
        },
        closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
        rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
        rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
        },
        closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
        },
    },
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [clicked, setClicked] = useState(null);
    const navRef = useRef(null);
    const pathname = usePathname();
    const activ = usePathname();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const subMenuDrawer = {
        enter: {
            height: "auto",
            overflow: "hidden",
        },
        exit: {
            height: 0,
            overflow: "hidden",
        },
    };

    // function untuk mengatur jika navbar mode mobie di klik di luar navbar, maka navbar akan tertutup
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)){
                setIsOpen(false);
            }
        } 

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // function untuk mengatur navbar mode mobile dan mode dekstop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false); // Tutup navbar saat masuk ke mode desktop (lg:)
                setIsDesktop(true);
            } else {
                setIsDesktop(false)
            }
        };
    
        // Jalankan sekali saat component pertama kali dimuat
        handleResize();
    
        // Tambahkan event listener
        window.addEventListener("resize", handleResize);
    
        // Bersihkan event listener saat component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // function untuk menutup navbar mobile ketika berpindah halamana
    useEffect(() => {
        setIsOpen(false); // Tutup navbar setiap kali pathname berubah
    }, [pathname]); // Gunakan pathname sebagai dependensi

    useEffect(() => {
        const header = document.getElementById("navbar");
        const fixedNav = header.offsetTop;

        const handleScroll = () => {
        if (window.pageYOffset > fixedNav) {
            header.classList.add("navbar-fixed");
            header.classList.remove("navbar-absolute");
        } else {
            header.classList.remove("navbar-fixed");
            header.classList.add("navbar-absolute");
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll); // cleanup
        };
    }, []);
    
    return (
        <>
            <nav id="navbar" className="w-full absolute top-0 left-0 px-6 py-4 text-white z-25 transition-all duration-500 sm:px-16 lg:px-18 font-jakarta bg-mainBlack/10">
                <div className="flex justify-between items-center selection:bg-white selection:text-purple">
                    {/* Logo Pekan IT */}
                    <Link href="/" className="font-semibold text-2xl md:text-3xl lg:text-4xl transition-all duration-500 flex items-center gap-2 md:gap-3">
                        <span className="w-[59px] h-[59px] bg-gradient-to-b from-blueLogo to-purpleLogo rounded-full flex items-center custom-shadow">
                            <Image
                                src="/logo/logo-pekan-it.png"
                                width="500"
                                height="429"
                                alt="logo"
                            />
                        </span>
                        <h1 className="text-2xl font-oxanium">Pekan IT</h1>
                    </Link>
                    <div ref={navRef}>
                        {/* Hamburger Menu */}
                        {!isDesktop && (
                            <MotionConfig
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                >
                                <motion.button
                                    initial={false}
                                    animate={isOpen ? "open" : "closed"}
                                    onClick={() => setIsOpen((pv) => !pv)}
                                    className="relative h-15 w-15 bg-white/0 transition-colors hover:bg-white/20"
                                >
                                    <motion.span
                                    variants={VARIANTS.top}
                                    className="absolute h-[3px] w-10 bg-white"
                                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                                    />
                                    <motion.span
                                    variants={VARIANTS.middle}
                                    className="absolute h-[3px] w-10 bg-white"
                                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                                    />
                                    <motion.span
                                    variants={VARIANTS.bottom}
                                    className="absolute h-[3px] w-5 bg-white"
                                    style={{
                                        x: "-50%",
                                        y: "50%",
                                        bottom: "35%",
                                        left: "calc(50% + 10px)",
                                    }}
                                    />
                                </motion.button>
                                </MotionConfig>

                            // <button
                            // onClick={toggleNavbar}
                            // id="hamburger"
                            // name="hamburger"
                            // type="button"
                            // className="block lg:hidden"
                            // >
                            //     <span
                            //         className={`sm:w-[30px] sm:my-[6px] w-7 h-[3px] my-[5px] rounded-full block bg-white origin-top-left transition duration-500 ease-in-out ${isOpen ? "rotate-45 translate-x-2 -translate-y-[2px]" : ""}`}
                            //     ></span>
                            //     <span
                            //         className={`sm:w-[30px] sm:my-[6px] w-7 h-[3px] my-[5px] rounded-full block bg-white transition duration-500 ease-in-out ${isOpen ? "scale-0" : ""}`} 
                            //     ></span>
                            //     <span
                            //         className={`sm:w-[30px] sm:my-[6px] w-7 h-[3px] my-[5px] rounded-full block bg-white origin-bottom-left transition duration-500 ease-in-out ${isOpen ? "-rotate-45 translate-x-2" : ""}`}
                            //     ></span>
                            // </button>   
                        )}

                        {/* Navbar Mode Mobile */}
                        {!isDesktop && (
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: isOpen ? "0%" : "-100%" }}
                                    >
                                        <ul>
                                        {Menus.map(({ name, subMenu }, i) => {
                                            const isClicked = clicked === i;
                                            const hasSubMenu = subMenu?.length;
                                            return (
                                            <li key={name} className="">
                                                <span
                                                className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                                                onClick={() => setClicked(isClicked ? null : i)}
                                                >
                                                {name}
                                                {hasSubMenu && (
                                                    <ChevronDown
                                                    className={`ml-auto ${isClicked && "rotate-180"} `}
                                                    />
                                                )}
                                                </span>
                                                {hasSubMenu && (
                                                <motion.ul
                                                    initial="exit"
                                                    animate={isClicked ? "enter" : "exit"}
                                                    variants={subMenuDrawer}
                                                    className="ml-5"
                                                >
                                                    {subMenu.map(({ name, icon: Icon }) => (
                                                    <li
                                                        key={name}
                                                        className="p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                                                    >
                                                        <Icon size={17} />
                                                        {name}
                                                    </li>
                                                    ))}
                                                </motion.ul>
                                                )}
                                            </li>
                                            );
                                        })}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence> 
                        )}

                        {/* Navbar Mode Desktop */}
                        {isDesktop && (
                            <div 
                                className={`lg:block`} 
                                id="nav-menu">
                                <ul className="flex gap-[70px] font-oxanium text-center">
                                    {Menus.map((menu) => (
                                        <DesktopMenu menu={menu} key={menu.name} />
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            </nav>
        </>
    );
}