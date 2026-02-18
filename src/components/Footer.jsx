import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter size={18} />, url: "#", label: "Twitter" },
    { icon: <FaLinkedinIn size={18} />, url: "#", label: "LinkedIn" },
    { icon: <FaGithub size={18} />, url: "#", label: "GitHub" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-transparent relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright Text */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-gray-400 text-sm tracking-widest uppercase font-bold">
            © {currentYear} <span className="text-accent">Morshed</span> Portfolio.
          </p>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            Built with passion & precision.
          </p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
    </footer>
  );
}