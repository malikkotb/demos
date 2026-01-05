// gooey distortion shader / blur / ripple shader

"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import GUI from "lil-gui";
import { Timer } from "three/src/core/Timer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function GooeyDistortionShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Debug UI
    const gui = new GUI({ width: 230, title: "Debug UI" });
  });
}
