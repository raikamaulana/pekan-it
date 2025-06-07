"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DesktopMenu({ menu }) {
  // const [isHover, toggleHover] = useState(false);
  // const toggleHoverMenu = () => {
  //   toggleHover(!isHover);
  // };

  const [isHover, setIsHover] = useState(null);
  const isThisHover = isHover === menu.name;

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link relative"
      // onHoverStart={() => {
      //   toggleHoverMenu();
      // }}
      // onHoverEnd={toggleHoverMenu}
      onMouseEnter={() => {
          setIsHover(menu.name)
      }}
      onMouseLeave={() => setIsHover(null)}
      key={menu.name}
    >
      {/* <span className={`menu-link flex font-light items-center gap-1 cursor-pointer px-3 py-4 rounded-xl relative ${isHover? "active" : ""}`} >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-600" />
        )}
      </span> */}
      {menu.url && !hasSubMenu ? (
        <Link 
            href={menu.url} 
            className={`menu-link flex font-light items-center gap-1 cursor-pointer px-3 py-4 rounded-xl relative ${isThisHover ? "active" : ""}`} >
            {menu.name}
        </Link>
      ) : (
        <span className={`menu-link flex font-light items-center gap-1 cursor-pointer px-3 py-4 rounded-xl relative ${isThisHover? "active" : ""}`} >
            {menu.name}
            {hasSubMenu && (
            <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-600" />
            )}
        </span>
      )}
      {hasSubMenu && (
        <motion.div
          className="absolute top-[4.2rem] p-2 rounded-[6px] origin-[50%_-170px] backdrop-blur bg-black/30 w-max max-w-[500px]"
          initial="exit"
          // animate={isHover ? "enter" : "exit"}
          animate={isThisHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-2 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {hasSubMenu &&
              menu.subMenu.map((submenu, i) => (
                <Link href={submenu.url} key={submenu.name} passHref>
                  <div className="relative cursor-pointer" key={i}>
                    <div className="flex items-center gap-x-4 group/menubox px-2 py-2 rounded-md hover:bg-white/5 duration-200">
                      <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                        {submenu.icon && <submenu.icon className="w-5 h-5" />}
                      </div>
                      <div className="pr-5">
                        <h6 className="text-white/70 group-hover/menubox:text-white transition duration-500">{submenu.name}</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
