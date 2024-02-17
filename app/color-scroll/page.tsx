"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Item from "./components/Item";

const images = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg"];
const colors = ["#00c1b5", "#ff651a", " #ffbe00", "#1d3fbb", "#e30512"];

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState("#00c1b5");

  useEffect(() => {
    const changeBackgroundOnScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      const viewportHeight = window.innerHeight; // Get viewport height
      const index = Math.floor(scrollPosition / viewportHeight); // Determine which section the user is currently in
      setBackgroundColor(colors[index >= 4 ? 4 : index]); // Update background color based on current segment
    };

    // Listen for scroll events
    window.addEventListener("scroll", changeBackgroundOnScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", changeBackgroundOnScroll);
    };
  }, []);

  return (
    <>
      <section
        style={{
          backgroundColor: backgroundColor,
          transition: "background-color 0.5s ease-out", // css transition for background color
        }}
      >
        {images.map((image, index) => (
          <Item key={index} source={image} index={index} isLast={index === images.length - 1} />
        ))}
      </section>
      <footer className="fixed flex justify-between items-center bottom-5 left-5 w-[95vw]">
        <div className="w-64">
          <p className="font-bold text-lg">
            Backstage Banter magazine offers an exclusive peek behind the curtains of the entertainment industry, revealing untold stories, insider secrets, and
            captivating interviews with the stars. Dive deep into the world of showbiz with us.
          </p>
          <p className="text-sm font-light my-2">2024 Published by Banter Records</p>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <a className="menulink issue5" href="#issue5">
              Issue #5
            </a>
          </li>
          <li>
            <a className="menulink issue4" href="#issue4">
              Issue #4
            </a>
          </li>
          <li>
            <a className="menulink issue3" href="#issue3">
              Issue #3
            </a>
          </li>
          <li>
            <a className="menulink issue2" href="#issue2">
              Issue #2
            </a>
          </li>
          <li>
            <a className="menulink issue1" href="#issue1">
              Issue #1
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
