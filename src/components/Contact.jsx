import React, { useRef } from "react";
import HoverText from "./HoverText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          // markers: true,
        },
      });

      // Heading Reveal
      tl.fromTo(
        ".reveal-text",
        { y: 120, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
        },
      )

        // Subtext fade
        .fromTo(
          ".contact-subtext",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.8",
        )

        // Form fields stagger
        .fromTo(
          ".contact-field",
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "expo.out",
          },
          "-=0.7",
        )

        // Button pop
        .fromTo(
          ".contact-btn",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        );
    },
    { scope: contactRef },
  );

  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-24 px-6 bg-transparent relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-80 bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div className="space-y-8">
          <div className="relative">
            <div className="font-black uppercase tracking-tighter leading-[0.9]">
              {/* Mobile */}
              <div className="reveal-text flex flex-col text-5xl lg:hidden space-y-2 text-white text-center">
                <h2>Let's Get in</h2>
                <h2 className="text-accent">Touch</h2>
              </div>

              {/* Desktop */}
              <div className="hidden lg:flex flex-col text-8xl text-white">
                <h2 className="reveal-text">Let's</h2>

                <div className="flex items-center">
                  <div className="w-32 h-20" />
                  <h2 className="reveal-text">Get in</h2>
                </div>

                <div className="flex items-center">
                  <div className="w-64 h-20" />
                  <h2 className="reveal-text text-accent drop-shadow-[0_0_30px_rgba(251,44,54,0.2)]">
                    Touch
                  </h2>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-0 w-1 h-full bg-accent/20 hidden lg:block" />
          </div>

          {/* Subtext */}
          <div className="space-y-2 lg:text-left text-center contact-subtext">
            <p className="text-gray-400 text-xs md:text-lg font-medium tracking-wide">
              Have something in mind? Drop me a message.
            </p>
            <p className="text-gray-500 text-xs md:text-sm tracking-widest uppercase">
              Let us turn your ideas into reality.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="space-y-12">
          <div className="relative contact-field">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b-2 border-gray-800 py-4 text-xl text-white outline-none focus:border-accent transition-colors duration-500 placeholder:text-gray-600 placeholder:uppercase placeholder:text-sm placeholder:tracking-[0.3em]"
              required
            />
          </div>

          <div className="relative contact-field">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b-2 border-gray-800 py-4 text-xl text-white outline-none focus:border-accent transition-colors duration-500 placeholder:text-gray-600 placeholder:uppercase placeholder:text-sm placeholder:tracking-[0.3em]"
              required
            />
          </div>

          <div className="relative contact-field">
            <textarea
              placeholder="Message"
              rows="1"
              className="w-full bg-transparent border-b-2 border-gray-800 py-4 text-xl text-white outline-none focus:border-accent transition-colors duration-500 placeholder:text-gray-600 placeholder:uppercase placeholder:text-sm placeholder:tracking-[0.3em] resize-none"
              required
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="contact-btn px-10 py-4 border-2 text-xl border-white rounded-xl text-white uppercase cursor-pointer font-black tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 active:scale-95"
            >
              <HoverText>Send Message</HoverText>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
