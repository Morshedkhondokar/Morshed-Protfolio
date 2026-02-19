import React from "react";
import HoverText from "./HoverText";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-transparent relative overflow-hidden"
    >
      {/* Background Subtle Red Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-80 bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Heading & Text */}
        <div className="space-y-8">
          <div className="relative">
            <div className="font-black uppercase tracking-tighter leading-[0.9]">
              {/* --- Mobile Version: Simple line by line (Hidden on Desktop) --- */}
              <div className="flex flex-col text-5xl lg:hidden space-y-2 text-white text-center">
                <h2>Let's Get in</h2>
                <h2 className="text-accent">Touch</h2>
              </div>

              {/* --- Desktop Version: Staircase Layout (Hidden on Mobile) --- */}
              <div className="hidden lg:flex flex-col text-8xl text-white">
                {/* Row 1: Let's */}
                <h2 className="reveal-text">Let's</h2>

                {/* Row 2: Get in */}
                <div className="flex items-center">
                  <div className="w-32 h-20" /> {/* Fixed Spacer for Desktop */}
                  <h2 className="reveal-text">Get in</h2>
                </div>

                {/* Row 3: Touch */}
                <div className="flex items-center">
                  <div className="w-64 h-20" /> {/* Wider Spacer for Desktop */}
                  <h2 className="text-accent drop-shadow-[0_0_30px_rgba(251,44,54,0.2)]">
                    Touch
                  </h2>
                </div>
              </div>
            </div>

            {/* Chobi-r moto chotto ekta design element */}
            <div className="absolute -left-4 top-0 w-1 h-full bg-accent/20 hidden lg:block" />
          </div>

          <div className="space-y-2 lg:text-left text-center">
            <p className="text-gray-400 text-xs md:text-lg font-medium tracking-wide">
              Have something in mind? Drop me a message.
            </p>
            <p className="text-gray-500 text-xs md:text-sm  tracking-widest uppercase">
              Let us turn your ideas into reality.
            </p>
          </div>
        </div>

        {/* Right Side: Minimal Form */}
        <form className="space-y-12">
          {/* Name Input */}
          <div className=" relative">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b-2 border-gray-800 py-4 text-xl text-white outline-none focus:border-accent transition-colors duration-500 placeholder:text-gray-600 placeholder:uppercase placeholder:text-sm placeholder:tracking-[0.3em]"
              required
            />
          </div>

          {/* Email Input */}
          <div className=" relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b-2 border-gray-800 py-4 text-xl text-white outline-none focus:border-accent transition-colors duration-500 placeholder:text-gray-600 placeholder:uppercase placeholder:text-sm placeholder:tracking-[0.3em]"
              required
            />
          </div>

          {/* Message Input */}
          <div className=" relative">
            <textarea
              placeholder="Message"
              rows="1"
              className="w-full bg-transparent border-b-2 border-gray-800 py-4 text-xl text-white outline-none focus:border-accent transition-colors duration-500 placeholder:text-gray-600 placeholder:uppercase placeholder:text-sm placeholder:tracking-[0.3em] resize-none"
              required
            />
          </div>

          {/* Send Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-10 py-4 border-2 text-xl border-white rounded-xl text-white uppercase cursor-pointer
              font-black tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 
              active:scale-95"
            >
             <HoverText>Send Message</HoverText>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
