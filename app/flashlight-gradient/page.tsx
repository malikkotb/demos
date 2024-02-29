"use client";
import styles from "./style.module.css";
import React, { useEffect, useRef } from "react";

function getRandomHexCode() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
}

export default function Home() {
  const coverRef = useRef<HTMLDivElement>(null);

  const setColor = () => {
    if (!coverRef.current) return;
    const randomColor = getRandomHexCode();
    coverRef.current.style.setProperty("--color", `${randomColor}`);
  };

  const manageMouseMove = (e: { clientX: any; clientY: any }) => {
    if (!coverRef.current) return;
    const { clientX, clientY } = e;
    coverRef.current.style.setProperty("--x", `${clientX}px`);
    coverRef.current.style.setProperty("--y", `${clientY}px`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={coverRef} className={`${styles.cover} bg-black items-center w-full h-screen flex justify-center`}>
        <h3 onMouseEnter={setColor} onMouseLeave={setColor} className="text-8xl uppercase text-white">
          Gradients
        </h3>
      </div>
    </>
  );
}
