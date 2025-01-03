"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import MagnetPull from "./MagnetPull";
import Link from "next/link";
import Image from "next/image";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight); // Check if scrolled past 100vh
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed top-2 left-4  max-w-2xl mx-auto z-[1000] transition-opacity duration-500",
          {
            "opacity-0": isScrolled, // Apply opacity-0 when scrolled
            "opacity-100": isOpen || !isScrolled, // Apply opacity-100 when menu is open or not scrolled
          },
          className
        )}
      >
        <Menu setActive={setActive} >
            <MagnetPull>
                <Link className="h-10 w-10 p-0 m-0 rounded-full flex justify-center items-center "   href={"https://github.com/Raven412s"} target="_blank">
                    <Image
                    src={"/github.png"}
                    width={40}
                    height={40}
                    alt="github"
                    />
                </Link>
            </MagnetPull>
            <MagnetPull>
                <Link className="h-10 w-10 p-0 m-0 rounded-full flex justify-center items-center "   href={"https://www.instagram.com/ravenwebweaver/"} target="_blank">
                    <Image
                    src={"/instagram.webp"}
                    width={40}
                    height={40}
                    alt="instagram"
                    />
                </Link>
            </MagnetPull>
            <MagnetPull>
                <Link className="h-10 w-10 p-0 m-0 rounded-full flex justify-center items-center "   href={"https://www.linkedin.com/in/ashutosh-sharan-1a9523319/"} target="_blank">
                    <Image
                    src={"/linkedin.webp"}
                    width={40}
                    height={40}
                    alt="instagram"
                    />
                </Link>
            </MagnetPull>
           </Menu>
      </div>

  <MagnetPull>
  <div className={cn("fixed z-[3]  border-yellow-50 border-2 border-y-4  p-2 cursor-pointer top-2 right-4 bg-black rounded-full w-[80px] h-[80px] flex items-center justify-center transition-opacity duration-500",
             { "opacity-100": isScrolled, "opacity-0": !isScrolled },
            )}
            onClick={toggleMenu}
            >
        <div
      className=" "
      aria-label="Toggle Menu"
    >
      {/* Hamburger Icon */}
      <div
        className={cn(
          "w-6 h-0.5 bg-white transition-all duration-300",
          {
            "rotate-45 translate-y-1.5": isOpen, // Cross icon (rotate and move)
          },
          "mb-1"
        )}
      ></div>
      <div
        className={cn(
          "w-6 h-0.5 bg-white transition-all duration-300",
          { "opacity-0": isOpen }, // Hide middle line when open
          "mb-1"
        )}
      ></div>
      <div
        className={cn(
          "w-6 h-0.5 bg-white transition-all duration-300",
          {
            "-rotate-45 -translate-y-1.5": isOpen, // Cross icon (rotate and move)
          }
        )}
      ></div>
    </div>
        </div>
  </MagnetPull>
    </>
  );
}
