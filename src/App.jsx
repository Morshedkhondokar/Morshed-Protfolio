import Lenis from "lenis";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', () => {
  // console.log(e);
});


export default function App() {

  return (
    <div className="max-w-7xl mx-auto">
      
      {/* Navbar */}
      <Navbar />
      {/* Home */}
      <Hero />
      {/* About */}
      <About />
      {/* Skills */}
      <Skills />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    
    </div>
  );
}
