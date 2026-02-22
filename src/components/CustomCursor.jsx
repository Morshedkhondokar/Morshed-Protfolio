import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    gsap.set(cursor, { x: -100, y: -100 }); // Start off-screen

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const addHover = () => {
      gsap.to(cursor, {
        scale: 3,
        backgroundColor: "transparent",
        border: "1px solid white",
        duration: 0.3,
      });
    };

    const removeHover = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
        border: "none",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Cleanup (important)
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference"
    />
  );
}