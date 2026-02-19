import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import MobileMenu from "./MobileMenu";
import HoverText from "./HoverText";

const menuItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <>
      <nav
        className="fixed left-1/2 top-5 -translate-x-1/2 z-50 flex items-center justify-between 
        w-full max-w-[75%] sm:max-w-xl md:max-w-3xl h-14 px-4 md:px-6
        bg-[#171719]/40 backdrop-blur-md rounded-2xl border border-gray-800"
      >
        {/* Logo */}
        <div>
          <h1 className="text-2xl  md:text-3xl text-accent font-extrabold font-heading ">
            Morshed
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 md">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                smooth="easeInOutQuart"
                duration={800}
                spy={true}
                offset={-80}
                activeClass="active"
                className={`cursor-pointer text-gray-300 hover:text-text-primary transition-all duration-300 border-none
                ${  active === item.link && "active" }`}
                onSetActive={() => setActive(item.link)}
              >
                <HoverText>{item.name}</HoverText>
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile icno */}
        <div className="md:hidden text-3xl">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose /> : <IoIosMenu />}
          </button>
        </div>
      </nav>

      {/* mobile menu desing */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuItems={menuItems}
        active={active}
        setActive={setActive}
      />
    </>
  );
}
