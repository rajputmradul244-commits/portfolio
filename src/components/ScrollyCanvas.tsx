"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 75; // frame_00 to frame_74

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame index (0 to TOTAL_FRAMES - 1)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    // Preload images dynamically with parallel loading
    const loadImages = async () => {
      const promises = Array.from({ length: TOTAL_FRAMES }).map((_, i) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          const frameNumber = i.toString().padStart(2, "0");
          img.src = `/sequence/frame_${frameNumber}_delay-0.067s.png`;
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`Failed to load image at index ${i}`);
            resolve(img); // Resolve anyway to proceed
          };
        });
      });

      const loadedImages = await Promise.all(promises);
      setImages(loadedImages);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Make canvas responsive
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        if (images.length > 0) {
          renderFrame(Math.round(currentIndex.get()));
        }
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Set initial size

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images, currentIndex]);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const context = canvasRef.current.getContext("2d");
    if (!context) return;
    
    // Safety check just in case index goes out of bounds
    const safeIndex = Math.max(0, Math.min(Math.round(index), images.length - 1));
    const img = images[safeIndex];

    if (!img || !img.complete) return;

    const canvas = canvasRef.current;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Listen to frame index changes
  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (imagesLoaded) {
      requestAnimationFrame(() => renderFrame(latest));
    }
  });

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!imagesLoaded && (
          <div className="absolute z-50 text-white animate-pulse font-mono text-sm tracking-widest">
            LOADING EXPERIENCE...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
          style={{ opacity: imagesLoaded ? 1 : 0, transition: "opacity 1s ease-in-out" }}
        />
        <div className="absolute inset-0 bg-[#121212]/40 z-10 pointer-events-none" /> {/* Subtle darkening overlay */}
        
        {/* Parallax Overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
