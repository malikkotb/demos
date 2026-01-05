"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

export default function ShaderPatterns() {
  const canvasRef = useRef(null);

  // IMPORTANT
  // we can send a value from the vertext to the fragment shader.
  // those are called **varyings** and the value gets interpolated between the vertices.

  useEffect(() => {
    if (!canvasRef.current) return;

    // Debug UI
    const gui = new GUI({ width: 230, title: "Debug UI" });
    
    // Effect controls
    const effectControls = {
      amplitude: 100.0,
      waveEnabled: true,
      pulseEnabled: true,
      useCursor: "Time Only", // "Time Only", "Cursor Only", "Both"
    };
    
    gui
      .add(effectControls, "amplitude")
      .min(10)
      .max(200)
      .step(1)
      .name("Amplitude")
      .onChange((value) => {
        material.uniforms.uAmplitude.value = value;
      });
    
    gui
      .add(effectControls, "waveEnabled")
      .name("Wave Effect")
      .onChange((value) => {
        material.uniforms.uWaveEnabled.value = value ? 1.0 : 0.0;
      });
    
    gui
      .add(effectControls, "pulseEnabled")
      .name("Pulse Effect")
      .onChange((value) => {
        material.uniforms.uPulseEnabled.value = value ? 1.0 : 0.0;
      });
    
    gui
      .add(effectControls, "useCursor", ["Time Only", "Cursor Only"])
      .name("Animation Mode")
      .onChange((value) => {
        if (value === "Time Only") {
          material.uniforms.uUseCursor.value = 0.0;
        } else {
          material.uniforms.uUseCursor.value = 1.0;
        }
      });

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#fff");

    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/image.png");

    /**
     * Test mesh
     */
    // Geometry
    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);


    // Material 
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: 100.0 },
        uWaveEnabled: { value: 1.0 },
        uPulseEnabled: { value: 1.0 },
        uCursor: { value: new THREE.Vector2(0.5, 0.5) },
        uUseCursor: { value: 0.0 },
      },
    });

    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    /**
     * Lights
     */
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);
    scene.add(ambientLight);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0.25, -0.25, 1);
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Resize
    const onResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize);

    // Animate
    let animationFrameId;

    const clock = new THREE.Clock();
    let oldElapsedTime = 0;

    // Mouse tracking
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates to 0-1 range
      const x = event.clientX / window.innerWidth;
      const y = 1.0 - (event.clientY / window.innerHeight); // Flip Y axis
      material.uniforms.uCursor.value.set(x, y);
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update time uniform for pulsing animation
      material.uniforms.uTime.value = elapsedTime;

      // update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      animationFrameId = window.requestAnimationFrame(tick);
    };

    // call tick again on the next frame
    tick();

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div className=''>
      <canvas
        ref={canvasRef}
        className='fixed top-0 left-0 w-full h-full outline-none'
      />
    </div>
  );
}
