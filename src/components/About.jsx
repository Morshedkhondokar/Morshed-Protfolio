import { FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden ">
      
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl w-full text-center space-y-8">
        
        {/* Section Title */}
        <div className="space-y-2">
          <p className="text-accent tracking-[0.4em] uppercase text-xs font-bold">
            Introduction
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold font-heading text-white uppercase tracking-tighter">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Text */}
        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light max-w-3xl mx-auto">
          I am a <span className="text-white font-medium">MERN Stack Developer</span> dedicated to building clean, 
          functional, and high-performance web applications. I focus on creating 
          seamless user experiences through structured code.
        </p>

        {/* Location Box (Glass Effect) */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-xl">
          <FaMapMarkerAlt className="text-accent animate-pulse" />
          <span className="text-gray-300 tracking-wide">
            Based in <span className="text-white font-semibold">Dhaka, Bangladesh</span>
          </span>
        </div>


      </div>
    </section>
  );
}