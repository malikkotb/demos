"use client";
import React from "react";
import styles from "../style.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function CursorBlend() {
  const [isHovering, setIsHovering] = useState(false); // hover state
  const cursorSize = isHovering ? 400 : 40;

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const manageMouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <main className="section h-screen bg-black">
      <motion.div
        animate={{
          WebkitMaskPosition: `${(mousePosition.x || 0) - cursorSize / 2}px ${
            (mousePosition.y || 0) - cursorSize / 2
          }px`,
          WebkitMaskSize: `${cursorSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          maskRepeat: "no-repeat",
          maskSize: "40px",
          position: "absolute",
          color: "black",
          backgroundColor: "#433bff",
        }}
        className={`${styles.mask} w-full h-full flex items-center justify-center text-[#afa18f] text-6xl leading-[66px] cursor-default`}
      >
        <p
          className="w-[80vw] p-10"
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          Sapphire dreams cascade through lemonade rivers, tickling stars with
          feathered laughter, as time pirouettes in a kaleidoscope of forgotten
          melodies.
        </p>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-[#afa18f] text-6xl leading-[66px] cursor-default">
        <p className="w-[80vw] p-10">
          Purple feathers <span className="text-[#433bff]">dance atop</span>{" "}
          glass mountains, whispering secrets to the moon&apos;s reflection, while
          elephants juggle galaxies in a cosmic tea party.
        </p>
      </div>
    </main>
  );
}
