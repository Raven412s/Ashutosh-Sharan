"use client";
import { TextGenerateEffect } from "./text-generate-effect";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
  })=> {
    const router = useRouter(); // Initialize useRouter

    const handleClick = () => {
      if (item === "home") {
        router.push(`/`); // Navigate to the root route
      } else {
        router.push(`/${item}`); // Navigate to the item's route
      }
    };

    return (
      <div
        onMouseEnter={() => {
          if (item !== "home") {
            setActive(item); // Only set active if the item is not "home"
          }
        }}
        className="relative"
      >
        <motion.p
          onClick={handleClick} // Add the click handler for navigation
          transition={{ duration: 0.3 }}
          className="cursor-pointer capitalize text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
        {active === item && item !== "home" && ( // Skip active settings for "home"
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="active" // Ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // Ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    );
  };


export const Menu = ({
  setActive,
  children,
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full  navbar dark:bg-black/80 border-4  dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-4 max-w-max "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        draggable={false}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <TextGenerateEffect textsizeandcolor="text-xl " className=" font-bold mb-1 text-black dark:text-white" words={title}/>
        <TextGenerateEffect textsizeandcolor="text-sm text-muted-foreground" words={description} className="text-neutral-700  max-w-[15rem] dark:text-neutral-300"/>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
