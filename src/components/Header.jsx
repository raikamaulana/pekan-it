"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ChevronDown, Monitor, Speech, Frame, Code } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa6"
import { usePathname } from "next/navigation";
import "../app/globals.css"
import Link from "next/link";
import DesktopMenu from "@/components/NavDropdown/DesktopMenu";

export const Menus = [
    {
        name: "Home",
        url: "/",
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
                url: "/uiux-softwaredev",
                icon: Frame,
            },
            {
                name: "Software Development",
                url: "/uiux-softwaredev",
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
                url: "/seminar-workshop",
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
            // header.classList.remove("navbar-absolute");
        } else {
            header.classList.remove("navbar-fixed");
            // header.classList.add("navbar-absolute");
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll); // cleanup
        };
    }, []);
    
    return (
        <>
            <nav id="navbar" className="w-full fixed top-0 left-0 px-6 py-2 md:py-4 text-white z-25 transition-all duration-500 sm:px-16 lg:px-18 font-jakarta bg-mainBlack/10">
                <div className="flex justify-between items-center selection:bg-purple-900 selection:text-white">
                    {/* Logo Pekan IT */}
                    <Link href="/" className="font-semibold text-2xl md:text-3xl lg:text-4xl transition-all duration-500 flex items-center gap-2 md:gap-3">
                        <span className="w-[50px] h-[50px] md:w-[59px] md:h-[59px] bg-gradient-to-b from-blueLogo to-purpleLogo rounded-full flex items-center custom-shadow">
                            <img
                                src="/logo/logo-pekan-it.png"
                                width="500"
                                height="429"
                                alt="logo"
                            />
                        </span>
                        <h1 className="text-lg md:text-2xl font-oxanium">Pekan IT</h1>
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
                                    className="relative h-15 w-15 bg-white/0"
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
                                    id="nav-mobile"    
                                    className="fixed left-0 w-full max-w-[80%] sm:max-w-[65%] md:max-w-[55%] top-0 h-[calc(100vh-1px)] overflow-y-auto bg-linear-180/oklch via-mainBlack/90 backdrop-blur-sm from-mainBlack/90 to-[#2A258FDB]/50 text-white py-5 px-4 sm:px-14 pb-20 z-[9999] font-oxanium inset-box-shadow"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: isOpen ? "0%" : "-100%" }}
                                        exit={{ x: "-100%" }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                        <div className="flex items-center justify-between mb-6 px-2 pr-3">
                                            <Link href="/" className="font-semibold text-2xl md:text-3xl lg:text-4xl transition-all duration-500 flex items-center gap-2 md:gap-3">
                                                <span className="w-[50px] h-[50px] md:w-[59px] md:h-[59px] bg-gradient-to-b from-blueLogo to-purpleLogo rounded-full flex items-center custom-shadow">
                                                    <img
                                                        src="/logo/logo-pekan-it.png"
                                                        width="500"
                                                        height="429"
                                                        alt="logo"
                                                    />
                                                </span>
                                                <h1 className="text-lg md:text-2xl font-oxanium">Pekan IT</h1>
                                            </Link>
                                            <Link
                                                href="https://www.instagram.com/pekanit_unsika"
                                                target="_blank"
                                                className="w-10 h-10 rounded-full flex justify-center items-center bg-white/20 text-white hover:bg-linear-180/oklch hover:from-[#00D4FF] hover:to-[#BD63D1] hover:text-white hover:border-none"
                                                >
                                                <svg
                                                    role="img"
                                                    width="22"
                                                    className="fill-current"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Instagram HIMTIKA</title>
                                                    <path
                                                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                        <ul>
                                        {Menus.map((menu, i) => {
                                            const isClicked = clicked === i;
                                            const hasSubMenu = menu.subMenu?.length;
                                            return (
                                            <li key={menu.name} className="">
                                                {!hasSubMenu ? (
                                                    // Menu tanpa subMenu
                                                    <Link
                                                        href={menu.url}
                                                        className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                                                    >
                                                        {menu.name}
                                                    </Link>
                                                ) : (
                                                    <>    
                                                        <span
                                                        className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                                                        onClick={() => setClicked(isClicked ? null : i)}
                                                        >
                                                            {menu.name}
                                                            <ChevronDown
                                                            className={`ml-auto ${isClicked && "rotate-180"} `}
                                                            />
                                                        </span>
                                                        <motion.ul
                                                            initial="exit"
                                                            animate={isClicked ? "enter" : "exit"}
                                                            variants={subMenuDrawer}
                                                            className=""
                                                        >
                                                            {menu.subMenu.map(({ name, icon: Icon, url }) => (
                                                            <li key={name}
                                                            >
                                                                <a href={url} className="p-2 ml-4 sm:pl-6 md:pl-8 text-[15px] flex items-center hover:bg-white/5 rounded-md gap-x-5 cursor-pointer">
                                                                    {Icon && <Icon size={17} />}
                                                                    {name}
                                                                </a>
                                                            </li>
                                                            ))}
                                                        </motion.ul>
                                                    </>
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