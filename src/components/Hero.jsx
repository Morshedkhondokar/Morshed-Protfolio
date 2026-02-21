import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import HoverText from "./HoverText";

export default function Hero() {
  const scrollProps = {
    smooth: true,
    duration: 800,
    offset: -100,
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".small-title", {
      y: 20,
      opacity: 0,
      duration: 1,
    })
      .from(".glow", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
      })
      .from(
        ".hero-text",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=1",
      )
      .from(
        ".sub-text",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.8",
      )
      .from(".hero-btn", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
      })
      .from(".hero-down-arrow", {
        opacity: 0,
        duration: 1,
      });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-4"
    >
      {/* Background Glow */}
      <div
        className="glow absolute w-100 h-110 md:w-125  
        bg-accent/20 blur-[120px] rounded-full 
        -z-10 border border-accent"
      />

      <div className="flex flex-col items-center justify-center gap-10 md:mt-32">
        {/* Text Content */}
        <div className="space-y-5">
          <p className="small-title text-gray-400 tracking-widest uppercase text-sm">
            Hi, I'm{" "}
            <span className="text-accent-hover font-bold font-heading">
              Morshed
            </span>
          </p>

          <h1
            className="hero-text text-5xl md:text-7xl font-extrabold font-heading 
            tracking-widest uppercase bg-linear-to-r 
            from-white via-gray-300 to-gray-500 
            bg-clip-text text-transparent"
          >
            Mern Stack Developer
          </h1>

          <h3 className="sub-text text-[20px] md:text-5xl font-semibold text-gray-300 leading-tight">
            Crafting modern and scalable <br />
            web applications.
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="contact"
            {...scrollProps}
            className="hero-btn"
          >
            <button
              className="flex items-center gap-3 px-8 py-3 md:text-xl 
              bg-accent/10 backdrop-blur-lg 
              border border-accent/20 rounded-2xl text-white 
              hover:bg-accent/20 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-accent/20 active:scale-95"
            >
              <HoverText>Let's Talk</HoverText>
              <FaArrowUp className="rotate-45" />
            </button>
          </Link>

          <Link
            to="projects"
            {...scrollProps}
            className="hero-btn"
          >
            <button
              className=" px-8 py-3 border border-accent-hover
              rounded-2xl text-accent cursor-pointer md:text-xl
              hover:bg-accent hover:text-white active:scale-95
              transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
            >
              <HoverText>View Projects</HoverText>
            </button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce text-accent-hover text-2xl md:mt-6">
          <Link
            to="about"
            {...scrollProps}
            className="cursor-pointer hero-down-arrow"
          >
            <FaArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
}
