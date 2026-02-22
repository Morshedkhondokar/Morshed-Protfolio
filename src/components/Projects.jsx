import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Rentify – Full Stack Rental Platform",
    description:
      "A role-based rental marketplace with Admin, Host, and Guest dashboards, property listing management, JWT authentication, image upload, and booking system.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Cloudinary"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "DevConnect – Developer Networking App",
    description:
      "A full-featured developer social platform with real-time chat, post sharing, profile management, follow system, and protected routes using Context API.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Context API"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "ShopSphere – Advanced E-commerce",
    description:
      "Modern e-commerce application with product filtering, cart system, order tracking, Stripe payment integration, and secure authentication system.",
    tech: ["Next.js", "Redux Toolkit", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "TaskNest – Productivity Dashboard",
    description:
      "A drag-and-drop task management system with Kanban board, real-time collaboration, dark/light mode, and performance optimized state handling.",
    tech: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Portfolio CMS – Admin Controlled Portfolio",
    description:
      "Dynamic portfolio website with admin panel to manage projects, blogs, and skills without touching code. REST API integrated with secure role system.",
    tech: ["MERN Stack", "JWT", "Multer", "Cloudinary", "React Router"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "CodeArena – Online Code Judge Platform",
    description:
      "Competitive programming platform with problem submission, test case validation, leaderboard system, and secure code execution environment.",
    tech: ["Node.js", "MongoDB", "Docker", "React", "Express"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
  },
];

export default function Projects() {
  const projectsRef = useRef(null);

  useGSAP(() => {
    gsap.from(".ghost, .badge, .project-title, .project-divider ", {
      scrollTrigger: {
        trigger: ".project-title",
        start: "top 70%",
        // markers:true
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      ease: "power4.out",
    });

    gsap.fromTo(
      projectsRef.current.children,
      { opacity: 0, y: 40 , scale: 0.95},
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
          // markers: true,
        },
      },
    );
  }, []);

  return (
    <section
      id="projects"
      className="md:py-16 px-6 relative overflow-hidden bg-transparent "
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="mb-16 flex flex-col items-center text-center relative pt-10">
          {/* Floating Badge */}
          <div
            className="badge group mb-6 px-5 py-1.5 border border-accent/30 bg-accent/5 rounded-full flex items-center
                 gap-2 backdrop-blur-sm hover:border-accent transition-colors duration-500"
          >
            <FaCode className=" text-accent text-xs animate-pulse" />
            <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-black">
              Portfolio // Selected
            </span>
          </div>

          {/* Main Heading Group */}
          <div className="relative">
            {/* Large Background Ghost Text (Subtle Outline) */}
            <span
              className="ghost absolute top-10 left-1/2 -translate-x-1/2 text-8xl md:text-8xl font-black text-white/3 
                uppercase tracking-widest select-none whitespace-nowrap hidden md:block"
            >
              Works
            </span>

            {/* Main Heading */}
            <div className="relative z-10">
              {/* Background Red Glow */}
              <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-20 bg-accent/20 blur-[80px] -z-10 opacity-50" />

              <h2 className="project-title text-6xl md:text-7xl font-black font-heading text-white uppercase tracking-widest leading-none">
                Featured <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-linear-to-b from-accent to-[#b91c1c] relative">
                  Projects
                  <span
                    className="absolute -right-4 bottom-3 w-2 h-2 bg-white rounded-full 
                  shadow-[0_0_15px_rgba(255,255,255,0.8)] hidden md:block animate-bounce"
                  />
                </span>
              </h2>
            </div>
          </div>

          {/* Modern Geometric Divider */}
          <div className="flex items-center gap-2 mt-4 project-divider">
            <div className="w-24 md:w-80 h-0.5 bg-linear-to-r from-transparent to-accent" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#FB2C36]" />
            <div className="w-24 md:w-80 h-0.5 bg-linear-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative bg-[#111111]/70 backdrop-blur-xl 
              border border-accent/20 rounded-3xl overflow-hidden 
              transition-all duration-500 
              hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(251,44,54,0.15)]"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover 
                  group-hover:scale-110 
                  transition-transform duration-700"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 
                group-hover:opacity-100 
                transition-all duration-400 
                flex items-center justify-center gap-6"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-accent text-white rounded-full 
                    hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-accent text-white rounded-full 
                    hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 space-y-5">
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold
                      bg-accent/10 text-accent 
                      border border-accent/20 
                      rounded-full 
                      group-hover:bg-accent/20 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex gap-4 pt-4 md:hidden">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold 
                    bg-accent text-white rounded-full 
                    active:scale-95 transition-transform"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold 
                    border border-accent text-accent 
                    rounded-full active:scale-95 transition-transform"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live
                  </a>
                </div>
              </div>

              {/* Bottom Animated Line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
