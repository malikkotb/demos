"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
export default function Item({ source, index, isLast }) {
  return (
    <div className={`h-[${isLast ? 100 : 125}vh] items-center justify-center flex flex-col gap-2 m-0 p-0`}>
      <div className="mt-[-10%]">
        {/* <div className="w-[45vw] max-w-[500px] h-[65vh] bg-purple-500 shadow-2xl"> */}
        <Image src={source} alt={source} width={400} height={500} className="shadow-xl" />
        {/* </div> */}
        <div className="flex flex-col p-4 mt-4 gap-2 text-center">
          <p className="text-xl font-medium">Issue #{index + 1}</p>
          <p className="text-lg font-medium text-white">GET HERE (Europe)</p>
          <p className="text-sm font-medium">
            or visit at <span className="text-white">selected museums</span>
          </p>
        </div>
      </div>
    </div>
  );
}
// top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2
