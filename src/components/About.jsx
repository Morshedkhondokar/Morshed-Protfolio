import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
      },
    });

    tl.from(".about-title-small", {
      y: 20,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        ".about-title-main",
        {
          y: 30,
          opacity: 0,
          duration: 1,
        },
        "-=0.5",
      )
      .from(
        ".about-line",
        {
          scaleX: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      )
      .from(
        ".about-text",
        {
          y: 40,
          opacity: 0,
          duration: 1,
        },
        "-=0.6",
      )
      .from(
        ".about-location",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden "
    >
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl w-full text-center space-y-10">
        {/* Section Title */}
        <div className="space-y-2">
          <p className="about-title-small text-accent tracking-[0.4em] uppercase text-xs font-bold">
            Introduction
          </p>
          <h2 className="about-title-main text-5xl md:text-7xl font-extrabold font-heading text-white uppercase tracking-tighter">
            About <span className="text-accent">Me</span>
          </h2>
          {/* Line Animating ScaleX */}
          <div className="about-line w-20 h-1 bg-accent mx-auto mt-4 rounded-full origin-center" />
        </div>

        {/* Main Text */}
        <p className="about-text text-gray-300 text-xl md:text-2xl leading-relaxed font-light max-w-3xl mx-auto">
          I am a{" "}
          <span className="text-white font-medium">MERN Stack Developer</span>{" "}
          dedicated to building clean, functional, and high-performance web
          applications. I focus on creating seamless user experiences through
          structured code.
        </p>

        {/* Location Box */}
        <div className="about-location inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-xl">
          <FaMapMarkerAlt className="text-accent animate-pulse" />
          <span className="text-gray-300 tracking-wide">
            Based in{" "}
            <span className="text-white font-semibold">Dhaka, Bangladesh</span>
          </span>
        </div>
      </div>
    </section>
  );
}
