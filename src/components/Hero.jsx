import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Hero() {
  const scrollProps = {
    smooth: true,
    duration: 800,
    offset: -100,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-4 "
    >
      {/* Background Glow */}
      <div
        className="absolute w-100 h-110 md:w-125  
        bg-accent/20 blur-[120px] rounded-full 
        -z-10 border border-accent"
      />

      <div className="flex flex-col items-center justify-center gap-10 mt-32">
        {/* Text Content */}
        <div className="space-y-5">
          <p className="text-gray-400 tracking-widest uppercase text-sm">
            Hi, I'm{" "}
            <span className="text-accent-hover font-bold font-heading">
              Morshed
            </span>
          </p>

          <h1
            className="text-5xl md:text-7xl font-extrabold font-heading 
            tracking-widest uppercase bg-linear-to-r 
            from-white via-gray-300 to-gray-500 
            bg-clip-text text-transparent"
          >
            Mern Stack Developer
          </h1>

          <h3 className="text-[20px] md:text-5xl font-semibold text-gray-300 leading-tight">
            Crafting modern and scalable <br />
            web applications.
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="contact" {...scrollProps}>
            <button
              className="flex items-center gap-3 px-8 py-3 
              bg-accent/10 backdrop-blur-lg 
              border border-accent/20 rounded-2xl text-white 
              hover:bg-accent/20 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-accent/20 active:scale-95"
            >
              Let's Talk
              <FaArrowUp className="rotate-45" />
            </button>
          </Link>

          <Link to="projects" {...scrollProps}>
            <button
              className="px-8 py-3 border border-accent-hover
              rounded-2xl text-accent cursor-pointer
              hover:bg-accent hover:text-white active:scale-95
              transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
            >
              See Projects
            </button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce text-accent-hover text-2xl md:mt-6">
          <Link to="about" {...scrollProps} className="cursor-pointer">
            <FaArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
}
