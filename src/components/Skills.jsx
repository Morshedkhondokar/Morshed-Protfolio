import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiGit,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "GSAP", icon: <SiGreensock className="text-green-500" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

export default function Skills() {
  useGSAP(() => {
    // 1. Animate title and divider
    gsap.from(".skills-title", {
      scrollTrigger: {
        trigger: ".skills-title",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
    gsap.from(".skills-divider", {
      scrollTrigger: {
        trigger: ".skills-title",
        start: "top 70%",
        // markers: true,
      },
      scaleX: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    //  2. skill-card to stagger animation
    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".all-skills",
        start: "top 80%",
      },
      scale: 0.8,
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.2)",
      clearProps: "all", // after animation completes, clear inline styles to allow hover effects to work properly
    });
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background Red Glow Layer */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-150 h-150 bg-accent/5 blur-[140px] rounded-full -z-10"
      />

      <div className="max-w-6xl mx-auto">
        {/* Modern Title Section  */}
        <div className="skills-title mb-20 flex flex-col items-center text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-x-10 top-1/2 -translate-y-1/2 h-12 bg-accent/10 blur-3xl -z-10" />

            <h2 className="text-5xl md:text-6xl font-black font-heading text-white uppercase tracking-[-0.05em] leading-none">
              Tech Stack {""}
              <span className="text-accent relative">
                Expertise
                <span
                  className="absolute -right-4 bottom-3 w-2 h-2 bg-white rounded-full 
                shadow-[0_0_15px_rgba(255,255,255,0.8)] hidden md:block animate-bounce"
                />
              </span>
            </h2>
          </div>

          {/* Minimalist Divider */}
          <div className="skills-divider flex items-center gap-2 mt-4">
            <div className="w-24 md:w-80 h-0.5 bg-linear-to-r from-transparent to-accent" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#FB2C36]" />
            <div className="w-24 md:w-80 h-0.5 bg-linear-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="all-skills max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group relative flex flex-col items-center justify-center
               w-full h-35 max-w-40 rounded-2xl 
               bg-[#171719]/40 backdrop-blur-md border border-white/5 
               hover:border-accent/40 transition-all duration-500 
               hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(251,44,54,0.2)]"
            >
              {/* Inner Hover Glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              {/* Icon Section */}
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-500 ease-in-out">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span className="text-gray-400 group-hover:text-white font-semibold text-xs uppercase tracking-widest transition-colors duration-300">
                {skill.name}
              </span>

              {/* Bottom line decorative glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-1/2 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
